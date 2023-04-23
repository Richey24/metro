import Image from "next/image"
import { FC } from "react"
import left from "../../../images/left.png"
import right from "../../../images/right.png"

const Testimony: FC<any> = () => {
    return (
        <div className="w-11/12 bg-white mx-auto rounded-t px-14 md:px-20  py-10 md:pt-16 md:pb-32">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-[35px] font-bold leading-tight text-nav font-oswald pb-[10px]">Testimonials</h1>
                <div className="hidden md:block w-[50px] h-[1.8px] bg-nav"></div>
            </div>
            <div className="flex justify-center items-center gap-[20%] mt-11">
                <Image className="hidden md:block w-[30px] h-[30px] cursor-pointer" src={left} alt="left" />
                <p className="text-[16px] md:w-[53%] font-oswald text-testimony text-center">{'"The youth diversion center has been a lifesaver for me. When I was struggling with addiction and making poor choices, they provided me with the resources and support I needed to turn my life around. The staff were always understanding and encouraging, and helped me see that I had the potential to achieve great things. Thanks to their guidance, I am now on a path towards success and have a much brighter future ahead."'}</p>
                <Image className="hidden md:block w-[30px] h-[30px] cursor-pointer" src={right} alt="right" />
            </div>
            <div className="md:hidden flex gap-2 justify-center mt-5">
                <div className="w-2 h-2 bg-donate rounded-full"></div>
                <div className="w-2 h-2 border-[1px] border-donate rounded-full"></div>
                <div className="w-2 h-2 border-[1px] border-donate rounded-full"></div>
            </div>
            <div className="flex justify-center">
                <button className="bg-nav w-[250px] mt-14 h-12 text-sm font-semibold text-white font-oswald rounded">See more testimonials</button>
            </div>
        </div>
    )
}

export default Testimony