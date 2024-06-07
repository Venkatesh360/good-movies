import logo from  "@/app/public/MOVIES.svg"
import Image from "next/image"


export default function Icon() {
  return (
    <div>
      <Image src={logo} width={100} height={20} alt="logo" className="text-white" />
    </div>
  )
}
