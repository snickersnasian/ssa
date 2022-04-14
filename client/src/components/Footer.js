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
                            <a href="https://cloclo55.cldmail.ru/public/get/7XYSAdjLMV1sjTiNQvNHXx8PrTjqHvzEngq69nnYbtqTu1maXmhMHwdgcZarmG2f4wcQtZ/duy-anh@mail.ru/ssa_konkurs_final_3.pptx"><p>Презентация</p></a>
                            <a href="https://www.ranepa.ru/ob-akademii/studencheskij-sovet/polozhenie-o-studencheskom-sovete/" target="_blank"><p>Положение</p></a>
                            <a href="https://cloclo53.cldmail.ru/public/get/7YBiEHgjETpwDZEJ1YVEs6eiL9g4weUHJwnmgDzribvUiRrLWmdkmbgQubfTU2iZUP9yze/duy-anh@mail.ru/wikiCase.pdf"><p>КейсВикипедия</p></a>
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
                <a href="https://www.youtube.com/" target="_blank"><p>Политика обработки данных</p></a>
                <a href="https://www.youtube.com/" target="_blank"><p>Политика конфиденциальности</p></a>
            </div>
        </div>    
    )

}
