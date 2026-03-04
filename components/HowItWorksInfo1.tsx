import { GraduationCap, Lock, ShieldCheck } from "lucide-react"

const HowItWorksInfo1 = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-8 py-8'>
      <h1 className='text-2xl font-bold'>
        Bezpieczny, Chroniony, Certyfikowany
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <p className='flex items-center gap-2 text-xl'>
          <ShieldCheck className='size-8 text-primary' />
          Zgodny z RODO
        </p>
        <p className='flex items-center gap-2 text-xl'>
          <Lock className='size-8 text-primary' />
          256-bitowe szyfrowanie
        </p>
        <p className='flex items-center gap-2 text-xl'>
          <GraduationCap className='size-8 text-primary' />
          Lekarze z certyfikatem
        </p>
      </div>
    </div>
  )
}

export default HowItWorksInfo1
