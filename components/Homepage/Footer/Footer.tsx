import { FC } from "react"
import phone from "../../../images/phone.png"
import mail from "../../../images/mail.png"
import location from "../../../images/pick-loc.png"
import Image from "next/image"

const Footer: FC<any> = () => {
    return (
        <div className="w-11/12 bg-footer mx-auto rounded-t px-32 mt-20 pt-16 pb-8">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-[24px] font-bold leading-tight text-nav font-oswald pb-[10px]">Subscribe to our newsletter for more updates</h1>
                <div className="w-[50px] h-[2px] bg-nav"></div>
            </div>
            <div className="flex items-end justify-center gap-4">
                <input className="w-[400px] h-12 bg-white pl-3 rounded text-mission outline-none border-[1px] border-email-border placeholder-mission" type="text" placeholder="Email address" />
                <button className="bg-donate w-[200px] h-12 text-sm font-semibold mt-12 text-white font-oswald rounded">Subscribe</button>
            </div>
            <div className="flex mt-24 gap-20">
                <div>
                    <h4 className="font-bold text=[20px] mb-[18px] text-nav">About us</h4>
                    <p className="w-[250px] text-mission mb-[18px] font-bold flex items-center gap-2"><Image className="w-[30px] h-[30px] ml-[-10px]" src={location} alt="location" /> 2817 Anthony Ln S, Suite 105 St. Anthony, MN 55418</p>
                    <a href="mailto: metroyouthdiversion@gmail.com" className="text-mission font-bold flex items-center gap-2"><Image className="w-[20px] h-[20px]" src={mail} alt="mail" />metroyouthdiversion@gmail.com</a>
                    <br />
                    <a className="text-mission mb-[18px] font-bold flex items-center gap-2" href="tel: (612) 203-6518"><Image className="w-[20px] h-[20px]" src={phone} alt="phone" /> (612) 203-6518</a>
                </div>
                <div>
                    <h4 className="font-bold text=[20px] mb-[18px] text-nav">Overview</h4>
                    <p className="text-mission mb-[18px] cursor-pointer font-bold">Our Work</p>
                    <p className="text-mission mb-[18px] cursor-pointer font-bold">About Us</p>
                    <p className="text-mission mb-[18px] cursor-pointer font-bold">Testimonials</p>
                    <p className="text-mission mb-[18px] cursor-pointer font-bold">Blog</p>
                    <p className="text-mission mb-[18px] cursor-pointer font-bold">Events</p>
                </div>
                <div>
                    <h4 className="font-bold text=[20px] mb-[18px] text-nav">Programs</h4>
                    <p className="text-mission mb-[18px] cursor-pointer font-bold">Opiod response</p>
                    <p className="text-mission mb-[18px] cursor-pointer font-bold">Violence Intervention</p>
                    <p className="text-mission mb-[18px] cursor-pointer font-bold">Community Health</p>
                    <p className="text-mission mb-[18px] cursor-pointer font-bold">Programs Overview</p>
                </div>
                <div>
                    <h4 className="font-bold text=[20px] mb-[18px] text-nav">Get Involved</h4>
                    <p className="text-mission mb-[18px] cursor-pointer font-bold">Volunteer</p>
                    <p className="text-mission mb-[18px] cursor-pointer font-bold">Donate</p>
                    <p className="text-mission mb-[18px] cursor-pointer font-bold">Partner</p>
                </div>
            </div>
            <p className="text-mission text-center text-[14px] mt-[50px]">Metro Youth Diversion Center 2023 . All Rights Reserved.</p>
        </div>
    )
}

export default Footer