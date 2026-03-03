import HomeHeader from "@/components/HomeHeader"
import HomeInfo1 from "@/components/HomeInfo1"
import HomeInfo2 from "@/components/HomeInfo2"
import HomeInfo3 from "@/components/HomeInfo3"

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-start w-full p-4 md:p-8 gap-8'>
      <HomeHeader />
      <HomeInfo1 />
      <HomeInfo2 />
      <HomeInfo3 />
    </div>
  )
}
