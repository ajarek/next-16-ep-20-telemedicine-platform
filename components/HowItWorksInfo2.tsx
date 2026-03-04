import Link from 'next/link'
import { Button } from './ui/button'

const HowItWorksInfo2 = () => {
  return (
    <div className='w-full flex flex-col items-center gap-4 p-4 md:p-8 rounded-xl'>
        <h1 className='text-2xl md:text-3xl font-bold '>Gotowy do rozpoczęcia?</h1>
        <p className=' text-center text-xl'>Doświadcz opieki zdrowotnej dopasowanej do Twojego harmonogramu.</p>
        <Button asChild className='bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xl md:text-2xl cursor-pointer rounded-xl'>
            <Link href='/reservation'>Umów się na pierwszą konsultację</Link>
        </Button>
        <p className=''>Średni czas oczekiwania: poniżej 2 minut</p>
    </div>
  )
}

export default HowItWorksInfo2