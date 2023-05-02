import EventPage from "@/components/Events/EventPage"
import Head from "next/head"
import { FC } from "react"

const event: FC<any> = () => {
    return (
        <div>
            <Head>
                <title>Metro Youth Diversion Center | Event</title>
                <meta name="description" content="Keep up to date with news from MYDC here." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo_blue.svg" />
            </Head>
            <main>
                <EventPage />
            </main>
        </div>
    )
}

export default event