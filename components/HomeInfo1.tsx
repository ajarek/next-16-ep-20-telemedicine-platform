import Image from 'next/image'


const HomeInfo1 = () => {
  return (
    <section className='w-full flex flex-col items-center gap-8'>
        <div className='flex flex-col items-center gap-4'>
            <h2 className='text-4xl font-bold text-center'>Uzyskaj dostęp do lekarza z dowolnego miejsca</h2>
            <p className='text-xl text-center'>Wysokiej jakości wideokonsultacje z doświadczonymi pracownikami służby zdrowia.</p>
        </div>
        <div className='w-full flex items-center justify-center'>
            <Image
                src='/home-doctor-2-612x323.jpg'
                alt='Home Doktor'
                width={1224}
                height={646}
                className='rounded-2xl'
            />
        </div>
    </section>
  )
}

export default HomeInfo1