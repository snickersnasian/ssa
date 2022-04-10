import React, {useState, useEffect} from 'react'
import ssaLogo from '../media/logos/ssa-logo.svg'
import ranepaLogo from '../media/logos/ranepa-logo.svg'
import menuIcon from '../media/icons/menu-icon.svg'

export const Navbar = () => {

    const [isDropdown, setDropdown] = useState(false)
    const [navIsVisible, setNavIsVisible] = useState(false)
    const [sideVisible, setSideVisible] = useState(false)

    const handleScroll = () => {


        if (window.scrollY > 150) {
            return setNavIsVisible(false)
        }

        return setNavIsVisible(true)
    }

    const handleMenuClick = () => {
        if (sideVisible) return setSideVisible(false)
        return setSideVisible(true)
    }

    useEffect( () => {

        if (window.scrollY < 150) {
            setNavIsVisible(true)
        }

        window.addEventListener('scroll', handleScroll)
        
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])

    return (
        <div className={"nav " + (navIsVisible ? "" : "nav__invisible")} onScroll={handleScroll}>
            <nav>

                <div className="nav__logo-wrapper">

                    <div className="nav__logo-item">
                        <a href="https://www.ranepa.ru/" target="_blank"><img src={ranepaLogo} alt="logo" /></a>
                    </div>
                    <div className="nav__logo-item">
                        <a href="/"><img src={ssaLogo} alt="logo" /></a>
                    </div>
                    
                </div>

                <div className="nav__desktop">
                
                    
                    <div className="nav__menu-item-wrapper">

                        <div className="nav__menu-item">
                            <a href="/" className="nav__menu-link">главная</a>
                        </div>

                        <div className="nav__menu-item" > 
                            <a href="/activities" className="nav__menu-link" onMouseOver={() => {setDropdown(true)}}> что мы делаем</a>

                            <div onMouseLeave={() => {setDropdown(false)}} className={"nav__menu-dropdown " + (isDropdown ? "dropdown-active" : null)} >

                                <div className="nav__dropdown-item"><a href="">наши направления</a></div>
                                <div className="nav__dropdown-item"><a href="">проекты/мероприятия</a></div>
                                <div className="nav__dropdown-item"><a href="">актив сса</a></div>

                            </div>

                        </div>

                        <div className="nav__menu-item">
                            <a href="/partners" className="nav__menu-link">партнерам</a>
                        </div>

                        <div className="nav__menu-item">
                            <a href="career" className="nav__menu-link">карьера</a>
                        </div>

                    </div>

                    <div className="nav__my-account">
                        <button className="nav__my-account-btn">
                            Личный кабинет
                        </button>
                    </div>
                </div>

                <div onClick={handleMenuClick} className="nav__menu-icon">
                    <img src={menuIcon} alt="" />
                </div>
            </nav>

            <nav>
                <div className={"nav__adaptive-wrapper " + (sideVisible ? "side__visible " : "")}>
                    <div className="nav_adaptive__items-wrapper">
                        <ul>
                            <li className="nav_adaptive__item">
                                <a href="/">
                                    главная
                                </a>
                            </li>
                            <li className="nav_adaptive__item">
                                <a href="/activities">
                                    что мы делаем
                                </a>
                            </li>
                            <li className="nav_adaptive__item">
                                <a href="/partners">
                                    партнерам
                                </a>
                            </li>
                            
                            <li className="nav_adaptive__item">
                                <a href="/career">
                                    карьера
                                </a>
                            </li>
                        </ul>
                    </div>
                </div> 
            </nav>
        </div>
    )
}