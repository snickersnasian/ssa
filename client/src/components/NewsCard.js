import React from 'react'


export const NewsCard = (props) => {

    const dataArr = props.data


    const renderSmallCards = (dataArr) => {

        let smallCardsArr = []

        for (let i = 1; i < 5; i ++) {

            smallCardsArr.push(
                <div className="news-card__small">
                    <div className="news-small__content">
                
                        <div className="news-small__title">
                            {dataArr[i].title}
                        </div>

                        <div className="news-small__description">
                            {dataArr[i].description}
                        </div>

                    </div>
                </div>
            )
        }

        return smallCardsArr
    }

    return (
        <div className="news-card">
            <div className="news-card__big">

                <div className="news-big__content">

                    <div className="news-big__title">
                        {dataArr[0].title}
                    </div>

                    <div className="news-big__description">
                        {dataArr[0].description}
                    </div>

                </div>

            </div>
            
        
            <div className="news-card__wrapper">
                {renderSmallCards(dataArr)}
            </div>

        </div>
    )
}