import React from 'react'


export const Navbar = () => {
    return (
        <div className="nav">
            <nav>
                <div className="nav__logo-wrapper">

                    <div className="nav__logo-item">
                        <img src="" alt="" />
                    </div>
                    <div className="nav__logo-item">
                        <img src="" alt="" />
                    </div>

                    <div className="nav__menu-item-wrapper">
                        <div className="nav__menu-item">
                            <a href="" className="nav__menu-link">о нас</a>
                        </div>
                        <div className="nav__menu-item">
                            <a href="" className="nav__menu-link"> что мы делаем</a>
                            <div className="nav__menu-dropdown">
                                <div className="nav__dropdown-item">наши направления</div>
                                <div className="nav__dropdown-item">проекты/мероприятия</div>
                                <div className="nav__dropdown-item">актив сса</div>
                            </div>
                        </div>
                        <div className="nav__menu-item">
                            <a href="" className="nav__menu-link">партнерам</a>
                        </div>
                        <div className="nav__menu-item">
                            <a href="" className="nav__menu-link">карьера</a>
                        </div>
                    </div>

                    <div className="nav__my-account">
                        <button className="nav__my-account-btn">
                            Личный кабинет
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}