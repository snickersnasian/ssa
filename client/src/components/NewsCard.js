import React from 'react'


export const NewsCard = (props) => {

    const dataArr = props.data

    const renderSmallCards = (dataArr) => {

        let smallCardsArr = []

        for (let i = 1; i < 5; i ++) {

            smallCardsArr.push(
                <div className="news-card__small"
                    style={{
                        background: dataArr[i].image ? 'url(' + dataArr[i].image + ') no-repeat 40% 0/auto 100%' : "black"
                    }}
                >
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
            <div className="news-card__big"
                style={{
                    background: dataArr[0].image ? 'url(' + dataArr[0].image + ') no-repeat 40% 0/100% фгещ' : "black"
                }}
            >

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