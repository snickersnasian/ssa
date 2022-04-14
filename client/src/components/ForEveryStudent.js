import React, { useState }from "react"
import laptop from '../media/imgs/3d-laptop.png'


export const ForEveryStudent = () => {

    const [position, setPosition] = useState(1)

    const handleClick = (evt) => {
        const pos = evt.target.getAttribute('pos')
        console.log(pos)
        setPosition(pos)
    }

    return(
        <div className="for-student">
            <div className="for-student__head">
                <div className="for-student__title">
                    КАЖДОМУ СТУДЕНТУ
                </div>
                <div className="for-student__sub-title">
                    Мы про студентов, помогите придумать фразу!
                </div>
            </div>

            <div className="for-student__cards">

                

                <div pos="1" onClick={handleClick} className={"for-student__card " + (position === "1" ? '' : 'card-inactive')}>
                    <div className="for-student__image">
                        <img src={laptop} alt="" />
                    </div>

                    <div className="for-student__card-content">
                        <div className="for-student__card-head">
                            <div className="for-student__card-main-title">
                                ИНИЦИАТИВА
                            </div>
                            <div className="for-student__card-main-subtitle">
                                Онлайн-платформа «Инициатива» объединяет
                                студентов, стремящихся запустить свой проект в Академии
                            </div>
                        </div>

                        <div className="for-student__card-description">
                            <div className="for-student__card-title">
                                    Комплексная поддержка 
                            </div>

                            <ul className="for-student__card-options">
                                <li className="for-student__card-option">Разработка концепции</li>
                                <li className="for-student__card-option">Помощь с документацией</li>
                                <li className="for-student__card-option">Разработка маркетинговой стратегии</li>
                                <li className="for-student__card-option">Определение целевой аудитории</li>
                            </ul>
                        </div>

                    </div>

                    <div className="for-student__card-inactive">
                        <div pos="1" style={{
                            color: '#FB9C1B'
                        }} className="for-student__card-inactive-title">
                            ИНИЦИАТИВА
                        </div>
                    </div>
                </div>

                <div pos="2" onClick={handleClick} className={"for-student__card " + (position === "2" ? '' : 'card-inactive')}>
                    <div className="for-student__image">
                        <img src={laptop} alt="" />
                    </div>

                    <div className="for-student__card-content">
                        <div className="for-student__card-head">
                            <div className="for-student__card-main-title">
                                МЕНТАЛЬНОЕ ЗДОРОВЬЕ
                            </div>
                            <div className="for-student__card-main-subtitle">
                                Онлайн-платформа «Инициатива» объединяет
                                студентов, стремящихся запустить свой проект в Академии
                            </div>
                        </div>

                        <div className="for-student__card-description">
                            <div className="for-student__card-title">
                                    Комплексная поддержка 
                            </div>

                            <ul className="for-student__card-options">
                                <li className="for-student__card-option">Разработка концепции</li>
                                <li className="for-student__card-option">Помощь с документацией</li>
                                <li className="for-student__card-option">Разработка маркетинговой стратегии</li>
                                <li className="for-student__card-option">Определение целевой аудитории</li>
                            </ul>
                        </div>

                        

                    </div>


                    <div className="for-student__card-inactive">
                        <div pos="2" style={{
                            color: '#FF6A6A'
                        }} className="for-student__card-inactive-title">
                            МЕНТАЛЬНОЕ ЗДОРОВЬЕ
                        </div>
                    </div>
                </div>

                <div pos="3" onClick={handleClick} className={"for-student__card " + (position === "3" ? '' : 'card-inactive')}>
                    <div className="for-student__image">
                        <img src={laptop} alt="" />
                    </div>

                    <div className="for-student__card-content">
                        <div className="for-student__card-head">
                            <div className="for-student__card-main-title">
                                Я ИЗ ОБЩЕЖИТИЯ/ГЖК
                            </div>
                            <div className="for-student__card-main-subtitle">
                                Онлайн-платформа «Инициатива» объединяет
                                студентов, стремящихся запустить свой проект в Академии
                            </div>
                        </div>

                        <div className="for-student__card-description">
                            <div className="for-student__card-title">
                                    Комплексная поддержка 
                            </div>

                            <ul className="for-student__card-options">
                                <li className="for-student__card-option">Разработка концепции</li>
                                <li className="for-student__card-option">Помощь с документацией</li>
                                <li className="for-student__card-option">Разработка маркетинговой стратегии</li>
                                <li className="for-student__card-option">Определение целевой аудитории</li>
                            </ul>
                        </div>

                        

                    </div>


                    <div className="for-student__card-inactive">
                        <div pos="3" style={{
                            color: '#FFA41C'
                        }} className="for-student__card-inactive-title">
                            Я ИЗ ОБЩЕЖИТИЯ/ГЖК
                        </div>
                    </div>
                </div>

                <div pos="4" onClick={handleClick} className={"for-student__card " + (position === "4" ? '' : 'card-inactive')}>
                    <div className="for-student__image">
                        <img src={laptop} alt="" />
                    </div>

                    <div className="for-student__card-content">
                        <div className="for-student__card-head">
                            <div className="for-student__card-main-title">
                                КОНТРОЛЬ КАЧЕСТВА ОБРАЗОВАНИЯ
                            </div>
                            <div className="for-student__card-main-subtitle">
                                Онлайн-платформа «Инициатива» объединяет
                                студентов, стремящихся запустить свой проект в Академии
                            </div>
                        </div>

                        <div className="for-student__card-description">
                            <div className="for-student__card-title">
                                    Комплексная поддержка 
                            </div>

                            <ul className="for-student__card-options">
                                <li className="for-student__card-option">Разработка концепции</li>
                                <li className="for-student__card-option">Помощь с документацией</li>
                                <li className="for-student__card-option">Разработка маркетинговой стратегии</li>
                                <li className="for-student__card-option">Определение целевой аудитории</li>
                            </ul>
                        </div>

                        

                    </div>


                    <div className="for-student__card-inactive">
                        <div pos="4" style={{
                            color: '#6D6D6D'
                        }} className="for-student__card-inactive-title">
                            КОНТРОЛЬ КАЧЕСТВА ОБРАЗОВАНИЯ
                        </div>
                    </div>
                </div>

                <div pos="5" onClick={handleClick} className={"for-student__card " + (position === "5" ? '' : 'card-inactive')}>
                    <div className="for-student__image">
                        <img src={laptop} alt="" />
                    </div>

                    <div className="for-student__card-content">
                        <div className="for-student__card-head">
                            <div className="for-student__card-main-title">
                                FAQ
                            </div>
                            <div className="for-student__card-main-subtitle">
                                Онлайн-платформа «Инициатива» объединяет
                                студентов, стремящихся запустить свой проект в Академии
                            </div>
                        </div>

                        <div className="for-student__card-description">
                            <div className="for-student__card-title">
                                    Комплексная поддержка 
                            </div>

                            <ul className="for-student__card-options">
                                <li className="for-student__card-option">Разработка концепции</li>
                                <li className="for-student__card-option">Помощь с документацией</li>
                                <li className="for-student__card-option">Разработка маркетинговой стратегии</li>
                                <li className="for-student__card-option">Определение целевой аудитории</li>
                            </ul>
                        </div>

                        

                    </div>


                    <div className="for-student__card-inactive">
                        <div pos="5" style={{
                            color: '#000000'
                        }} className="for-student__card-inactive-title">
                            FAQ
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}