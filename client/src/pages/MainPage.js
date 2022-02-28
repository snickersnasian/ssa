import React from 'react'
import { Navbar } from '../components/Navbar'
import { BigTitle } from '../components/BigTitle'
import { Reception } from '../components/Reception'
import { News } from '../components/News'

export const MainPage = () => {
    return (
        <div className="main-page">
            <Navbar />
            <BigTitle />
            <Reception />
            <News />
        </div>
    )
}