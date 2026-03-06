"use client"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Facebook,
  Instagram,
  Linkedin,
  LogIn,
  Mail,
  MapPinCheckInside,
  Menu,
  Power,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ModeToggle } from "./ModeToggle"
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"

export function SheetNav() {
  const pathname = usePathname()
  return (
    <Sheet>
      <SheetTrigger asChild className='lg:hidden'>
        <Button
          variant='outline'
          className='text-xl cursor-pointer bg-transparent border-none'
        >
          <Menu className='size-6'/>
        </Button>
      </SheetTrigger>
      <SheetContent className=' lg:hidden opacity-75'>
        <SheetHeader>
          <SheetTitle>Menu Nawigacyjne</SheetTitle>
        </SheetHeader>
        <div className='flex flex-col items-start gap-4 text-xl italic font-semibold p-4'>
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
          <div className='flex flex-col gap-8 lg:gap-12'>
           
        <Button asChild  className='bg-secondary text-secondary-foreground h-9 text-lg cursor-pointer border-primary'>
         <Link href='/contact'>
         <Power className="size-6" />
         Rozpocznij
         </Link>
        </Button>
                <Show when='signed-out'>
          <SignInButton>
            <Button className='bg-secondary text-secondary-foreground h-9 text-lg cursor-pointer '>
              <LogIn className='size-6' />
              Zaloguj
            </Button>
          </SignInButton>
          <SignUpButton>
            <Button className='bg-secondary text-secondary-foreground h-9 text-lg cursor-pointer '>
              Rejestracja
            </Button>
          </SignUpButton>
        </Show>
        <Show when='signed-in'>
          <UserButton />
        </Show>
        
        <ModeToggle />
           
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button  className='bg-secondary text-red-500 h-9 text-lg cursor-pointer border-primary'>
              Zamknij
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
