import Homepage from '@/components/Homepage/Homepage'
import Head from 'next/head'
import { FC } from 'react'

const Home: FC<any> = () => {
  return (
    <div>
      <Head>
        <title>Metro Youth Diversion Center | Homepage</title>
        <meta name="description" content="Our Mission is to create a partnership with youth, families, youth service providers and community stakeholders for the advancement and well-being of our youth as productive and contributing citizens of the community." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo_blue.svg" />
      </Head>
      <main className='bg-home min-h-screen w-full' >
        <Homepage />
      </main>
    </div>
  )
}

export default Home