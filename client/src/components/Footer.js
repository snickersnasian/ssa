import React from "react";
import ssaWhite from '../media/logos/ssa-white.svg'
import vk from '../media/logos/vk.svg'
import inst from '../media/logos/instagram.svg'
import geo from '../media/icons/geolocation.svg'
import mail from '../media/icons/mail.svg'
import head from '../media/icons/head.svg'


export const Footer = () => {
    
    return (
        <div className="footer">
            
            <div className="footer-block">
                <div className="footer-block-wrapper">
                    <div className="footer-row">
                        <div className="footer-logo"><img src={ssaWhite}/></div>
                        <div className="footer-map">
                            <a href="/"><p>Презентация</p></a>
                            <a href="/"><p>Положение</p></a>
                            <a href="/"><p>КейсВикипедия</p></a>
                        </div>
                    </div>
                    <div className="footer-row">
                        <div className="social-media-block">
                            <a href="https://www.instagram.com/pa_today/"><img src={inst} alt="" /></a>
                            <a href="https://vk.com/pa_today"><img src={vk} alt="" /></a>
                        </div>
                    </div>
                    <div className="footer-row">
                        <div className="footer-contacts">
                            <img src={geo} alt="" />
                            <a href="https://yandex.ru/maps/-/CCU5zIrV9C" target="_blank"><p>г.Москва пр. Вернадского, д. 82, Москва, 119571</p></a>
                        </div>
                        <div className="footer-contacts">
                            <img src={mail} alt="" />
                            <a href="mailto:ranepastud.12@yandex.ru" target="_blank"><p>ranepastud.12@yandex.ru</p></a>
                        </div>
                        <div className="footer-contacts">
                            <img src={head} alt="" />
                            <a href="https://www.instagram.com/popovadariaa/" target="_blank">
                                <p>Председатель Студ. совета</p>
                                <p>Дарья Попова</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-policy">
                <a href="https://www.youtube.com/watch?v=Tm0nIvf14Ro" target="_blank"><p>Политика обработки данных</p></a>
                <a href="https://www.youtube.com/watch?v=7OBx-YwPl8g" target="_blank"><p>Политика конфиденциальности</p></a>
            </div>
        </div>    
    )

}
