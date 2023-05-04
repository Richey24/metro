import { FC } from "react"
import Header from "./Header/Header"
import Footer from "../Homepage/Footer/Footer"
import Post from "./Post/Post"

const BlogPage: FC<any> = () => {
    return (
        <div className="bg-home">
            <Header />
            <Post />
            <Footer />
        </div>
    )
}

export default BlogPage