import { FC } from "react"
import Header from "./Header/Header"
import Pillar from "./Pillar/Pillar"
import Vision from "./Vision/Vision"
import Sponsor from "./Sponsor/Sponsor"
import Event from "./Event/Event"
import News from "./News/News"

const Homepage: FC<any> = () => {
    return (
        <div>
            <Header />
            <Pillar />
            <Vision />
            <Sponsor />
            <Event />
            <News />
        </div>
    )
}

export default Homepage