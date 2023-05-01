import { FC } from "react"
import firstBrand from "../../../images/automobile.png"
import secondBrand from "../../../images/beauty.png"
import thirdBrand from "../../../images/travel.png"
import fourthBrand from "../../../images/airline.jpg"
import Image from "next/image"

const Sponsor: FC<any> = () => {
    return (
        <div className="bg-event py-14 px-9 md:px-0">
            <div className="flex flex-col justify-center items-center">
                <h1 className="md:text-[35px] text-[28px] font-bold leading-tight text-nav font-oswald pb-[10px]">Our Sponsors</h1>
                <div className="hidden md:block w-[50px] h-[1.8px] bg-nav"></div>
            </div>
            <p className="text-[14px] md:ml-[100px] font-oswald text-mission mt-[26px] text-center">Our sponsors provide us vital support and resources that enable us to deliver high-quality programs and services to our community.</p>
            <div className="flex flex-col items-center md:flex-row justify-center gap-10 md:gap-32 mt-14">
                <Image className="w-[100px] h-[100px]" src={firstBrand} alt="first brand" />
                <Image className="w-[100px] h-[100px]" src={secondBrand} alt="second brand" />
                <Image className="w-[100px] h-[100px]" src={thirdBrand} alt="third brand" />
                <Image className="w-[100px] h-[100px]" src={fourthBrand} alt="fourth brand" />
            </div>
        </div>
    )
}

export default Sponsor