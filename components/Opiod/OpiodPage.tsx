import { FC } from "react"
import Header from "./Header/Header"
import Footer from "../Homepage/Footer/Footer"
import Content from "./Content/Content"
import Involved from "./Involved/Involved"

const OpiodPage: FC<any
> = () => {
    return (
        <div className="bg-home">
            <Header />
            <Content />
            <Involved />
            <Footer />
        </div>
    )
}

export default OpiodPage