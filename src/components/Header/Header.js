import React, {useState} from 'react';
import {useMediaQuery} from 'react-responsive';
import styles from './Header.module.scss';
import Logo from '../../assets/logo.svg';
import Arrow from '../../assets/arrow.svg';
import Burger from '../../assets/burger.svg';

const Header = () => {
    const isMobile = useMediaQuery({maxWidth: 767});
    const [toggleLanguages,setToggleLanguages] = useState(false);
    const [toggleBurger, setToggleBurger] = useState(false);
    const [language, setLanguage] = useState('Русский');
    const nav = [
        {
            title: 'Link',
            to: '/'
        },
        {
            title: 'Link',
            to: '/'
        },
        {
            title: 'Link',
            to: '/'
        },
        {
            title: 'Link',
            to: '/'
        },
        {
            title: 'Link',
            to: '/'
        }
    ]

    const languages = [
        {language: 'Русский'},
        {language: 'Latviski'},
        {language: 'English'}
    ]
    const handleLanguage = (language) => {
        setLanguage(language);
    }

    const languageItems = languages.map((item, index) => {
        return (
            <li onClick={() => handleLanguage(item.language)}>
                {item.language}
            </li>
        )
    })
    
    const navList = nav.map((item, index) => {
        return (
            <li key={index}>{item.title}</li>
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
                    <img src={Logo} alt="logo"/>
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