import React from 'react'
import { NewsCard } from './NewsCard'
import news from '../testDB/news.json'


export const News = () => {

    return (
        <div className="news">
            <div className="news__wrapper">
                <div className="news__header">
                    НОВОСТИ
                </div>

                <div className="news__all">
                    Все новости
                </div>
            </div>
            <NewsCard data={news} />
        </div>
    )
}