import React from "react"
import bless from '../media/imgs/bless.png'
import dodo from '../media/imgs/dodo.png'
import mayak from '../media/imgs/mayak.png'

export const Partners = () => {
    
    return (
        <div className="partners">
            <div className="partners__heading">
                <p>Постройте партнерские отношения вместе с нами.</p>
            </div>

            <div className="partners__logos">
                <div className="partners__logo">
                    <img src={bless} alt="" />
                    <img src={dodo} alt="" />
                    <img src={mayak} alt="" />
                </div>
            </div>

            <div className="easter-egg">
                <a href="https://rt.pornhub.com/" target="_blank">
                    <div className="porn__link">
                        .
                    </div>
                </a>
            </div>
        </div>
    )
}