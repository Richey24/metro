import NavBar from "@/components/Homepage/Header/NavBar"
import { FC } from "react"
import Main from "./Main"

const Header: FC<any> = () => {
    return (
        <div className="p-8 md:pr-0 w-full md:pl-32 md:pt-10">
            <NavBar />
            <Main />
        </div>
    )
}

export default Header