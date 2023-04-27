import { FC } from "react"
import Header from "./Header/Header"
import Job from "./Job/Job"
import Justice from "./Justice/Justice"
import Footer from "../Homepage/Footer/Footer"

const WorkPage: FC<any> = () => {
    return (
        <div className="bg-home">
            <Header />
            <Job />
            <Justice />
            <Footer />
        </div>
    )
}

export default WorkPage