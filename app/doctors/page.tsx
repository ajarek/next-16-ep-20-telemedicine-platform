'use client'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { doctorsData } from "@/data/doctorsData"
import { Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const DoctorsPage = () => {
    const [search, setSearch] = useState('')
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }
    const filteredDoctors = doctorsData.filter((doctor) =>
        doctor.name.toLowerCase().includes(search.toLowerCase())
    )
  return (
    <div className='flex flex-col items-center justify-start w-full p-4 md:p-8 gap-8'>
      <div className='flex flex-col items-center gap-4'>
        <h1 className='text-2xl md:text-3xl font-bold '>
          Znajdź swojego idealnego lekarza
        </h1>
        <p className=' text-center text-xl'>
         Skontaktuj się z certyfikowanymi specjalistami dostępnymi już dziś.
        </p>
        <div className='w-full relative '>
          <Input
          type="search"
            placeholder='Szukaj specjalizacji...'
            className='h-12 px-10 rounded-xl text-xl'
            value={search}
            onChange={handleSearch}
          />
          <Search className='absolute left-2 top-1/2 -translate-y-1/2' />
        </div>
      </div>
      <h2 className='text-2xl md:text-3xl font-bold '>Wyświetlono 8 dostępnych lekarzy</h2>
      <div className='w-full grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {filteredDoctors.map((doctor) => (
          <Card
            key={doctor.id}
            className='w-full flex flex-col items-center justify-between gap-4 p-4'
          >
            <div className='w-20 h-20 flex items-center justify-center gap-2 mx-auto mb-6'>
              <Image
                src={doctor.images}
                alt={doctor.name}
                width={80}
                height={80}
                className='rounded-full'
              />
            </div>
            <CardTitle className=''>
              <h2 className='text-xl font-semibold mb-3'>{doctor.name}</h2>
              <p className='text-primary text-lg font-medium'>{doctor.specialty}</p>
            </CardTitle>
            <CardDescription>{doctor.qualifications.map((qualification) => <p key={qualification}>{qualification}</p>)}</CardDescription>
            <CardFooter className='w-full flex flex-col gap-4'>
                <p>{doctor.rating}</p>
                <Button asChild className="w-full rounded-xl cursor-pointer text-base md:text-xl">
                    <Link href={`/reservation?doctorId=${doctor.id}`}>Wybierz</Link>
                </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className='w-full flex flex-col items-center gap-4 p-4 md:p-8 rounded-xl'>
        <h1 className='text-2xl md:text-3xl font-bold '>
          Gotowy na wizytę u specjalisty?
        </h1>
        <p className=' text-center text-xl'>
          Zarezerwuj konsultację w mniej niż 2 minuty.
        </p>
        <Button asChild className='bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xl md:text-2xl cursor-pointer rounded-xl'>
            <Link href='/reservation'>Umów się na wizytę</Link>
        </Button>
      </div>
    </div>
  )
}

export default DoctorsPage
