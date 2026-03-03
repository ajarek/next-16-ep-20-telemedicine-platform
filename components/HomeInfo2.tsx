import {HomeInfo2Data} from '@/data/homeInfo2Data'
import {Card, CardDescription, CardTitle} from '@/components/ui/card'

const HomeInfo2 = () => {
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:p-4 bg-'>
        {HomeInfo2Data.map((item) => (
            <Card key={item.title} className='w-full md:max-w-sm lg:max-w-none mx-auto flex flex-col items-center gap-4 border-2 border-primary py-8 '>
                <div className='flex items-center gap-4'>{item.icon}</div>
                <CardTitle className='text-xl font-bold'>{item.title}</CardTitle>
                <CardDescription className='text-center'>{item.description}</CardDescription>
            </Card>
        ))}
        
    </div>
  )
}

export default HomeInfo2
