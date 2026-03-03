import Image from "next/image"
import { stepsData } from "@/data/stepsData"
import { Card, CardDescription, CardFooter, CardTitle } from "@/components/ui/card"
const HowItWorks = () => {
  return (
    <div className='flex flex-col items-center justify-start w-full p-4 md:p-8 gap-8'>
      <div className='relative w-full flex flex-col items-center justify-center gap-4  '>
        <div className='absolute top-0 left-0 w-full h-full bg-black/40 dark:bg-black/10 rounded-lg'></div>
        <div className='absolute top-20 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary-foreground  z-10 flex flex-col items-center justify-center gap-4'>
          <h2 className='lg:text-4xl text-2xl font-bold '>Jak to działa?</h2>
          <p className='lg:text-2xl text-lg text-center text-primary-foreground max-w-[300px] md:max-w-[500px] mx-auto'>
            Uzyskaj wysokiej jakości opiekę zdrowotną w czterech prostych
            krokach.
          </p>
        </div>

        <Image
          src='/how-it-works-hero-1080x720.jpg'
          alt='How it works'
          width={1080}
          height={720}
          priority
          className='w-full h-[500px] object-cover rounded-lg'
        />
      </div>

      <h2 className='lg:text-4xl text-2xl font-bold '>
        Twoja podróż do lepszego zdrowia
      </h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {stepsData.map((step) => (
          <Card key={step.id} className='flex flex-col items-center justify-between gap-4 p-4'>
            <div className='w-20 h-20 flex items-center justify-center gap-2 mx-auto mb-6'>
            <span className="text-2xl font-bold text-primary">{step.id}.</span>
              <span className='text-2xl font-bold text-primary bg-primary/10 rounded-full p-2'>
                {step.icon}
              </span>
            </div>
            <CardTitle className='text-xl font-semibold mb-3'>{step.title}</CardTitle>
            <CardDescription >{step.description}</CardDescription>
            <CardFooter>
            <Image
              src={step.image}
              alt={step.title}
              width={612}
              height={408}
              className='w-full h-full object-cover rounded-lg'
            />
          </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default HowItWorks
