import { FC } from "react"

const Main: FC<any> = () => {
    return (
        <div className="mt-[40px] md:mt-[80px] md:pb-[40px]">
            <h3 className="text-[22px] md:text-[30px] font-bold text-nav font-oswald md:border-b-2 border-b-nav mb-2 md:mb-2 w-12 whitespace-nowrap">Our Work</h3>
            <p className="text-[14px] md:w-[760px] font-oswald text-mission mt-4 md:mt-8">Here you can view our previous programs and initiatives designed to support at-risk youth. Learn about our mentoring program, educational support, counseling, job training, and community outreach services aimed at addressing the underlying issues that can lead to criminal behavior.</p>
        </div>
    )
}

export default Main