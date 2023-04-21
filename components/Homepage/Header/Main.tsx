import Image from "next/image"
import { FC } from "react"
import jewelry from "../../../images/jewelry.jpg"

const Main: FC<any> = () => {
    return (
        <div className="flex items-center gap-20 mt-24 pb-[100px]">
            <div className="w-1/2">
                <h3 className="text-[30px] font-bold text-nav font-oswald border-b-2 border-b-nav mb-2 w-12 whitespace-nowrap">Metro Youth Diversion Center</h3>
                <h1 className="w-[470px] text-[45px] font-bold leading-tight text-nav font-oswald">Empowering Youth for a <span className="text-brighter">Brighter Future</span></h1>
                <p className="text-[12px] font-oswald text-mission mt-2">Our Mission is to create a partnership with youth, families, youth service providers and community stakeholders for the advancement and well-being of our youth as productive and contributing citizens of the community.</p>
                <div className="flex gap-4 mt-4">
                    <button className="bg-nav w-[192px] h-12 text-sm font-semibold text-white font-oswald rounded">Our Programs</button>
                    <button className="bg-donate w-32 h-12 text-sm font-semibold text-white font-oswald rounded">Donate</button>
                </div>
            </div>
            <div className="flex flex-col items-end justify-end">
                <Image className="shrink-0 h-[425px]" src={jewelry} alt="" width={706} />
                <div className="w-[540px] h-[22px] mt-[-12px] bg-nav"></div>
            </div>
        </div>
    )
}

export default Main