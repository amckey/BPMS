import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import styles from './BoatHero.module.scss';
import Header from "../Header/Header";
import {useTranslation} from 'react-i18next';
import i18next from "../../fixtures/i18next";


const BoatHero = ({item}) => {
    const {t} = useTranslation(); 
    const [readyModelsState, setReadyModelsState] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if(item) {
            setReadyModelsState(item)
        }
    }, [item, loading])
    const handleLoad = () => {
        setLoading(false);
        console.log('loaded');
        console.log(loading);
    }

    const title = readyModelsState?.main.title === 'almarcraft590' ? i18next.t('almarcraft590') :
    readyModelsState?.main.title === 'almarcraft590targa' ? i18next.t('almarcraft590withTarga') :
    readyModelsState?.main.title === 'almarcraft470' ? i18next.t('almarcraft470') : 
    i18next.t('almarcraft590withCabin');

    const desc = readyModelsState?.main.desc === 'almarcraft590' ? i18next.t('almarcraft590Desc') :
    readyModelsState?.main.title ==='almarcraft590targa' ? i18next.t('almarcraft590withTargaDesc') :
    readyModelsState?.main.title === 'almarcraft470' ? i18next.t('almarcraft470Desc') : 
    i18next.t('almarcraft590withCabinDesc');

    return (
        <div className={styles.hero}
             style={readyModelsState && !readyModelsState.video ? {
                 backgroundImage: `url(${readyModelsState && readyModelsState.main.picture})`,
                 backgroundRepeat: 'no-repeat',
                 backgroundSize: 'cover'
             } : undefined} >
            <Header/>
            {readyModelsState && readyModelsState.video ?
                <video autoPlay loop muted className={styles.video} playsInline src={readyModelsState && readyModelsState.video} onLoadedData={handleLoad}>
                <source src={readyModelsState && readyModelsState.video} type="video/mp4"/>
            </video> : null}
            <div className={styles.hero_container}>
                <div className={styles.hero_text}>
                    <h1>{title}</h1>
                    <h3>{desc}</h3>
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

export default BoatHero;