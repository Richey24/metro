import Image from 'next/image'
import React, { FC } from 'react'
import phone from "../../../images/blue-phone.png"
import mail from "../../../images/blue-message.png"
import location from "../../../images/blue-location.png"

const Address: FC<any> = () => {
    return (
        <div className='bg-white shadow-3xl flex flex-wrap md:flex-nowrap md:h-[900px] w-full'>
            <div className='md:w-[50%] md:pl-32 md:pt-[70px] pt-8 px-4 md:pr-[50px]'>
                <h3 className="text-[22px] md:text-[24px] font-bold text-nav font-oswald md:border-b-2 border-b-nav mb-2 md:mb-2 w-12 whitespace-nowrap">How can we help you?</h3>
                <div className='flex gap-4 pt-4 w-full'>
                    <input placeholder='First Name' className='pl-2 outline-0 placeholder:text-mission border-[1px] border-email-border rounded h-12 w-[50%]' type="text" name="firstName" id="firstName" />
                    <input placeholder='Last Name' className='pl-2 outline-0 placeholder:text-mission border-[1px] border-email-border rounded h-12 w-[50%]' type="text" name="lastName" id="lastName" />
                </div>
                <input placeholder='Email Address' className='pl-2 outline-0 mt-6 placeholder:text-mission border-[1px] border-email-border rounded h-12 w-[100%]' type="text" name="email" id="email" />
                <input placeholder='Phone Number' className='pl-2 outline-0 mt-6 placeholder:text-mission border-[1px] border-email-border rounded h-12 w-[100%]' type="text" name="phone" id="phone" />
                <textarea name="message" id="message" placeholder='How can we help you?' className='p-2 outline-0 mt-6 placeholder:text-mission border-[1px] border-email-border rounded h-[250px] w-[100%]'></textarea>
                <button className="bg-donate w-[160px] mt-6 h-12 text-sm font-semibold text-white font-oswald rounded">Send</button>
            </div>
            <div className='md:w-[50%] w-full mt-14 md:mt-0'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2820.2397540958773!2d-93.21367222473093!3d45.02005826296436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32d413e8e3139%3A0x52ad5ff4cf390eac!2sMetro%20Youth%20Diversion%20Center!5e0!3m2!1sen!2sng!4v1683135015763!5m2!1sen!2sng" style={{ border: "0", width: "100%", height: "525px" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className='w-full bg-nav px-12 md:px-[70px] md:pb-[80px] py-10 md:pt-[50px]'>
                    <h3 className="text-[22px] pb-3 md:text-[34px] font-bold text-white font-oswald md:border-b-2 border-b-white mb-2 md:mb-2 w-12 whitespace-nowrap">Metro Youth Diversion Center</h3>
                    <div className='mt-6'>
                        <p className="w-[250px] text-white mb-[18px] font-bold flex items-center gap-2"><Image className="w-[30px] h-[30px] ml-[-10px]" src={location} alt="location" /> 2817 Anthony Ln S, Suite 105 St. Anthony, MN 55418</p>
                        <a href="mailto: metroyouthdiversion@gmail.com" className="text-white font-bold flex items-center gap-2"><Image className="w-[20px] h-[20px]" src={mail} alt="mail" />metroyouthdiversion@gmail.com</a>
                        <br />
                        <a className="text-white mb-[18px] font-bold flex items-center gap-2" href="tel: (612) 203-6518"><Image className="w-[20px] h-[20px]" src={phone} alt="phone" /> (612) 203-6518</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Address