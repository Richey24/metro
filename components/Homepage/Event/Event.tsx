import { FC } from "react"
import warrior from "../../../images/warrior.jpg"
import anvilx from "../../../images/anvilx.jpeg"
import cow from "../../../images/cow.jpg"
import calender from "../../../images/calender.png"
import location from "../../../images/location.png"
import Image from "next/image"

const Event: FC<any> = () => {
    return (
        <div className="w-full bg-event p-[32px] md:p-[60px]">
            <div className="flex flex-col justify-center items-center">
                <h1 className="md:text-[35px] text-[28px] font-bold leading-tight text-nav font-oswald pb-[10px]">Upcoming Events</h1>
                <div className="hidden md:block w-[50px] h-[1.8px] bg-nav"></div>
            </div>
            <div className="w-full flex flex-wrap md:flex-nowrap gap-6 justify-between md:px-[60px] mt-[40px]">
                <div className="md:w-[33%] h-[520px] md:h-[470px] bg-white">
                    <Image className="w-full h-[45%]" src={warrior} alt="anchor" />
                    <div className="px-[32px] py-[24px]">
                        <p className="text-donate flex gap-2 font-bold items-center"><Image className="w-4 h-4 mb-1" src={calender} alt="calender" /> March 24, 2023</p>
                        <h1 className="text-[24px] font-bold mb-[5px] text-nav font-oswald">Life Skills Workshop</h1>
                        <p className="text-nav text-[14px] flex gap-2 font-bold items-center"><Image className="w-4 h-4 mb-1" src={location} alt="calender" /> MYDC, Suite 105</p>
                        <p className="text-[14px] md:text-[12px] mt-[10px] font-oswald text-mission">Join our interactive life skills workshop to develop essential tools for effective communication, decision-making, time management, and stress reduction.</p>
                        <button className="bg-donate w-full mt-4 h-12 text-sm font-semibold text-white font-oswald rounded">Register</button>
                    </div>
                </div>
                <div className="md:w-[33%] h-[520px] md:h-[470px] bg-white">
                    <Image className="w-full h-[45%]" src={anvilx} alt="key" />
                    <div className="px-[32px] py-[24px]">
                        <p className="text-donate flex gap-2 font-bold items-center"><Image className="w-4 h-4 mb-1" src={calender} alt="calender" /> April 3, 2023</p>
                        <h1 className="text-[24px] font-bold mb-[5px] text-nav font-oswald">Basketball Youth</h1>
                        <p className="text-nav text-[14px] flex gap-2 font-bold items-center"><Image className="w-4 h-4 mb-1" src={location} alt="calender" /> Community Hub Gym</p>
                        <p className="text-[14px] md:text-[12px] mt-[10px] font-oswald text-mission">Join our interactive life skills workshop to develop essential tools for effective communication, decision-making, time management, and stress reduction.</p>
                        <button className="bg-donate w-full mt-4 h-12 text-sm font-semibold text-white font-oswald rounded">Register</button>
                    </div>
                </div>
                <div className="md:w-[33%] h-[520px] md:h-[470px] bg-white">
                    <Image className="w-full h-[45%]" src={cow} alt="padlock" />
                    <div className="px-[32px] py-[24px]">
                        <p className="text-donate flex gap-2 font-bold items-center"><Image className="w-4 h-4 mb-1" src={calender} alt="calender" /> April 12, 2023</p>
                        <h1 className="text-[24px] font-bold mb-[5px] text-nav font-oswald">Talk: Imam Ahmad</h1>
                        <p className="text-nav text-[14px] flex gap-2 font-bold items-center"><Image className="w-4 h-4 mb-1" src={location} alt="calender" /> MYDC, Suite 105</p>
                        <p className="text-[14px] md:text-[12px] mt-[10px] font-oswald text-mission">Join our interactive life skills workshop to develop essential tools for effective communication, decision-making, time management, and stress reduction.</p>
                        <button className="bg-donate w-full mt-4 h-12 text-sm font-semibold text-white font-oswald rounded">Register</button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <button className="bg-nav w-[250px] mt-12 h-12 text-sm font-semibold text-white font-oswald rounded">View events calendar</button>
            </div>
        </div>
    )
}

export default Event