import { FC } from "react"
import goat from "../../../images/goat.jpg"
import dragon from "../../../images/dragon.png"
import Image from "next/image"

const News: FC<any> = () => {
    return (
        <div className="w-full py-12 md:py-[60px] px-8 md:px-[100px]">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-[35px] font-bold leading-tight text-nav font-oswald pb-[10px]">News</h1>
                <div className="hidden md:block w-[50px] h-[1.8px] bg-nav"></div>
            </div>
            <div className="flex flex-wrap md:flex-nowrap gap-6 mt-10 md:mt-20">
                <div className="h-[200px] md:h-[220px] w-[100%] bg-white flex gap-6 px-4 md:px-0 md:pr-8">
                    <Image className="hidden md:block w-[40%] h-[100%]" src={goat} alt="goat" />
                    <div>
                        <h1 className="text-[22px] font-bold mb-[5px] text-nav mt-5 font-oswald">Providing Safe Haven for At-Risk Teens</h1>
                        <p className="text-nav font-bold">written by Randa</p>
                        <p className="text-[12px] font-oswald text-mission">published on May 29, 2022</p>
                        <button className="bg-nav w-[100%] mt-4 h-8 md:h-12 text-sm font-semibold text-white font-oswald rounded">Read More</button>
                    </div>
                </div>
                <div className="h-[200px] md:h-[220px] w-[100%] bg-white flex gap-6 px-4 md:px-0 md:pr-8">
                    <Image className="hidden md:block w-[40%] h-[100%]" src={dragon} alt="goat" />
                    <div>
                        <h1 className="text-[22px] font-bold mb-[5px] text-nav mt-5 font-oswald">The Power of Play: Empowering Young People</h1>
                        <p className="text-nav font-bold">written by Labib</p>
                        <p className="text-[12px] font-oswald text-mission">published on April 3, 2022</p>
                        <button className="bg-nav w-[100%] mt-4 h-8 md:h-12 text-sm font-semibold text-white font-oswald rounded">Read More</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap md:flex-nowrap gap-6 mt-10">
                <div className="h-[200px] md:h-[220px] w-[100%] bg-white flex gap-6 px-4 md:px-0 md:pr-8">
                    <Image className="hidden md:block w-[40%] h-[100%]" src={goat} alt="goat" />
                    <div>
                        <h1 className="text-[22px] font-bold mb-[5px] text-nav mt-5 font-oswald">Inspiring Programs at Diversions Youth Center</h1>
                        <p className="text-nav font-bold">written by Aida</p>
                        <p className="text-[12px] font-oswald text-mission">published on May 29, 2022</p>
                        <button className="bg-nav w-[100%] mt-4 h-8 md:h-12 text-sm font-semibold text-white font-oswald rounded">Read More</button>
                    </div>
                </div>
                <div className="h-[200px] md:h-[220px] w-[100%] bg-white flex gap-6 px-4 md:px-0 md:pr-8">
                    <Image className="hidden md:block w-[40%] h-[100%]" src={dragon} alt="goat" />
                    <div>
                        <h1 className="text-[22px] font-bold mb-[5px] text-nav mt-5 font-oswald">Diversions Youth Centers Impact on Local Teens</h1>
                        <p className="text-nav font-bold">written by Mohammed Bakar</p>
                        <p className="text-[12px] font-oswald text-mission">published on May 29, 2022</p>
                        <button className="bg-nav w-[100%] mt-4 h-8 md:h-12 text-sm font-semibold text-white font-oswald rounded">Read More</button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <button className="bg-donate w-[250px] mt-10 h-12 text-sm font-semibold text-white font-oswald rounded">View more news</button>
            </div>
        </div>
    )
}

export default News