import Image from "next/image"
import { FC } from "react"
import dog from "../../../images/dog.jpg"


const Goals: FC<any> = () => {
    return (
        <div className="md:pl-32 pt-4 md:pt-0 flex flex-wrap md:flex-nowrap items-center gap-y-4 gap-x-[100px] bg-white">
            <div className="px-8">
                <h3 className="text-[22px] md:text-[30px] font-bold text-donate font-oswald md:border-b-[1px] pb-2 border-b-nav mb-0 w-12 whitespace-nowrap">Our Goals</h3>
                <ul className="list-disc mb-3 md:mb-0">
                    <li className="marker:text-[2rem] marker:text-donate">Help youth identify how involvement in the criminal justice system negatively impacts self-efficacy. This will be done through education, individualized and group therapy, social skills training, tutoring, mentoring and community engagement.</li>
                    <li className="mt-4 marker:text-[2rem] marker:text-donate">Educate families and community leaders about the issues facing the youth in the community, making them prone to delinquent behavior if not intervened.</li>
                </ul>
            </div>
            <Image className="w-[100%] h-[400px]" src={dog} alt="dog" />
        </div>
    )
}

export default Goals