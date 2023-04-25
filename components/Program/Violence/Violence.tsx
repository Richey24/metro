import Image from "next/image"
import bridge from "../../../images/bridge.jpeg"
import shield from "../../../images/shield.png"

const Violence = () => {
    return (
        <div className="w-full h-full md:h-[420px] bg-nav px-16 md:pl-[150px] py-8 md:py-4 pr-24">
            <div className="flex">
                <div className="pt-8 md:pt-[30px]">
                    <div className="flex items-center gap-3 ml-[-40px]">
                        <Image className="w-[30px] h-[30px] mt-[-25px]" src={shield} alt="shield" />
                        <h3 className="text-[30px] font-bold text-white font-oswald md:border-b-2 md:border-b-white mb-2 md:w-12 whitespace-nowrap pb-4 text-center">Violence Prevention</h3>
                    </div>
                    <p className="text-[12px] font-oswald text-white md:mt-6 md:w-[90%] text-center md:text-left">Diversions Youth {"Center's"} violence prevention program is a crucial resource for young people in our community. The program is designed to help young people learn how to manage conflict, build healthy relationships, and avoid violent situations. Through a variety of workshops, group activities, and one-on-one counseling, participants develop a better understanding of how to communicate effectively, set boundaries, and resolve conflicts peacefully. The program also provides education on identifying and reporting signs of abuse, and resources for young people who may be experiencing or witnessing violence. With a focus on building skills, empathy, and resilience, Diversions Youth {"Center's"} violence prevention program is helping to create a safer and more peaceful community for everyone.</p>
                    <div className="flex justify-center md:justify-start">
                        <button className="bg-donate w-[200px] h-12 text-sm font-semibold mt-8 text-white font-oswald rounded">Learn More</button>
                    </div>
                </div>
                <Image className="hidden md:block w-[520px] h-[100%] rounded" src={bridge} alt="bridge" />
            </div>
        </div>
    )
}

export default Violence