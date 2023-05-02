import WorkPage from "@/components/Work/WorkPage"
import Head from "next/head"
import { FC } from "react"

const work: FC<any> = () => {
    return (
        <div>
            <Head>
                <title>Metro Youth Diversion Center | Our Work</title>
                <meta name="description" content="Here you can view our previous programs and initiatives designed to support at-risk youth. Learn about our mentoring program, educational support, counseling, job training, and community outreach services aimed at addressing the underlying issues that can lead to criminal behavior." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo_blue.svg" />
            </Head>
            <main>
                <WorkPage />
            </main>
        </div>
    )
}

export default work