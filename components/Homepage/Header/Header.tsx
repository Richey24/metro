import React, { FC } from 'react'
import NavBar from './NavBar'
import Main from './Main'

const Header: FC<any> = () => {
    return (
        <div className='pl-8 pt-6 pr-8 md:pr-0 md:pl-32 md:pt-10'>
            <NavBar />
            <Main />
        </div>
    )
}

export default Header