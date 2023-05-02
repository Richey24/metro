import Image from "next/image"
import { FC } from "react"
import calender from "../../../images/calender.png"
import location from "../../../images/location.png"
import eventData from "@/data/event-data"

const Past: FC<any> = () => {
    return (
        <div className="md:px-32 px-8 bg-past pt-6 mt-8 pb-20">
            <h3 className="text-[22px] md:text-[30px] font-bold text-nav font-oswald md:border-b-2 border-b-nav mt-8 mb-2 md:mb-2 w-12 whitespace-nowrap">Past Events</h3>
            <div className="flex flex-wrap mt-7 gap-y-6 justify-between">
                {
                    eventData.slice(0, 3).map((ev, i) => (
                        <div key={i} className="md:w-[32%] h-[520px] md:h-[470px] bg-white">
                            <Image className="w-full h-[45%]" src={ev.image} alt="anchor" />
                            <div className="px-[32px] py-[24px]">
                                <p className="text-donate flex gap-2 font-bold items-center"><Image className="w-4 h-4 mb-1" src={calender} alt="calender" />{ev.date}</p>
                                <h1 className="text-[24px] font-bold mb-[5px] text-nav font-oswald">{ev.title}</h1>
                                <p className="text-nav text-[14px] flex gap-2 font-bold items-center"><Image className="w-4 h-4 mb-1" src={location} alt="calender" />{ev.address}</p>
                                <p className="text-[14px] md:text-[12px] mt-[10px] font-oswald text-mission">{ev.description}</p>
                                <button className="bg-donate w-full mt-4 h-12 text-sm font-semibold text-white font-oswald rounded">Register</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="flex justify-center">
                <button className="bg-nav w-[250px] mt-16 h-12 text-sm font-semibold text-white font-oswald rounded">Load More</button>
            </div>
        </div>
    )
}

export default Past