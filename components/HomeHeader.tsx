import Image from "next/image"
import React from "react"
import { Button } from "./ui/button"

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
            <Button className='text-xl font-semibold px-6 h-12 rounded-xl cursor-pointer'>
              Zarezerwuj swoją pierwszą konsultację
            </Button>
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
