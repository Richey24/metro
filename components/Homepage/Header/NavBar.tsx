import Image from "next/image"
import logo from "../../../images/logo_blue.svg"
import down from "../../../images/Icon.svg"
import { FC } from "react"

const NavBar: FC<any> = () => {
    return (
        <div className='flex w-5/6 justify-between items-center'>
            <div className='flex gap-5'>
                <Image src={logo} alt="logo" width={30} height={30} />
                <p className='flex gap-2 text-sm font-semibold text-nav font-oswald pt-1 cursor-pointer'>English <Image src={down} alt="down icon" width={10} height={10} /></p>
            </div>
            <div className='flex items-center gap-6 [&>p]: text-sm font-semibold text-nav font-oswald cursor-pointer'>
                <p>Home</p>
                <p>Programs</p>
                <p>Our Work</p>
                <p>About</p>
                <p>Event</p>
                <p>Blog</p>
                <p>Contact</p>
                <button className="bg-donate w-32 h-12 ml-10 text-sm font-semibold text-white font-oswald rounded">Donate</button>
            </div>
        </div>
    )
}

export default NavBar