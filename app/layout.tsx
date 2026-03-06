import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import { ThemeProvider } from "next-themes"
import Footer from "@/components/Footer"
import { ClerkProvider } from "@clerk/nextjs"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Platforma Telemedyczna",
  description:
    "Platforma Telemedyczna to strona internetowa o telemedycynie, której celem jest generowanie pierwszych rezerwacji konsultacji. Ta aplikacja prezentuje kompletną platformę telemedyczną, obejmującą stronę główną, poradnik, specjalizacje medyczne, profile lekarzy i strony rezerwacji wizyt. Całość utrzymana jest w profesjonalnym stylu opieki zdrowotnej, z wiarygodnymi, czystymi i uspokajającymi kolorami.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pl' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <div className='flex flex-col min-h-screen'>
              <Navbar />
              <main className='flex-1 flex flex-col'>{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}
