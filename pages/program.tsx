import ProgramPage from "@/components/Program/ProgramPage"
import Head from "next/head"

const Program = () => {
    return (
        <div>
            <Head>
                <title>Metro Youth Diversion Center | Program</title>
                <meta name="description" content="We’re engaged in youth delinquency prevention. We offer both preventative workshops, intervention post charge and pre-charge. We recently established an online community service program for youth that have court mandates." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo_blue.svg" />
            </Head>
            <main>
                <ProgramPage />
            </main>
        </div>
    )
}

export default Program