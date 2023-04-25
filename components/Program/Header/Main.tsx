import { FC } from "react"

const Main: FC<any> = () => {
    return (
        <div className="mt-[40px] md:mt-[80px] md:pb-[40px]">
            <h3 className="text-[22px] md:text-[30px] font-bold text-nav font-oswald md:border-b-2 border-b-nav mb-2 md:mb-2 w-12 whitespace-nowrap">Our Programs</h3>
            <p className="text-[14px] md:w-[760px] font-oswald text-mission mt-4 md:mt-8">We’re engaged in youth delinquency prevention. We offer both preventative workshops, intervention post charge and pre-charge. We recently established an online community service program for youth that have court mandates.</p>
        </div>
    )
}

export default Main