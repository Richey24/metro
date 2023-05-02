import React, { FC } from 'react'
import Header from './Header/Header'
import Footer from '../Homepage/Footer/Footer'
import Upcoming from './Upcoming/Upcoming'
import Past from './Past/Past'

const EventPage: FC<any> = () => {
    return (
        <div className="bg-home">
            <Header />
            <Upcoming />
            <Past />
            <Footer />
        </div>
    )
}

export default EventPage