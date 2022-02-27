import React from 'react'
import { Navbar } from '../components/Navbar'
import { BigTitle } from '../components/BigTitle'
import { Reception } from '../components/Reception'

export const MainPage = () => {
    return (
        <div className="main-page">
            <Navbar />
            <BigTitle />
            <Reception />
        </div>
    )
}