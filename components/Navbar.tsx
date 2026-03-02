"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { SheetNav } from "./SheetNav"
import { Button } from "./ui/button"
import { LogIn, Power, Stethoscope } from "lucide-react"
import { ModeToggle } from "./ModeToggle"

const Navbar = () => {
  const pathname = usePathname()
  return (
    <nav className='h-16 flex justify-between items-center px-10 bg-primary/10 '>
      <Link
        href='/'
        className='flex items-center gap-0'
        aria-label='TeleMed – strona główna'
      >
       <Stethoscope className="size-8" />
        <span className='text-xl font-bold italic'>TeleMed</span>
      </Link>
      <div className='flex items-center gap-6 max-lg:hidden'>
       
        <Link
          href='/how-it-works'
          className={`text-lg ${pathname === "/how-it-works" ? "text-accent" : ""} transition-colors hover:text-accent`}
        >
          Jak to działa?
        </Link>
        <Link
          href='/specializations'
          className={`text-lg ${pathname === "/specializations" ? "text-accent" : ""} transition-colors hover:text-accent`}
        >
          Specjalizacje
        </Link>
        <Link
          href='/doctors'
          className={`text-lg ${pathname === "/doctors" ? "text-accent" : ""} transition-colors hover:text-accent`}
        >
          Lekarze
        </Link>
         <Link
          href='/reservation'
          className={`text-lg ${pathname === "/reservation" ? "text-accent" : ""} transition-colors hover:text-accent`}
        >
          Zarezerwuj wizytę
        </Link>
      </div>
      <div className="max-lg:hidden flex gap-4">
        <Button className="bg-secondary text-secondary-foreground h-9 text-lg cursor-pointer ">
          <LogIn className="size-6" />
          Zaloguj się
        </Button>
        <Button asChild  className='bg-secondary text-secondary-foreground h-9 text-lg cursor-pointer border-primary'>
         <Link href='/contact'>
         <Power className="size-6" />
         Rozpocznij
         </Link>
        </Button>
        <ModeToggle />
      </div>
      <SheetNav />
    </nav>
  )
}

export default Navbar
