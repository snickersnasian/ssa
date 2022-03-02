import React from 'react'
import { Navbar } from '../components/Navbar'
import { BigTitle } from '../components/BigTitle'

import { Footer } from '../components/Footer'

import { Activities } from '../components/Activities'
import { Partners } from '../components/Partners'


export const NotFoundPage = () => {
    return (
        <div className="main-page">
            <Navbar />
            <BigTitle title="Данная страница находится в разработке"/>
            <Footer />
        </div>
    )
}