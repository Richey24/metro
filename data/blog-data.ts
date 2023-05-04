import { StaticImageData } from "next/image"
import dragon from "../images/dragon.png"
import goat from "../images/goat.jpg"
import warrior from "../images/warrior.jpg"
import anvilx from "../images/anvilx.jpeg"


interface myBlog {
    image: StaticImageData,
    title: String,
    author: String,
    date: String
}

const blogData: Array<myBlog> = [
    {
        title: "Providing Safe Haven for At-Risk Teens",
        image: dragon,
        author: "Randa",
        date: "May 29, 2022"
    },
    {
        title: "Empowering Young People",
        image: goat,
        author: "Rejoice",
        date: "June 11, 2022"
    },
    {
        title: "Inspiring Programs at MYDC",
        image: warrior,
        author: "Steve",
        date: "July 9, 2022"
    },
    {
        title: "MYDC: Impact on Local Teens",
        image: anvilx,
        author: "Tony",
        date: "May 2, 2022"
    },
    {
        title: "Providing Safe Haven for At-Risk Teens",
        image: dragon,
        author: "Bruce",
        date: "May 29, 2022"
    },
    {
        title: "Empowering Young People",
        image: dragon,
        author: "Randa",
        date: "September 29, 2022"
    },
    {
        title: "Inspiring Programs at MYDC",
        image: dragon,
        author: "Rejoice",
        date: "January 6, 2023"
    },
]

export default blogData