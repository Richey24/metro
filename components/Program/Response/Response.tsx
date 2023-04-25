import { FC } from "react"
import dog from "../../../images/dog.jpg"
import Image from "next/image"

const Response: FC<any> = () => {
    return (
        <div className="px-4 md:px-32 py-8 md:py-[80px] flex flex-wrap md:flex-nowrap gap-y-4 gap-x-[100px] items-start bg-white">
            <Image className="w-[500px] h-[400px]" src={dog} alt="dog" />
            <div>
                <div className="flex items-end md:items-center gap-3 md:ml-[-47px]">
                    <span className="text-[60px] text-donate">+</span>
                    <h3 className="text-[22px] md:text-[30px] font-bold text-nav font-oswald md:border-b-2 border-b-nav mb-8 md:mb-2 w-12 whitespace-nowrap">Opiod response</h3>
                </div>
                <p className="text-[14px] font-oswald text-mission md:mt-[-10px]">Diversions Youth {"Center's"} opioid response program is a vital resource for the community. The program offers support, education, and resources for young people who are struggling with opioid addiction. Through a combination of counseling, therapy, and peer support, participants learn the skills and tools they need to overcome addiction and build a brighter future. The program also provides education and resources for families and loved ones, helping to strengthen the support network around each participant. With a compassionate and holistic approach, Diversions Youth {"Center's"} opioid response program is making a real difference in the lives of young people and families affected by opioid addiction.</p>
                <button className="bg-nav w-32 md:w-[192px] h-12 text-sm font-semibold text-white font-oswald rounded mt-4">Learn More</button>
            </div>
        </div>
    )
}

export default Response