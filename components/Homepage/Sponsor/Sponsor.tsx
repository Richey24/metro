import Image from "next/image"
import { FC } from "react"
import firstBrand from "../../../images/automobile.png"
import secondBrand from "../../../images/beauty.png"
import thirdBrand from "../../../images/travel.png"
import fourthBrand from "../../../images/airline.jpg"

const Sponsor: FC<any> = () => {
    return (
        <div className="mt-10 px-9 md:px-0">
            <h1 className="text-[35px] md:ml-[100px] font-bold leading-tight text-nav font-oswald md:border-b-2 md:border-b-nav md:w-14 text-center whitespace-nowrap">Our Sponsors</h1>
            <p className="text-[14px] md:ml-[100px] font-oswald text-mission mt-[26px] text-center md:text-left">Our sponsors provide us vital support and resources that enable us to deliver high-quality programs and services to our community.</p>
            <div className="flex flex-col items-center md:flex-row justify-center gap-10 md:gap-32 mt-14">
                <Image className="w-[100px] h-[100px]" src={firstBrand} alt="first brand" />
                <Image className="w-[100px] h-[100px]" src={secondBrand} alt="second brand" />
                <Image className="w-[100px] h-[100px]" src={thirdBrand} alt="third brand" />
                <Image className="w-[100px] h-[100px]" src={fourthBrand} alt="fourth brand" />
            </div>
            <div className="flex justify-center mt-[50px] pb-14">
                <button className="md:w-[250px] w-[200px] h-[50px] text-nav border-2 border-nav rounded md:text-[20px] text-[16px] font-bold">+ Partner with us</button>
            </div>
        </div>
    )
}

export default Sponsor