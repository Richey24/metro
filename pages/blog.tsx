import BlogPage from "@/components/Blog/BlogPage"
import Head from "next/head"
import { FC } from "react"

const blog: FC<any> = () => {
    return (
        <div>
            <Head>
                <title>Metro Youth Diversion Center | Blog</title>
                <meta name="description" content="Keep up to date with news from MYDC here." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo_blue.svg" />
            </Head>
            <main>
                <BlogPage />
            </main>
        </div>
    )
}

export default blog