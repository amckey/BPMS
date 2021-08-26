import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useMediaQuery} from 'react-responsive';
import styles from './Header.module.scss';
import Logo from '../../assets/logo.svg';
import Arrow from '../../assets/arrow.svg';
import Burger from '../../assets/burger.svg';
import {useTranslation} from 'react-i18next';

const Header = () => {
    const isMobile = useMediaQuery({maxWidth: 767});
    const [toggleLanguages,setToggleLanguages] = useState(false);
    const [toggleBurger, setToggleBurger] = useState(false);
    const [language, setLanguage] = useState('Русский');
    const {i18n} = useTranslation();
    const nav = [
        {
            title: 'Каталог',
            to: '/catalogue',
        },
        {
            title: 'Преимущества',
            to: '/advantages',
        },
        {
            title: 'Почему мы?',
            to: '/why_us',
        }
        // {
        //     title: 'Отзывы',
        //     to: '/reviews',
        // }
        ,
        {
            title: 'Связаться с нами',
            to: '/contacts',
        }
    ]

    const languages = [
        {language: 'Русский', lng: 'ru'},
        {language: 'Latviski', lng: 'lv'},
        {language: 'English', lng: 'en'}
    ]
    const handleLanguage = (language, lng) => {
        setLanguage(language);
        i18n.changeLanguage(lng);
        console.log(lng);
    }

    const languageItems = languages.map((item, index) => {
        return (
            <li onClick={() => handleLanguage(item.language, item.lng)}>
                {item.language}
            </li>
        )
    })
    
    const navList = nav.map((item, index) => {
        return (
            <li key={index}><Link to={item.to} replace onClick={() => setToggleBurger(false)}>{item.title}</Link></li>
        )
    })

    const handleToggleLanguages = () => {
        setToggleLanguages(!toggleLanguages);
    }
    const handleToggleBurger = () => {
        setToggleBurger(!toggleBurger);
    }
    
    return (
        <header className={styles.header}>
            {toggleBurger ? <div className={styles.overlay} id="overlay" onClick={handleToggleBurger}></div> : null}
            <div className={styles.header_container}>
                {isMobile && <div className={styles.header_burger}>
                    <img src={Burger} alt="burger" onClick={handleToggleBurger}/>
                    <div className={styles.toggle_burger} style={toggleBurger ? {opacity: 1} : {opacity: 0, top:'20px', zIndex: '-3'}}>
                        <ul>
                            {navList}
                        </ul>
                    </div>
                </div>}
                <div className={styles.header_logo}>
                    <Link to="/" replace><img src={Logo} alt="logo"/></Link>
                </div>
                {!isMobile && <nav className={styles.header_nav}>
                    <ul>{navList}</ul>
                </nav>}
                <div className={styles.header_languages} onClick={handleToggleLanguages}>
                    <div>{language}</div>
                    <div className={styles.arrow}>
                        <img src={Arrow} alt="arrow" style={toggleLanguages ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0)'}}/>
                    </div>
                    <div className={styles.toggle_languages} style={toggleLanguages ? {opacity: 1} : {opacity: 0, top:'20px', zIndex: '-3'}}>
                        <ul>
                            {languageItems}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;