import Image from "next/image"
import dog from "../../../images/dog.jpg"

const Community = () => {
    return (
        <div id="health">
            <div className="px-4 md:px-32 py-8 md:py-[80px] flex flex-wrap md:flex-nowrap gap-y-4 gap-x-[100px] items-start bg-white shadow-3xl">
                <Image className="w-[500px] h-[400px]" src={dog} alt="dog" />
                <div>
                    <div className="flex items-end md:items-center gap-3 md:ml-[-47px]">
                        <span className="text-[60px] text-donate">+</span>
                        <h3 className="text-[22px] md:text-[30px] font-bold text-nav font-oswald md:border-b-2 border-b-nav mb-8 md:mb-2 w-12 whitespace-nowrap">Community Health</h3>
                    </div>
                    <p className="text-[14px] font-oswald text-mission md:mt-[-10px]">Diversions Youth {"Center's"} community health program is a vital resource for young people and families in our community. The program focuses on promoting physical, emotional, and mental well-being through a variety of activities, workshops, and resources. Participants learn about healthy eating, exercise, stress management, and mindfulness, as well as important topics like health, substance use prevention, and mental health. The program also provides opportunities for young people to get involved in community service and advocacy, helping to build a sense of connection and purpose. With a holistic and inclusive approach, Diversions Youth {"Center's"} community health program is helping to empower young people to take control of their health and well-being, and to become active and engaged members of their community.</p>
                    <button className="bg-nav w-32 md:w-[192px] h-12 text-sm font-semibold text-white font-oswald rounded mt-4">Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Community