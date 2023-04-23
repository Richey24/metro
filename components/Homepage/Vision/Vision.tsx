import Image from "next/image"
import house from '../../../images/house.jpg'
import { FC } from "react"

const Vision: FC<any> = () => {
    return (
        <div className="flex w-full md:h-[350px] pb-5">
            <Image className="hidden md:block w-[40%]" src={house} alt="house" />
            <div className="md:w-[60%] w-full h-[100%] bg-nav p-[55px]">
                <h1 className="text-[35px] font-bold leading-tight text-white text-center font-oswald pb-[10px]">Our Vision</h1>
                <p className="text-[12px] font-oswald text-white text-center mt-[26px]">Our vision is to decrease the number of youths entering the juvenile justice system and find alternative solutions to incarceration.</p>
                <div className="flex md:flex-row flex-col justify-between mt-12">
                    <div className="md:w-[30%]">
                        <h1 className="text-[35px] font-bold leading-tight text-white text-center font-oswald pb-[10px]">48,000</h1>
                        <p className="text-[12px] font-oswald text-white text-center md:mt-[26px]">U.S. Children in Juvenile Detention</p>
                    </div>
                    <div className="md:w-[33%] w-7 flex flex-col justify-center items-center mx-auto my-6 py-6 md:my-0 md:py-0 md:border-x-2 border-y-2 border-y-white md:border-x-white md:border-y-0">
                        <h1 className="text-[35px] font-bold leading-tight text-white text-center font-oswald pb-[10px]">150</h1>
                        <p className="text-[12px] font-oswald text-white text-center md:mt-[26px] whitespace-nowrap">Individuals Helped</p>
                    </div>
                    <div className="md:w-[23%]">
                        <h1 className="text-[35px] font-bold leading-tight text-white text-center font-oswald pb-[10px]">58</h1>
                        <p className="text-[12px] font-oswald text-white text-center md:mt-[26px]">Volunteers</p>
                    </div>
                </div>
                <div className="md:hidden flex justify-center">
                    <button className="bg-donate w-[180px] mt-12 h-12 text-sm font-semibold text-white font-oswald rounded">Become a volunteer</button>
                </div>
            </div>
        </div>
    )
}

export default Vision