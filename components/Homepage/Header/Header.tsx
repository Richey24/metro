import React, { FC } from 'react'
import NavBar from './NavBar'
import Main from './Main'

const Header: FC<any> = () => {
    return (
        <div className='pl-32 pt-10'>
            <NavBar />
            <Main />
        </div>
    )
}

export default Header