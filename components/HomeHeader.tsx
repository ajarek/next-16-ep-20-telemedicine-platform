import Image from "next/image"
import { Button } from "./ui/button"
import { Check, HeartHandshake, Siren } from "lucide-react"
import Link from "next/link"

const HomeHeader = () => {
  return (
    <header>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8'>
        <div className='flex flex-col items-start justify-center p-4 md:p-8 gap-4'>
          <h1 className='md:text-6xl text-4xl font-bold'>
            Wysokiej jakości opieka zdrowotna w domu
          </h1>
          <p className='md:text-xl text-base'>
            Skontaktuj się z certyfikowanymi lekarzami 24/7. Uzyskaj diagnozę,
            otrzymaj leczenie i recepty – wszystko w zaciszu własnego domu.{" "}
          </p>
            <Button asChild className='bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xl px-6 h-12 rounded-xl cursor-pointer'>
              <Link href='/reservation'>Zarezerwuj swoją pierwszą konsultację <HeartHandshake className="ml-2 size-8 text-red-500" /></Link>
            </Button>
            <div className="flex items-center gap-6">
              <p className="flex items-center gap-2"><Check className="text-green-500" />+500 Lekarzy</p>
              <p className="flex items-center gap-2"><Check className="text-green-500" />Dostępne 24/7</p>
              <p className="flex items-center gap-2"><Check className="text-green-500" />Bezpieczne i prywatne</p>
            </div>
        </div>
        <div>
          <Image
            src='/home-doctor-1-740x493.avif'
            alt='Home Doktor'
            width={740}
            height={493}
            className='rounded-2xl'
          />
        </div>
      </div>
    </header>
  )
}

export default HomeHeader
