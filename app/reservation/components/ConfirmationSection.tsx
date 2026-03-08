"use client"

import {
  Check,
  Calendar,
  Clock,
  ArrowRight,
  User,
  FileText,
  Stethoscope,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useRegisterStore } from "@/store/visitStore"
import Image from "next/image"
import { useRouter } from "next/navigation"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function ConfirmationSection() {
  const { currentVisit, clearCurrentVisit } = useRegisterStore()
  const router = useRouter()

  const handleGoHome = () => {
    clearCurrentVisit()
    router.push("/")
  }

  return (
    <div className='flex flex-col items-center w-full max-w-3xl mx-auto font-sans animate-in fade-in zoom-in duration-500'>
      <div className='w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30 mb-6'>
        <Check className='w-10 h-10 text-white' strokeWidth={3} />
      </div>

      <h1 className='text-3xl sm:text-4xl font-extrabold text-foreground mb-2 text-center tracking-tight'>
        Wizyta potwierdzona!
      </h1>
      <p className='text-lg text-muted-foreground mb-10 text-center font-medium'>
        Numer potwierdzenia:{" "}
        <span className='text-primary font-bold'>
          #APT-{currentVisit.id || "2024-12345"}
        </span>
      </p>

      <Card className='w-full border shadow-sm rounded-2xl overflow-hidden bg-white dark:bg-zinc-950/50 mb-8'>
        <CardContent className='p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6'>
          <div className='flex items-center gap-5 flex-1 w-full'>
            <div className='relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shrink-0 border-4 border-slate-50 dark:border-zinc-900 shadow-sm bg-muted'>
              {currentVisit.doctorImage ? (
                <Image
                  src={currentVisit.doctorImage}
                  alt={currentVisit.doctorName || "Lekarz"}
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 100vw, 33vw'
                />
              ) : (
                <div className='flex items-center justify-center w-full h-full bg-slate-200 text-slate-400'>
                  <User className='w-8 h-8' />
                </div>
              )}
            </div>
            <div>
              <h3 className='font-bold text-lg sm:text-xl text-foreground mb-1'>
                {currentVisit.doctorName || "Brak lekarza"}
              </h3>
              <p className='text-sm sm:text-base text-muted-foreground font-medium'>
                {currentVisit.doctorSpecialization || "Specjalista"}
              </p>
            </div>
          </div>

          <div className='flex flex-col gap-3 w-full sm:w-auto shrink-0 pt-4 sm:pt-0'>
            <div className='flex items-center gap-3 text-sm text-foreground font-semibold'>
              <Calendar className='w-5 h-5 text-muted-foreground' />
              {currentVisit.date || "Dzisiaj, 18 Gru 2024"}
            </div>
            <div className='flex items-center gap-3 text-sm text-foreground font-semibold'>
              <Clock className='w-5 h-5 text-muted-foreground' />
              {currentVisit.time ? `${currentVisit.time} CET` : "9:00 AM CET"}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className='flex flex-col sm:flex-row gap-4 w-full justify-center mb-10'>
        <Button
          variant='outline'
          className='w-full sm:w-auto h-12 px-8 rounded-xl font-bold border-2 text-primary border-primary hover:bg-primary/5 hover:text-primary transition-all'
        >
          Dodaj do kalendarza
        </Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button className='w-full sm:w-auto h-12 px-8 rounded-xl font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-md transition-all'>
              Zobacz szczegóły wizyty
            </Button>
          </SheetTrigger>
          <SheetContent
            side='right'
            className='w-full sm:max-w-md overflow-y-auto bg-white dark:bg-zinc-950 border-l overflow-x-hidden'
          >
            <SheetHeader className='mb-6 mt-4'>
              <SheetTitle className='text-2xl font-bold flex items-center gap-2'>
                <FileText className='w-6 h-6 text-primary' />
                Szczegóły wizyty
              </SheetTitle>
              <SheetDescription>
                Wizyta u specjalisty:{" "}
                <span className='font-semibold text-foreground'>
                  {currentVisit.doctorName || "lekarza"}
                </span>
              </SheetDescription>
            </SheetHeader>
            <div className='flex flex-col gap-6'>
              <div className='space-y-3 bg-muted/50 p-4 rounded-xl border'>
                <div className='flex items-center gap-2 text-primary'>
                  <Calendar className='w-5 h-5' />
                  <h4 className='font-semibold text-foreground text-lg'>
                    Termin wizyty
                  </h4>
                </div>
                <div className='grid grid-cols-1 gap-2 text-sm mt-3'>
                  <div className='flex justify-between border-b pb-2'>
                    <span className='text-muted-foreground'>Data:</span>
                    <span className='font-medium text-foreground'>
                      {currentVisit.date || "Brak danych"}
                    </span>
                  </div>
                  <div className='flex justify-between border-b pb-2'>
                    <span className='text-muted-foreground'>Godzina:</span>
                    <span className='font-medium text-foreground'>
                      {currentVisit.time
                        ? `${currentVisit.time} CET`
                        : "Brak danych"}
                    </span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-muted-foreground'>
                      ID Rezerwacji:
                    </span>
                    <span className='font-medium text-primary'>
                      #APT-{currentVisit.id || "2024-12345"}
                    </span>
                  </div>
                </div>
              </div>

              <div className='space-y-3 bg-muted/50 p-4 rounded-xl border'>
                <div className='flex items-center gap-2 text-primary'>
                  <User className='w-5 h-5' />
                  <h4 className='font-semibold text-foreground text-lg'>
                    Dane pacjenta
                  </h4>
                </div>
                <div className='grid grid-cols-1 gap-2 text-sm mt-3'>
                  <div className='flex justify-between border-b pb-2'>
                    <span className='text-muted-foreground'>
                      Imię i nazwisko:
                    </span>
                    <span className='font-medium text-foreground'>
                      {currentVisit.name || "Brak danych"}
                    </span>
                  </div>
                  <div className='flex justify-between border-b pb-2'>
                    <span className='text-muted-foreground'>Email:</span>
                    <span className='font-medium text-foreground'>
                      {currentVisit.email || "Brak danych"}
                    </span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-muted-foreground'>Telefon:</span>
                    <span className='font-medium text-foreground'>
                      {currentVisit.phone || "Brak danych"}
                    </span>
                  </div>
                </div>
              </div>

              <div className='space-y-3 bg-muted/50 p-4 rounded-xl border'>
                <div className='flex items-center gap-2 text-primary'>
                  <Stethoscope className='w-5 h-5' />
                  <h4 className='font-semibold text-foreground text-lg'>
                    Informacje o lekarzu
                  </h4>
                </div>
                <div className='grid grid-cols-1 gap-2 text-sm mt-3'>
                  <div className='flex justify-between border-b pb-2'>
                    <span className='text-muted-foreground'>Lekarz:</span>
                    <span className='font-medium text-foreground'>
                      {currentVisit.doctorName || "Brak danych"}
                    </span>
                  </div>
                  <div className='flex justify-between border-b pb-2'>
                    <span className='text-muted-foreground'>
                      Specjalizacja:
                    </span>
                    <span className='font-medium text-foreground'>
                      {currentVisit.doctorSpecialization || "Brak danych"}
                    </span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-muted-foreground'>
                      Koszt konsultacji:
                    </span>
                    <span className='font-medium text-foreground'>
                      {currentVisit.doctorPrice
                        ? `${currentVisit.doctorPrice} PLN`
                        : "Zgodnie z cennikiem"}
                    </span>
                  </div>
                </div>
              </div>

              <div className='space-y-3 bg-emerald-50/50 dark:bg-emerald-950/20 p-4 rounded-xl border border-emerald-100 dark:border-emerald-900'>
                <h4 className='font-semibold text-emerald-700 dark:text-emerald-400 text-lg'>
                  Wskazania dla lekarza
                </h4>
                <div className='grid grid-cols-1 gap-2 text-sm mt-2'>
                  <div className='flex flex-col border-b border-emerald-100/50 dark:border-emerald-900 pb-2'>
                    <span className='text-emerald-600/80 dark:text-emerald-500 mb-1'>
                      Zgłoszone objawy:
                    </span>
                    <span className='font-medium text-foreground'>
                      {currentVisit.symptoms || "Brak wprowadzonych objawów"}
                    </span>
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-emerald-600/80 dark:text-emerald-500 mb-1'>
                      Opis wizyty / Cel:
                    </span>
                    <span className='font-medium text-foreground'>
                      {currentVisit.reason ||
                        "Brak dodatkowego opisu celu wizyty"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className='w-full bg-sky-50 dark:bg-sky-950/20 border border-sky-100 dark:border-sky-900 rounded-2xl p-6 sm:p-8 flex flex-col items-start'>
        <h3 className='text-xl font-bold text-foreground mb-6'>Przed wizytą</h3>
        <ul className='space-y-4 text-sm sm:text-base'>
          <li className='flex flex-row items-center gap-4 text-muted-foreground'>
            <div className='w-6 h-6 shrink-0 bg-emerald-500 rounded-full flex items-center justify-center text-white'>
              <Check className='w-4 h-4' strokeWidth={3} />
            </div>
            <span className='font-medium'>
              Przetestuj kamerę i mikrofon 5 minut przed wizytą
            </span>
          </li>
          <li className='flex items-center gap-4 text-muted-foreground'>
            <div className='w-6 h-6 shrink-0 bg-emerald-500 rounded-full flex items-center justify-center text-white'>
              <Check className='w-4 h-4' strokeWidth={3} />
            </div>
            <span className='font-medium'>
              Przygotuj historię chorób i aktualne leki
            </span>
          </li>
          <li className='flex items-center gap-4 text-muted-foreground'>
            <div className='w-6 h-6 shrink-0 bg-emerald-500 rounded-full flex items-center justify-center text-white'>
              <Check className='w-4 h-4' strokeWidth={3} />
            </div>
            <span className='font-medium'>
              Przygotuj pytania, które chcesz zadać lekarzowi
            </span>
          </li>
          <li className='flex items-center gap-4 text-muted-foreground'>
            <div className='w-6 h-6 shrink-0 bg-emerald-500 rounded-full flex items-center justify-center text-white'>
              <Check className='w-4 h-4' strokeWidth={3} />
            </div>
            <span className='font-medium'>
              Znajdź ciche, dobrze oświetlone miejsce na konsultację
            </span>
          </li>
        </ul>
      </div>

      <div className='mt-8 text-center text-sm font-medium'>
        <Button
          onClick={handleGoHome}
          variant='ghost'
          className='text-muted-foreground hover:text-foreground h-10 px-4'
        >
          Wróć na stronę główną <ArrowRight className='w-4 h-4 ml-2' />
        </Button>
      </div>
    </div>
  )
}
