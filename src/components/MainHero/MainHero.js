import React from 'react';
import i18next from '../../fixtures/i18next';
import {Link} from 'react-router-dom';
import styles from './MainHero.module.scss';
import Header from "../Header/Header";
import Background from '../../assets/alm590-4.jpg';
import {useTranslation} from 'react-i18next';

const MainHero = () => {
    const {t} = useTranslation();
    return (
        <div className={styles.hero} style={{
            backgroundImage: `url(${Background})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
            <Header/>
            <div className={styles.hero_container}>
                <div className={styles.hero_text}>
                    <h1>{i18next.t('heroTitle')}</h1>
                    <h3>{i18next.t('heroSubtitle')}</h3>
                    <div className={styles.hero_button}>
                        <Link className={styles.hero_link} to="/get_promotion" replace>{i18next.t('getPromotion')}</Link>
                    </div>
                </div>
            </div>
            <div className={styles.hero_overlay}></div>
            <div className={styles.hero_gradient}></div>
        </div>
    )
}

export default MainHero;