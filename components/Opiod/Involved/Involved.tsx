import { FC } from "react"

const Involved: FC<any> = () => {
    return (
        <div className="bg-nav px-8 md:pl-[200px] py-14">
            <h3 className="text-[22px] md:text-[24px] font-bold text-white font-oswald md:border-b-2 border-b-white mb-8 md:mb-2 w-12 whitespace-nowrap pb-2">Get involved in our programs</h3>
            <div className="flex gap-4 flex-wrap">
                <button className="bg-volunteer w-[192px] md:w-[224px] h-12 text-sm font-semibold text-white font-oswald rounded mt-4">Become a volunteer</button>
                <button className="bg-donate w-[192px] md:w-[192px] h-12 text-sm font-semibold text-white font-oswald rounded mt-4">Donate</button>
            </div>
        </div>
    )
}

export default Involved