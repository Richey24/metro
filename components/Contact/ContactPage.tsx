import { FC } from "react"
import Header from "./Header/Header"
import Address from "./Address/Address"
import Footer from "../Homepage/Footer/Footer"

const ContactPage: FC<any> = () => {
    return (
        <div className="bg-home">
            <Header />
            <Address />
            <Footer />
        </div>
    )
}

export default ContactPage