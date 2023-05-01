import Image from "next/image"
import { FC } from "react"
import bridge from "../../../images/bridge.jpeg"
import Link from "next/link"


const Vision: FC<any> = () => {
    return (
        <div className="w-full h-full md:h-[420px] bg-nav px-[16px] md:pl-[150px] md:pr-24 pb-10 md:pb-0 flex items-center">
            <div className="flex gap-20">
                <Image className="hidden md:block w-[520px] h-[340px] rounded-tl-[50px] rounded-br-[50px]" src={bridge} alt="bridge" />
                <div className="pt-8 md:pt-[30px]">
                    <h3 className="text-[30px] font-bold text-white font-oswald md:border-b-2 md:border-b-white mb-2 md:w-12 whitespace-nowrap pb-4 text-center">Our Vision</h3>
                    <p className="text-[12px] font-oswald text-white md:mt-6 md:w-[90%] text-center md:text-left">Metro Youth Diversion Center (MYDC) was officially established in the Twin Cities in June of 2018; however, our organization’s history far precedes this milestone year. Our story began as far back as early 2013 when we conceptualized it originally as a youth development program tailored to the East African community in San Diego, California. We created and refined it as a culturally responsive youth diversion and prevention program. In 2018, we assessed the needs of the East African community in the Twin Cities area and decided to launch our program with this official name.</p>
                    <div className="flex gap-4 justify-center md:justify-start">
                        <button className="bg-volunteer md:w-[200px] w-[150px] h-12 text-sm font-semibold mt-8 text-white font-oswald rounded"><Link href="/program">Our Program</Link> </button>
                        <button className="bg-donate ms:w-[200px] w-[150px] h-12 text-sm font-semibold mt-8 text-white font-oswald rounded"><Link href="/work">Our Work</Link> </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vision