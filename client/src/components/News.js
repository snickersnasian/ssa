import React from 'react'
import { NewsCard } from './NewsCard'
import news from '../testDB/news.json'


export const News = () => {

    return (
        <div className="news">
            <div className="news__wrapper">
                <div className="news__header">
                    <a href="">НОВОСТИ</a>
                </div>

                <div className="news__all">
                    <a href="">Все новости</a>
                </div>
            </div>
            <NewsCard data={news} />

            <div className="news__more">
                
            </div>
        </div>
    )
}