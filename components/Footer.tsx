import Link from "next/link"
import React from "react"

const Footer = () => {
  return (
    <footer className='bg-primary text-primary-foreground py-12'>
      <div className=' mx-auto px-4 container '>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div>
            <h3 className='text-xl font-bold mb-4'>Telemedycyna</h3>
            <p className='text-sm'>
              Zdrowie w zasięgu ręki. Konsultacje lekarskie online, recepty i
              porady ekspertów – szybko, bezpiecznie i wygodnie.
            </p>
          </div>
          <div>
            <h3 className='text-xl font-bold mb-4'>Szybkie linki</h3>
            <ul className='space-y-2'>
              <Link href='/how-it-works' className={`text-lg `}>
                Jak to działa?
              </Link>
              <Link href='/specializations' className={`text-lg `}>
                Specjalizacje
              </Link>
              <Link href='/doctors' className={`text-lg `}>
                Lekarze
              </Link>
              <Link href='/reservation' className={`text-lg `}>
                Zarezerwuj wizytę
              </Link>
            </ul>
          </div>
          <div>
            <h3 className='text-xl font-bold mb-4'>Specjalizacje</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='#' className='hover:underline'>
                  Internista
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:underline'>
                  Pediatra
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:underline'>
                  Ginekolog
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:underline'>
                  Dermatolog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-xl font-bold mb-4'>Kontakt</h3>
            <p className='text-lg mb-2'>📩 tele-med@onet.pl</p>
            <p className='text-lg mb-2'>📞 +48 123 456 789</p>
            <p className='text-lg'>📍 Warszawa, Polska</p>
          </div>
        </div>
        <div className='border-t border-primary/20 mt-8 pt-8 text-center'>
          <p className='text-sm'>
            &copy; {new Date().getFullYear()} Telemedycyna. Wszelkie prawa
            zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
