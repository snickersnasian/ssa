import React from 'react'
import { Navbar } from '../components/Navbar'
import { BigTitle } from '../components/BigTitle'
import { Reception } from '../components/Reception'
import { News } from '../components/News'
import { Events } from '../components/Events'
import teamValues from '../media/imgs/teamValues.svg'
import { BannerLoop } from '../components/BannerLoop'
import { Footer } from '../components/Footer'
import { Activities } from '../components/Activities'
import { Partners } from '../components/Partners'
import { ForEveryStudent } from '../components/ForEveryStudent'


export const MainPage = () => {
    return (
        <div className="main-page">
            <Navbar />
            <BigTitle title="Инициатива наказуема, но за нами будущее!"/>
            <Reception />

            <div className="news-events-align">
                <News />
                <Events />
            </div>
            

            <BannerLoop image = {teamValues} />
            <Activities />
            <Partners />
            
            <ForEveryStudent />

            <Footer />
        </div>
    )
}