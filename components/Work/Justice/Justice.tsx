import Image from "next/image"
import { FC } from "react"
import knight from "../../../images/warrior.jpg"
import firstBrand from "../../../images/automobile.png"
import secondBrand from "../../../images/beauty.png"

const Justice: FC<any> = () => {
    return (
        <div className="flex items-center bg-pillar pt-12 gap-[40px] pl-[130px] pb-[70px]">
            <div className="w-[50%]">
                <h3 className="text-[22px] md:text-[30px] font-bold text-nav font-oswald md:border-b-2 border-b-nav mb-2 md:mb-2 w-12 whitespace-nowrap">Restorative Justice Circles</h3>
                <div className="flex gap-24 m-10">
                    <div className="text-center">
                        <h2 className="text-[50px] font-bold text-nav">32</h2>
                        <p className="text-[20px] font-bold text-nav">Individual</p>
                    </div>
                    <div className="text-center">
                        <h2 className="text-[50px] font-bold text-nav">8</h2>
                        <p className="text-[20px] font-bold text-nav">Volunteer</p>
                    </div>
                    <div className="text-center">
                        <h2 className="text-[50px] font-bold text-nav">96</h2>
                        <p className="text-[20px] font-bold text-nav">Hours</p>
                    </div>
                </div>
                <p className="text-[14px] font-oswald text-mission mb-4">At our youth diversion center, we understand that many young people who come to us have been involved in negative behaviors or have caused harm to others.Our restorative justice circle program offers a unique and effective way to address these behaviors and repair harm caused to others.</p>
                <p className="text-[14px] font-oswald text-mission mb-4">Restorative justice circles are a facilitated process that brings together those who have been harmed by an action or behavior with those who have caused the harm.The circle provides a safe space for all parties to share their perspectives and feelings in a structured and respectful way.</p>
                <p className="text-[14px] font-oswald text-mission mb-4">Our restorative justice circle program also provides an opportunity for those who have been harmed to feel heard and supported.They are able to express their feelings and thoughts in a safe and non - judgmental environment and often come away from the experience with a sense of closure and healing.</p>
                <p className="text-[14px] font-oswald text-mission">Overall, our restorative justice circle program is a vital part of our approach to working with at - risk youth.By helping young people take responsibility for their actions and repair harm caused to others, we are not only improving individual lives but also strengthening our communities.</p>
            </div>
            <div className="w-[50%]">
                <div className="w-full h-[350px] bg-donate"></div>
                <div className="w-[70%] h-[550px] relative mt-[-300px] bg-white shadow-3xl ml-[50px]">
                    <Image className="w-[100%] h-[350px]" src={knight} alt="warrior" />
                    <div className="flex flex-col justify-center items-center mt-8">
                        <h1 className="text-[32px] md:text-[25px] font-bold leading-tight text-nav font-oswald pb-[10px]">Partnering Organizations</h1>
                        <div className="hidden md:block w-[40px] h-[1.5px] bg-nav"></div>
                    </div>
                    <div className="flex justify-center gap-6 mt-5">
                        <Image className="w-[70px] h-[70px]" src={firstBrand} alt="firstBrand" />
                        <Image className="w-[70px] h-[70px]" src={secondBrand} alt="secondBrand" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Justice