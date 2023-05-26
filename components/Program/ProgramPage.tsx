import { FC, useEffect } from "react"
import Header from "./Header/Header"
import Response from "./Response/Response"
import Violence from "./Violence/Violence"
import Community from "./Community/Community"
import Footer from "../Homepage/Footer/Footer"
import { useSearchParams } from "next/navigation"

const ProgramPage: FC<any> = () => {
    const params = useSearchParams()

    useEffect(() => {
        if (params.get("section")) {
            document.getElementById(params.get("section") as string)?.scrollIntoView()
        }
    })


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