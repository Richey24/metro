import Image from "next/image"
import { FC } from "react"
import knight from "../../../images/warrior.jpg"
import firstBrand from "../../../images/automobile.png"
import secondBrand from "../../../images/beauty.png"

const Job: FC<any> = () => {
    return (
        <div className="flex items-center bg-pillar pt-12 gap-[40px]">
            <div className="w-[50%]">
                <div className="w-[70%] h-[550px] relative bg-white ml-[150px]">
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
                <div className="w-full h-[350px] bg-nav mt-[-300px]"></div>
            </div>
            <div className="w-[50%]">
                <h3 className="text-[22px] md:text-[30px] font-bold text-nav font-oswald md:border-b-2 border-b-nav mb-2 md:mb-2 w-12 whitespace-nowrap">Job Training & Internship Initiative</h3>
                <div className="flex gap-24 m-10">
                    <div className="text-center">
                        <h2 className="text-[50px] font-bold text-nav">42</h2>
                        <p className="text-[20px] font-bold text-nav">Individual</p>
                    </div>
                    <div className="text-center">
                        <h2 className="text-[50px] font-bold text-nav">10</h2>
                        <p className="text-[20px] font-bold text-nav">Volunteer</p>
                    </div>
                    <div className="text-center">
                        <h2 className="text-[50px] font-bold text-nav">80</h2>
                        <p className="text-[20px] font-bold text-nav">Hours</p>
                    </div>
                </div>
                <p className="text-[14px] font-oswald text-mission mb-4">At our youth diversion center, we recognize that one of the biggest challenges facing at-risk youth is the lack of job opportunities and job skills training. {"That's"} why we have made it a priority to offer a comprehensive job training and internship program that equips young people with the skills they need to succeed in the workforce.</p>
                <p className="text-[14px] font-oswald text-mission mb-4">Our program provides a range of services, including job readiness training, career counseling, and hands-on job experience through internships and apprenticeships. We partner with local businesses and organizations to provide opportunities for our youth to gain real-world experience in a variety of fields, including healthcare, technology, hospitality, and more.</p>
                <p className="text-[14px] font-oswald text-mission mb-4">Through our program, we have seen young people gain confidence and a sense of purpose as they develop their skills and explore their interests. Many of our program participants have gone on to secure full-time employment or enroll in further education and training programs.</p>
                <p className="text-[14px] font-oswald text-mission">We are committed to providing ongoing support to our program participants to ensure their success and to help break the cycle of poverty and criminal behavior that often affects at-risk youth.</p>
            </div>
        </div>
    )
}

export default Job