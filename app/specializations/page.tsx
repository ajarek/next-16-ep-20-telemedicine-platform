'use client'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { specialtiesData } from "@/data/specialtiesData"
import { Search } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const SpecializationsPage = () => {
    const [search, setSearch] = useState('')
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }
    const filteredSpecialties = specialtiesData.filter((specialty) =>
        specialty.title.toLowerCase().includes(search.toLowerCase())
    )
  return (
    <div className='flex flex-col items-center justify-start w-full p-4 md:p-8 gap-8'>
      <div className='flex flex-col items-center gap-4'>
        <h1 className='text-2xl md:text-3xl font-bold '>
          Poznaj nasze specjalizacje medyczne
        </h1>
        <p className=' text-center text-xl'>
          Nawiąż kontakt z lekarzami posiadającymi certyfikaty z różnych
          specjalizacji.
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
      <h2 className='text-2xl md:text-3xl font-bold '>Nasze specjalizacje</h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {filteredSpecialties.map((specialty) => (
          <Card
            key={specialty.id}
            className='flex flex-col items-center justify-between gap-4 p-4'
          >
            <div className='w-20 h-20 flex items-center justify-center gap-2 mx-auto mb-6'>
              <span className='text-2xl font-bold text-primary'>
                {specialty.id}.
              </span>
              <span className='text-2xl font-bold text-primary bg-primary/10 rounded-full p-2'>
                {specialty.icon}
              </span>
            </div>
            <CardTitle className='text-xl font-semibold mb-3'>
              {specialty.title}
            </CardTitle>
            <CardDescription>{specialty.description}</CardDescription>
            <CardFooter>{specialty.availability} dostępnych lekarzy</CardFooter>
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

export default SpecializationsPage
