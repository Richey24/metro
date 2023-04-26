import React, { FC } from 'react'
import right from "../../../images/right.png"
import Image from 'next/image'

const Main: FC<any> = () => {
    return (
        <div className="mt-[40px] md:mt-[80px] md:pb-[40px]">
            <div className='flex items-center gap-2'>
                <h3 className="text-[16px] md:text-[30px] font-bold text-mission font-oswald">Our Programs</h3>
                <Image className='md:w-[30px] w-[20px] md:h-[30px] h-[20px]' src={right} alt='right' />
                <h3 className="text-[16px] md:text-[30px] font-bold text-nav font-oswald">Our Programs</h3>
            </div>
            <p className="text-[14px] md:w-[780px] font-oswald text-mission mt-4 md:mt-8">Opioid response is a key consideration in diversion center programs, as many participants may have substance use disorders</p>
        </div>
    )
}

export default Main