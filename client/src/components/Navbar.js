import React, {useState} from 'react'
import ssaLogo from '../media/logos/ssa-logo.svg'
import ranepaLogo from '../media/logos/ranepa-logo.svg'

export const Navbar = () => {

    const [isDropdown, setDropdown] = useState(false)


    return (
        <div className="nav" >
            <nav>
                <div className="nav__logo-wrapper">

                    <div className="nav__logo-item">
                        <a href="https://www.ranepa.ru/" target="_blank"><img src={ranepaLogo} alt="logo" /></a>
                    </div>
                    <div className="nav__logo-item">
                        <a href="/"><img src={ssaLogo} alt="logo" /></a>
                    </div>
                </div>

                <div className="nav__menu-item-wrapper">

                    <div className="nav__menu-item">
                        <a href="" className="nav__menu-link">о нас</a>
                    </div>

                    <div className="nav__menu-item" > 
                        <a href="" className="nav__menu-link" onMouseOver={() => {setDropdown(true)}}> что мы делаем</a>

                        <div onMouseLeave={() => {setDropdown(false)}} className={"nav__menu-dropdown " + (isDropdown ? "dropdown-active" : null)} >

                            <div className="nav__dropdown-item"><a href="">наши направления</a></div>
                            <div className="nav__dropdown-item"><a href="">проекты/мероприятия</a></div>
                            <div className="nav__dropdown-item"><a href="">актив сса</a></div>

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

            </nav>
        </div>
    )
}