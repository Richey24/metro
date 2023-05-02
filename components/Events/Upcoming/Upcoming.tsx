import React, { FC, useState } from "react"
import searchImage from "../../../images/search.png"
import calender from "../../../images/calender.png"
import Image from "next/image"
import location from "../../../images/location.png"
import eventData from "@/data/event-data"

const Upcoming: FC<any> = () => {

    const [events, setEvents] = useState(eventData)

    const changeToDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.type = "date"
        document.getElementById("calenderImage")!.style.display = "none"
    }

    const backToText = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === "") {
            e.target.type = "text"
            document.getElementById("calenderImage")!.style.display = "block"
        }
    }

    const searchEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value
        const filterArr = eventData.filter((ev) => `${ev.title} ${ev.address} ${ev.description}`.toLowerCase().includes(val.toLowerCase()))
        setEvents(filterArr)
    }

    return (
        <div className="md:px-32 px-8">
            <div className="flex gap-2">
                <div className="flex px-5 items-center w-[80%] h-[54px] bg-white">
                    <input onChange={searchEvent} placeholder="Search upcoming events" className="w-[100%] h-[100%] outline-0 placeholder:text-mission" type="text" />
                    <Image className="w-[25px] h-[25px]" src={searchImage} alt="search image" />
                </div>
                <div className="flex items-center w-[20%] h-[54px] bg-white">
                    <input placeholder="Filter dates" className="w-[100%] h-[100%] outline-0 px-2 placeholder:text-mission" type="text" onBlur={backToText} onFocus={changeToDate} />
                    <Image id="calenderImage" className="w-[20px] h-[20px] mr-2" src={calender} alt="calender" />
                </div>
            </div>
            <h3 className="text-[22px] md:text-[30px] font-bold text-nav font-oswald md:border-b-2 border-b-nav mt-8 mb-2 md:mb-2 w-12 whitespace-nowrap">Upcoming</h3>
            <div className="flex flex-wrap mt-7 gap-y-6 gap-x-5 justify-start">
                {
                    events.map((ev, i) => (
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

export default Upcoming