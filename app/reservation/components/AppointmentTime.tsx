"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Lock, ChevronLeft } from "lucide-react"
import Image from "next/image"

interface Doctor {
  id: number
  name: string
  specialty: string
  images: string
}

interface AppointmentTimeProps {
  doctor: Doctor | undefined
  onBack: () => void
  onNext: (date: string, time: string) => void
}
const getFutureDate = (daysAhead: number) => {
  const date = new Date()
  date.setDate(date.getDate() + daysAhead)
  return date
}

const dates = [
  {
    id: 1,
    label: getFutureDate(0).toLocaleDateString("pl-PL", { weekday: "long" }),
    date: getFutureDate(0).toLocaleDateString(),
    slots: 8,
  },
  {
    id: 2,
    label: getFutureDate(1).toLocaleDateString("pl-PL", { weekday: "long" }),
    date: getFutureDate(1).toLocaleDateString(),
    slots: 12,
  },
  {
    id: 3,
    label: getFutureDate(2).toLocaleDateString("pl-PL", { weekday: "long" }),
    date: getFutureDate(2).toLocaleDateString(),
    slots: 15,
  },
  {
    id: 4,
    label: getFutureDate(3).toLocaleDateString("pl-PL", { weekday: "long" }),
    date: getFutureDate(3).toLocaleDateString(),
    slots: 10,
  },
  {
    id: 5,
    label: getFutureDate(4).toLocaleDateString("pl-PL", { weekday: "long" }),
    date: getFutureDate(4).toLocaleDateString(),
    slots: 6,
  },
  {
    id: 6,
    label: getFutureDate(5).toLocaleDateString("pl-PL", { weekday: "long" }),
    date: getFutureDate(5).toLocaleDateString(),
    slots: 4,
  },
]

const timeSlots = {
  Rano: [
    { time: "08:00", available: true },
    { time: "08:30", available: true },
    { time: "09:00", available: true },
    { time: "09:30", available: true },
    { time: "10:00", available: true },
    { time: "10:30", available: true },
    { time: "11:00", available: false },
    { time: "11:30", available: false },
  ],
  Popołudnie: [
    { time: "12:00", available: true },
    { time: "12:30", available: true },
    { time: "13:00", available: true },
    { time: "13:30", available: true },
    { time: "14:00", available: true },
    { time: "14:30", available: true },
    { time: "15:00", available: true },
    { time: "15:30", available: true },
    { time: "16:00", available: false },
    { time: "16:30", available: false },
  ],
  Wieczór: [
    { time: "17:00", available: true },
    { time: "17:30", available: true },
    { time: "18:00", available: true },
    { time: "18:30", available: true },
    { time: "19:00", available: true },
    { time: "19:30", available: true },
  ],
}

export default function AppointmentTime({
  doctor,
  onBack,
  onNext,
}: AppointmentTimeProps) {
  const [selectedDate, setSelectedDate] = useState(dates[0].id)
  const [selectedTime, setSelectedTime] = useState<string | null>("09:00")

  return (
    <Card className='w-full max-w-3xl border-2 shadow-sm rounded-2xl overflow-hidden bg-background'>
      <CardContent className='p-6 sm:p-8 space-y-8'>
        {/* Doctor Info */}
        {doctor && (
          <div className='flex items-center gap-4 bg-muted/20 p-4 rounded-xl border border-border/50'>
            <div className='relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-primary/20 bg-muted'>
              <Image
                src={doctor.images}
                alt={doctor.name}
                fill
                className='object-cover'
              />
            </div>
            <div>
              <h3 className='font-bold text-foreground text-base sm:text-lg'>
                {doctor.name}
              </h3>
              <p className='text-sm text-muted-foreground font-medium'>
                {doctor.specialty}
              </p>
            </div>
          </div>
        )}

        {/* Title */}
        <h2 className='text-2xl sm:text-3xl font-bold text-foreground'>
          Wybierz czas wizyty
        </h2>

        {/* Dates */}
        <div className='flex gap-3 overflow-x-auto pb-2 scrollbar-hide snap-x'>
          {dates.map((d) => (
            <button
              key={d.id}
              onClick={() => setSelectedDate(d.id)}
              className={`shrink-0 w-[100px] flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all snap-start ${
                selectedDate === d.id
                  ? "bg-primary border-primary text-primary-foreground shadow-sm"
                  : "bg-background border-border hover:bg-muted text-foreground"
              }`}
            >
              <span className='font-bold text-sm'>{d.label}</span>
              <span className='text-xs font-medium opacity-90'>{d.date}</span>
              <span
                className={`text-[10px] sm:text-xs mt-1 font-semibold ${
                  selectedDate === d.id
                    ? "text-primary-foreground/80"
                    : "text-muted-foreground"
                }`}
              >
                {d.slots} wolnych
              </span>
            </button>
          ))}
        </div>

        {/* Time Slots */}
        <div className='space-y-6'>
          {Object.entries(timeSlots).map(([period, slots]) => (
            <div key={period}>
              <h4 className='font-bold text-foreground mb-3 text-sm'>
                {period}
              </h4>
              <div className='grid grid-cols-2 sm:grid-cols-4 gap-3'>
                {slots.map((slot, i) => {
                  const isSelected = selectedTime === slot.time
                  return (
                    <button
                      key={i}
                      disabled={!slot.available}
                      onClick={() => setSelectedTime(slot.time)}
                      className={`h-11 rounded-lg border-2 text-sm font-semibold transition-all ${
                        !slot.available
                          ? "bg-muted/30 border-border/50 text-muted-foreground/50 cursor-not-allowed"
                          : isSelected
                            ? "bg-primary border-primary text-primary-foreground shadow-sm"
                            : "bg-background border-border hover:bg-muted text-foreground"
                      }`}
                    >
                      {slot.time}
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Info Footer */}
        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-muted/20 border border-border/50'>
          <div className='flex items-center gap-2 text-sm text-foreground font-semibold'>
            <Clock className='w-4 h-4 text-muted-foreground' />
            Czas trwania konsultacji: 30 minut
          </div>
          <div className='flex items-center gap-2 text-sm text-foreground'>
            <span className='text-muted-foreground font-medium'>
              Strefa czasowa:
            </span>
            <select className='bg-transparent border border-border rounded-md text-sm font-medium py-1 px-2 focus:ring-1 focus:ring-primary focus:outline-none'>
              <option>CET (GMT+1)</option>
              <option>EST (GMT-5)</option>
            </select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className='pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4'>
          <Button
            variant='ghost'
            onClick={onBack}
            className='w-full sm:w-auto font-bold text-primary hover:text-primary hover:bg-primary/10'
          >
            <ChevronLeft className='w-4 h-4 mr-1' />
            Wróć
          </Button>
          <Button
            onClick={() => {
              const dateLabel =
                dates.find((d) => d.id === selectedDate)?.date || "18 Gru"
              onNext(dateLabel, selectedTime || "09:00")
            }}
            disabled={!selectedTime}
            className='w-full sm:w-auto h-12 px-6 rounded-xl font-bold sm:text-base tracking-wide shadow-md'
          >
            <Lock className='w-4 h-4 mr-2' />
            Przejdź do płatności
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
