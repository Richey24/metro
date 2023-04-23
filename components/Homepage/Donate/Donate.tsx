import { FC } from "react"
import bridge from "../../../images/bridge.jpeg"
import Image from "next/image"

const Donate: FC<any> = () => {
    return (
        <div className="w-full h-[365px] md:h-[350px] bg-donate px-16 md:px-0 md:pl-[150px]">
            <div className="flex">
                <div className="pt-8 md:pt-[45px]">
                    <h3 className="text-[30px] font-bold text-white font-oswald md:border-b-2 md:border-b-white mb-2 md:w-12 whitespace-nowrap pb-4 text-center">Make a Donation</h3>
                    <p className="text-[12px] font-oswald text-white md:mt-6 md:w-[90%] text-center md:text-left">By supporting our diversion center for youth, you can make a significant difference in the lives of young people who are facing challenges such as substance abuse, mental health issues, and delinquent behaviors. Your contribution can help provide the resources and support needed to guide these youth towards a brighter future, while also promoting safer communities and a more promising tomorrow.</p>
                    <div className="flex justify-center md:justify-start">
                        <button className="bg-nav w-[200px] h-12 text-sm font-semibold mt-8 md:mt-12 text-white font-oswald rounded">Donate</button>
                    </div>
                </div>
                <Image className="hidden md:block w-[520px] h-[390px] rounded mt-[-22px]" src={bridge} alt="bridge" />
            </div>
        </div>
    )
}

export default Donate