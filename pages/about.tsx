import AboutPage from "@/components/About/AboutPage"
import Head from "next/head"
import { FC } from "react"

const about: FC<any> = () => {
    return (
        <div>
            <Head>
                <title>Metro Youth Diversion Center</title>
                <meta name="description" content="We’re engaged in youth delinquency prevention. We offer both preventative workshops, intervention post charge and pre-charge. We recently established an online community service program for youth that have court mandates." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo_blue.svg" />
            </Head>
            <main>
                <AboutPage />
            </main>
        </div>
    )
}

export default about