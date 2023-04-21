import Image from "next/image"
import house from '../../../images/house.jpg'
import { FC } from "react"

const Vision: FC<any> = () => {
    return (
        <div className="flex w-full h-[350px] pb-5">
            <Image className="w-[40%]" src={house} alt="house" />
            <div className="w-[60%] h-[100%] bg-nav p-[55px]">
                <h1 className="text-[35px] font-bold leading-tight text-white text-center font-oswald pb-[10px]">Our Vision</h1>
                <p className="text-[12px] font-oswald text-white text-center mt-[26px]">Our vision is to decrease the number of youths entering the juvenile justice system and find alternative solutions to incarceration.</p>
                <div className="flex justify-between mt-12">
                    <div className="w-[30%]">
                        <h1 className="text-[35px] font-bold leading-tight text-white text-center font-oswald pb-[10px]">48,000</h1>
                        <p className="text-[12px] font-oswald text-white text-center mt-[26px]">U.S. Children in Juvenile Detention</p>
                    </div>
                    <div className="w-[33%] border-x-2 border-x-white">
                        <h1 className="text-[35px] font-bold leading-tight text-white text-center font-oswald pb-[10px]">150</h1>
                        <p className="text-[12px] font-oswald text-white text-center mt-[26px]">Individuals Helped</p>
                    </div>
                    <div className="w-[23%]">
                        <h1 className="text-[35px] font-bold leading-tight text-white text-center font-oswald pb-[10px]">58</h1>
                        <p className="text-[12px] font-oswald text-white text-center mt-[26px]">Volunteers</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vision