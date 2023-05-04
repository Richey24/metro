import Image from "next/image"
import searchImage from "../../../images/search.png"
import filterImage from "../../../images/filter.png"
import blogData from "@/data/blog-data"
import { useState } from "react"

const Post = () => {

    const [blogs, setBlogs] = useState(blogData)

    const searchEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value
        const filterArr = blogData.filter((blog) => `${blog.title} ${blog.author} ${blog.date}`.toLowerCase().includes(val.toLowerCase()))
        setBlogs(filterArr)
    }

    return (
        <div className="md:px-48 px-4">
            <div className="flex gap-2 w-full">
                <div className="flex px-5 items-center md:w-[94%] w-[85%] h-[54px] bg-white">
                    <input onChange={searchEvent} placeholder="Search blog posts" className="w-[100%] h-[100%] outline-0 placeholder:text-mission" type="text" />
                    <Image className="w-[20px] h-[20x]" src={searchImage} alt="search image" />
                </div>
                <div className="flex cursor-pointer justify-center items-center md:w-[6%] w-[15%] h-[54px] bg-white">
                    <Image className="w-[20px] h-[20x]" src={filterImage} alt="filter image" />
                </div>
            </div>
            <div className="mt-8">    {
                blogs.map((blog, i) => (
                    <div key={i} className="h-[auto] md:h-[200px] shadow-3xl w-[100%] mb-6 bg-white flex gap-6 px-4 md:px-0 md:pr-8">
                        <Image className="hidden md:block w-[26%] h-[100%]" src={blog.image} alt="goat" />
                        <div className="py-4 md:py-0 w-full md:w-auto">
                            <h1 className="md:text-[30px] font-bold mb-[5px] md:mt-3 text-nav font-oswald">{blog.title}</h1>
                            <p className="text-nav font-bold">Written By {blog.author}</p>
                            <p className="text-[12px] font-oswald text-mission">published on {blog.date}</p>
                            <button className="bg-nav md:w-[208px] w-full mt-4 h-8 md:h-12 text-sm font-semibold text-white font-oswald rounded">Read More</button>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Post