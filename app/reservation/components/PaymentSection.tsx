"use client"

import React, { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRegisterStore } from "@/store/visitStore"
import Image from "next/image"
import {
  Calendar,
  Clock,
  Lock,
  Shield,
  Check,
  CreditCard,
  HeartPulse,
} from "lucide-react"

interface PaymentSectionProps {
  onBack?: () => void
  onConfirm?: () => void
}

export default function PaymentSection({
  onBack,
  onConfirm,
}: PaymentSectionProps) {
  const { currentVisit } = useRegisterStore()
  const [paymentMethod, setPaymentMethod] = useState("card")

  const consultationFee = currentVisit.doctorPrice || 150
  const platformFee = 20
  const subtotal = consultationFee + platformFee
  const tax = subtotal * 0.08
  const total = subtotal + tax

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onConfirm?.()
  }
  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col lg:flex-row gap-6 w-full max-w-5xl items-start font-sans'
    >
      <Card className='flex-1 border-2 shadow-sm rounded-2xl overflow-hidden bg-background w-full'>
        <CardContent className='p-6 sm:p-8 space-y-8'>
          <h2 className='text-2xl font-bold text-foreground'>
            Szczegóły płatności
          </h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <button
              onClick={() => setPaymentMethod("card")}
              className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                paymentMethod === "card"
                  ? "border-primary bg-primary/5 ring-1 ring-primary shadow-sm"
                  : "border-border hover:bg-muted"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  paymentMethod === "card"
                    ? "border-primary"
                    : "border-muted-foreground"
                }`}
              >
                {paymentMethod === "card" && (
                  <div className='w-2.5 h-2.5 bg-primary rounded-full'></div>
                )}
              </div>
              <CreditCard className='w-5 h-5 text-slate-500' />
              <span className='font-semibold text-sm'>Karta Kredytowa</span>
            </button>

            <button
              onClick={() => setPaymentMethod("insurance")}
              className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                paymentMethod === "insurance"
                  ? "border-primary bg-primary/5 ring-1 ring-primary shadow-sm"
                  : "border-border hover:bg-muted"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  paymentMethod === "insurance"
                    ? "border-primary"
                    : "border-muted-foreground"
                }`}
              >
                {paymentMethod === "insurance" && (
                  <div className='w-2.5 h-2.5 bg-primary rounded-full'></div>
                )}
              </div>
              <Shield className='w-5 h-5 text-slate-500' />
              <span className='font-semibold text-sm'>Ubezpieczenie</span>
            </button>

            <button
              onClick={() => setPaymentMethod("hsa")}
              className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                paymentMethod === "hsa"
                  ? "border-primary bg-primary/5 ring-1 ring-primary shadow-sm"
                  : "border-border hover:bg-muted"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  paymentMethod === "hsa"
                    ? "border-primary"
                    : "border-muted-foreground"
                }`}
              >
                {paymentMethod === "hsa" && (
                  <div className='w-2.5 h-2.5 bg-primary rounded-full'></div>
                )}
              </div>
              <HeartPulse className='w-5 h-5 text-slate-500' />
              <span className='font-semibold text-sm'>HSA/FSA</span>
            </button>

            <button
              onClick={() => setPaymentMethod("paypal")}
              className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                paymentMethod === "paypal"
                  ? "border-primary bg-primary/5 ring-1 ring-primary shadow-sm"
                  : "border-border hover:bg-muted"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  paymentMethod === "paypal"
                    ? "border-primary"
                    : "border-muted-foreground"
                }`}
              >
                {paymentMethod === "paypal" && (
                  <div className='w-2.5 h-2.5 bg-primary rounded-full'></div>
                )}
              </div>
              <svg
                viewBox='0 0 24 24'
                className='w-5 h-5 fill-slate-500'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106a.64.64 0 0 1-.632.535z fill-rule=evenodd'></path>
              </svg>
              <span className='font-semibold text-sm'>PayPal</span>
            </button>
          </div>

          <div className='space-y-6'>
            <div className='space-y-3'>
              <Label className='text-sm font-semibold'>Numer karty</Label>
              <div className='relative'>
                <Input
                  name='cardNumber'
                  placeholder='1234 5678 9012 3456'
                  className='h-12 px-4 rounded-xl border-2 text-base'
                  required
                />
                <div className='absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1'>
                  <div className='w-8 h-5 bg-blue-600 rounded flex items-center justify-center text-[8px] text-white font-bold italic'>
                    VISA
                  </div>
                  <div className='w-8 h-5 bg-red-500 rounded flex items-center justify-center'>
                    <div className='w-3 h-3 bg-red-600 rounded-full/50 -mr-1'></div>
                    <div className='w-3 h-3 bg-yellow-500 rounded-full/50 -ml-1'></div>
                  </div>
                </div>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-4'>
              <div className='space-y-3'>
                <Label className='text-sm font-semibold'>Data ważności</Label>
                <Input
                  placeholder='MM/RR'
                  className='h-12 px-4 rounded-xl border-2 text-base'
                  required
                />
              </div>
              <div className='space-y-3'>
                <Label className='text-sm font-semibold'>CVV</Label>
                <Input
                  name='cvv'
                  placeholder='123'
                  className='h-12 px-4 rounded-xl border-2 text-base'
                  required
                />
              </div>
            </div>

            <div className='space-y-3'>
              <Label className='text-sm font-semibold'>
                Imię i nazwisko posiadacza
              </Label>
              <Input
                name='cardHolderName'
                placeholder='Jan Kowalski'
                className='h-12 px-4 rounded-xl border-2 text-base'
                required
              />
            </div>

            <div className='space-y-3'>
              <Label className='text-sm font-semibold'>Kod pocztowy</Label>
              <Input
                name='zipCode'
                placeholder='00-000'
                className='h-12 px-4 rounded-xl border-2 text-base'
                required
              />
            </div>

            <label className='flex items-center gap-3 cursor-pointer group'>
              <div className='w-5 h-5 rounded border-2 border-border group-hover:border-primary flex items-center justify-center transition-colors'>
                <Check className='w-3.5 h-3.5 text-transparent' />
              </div>
              <span className='text-sm font-medium text-muted-foreground group-hover:text-foreground'>
                Zapisz tę kartę na przyszłe wizyty
              </span>
            </label>
          </div>

          <div className='pt-6 border-t border-border flex flex-wrap items-center justify-start gap-4 sm:gap-6 text-xs font-semibold text-green-600'>
            <div className='flex items-center gap-1.5'>
              <Lock className='w-3.5 h-3.5' />
              256-bitowe szyfrowanie SSL
            </div>
            <div className='flex items-center gap-1.5'>
              <Shield className='w-3.5 h-3.5' />
              Zgodność z PCI
            </div>
            <div className='flex items-center gap-1.5'>
              <Shield className='w-3.5 h-3.5' />
              Zgodność z HIPAA
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className='w-full lg:w-[400px] border-none shadow-none rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-900/50 shrink-0'>
        <CardContent className='p-6 sm:p-8 space-y-6'>
          <h2 className='text-xl sm:text-2xl font-bold text-foreground'>
            Podsumowanie wizyty
          </h2>

          <div className='flex items-center gap-4 bg-white dark:bg-zinc-950 p-4 rounded-xl border border-border shadow-sm'>
            <div className='relative w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-primary/20 bg-muted'>
              {currentVisit.doctorImage ? (
                <Image
                  src={currentVisit.doctorImage}
                  alt={currentVisit.doctorName || "Doctor"}
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
              ) : (
                <div className='flex items-center justify-center w-full h-full bg-slate-200 text-slate-400'>
                  <svg
                    className='w-8 h-8'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </div>
              )}
            </div>
            <div>
              <h3 className='font-bold text-foreground text-base'>
                {currentVisit.doctorName || "Brak lekarza"}
              </h3>
              <p className='text-sm text-muted-foreground font-medium'>
                {currentVisit.doctorSpecialization || "Specjalista"}
              </p>
            </div>
          </div>

          <div className='space-y-4 pt-2'>
            <div className='flex items-center gap-3 text-sm text-muted-foreground font-medium'>
              <Calendar className='w-4 h-4 text-primary' />
              {currentVisit.date ? currentVisit.date : "Wybierz datę"}
            </div>
            <div className='flex items-center gap-3 text-sm text-muted-foreground font-medium'>
              <Clock className='w-4 h-4 text-primary' />
              {currentVisit.time
                ? `${currentVisit.time} CET`
                : "Wybierz godzinę"}
            </div>
            <div className='pl-7 text-xs text-muted-foreground/80 font-medium'>
              Czas trwania: 30 minut
            </div>
          </div>

          <div className='pt-6 border-t border-border/50 space-y-3'>
            <div className='flex justify-between items-center text-sm font-medium text-muted-foreground'>
              <span>Konsultacja</span>
              <span>{consultationFee.toFixed(2)} zł</span>
            </div>
            <div className='flex justify-between items-center text-sm font-medium text-muted-foreground'>
              <span>Opłata serwisowa</span>
              <span>{platformFee.toFixed(2)} zł</span>
            </div>
            <div className='flex justify-between items-center text-sm font-medium text-muted-foreground'>
              <span>Suma częściowa</span>
              <span>{subtotal.toFixed(2)} zł</span>
            </div>
            <div className='flex justify-between items-center text-sm font-medium text-muted-foreground'>
              <span>Podatek płatnika</span>
              <span>{tax.toFixed(2)} zł</span>
            </div>

            <div className='flex justify-between items-center pt-3 mt-3 border-t border-border/50'>
              <span className='font-bold text-foreground text-lg'>Suma</span>
              <span className='font-bold text-lg'>{total.toFixed(2)} zł</span>
            </div>
          </div>

          <div className='pt-4'>
            <Input
              name='promoCode'
              placeholder='Masz kod promocyjny?'
              className='h-12 px-4 rounded-xl border-2 text-sm bg-white dark:bg-zinc-950 flex-1'
            />
          </div>

          <div className='pt-2 space-y-4 flex flex-col'>
            <Button
              type='submit'
              className='w-full h-14 rounded-xl font-bold text-lg tracking-wide shadow-md bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center transition-all'
            >
              <Lock className='w-4 h-4 mr-2' />
              Potwierdź i zapłać {total.toFixed(2)} zł
            </Button>
            {onBack && (
              <Button
                variant='ghost'
                onClick={onBack}
                className='w-full font-bold text-primary hover:text-primary hover:bg-primary/10 h-10'
              >
                Wróć do wyboru terminu
              </Button>
            )}
            <p className='text-center text-xs text-muted-foreground font-medium px-4 pt-2'>
              Otrzymasz potwierdzenie przez email i SMS
              <br />
              <a href='#' className='text-primary hover:underline'>
                Polityka anulowania
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </form>
  )
}
