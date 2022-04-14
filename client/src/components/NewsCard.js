import React from 'react'


export const NewsCard = (props) => {

    const dataArr = props.data

    const renderSmallCards = (dataArr) => {

        let smallCardsArr = []

        for (let i = 1; i < 5; i ++) {

            smallCardsArr.push(
                <div className="news-card__small"
                    style={{
                        background: dataArr[i].image ? 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(' + dataArr[i].image + ') no-repeat 40% 0/auto 100%' : "black"
                    }}
                >
                    <div className="news-small__content">
                
                        <div className="news-small__title">
                            <a style={{color: 'white'}} href="">{dataArr[i].title}</a>
                        </div>

                        <div className="news-small__description">
                            <a style={{color: 'white'}} href="">{dataArr[i].description}</a>
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
                    background: dataArr[0].image ? 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(' + dataArr[0].image + ') no-repeat 40% 0/100% auto' : "black", 
                }}
            >

                

                <div className="news-big__content">

                    <div className="news-big__title">
                        <a style={{color: 'white'}} href="">{dataArr[0].title}</a>
                    </div>

                    <div className="news-big__description">
                    <a style={{color: 'white'}} href="">{dataArr[0].description}</a>
                    </div>

                </div>

            </div>
            
        
            <div className="news-card__wrapper">
                {renderSmallCards(dataArr)}
            </div>

        </div>
    )
}