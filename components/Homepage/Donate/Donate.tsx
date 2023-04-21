import { FC } from "react"
import bridge from "../../../images/bridge.jpeg"
import Image from "next/image"

const Donate: FC<any> = () => {
    return (
        <div className="w-full h-[350px] bg-donate pl-[150px]">
            <div className="flex">
                <div className="pt-[45px]">
                    <h3 className="text-[30px] font-bold text-white font-oswald border-b-2 border-b-white mb-2 w-12 whitespace-nowrap pb-4">Make a Donation</h3>
                    <p className="text-[12px] font-oswald text-white mt-6 w-[90%]">By supporting our diversion center for youth, you can make a significant difference in the lives of young people who are facing challenges such as substance abuse, mental health issues, and delinquent behaviors. Your contribution can help provide the resources and support needed to guide these youth towards a brighter future, while also promoting safer communities and a more promising tomorrow.</p>
                    <button className="bg-nav w-[200px] h-12 text-sm font-semibold mt-12 text-white font-oswald rounded">Donate</button>
                </div>
                <Image className="w-[520px] h-[390px] rounded mt-[-22px]" src={bridge} alt="bridge" />
            </div>
        </div>
    )
}

export default Donate