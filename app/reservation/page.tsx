"use client"

import React, { use, useState } from "react"
import {
  Check,
  ShieldCheck,
  UploadCloud,
  ChevronRight,
  User,
  Calendar,
  CreditCard,
  Activity,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { doctorsData } from "@/data/doctorsData"
import { useRouter } from "next/navigation"
import { useUser } from "@clerk/nextjs"
import Link from "next/link"

const steps = [
  { id: 1, name: "Objawy", icon: Activity },
  { id: 2, name: "Lekarz", icon: User },
  { id: 3, name: "Termin", icon: Calendar },
  { id: 4, name: "Płatność", icon: CreditCard },
]

const severities = [
  { level: "Łagodne", emoji: "🙂", value: "mild" },
  { level: "Umiarkowane", emoji: "😐", value: "moderate" },
  { level: "Uciążliwe", emoji: "😕", value: "uncomfortable" },
  { level: "Poważne", emoji: "😟", value: "severe" },
  { level: "Bardzo poważne", emoji: "😫", value: "very_severe" },
]

const durations = [
  "Krócej niż 24 godziny",
  "1-3 dni",
  "4-7 dni",
  "Ponad tydzień",
]

export default function ReservationPage({
  searchParams,
}: {
  searchParams: Promise<{ doctorId: string }>
}) {
  const { doctorId } = use(searchParams)
  const doctor = doctorsData.find((doctor) => doctor.id === +doctorId)
  const router = useRouter()
  const [duration, setDuration] = useState("Krócej niż 24 godziny")
  const [severity, setSeverity] = useState("moderate")
  const [diagnosed, setDiagnosed] = useState(false)
  const { user } = useUser()

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    console.log("Powód wizyty: ", formData.get("reason"))
    console.log("Objawy: ", formData.get("symptoms"))
    console.log("Czas trwania objawów: ", duration)
    console.log("Nasilenie objawów: ", severity)
    console.log("Czy zdiagnozowano: ", diagnosed)
    console.log("Zdjęcia: ", formData.get("foto"))
    console.log("Lekarz: ", doctor?.name || "Brak")
    console.log("Użytkownik: ", user?.firstName || "Brak")
    e.currentTarget.reset()
    setDuration("Krócej niż 24 godziny")
    setSeverity("moderate")
    setDiagnosed(false)
  }

  return (
    <div className='min-h-screen bg-slate-50 dark:bg-zinc-950 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 w-full font-sans'>
      <div className='text-center mb-10 w-full max-w-4xl pt-8'>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4">Witaj {user?.firstName || ""}!</h1>
        <h2 className='text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4'>
          Zarezerwuj wizytę u {doctor?.name || <Link href="/doctors" className="text-primary hover:underline">wybranego lekarza</Link>}
        </h2>
        <p className='text-lg text-muted-foreground'>
          Wykonaj 4 proste kroki, aby połączyć się ze swoim lekarzem
        </p>
      </div>

      <div className='w-full max-w-3xl mb-12'>
        <div className='flex items-center justify-between relative px-2 sm:px-4'>
          <div className='absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-border -z-10'></div>
          {steps.map((step) => {
            const isActive = step.id === 1 || (doctorId && step.id === 2)
            const isCompleted = step.id < 1 || (doctorId && step.id < 3)

            return (
              <div
                key={step.id}
                className='flex flex-col items-center gap-2 bg-slate-50 dark:bg-zinc-950 px-2 sm:px-4 z-10'
              >
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center font-bold text-sm sm:text-base transition-colors ${isActive ? "bg-primary border-primary text-primary-foreground shadow-sm" : isCompleted ? "bg-primary border-primary text-primary-foreground" : "bg-background border-border text-muted-foreground hover:bg-muted"}`}
                >
                  {isCompleted ? (
                    <Check className='w-5 h-5 sm:w-6 sm:h-6' />
                  ) : (
                    step.id
                  )}
                </div>
                <span
                  className={`text-xs sm:text-sm font-medium ${isActive ? "text-primary" : "text-muted-foreground"}`}
                >
                  {step.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      <Card className='w-full max-w-2xl border-2 shadow-sm rounded-2xl overflow-hidden bg-background'>
        <CardHeader className='space-y-2 pb-6 pt-8 border-b-2 border-border/50 bg-muted/10'>
          <CardTitle className='text-2xl font-bold'>
            Powiedz nam, co Ci dolega
          </CardTitle>
          <CardDescription className='text-base text-muted-foreground'>
            Opisz swoje objawy, abyśmy mogli dopasować do Ciebie odpowiedniego
            specjalistę
          </CardDescription>
        </CardHeader>
        <CardContent className='pt-8 space-y-8 px-6 sm:px-8 pb-8'>
          <form onSubmit={handleFormSubmit} className='flex flex-col gap-4'>
            <div className='space-y-3'>
              <Label htmlFor='reason' className='text-base font-semibold'>
                Z czym dzisiaj przychodzisz?
              </Label>
              <div className='relative'>
                <select
                  id='reason'
                  className='w-full h-12 px-4 rounded-xl border-2 border-border bg-background hover:bg-muted/50 transition-colors appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary font-medium text-foreground'
                  name='reason'
                >
                  <option>Ogólna konsultacja</option>
                  <option>Przeziębienie i grypa</option>
                  <option>Alergie</option>
                  <option>Ból głowy / Migrena</option>
                  <option>Problemy skórne</option>
                </select>
                <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted-foreground'>
                  <ChevronRight className='w-5 h-5 rotate-90' />
                </div>
              </div>
            </div>

            <div className='space-y-3'>
              <Label htmlFor='symptoms' className='text-base font-semibold'>
                Opisz swoje objawy
              </Label>
              <textarea
                id='symptoms'
                name='symptoms'
                rows={4}
                className='w-full p-4 rounded-xl border-2 border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-none placeholder:text-muted-foreground/70 text-foreground font-medium'
                placeholder='Proszę, opisz szczegółowo swoje objawy...'
                required
              />
              <div className='text-right text-xs text-muted-foreground font-medium'>
                0/500
              </div>
            </div>

            <div className='space-y-3'>
              <Label className='text-base font-semibold'>
                Od jak dawna masz te objawy?
              </Label>
              <div className='flex flex-wrap gap-2 sm:gap-3'>
                {durations.map((d) => (
                  <button
                    type='button'
                    key={d}
                    onClick={() => setDuration(d)}
                    className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border-2 text-sm sm:text-base font-semibold transition-all ${duration === d ? "bg-primary border-primary text-primary-foreground shadow-sm" : "bg-background border-border hover:bg-muted text-foreground"}`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            <div className='space-y-3'>
              <Label className='text-base font-semibold'>
                Oceń nasilenie objawów
              </Label>
              <div className='grid grid-cols-5 gap-2 sm:gap-4'>
                {severities.map((s) => (
                  <button
                    type='button'
                    key={s.value}
                    onClick={() => setSeverity(s.value)}
                    className={`flex flex-col items-center justify-center py-4 px-2 sm:p-4 rounded-xl border-2 transition-all gap-2 ${severity === s.value ? "bg-primary/5 border-primary ring-1 ring-primary shadow-sm" : "bg-background border-border hover:bg-muted"}`}
                  >
                    <span className='text-2xl sm:text-3xl'>{s.emoji}</span>
                    <span className='text-[10px] sm:text-xs font-semibold text-center text-foreground'>
                      {s.level}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div
              className='flex items-center justify-between p-4 rounded-xl border-2 border-border bg-muted/20 hover:bg-muted/40 transition-colors cursor-pointer'
              onClick={() => setDiagnosed(!diagnosed)}
            >
              <Label
                htmlFor='diagnosed'
                className='text-sm sm:text-base font-semibold cursor-pointer pointer-events-none select-none'
              >
                Czy diagnozowano u Ciebie ten stan już wcześniej?
              </Label>
              <button
                type='button'
                id='diagnosed'
                className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${diagnosed ? "bg-primary text-primary-foreground" : "bg-border"}`}
                onClick={() => setDiagnosed(!diagnosed)}
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition-transform ${diagnosed ? "translate-x-6" : "translate-x-1"}`}
                />
              </button>
            </div>

            <div className='relative space-y-3 w-full h-[200px]'>
              <Label className='w-full  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-base font-semibold flex flex-col items-center justify-center gap-3'>
                <div className='w-12 h-12 rounded-full bg-background border-2 border-border shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform'>
                  <UploadCloud className='w-6 h-6 text-muted-foreground' />
                </div>
                <div className='text-center'>
                  <p className='text-sm font-semibold text-foreground'>
                    Kliknij, aby przesłać zdjęcia
                  </p>
                  <p className='text-xs text-muted-foreground mt-1 font-medium'>
                    Akceptowane formaty: JPG, PNG (maks. 5 MB)
                  </p>
                </div>
              </Label>
              <input
                type='file'
                placeholder='Prześlij zdjęcia, jeśli są istotne (opcjonalnie)'
                className='absolute w-full h-[200px] border-2 border-dashed border-border/80 rounded-xl p-8 flex flex-col items-center justify-center gap-3 hover:bg-muted/30 transition-colors cursor-pointer group'
                name='foto'
                id='foto'
                accept='image/*'
                multiple
              ></input>
            </div>

            <div className='pt-6 border-t-2 border-border/50 flex flex-col gap-4'>
              {doctorId ? (
                <Button
                  type='submit'
                  className='w-full text-base sm:text-lg h-14 rounded-xl font-bold font-sans tracking-wide cursor-pointer text-primary-foreground'
                >
                  Przejdź do wyboru terminu{" "}
                  <ChevronRight className='ml-2 w-5 h-5' />
                </Button>
              ) : (
                <Button
                  type='button'
                  className='w-full text-base sm:text-lg h-14 rounded-xl font-bold font-sans tracking-wide cursor-pointer text-primary-foreground'
                  onClick={() => router.push("/doctors")}
                >
                  Przejdź do wyboru lekarza{" "}
                  <ChevronRight className='ml-2 w-5 h-5' />
                </Button>
              )}
              <div className='flex items-center justify-center gap-2 text-xs sm:text-sm text-muted-foreground font-semibold'>
                <ShieldCheck className='w-4 h-4 text-green-500' />
                Twoje dane są bezpieczne i szyfrowane
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
