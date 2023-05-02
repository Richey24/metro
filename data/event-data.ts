import warrior from "../images/warrior.jpg"
import anvilx from "../images/anvilx.jpeg"
import cow from "../images/cow.jpg"
import { StaticImageData } from "next/image"

interface myEvent {
    date: String,
    image: StaticImageData,
    title: String,
    address: String,
    description: String,
}

const eventData: Array<myEvent> = [
    {
        date: "March 24, 2023",
        image: warrior,
        title: "Life Skills Workshop",
        address: "MYDC, Suite 105",
        description: "Join our interactive life skills workshop to develop essential tools for effective communication, decision-making, time management, and stress reduction."
    },
    {
        date: "April 3, 2023",
        image: anvilx,
        title: "Basketball Youth",
        address: "Community Hub Gym",
        description: "Join us for a day of fun and friendly competition at our community youth basketball event! Players of all skill levels are welcome to participate!"
    },
    {
        date: "April 12, 2023",
        image: cow,
        title: "Talk: Imam Ahmad",
        address: "MYDC, Suite 105",
        description: "Join our interactive life skills workshop to develop essential tools for effective communication, decision-making, time management, and stress reduction."
    },
    {
        date: "March 24, 2023",
        image: warrior,
        title: "Life Skills Workshop",
        address: "MYDC, Suite 105",
        description: "Join our interactive life skills workshop to develop essential tools for effective communication, decision-making, time management, and stress reduction."
    },
    {
        date: "April 3, 2023",
        image: anvilx,
        title: "Basketball Youth",
        address: "Community Hub Gym",
        description: "Join us for a day of fun and friendly competition at our community youth basketball event! Players of all skill levels are welcome to participate!"
    },
    {
        date: "April 12, 2023",
        image: cow,
        title: "Talk: Imam Ahmad",
        address: "MYDC, Suite 105",
        description: "Join our interactive life skills workshop to develop essential tools for effective communication, decision-making, time management, and stress reduction."
    },
]

export default eventData