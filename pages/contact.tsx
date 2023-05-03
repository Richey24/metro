import ContactPage from "@/components/Contact/ContactPage"
import Head from "next/head"

const contact = () => {
    return (
        <div>
            <Head>
                <title>Metro Youth Diversion Center | Contact Us</title>
                <meta name="description" content="Here you can find information about how to get in touch with us about our programs or how to volunteer with us." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo_blue.svg" />
            </Head>
            <main>
                <ContactPage />
            </main>
        </div>
    )
}

export default contact