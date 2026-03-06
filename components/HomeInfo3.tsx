import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const HomeInfo3 = () => {
  return (
    <div className='w-full flex flex-col items-center gap-4 p-4 md:p-8 rounded-xl'>
        <h1 className='text-2xl md:text-3xl font-bold '>Chcesz poczuć się lepiej?</h1>
        <p className=' text-center text-xl'>Dołącz do tysięcy pacjentów, którzy zaufali TeleMed w kwestii wygodnej i wysokiej jakości opieki zdrowotnej.</p>
        <Button asChild className='bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xl md:text-2xl cursor-pointer rounded-xl'>
            <Link href='/doctors'>Umów się na wizytę już teraz</Link>
        </Button>
        <p className=''>Pierwsza konsultacja tylko 99 zł – Akceptujemy większość ubezpieczeń</p>
    </div>
  )
}

export default HomeInfo3