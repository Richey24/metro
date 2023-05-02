import Image from "next/image"
import logo from "../../../images/logo_blue.svg"
import down from "../../../images/Icon.svg"
import { FC } from "react"
import Link from "next/link"

const NavBar: FC<any> = () => {
    return (
        <div className='flex md:w-5/6 justify-between items-center'>
            <div className='flex gap-5'>
                <Image src={logo} alt="logo" width={30} height={30} />
                <p className='hidden md:flex gap-2 text-sm font-semibold text-nav font-oswald pt-1 cursor-pointer'>English <Image src={down} alt="down icon" width={10} height={10} /></p>
            </div>
            <div className='hidden items-center gap-6 [&>p]: text-sm font-semibold text-nav font-oswald cursor-pointer md:flex'>
                <p><Link href="/">Home</Link></p>
                <p><Link href="/program">Programs</Link></p>
                <p><Link href="/work">Our Work</Link></p>
                <p><Link href="/about">About</Link></p>
                <p><Link href="/event">Event</Link></p>
                <p>Blog</p>
                <p>Contact</p>
                <button className="bg-donate w-32 h-12 ml-10 text-sm font-semibold text-white font-oswald rounded">Donate</button>
            </div>
            <div className="md:hidden flex flex-col gap-1 ">
                <div className=" w-[26px] h-[3px] bg-nav"></div>
                <div className=" w-[26px] h-[3px] bg-nav"></div>
                <div className=" w-[26px] h-[3px] bg-nav"></div>
            </div>
        </div>
    )
}

export default NavBar