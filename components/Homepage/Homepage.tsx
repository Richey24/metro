import { FC } from "react"
import Header from "./Header/Header"
import Pillar from "./Pillar/Pillar"
import Vision from "./Vision/Vision"
import Sponsor from "./Sponsor/Sponsor"
import Event from "./Event/Event"
import News from "./News/News"
import Testimony from "./Testimony/Testimony"
import Donate from "./Donate/Donate"
import Footer from "./Footer/Footer"

const Homepage: FC<any> = () => {
    return (
        <div className="w-full">
            <Header />
            <Pillar />
            <Vision />
            <Sponsor />
            <Event />
            <News />
            <Testimony />
            <Donate />
            <Footer />
        </div>
    )
}

export default Homepage