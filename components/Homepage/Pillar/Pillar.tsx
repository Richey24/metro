import { FC } from "react"
import sun from "../../../images/sun.jpg"
import dog from "../../../images/dog.jpg"
import money from "../../../images/money.jpg"
import Image from "next/image"

const Pillar: FC<any> = () => {
  return (
    <div className="w-11/12 bg-white mx-auto rounded-t px-20 py-16">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[45px] font-bold leading-tight text-nav font-oswald pb-[10px]">Our Pillars</h1>
        <div className="w-[70px] h-[3px] bg-nav"></div>
      </div>
      <p className="text-[14px] font-oswald text-mission text-center w-[662px] mx-auto mt-[26px]">We’re engaged in youth delinquency prevention. We offer both preventative workshops, intervention post charge and pre-charge. We recently established an online community service program for youth that have court mandates.</p>
      <div className="mt-16 flex justify-between gap-6 w-full">
        <div className="w-[33%] flex flex-col items-center justify-end">
          <Image src={sun} alt="sun" className="h-[240px] rounded" />
          <div className="w-[90%] text-center shadow-3xl mt-[-50px] rounded px-[17px] py-[24px] h-[205px] bg-pillar">
            <h1 className="text-[18px] font-bold leading-tight text-nav font-oswald pb-[10px]">Opiod response</h1>
            <p className="text-[12px] font-oswald text-mission">Opioid response is a key consideration in diversion center programs, as many participants may have substance use disorders</p>
            <div className="flex flex-col justify-center items-center gap-2 mt-[16px]">
              <button className="bg-nav w-48 h-12 text-sm font-semibold text-white font-oswald rounded">Learn More</button>
              <div className="w-[70px] h-[2px] bg-nav"></div>
            </div>
          </div>
        </div>
        <div className="w-[33%] flex flex-col items-center justify-end">
          <Image src={dog} alt="dog" className="h-[240px] rounded" />
          <div className="w-[90%] text-center shadow-3xl mt-[-50px] rounded px-[17px] py-[24px] h-[205px] bg-pillar">
            <h1 className="text-[18px] font-bold leading-tight text-nav font-oswald pb-[10px]">Violence Intervention</h1>
            <p className="text-[12px] font-oswald text-mission">Opioid response is a key consideration in diversion center programs, as many participants may have substance use disorders</p>
            <div className="flex flex-col justify-center items-center gap-2 mt-[16px]">
              <button className="bg-puprle w-48 h-12 text-sm font-semibold text-white font-oswald rounded">Learn More</button>
              <div className="w-[70px] h-[2px] bg-puprle"></div>
            </div>
          </div>
        </div>
        <div className="w-[33%] flex flex-col items-center justify-end">
          <Image src={money} alt="money" className="h-[240px] rounded" />
          <div className="w-[90%] text-center shadow-3xl mt-[-50px] rounded px-[17px] py-[24px] h-[205px] bg-pillar">
            <h1 className="text-[18px] font-bold leading-tight text-nav font-oswald pb-[10px]">Community Health</h1>
            <p className="text-[12px] font-oswald text-mission">Opioid response is a key consideration in diversion center programs, as many participants may have substance use disorders</p>
            <div className="flex flex-col justify-center items-center gap-2 mt-[16px]">
              <button className="bg-green w-48 h-12 text-sm font-semibold text-white font-oswald rounded">Learn More</button>
              <div className="w-[70px] h-[2px] bg-green"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pillar