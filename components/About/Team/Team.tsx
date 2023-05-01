import { FC } from "react"
import member1 from "../../../images/agent1.png"
import member2 from "../../../images/agent2.png"
import member3 from "../../../images/agent3.png"
import member4 from "../../../images/agent4.png"
import member5 from "../../../images/agent5.png"
import Image from "next/image"

const Team: FC<any> = () => {
    return (
        <div className="py-[70px] md:px-[200px]">
            <div className="flex flex-col justify-center items-center">
                <h1 className="md:text-[35px] text-[28px] font-bold leading-tight text-nav font-oswald pb-[10px]">Meet The Team</h1>
                <div className="hidden md:block w-[50px] h-[1.8px] bg-nav"></div>
            </div>
            <div className="flex flex-wrap md:flex-nowrap gap-8 justify-center mt-14">
                <div className="md:w-[20%]">
                    <Image className="w-90vw md:w-[100%] h-[400px] md:h-[200px]" src={member1} alt="member1" />
                    <h3 className="md:text-[20px] text-[18px] mt-2 text-center font-bold leading-tight text-nav font-oswald">Rashad Ahmed</h3>
                    <h3 className="md:text-[14px] text-[16px] text-center leading-tight text-nav font-oswald">Executive Director</h3>
                </div>
                <div className="md:w-[20%]">
                    <Image className="w-90vw md:w-[100%] h-[400px] md:h-[200px]" src={member2} alt="member1" />
                    <h3 className="md:text-[20px] text-[18px] mt-2 text-center font-bold leading-tight text-nav font-oswald">Bashir Abdi</h3>
                    <h3 className="md:text-[14px] text-[16px] text-center leading-tight text-nav font-oswald">Director of Operations and Finance</h3>
                </div>
                <div className="md:w-[20%]">
                    <Image className="w-90vw md:w-[100%] h-[400px] md:h-[200px]" src={member3} alt="member1" />
                    <h3 className="md:text-[20px] text-[18px] mt-2 text-center font-bold leading-tight text-nav font-oswald">Teferi Zahur</h3>
                    <h3 className="md:text-[14px] text-[16px] text-center leading-tight text-nav font-oswald">Program Coordinator</h3>
                </div>
                <div className="md:w-[20%]">
                    <Image className="w-90vw md:w-[100%] h-[400px] md:h-[200px]" src={member4} alt="member1" />
                    <h3 className="md:text-[20px] text-[18px] mt-2 text-center font-bold leading-tight text-nav font-oswald">Adanna Barika</h3>
                    <h3 className="md:text-[14px] text-[16px] text-center leading-tight text-nav font-oswald">Program Coordinator</h3>
                </div>
                <div className="md:w-[20%]">
                    <Image className="w-90vw md:w-[100%] h-[400px] md:h-[200px]" src={member5} alt="member1" />
                    <h3 className="md:text-[20px] text-[18px] mt-2 text-center font-bold leading-tight text-nav font-oswald">Saida Jabulie</h3>
                    <h3 className="md:text-[14px] text-[16px] text-center leading-tight text-nav font-oswald">Program Coordinator</h3>
                </div>
            </div>
            <div className="flex gap-8 flex-wrap md:flex-nowrap justify-center mt-10">
                <div className="md:w-[20%]">
                    <Image className="w-90vw md:w-[100%] h-[400px] md:h-[200px]" src={member1} alt="member1" />
                    <h3 className="md:text-[20px] text-[18px] mt-2 text-center font-bold leading-tight text-nav font-oswald">Teferi Zahur</h3>
                    <h3 className="md:text-[14px] text-[16px] text-center leading-tight text-nav font-oswald">Program Coordinator</h3>
                </div>
                <div className="md:w-[20%]">
                    <Image className="w-90vw md:w-[100%] h-[400px] md:h-[200px]" src={member2} alt="member1" />
                    <h3 className="md:text-[20px] text-[18px] mt-2 text-center font-bold leading-tight text-nav font-oswald">Saida Jabulie</h3>
                    <h3 className="md:text-[14px] text-[16px] text-center leading-tight text-nav font-oswald">Program Coordinator</h3>
                </div>
                <div className="md:w-[20%]">
                    <Image className="w-90vw md:w-[100%] h-[400px] md:h-[200px]" src={member3} alt="member1" />
                    <h3 className="md:text-[20px] text-[18px] mt-2 text-center font-bold leading-tight text-nav font-oswald">Bashir Abdi</h3>
                    <h3 className="md:text-[14px] text-[16px] text-center leading-tight text-nav font-oswald">Director of Operations and Finance</h3>
                </div>
                <div className="md:w-[20%]">
                    <Image className="w-90vw md:w-[100%] h-[400px] md:h-[200px]" src={member4} alt="member1" />
                    <h3 className="md:text-[20px] text-[18px] mt-2 text-center font-bold leading-tight text-nav font-oswald">Adanna Barika</h3>
                    <h3 className="md:text-[14px] text-[16px] text-center leading-tight text-nav font-oswald">Program Coordinator</h3>
                </div>
                <div className="md:w-[20%]">
                    <Image className="w-90vw md:w-[100%] h-[400px] md:h-[200px]" src={member5} alt="member1" />
                    <h3 className="md:text-[20px] text-[18px] mt-2 text-center font-bold leading-tight text-nav font-oswald">Rashad Ahmed</h3>
                    <h3 className="md:text-[14px] text-[16px] text-center leading-tight text-nav font-oswald">Executive Director</h3>
                </div>
            </div>
        </div>
    )
}

export default Team