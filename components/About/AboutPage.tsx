import { FC } from "react"
import Header from "./Header/Header"
import Vision from "./Vision/Vision"
import Goals from "./Goals/Goals"
import Footer from "../Homepage/Footer/Footer"
import Sponsor from "./Sponsor/Sponsor"
import Team from "./Team/Team"

const AboutPage: FC<any> = () => {
    return (
        <div className="bg-home">
            <Header />
            <Vision />
            <Goals />
            <Team />
            <Sponsor />
            <Footer />
        </div>
    )
}

export default AboutPage