import { FC } from "react"
import Header from "./Header/Header"
import Response from "./Response/Response"
import Violence from "./Violence/Violence"
import Community from "./Community/Community"
import Footer from "../Homepage/Footer/Footer"

const ProgramPage: FC<any> = () => {
    return (
        <div className="bg-home">
            <Header />
            <Response />
            <Violence />
            <Community />
            <Footer />
        </div>
    )
}

export default ProgramPage