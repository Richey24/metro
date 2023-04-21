import { FC } from "react"
import goat from "../../../images/goat.jpg"
import dragon from "../../../images/dragon.png"
import Image from "next/image"

const News: FC<any> = () => {
    return (
        <div className="w-full py-[60px] px-[100px]">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-[35px] font-bold leading-tight text-nav font-oswald pb-[10px]">News</h1>
                <div className="w-[50px] h-[1.8px] bg-nav"></div>
            </div>
            <div className="flex gap-6 mt-20">
                <div className="h-[230px] w-[100%] bg-white flex gap-6 pr-8">
                    <Image className="w-[40%] h-[100%]" src={goat} alt="goat" />
                    <div>
                        <h1 className="text-[22px] font-bold mb-[5px] text-nav mt-5 font-oswald">Providing Safe Haven for At-Risk Teens</h1>
                        <p className="text-nav font-bold">written by Randa</p>
                    </div>
                </div>
                <div className="h-[230px] w-[100%] bg-white flex gap-6 pr-8">
                    <Image className="w-[40%] h-[100%]" src={dragon} alt="goat" />
                    <div>
                        <h1 className="text-[22px] font-bold mb-[5px] text-nav mt-5 font-oswald">The Power of Play: Empowering Young People</h1>
                        <p className="text-nav font-bold">written by Labib</p>
                    </div>
                </div>
            </div>
            <div className="flex gap-6 mt-10">
                <div className="h-[230px] w-[100%] bg-white flex gap-6 pr-8">
                    <Image className="w-[40%] h-[100%]" src={goat} alt="goat" />
                    <div>
                        <h1 className="text-[22px] font-bold mb-[5px] text-nav mt-5 font-oswald">Inspiring Programs at Diversions Youth Center</h1>
                        <p className="text-nav font-bold">written by Aida</p>
                    </div>
                </div>
                <div className="h-[230px] w-[100%] bg-white flex gap-6 pr-8">
                    <Image className="w-[40%] h-[100%]" src={dragon} alt="goat" />
                    <div>
                        <h1 className="text-[22px] font-bold mb-[5px] text-nav mt-5 font-oswald">Diversions Youth Centers Impact on Local Teens</h1>
                        <p className="text-nav font-bold">written by Mohammed Bakar</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News