import OpiodPage from '@/components/Opiod/OpiodPage'
import Head from 'next/head'
import React, { FC } from 'react'

const opiod: FC<any> = () => {
    return (
        <div>
            <Head>
                <title>Metro Youth Diversion Center | Program</title>
                <meta name="description" content="Opioid response is a key consideration in diversion center programs, as many participants may have substance use disorders." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo_blue.svg" />
            </Head>
            <main>
                <OpiodPage />
            </main>
        </div>
    )
}

export default opiod