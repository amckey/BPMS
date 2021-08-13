import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import styles from './BoatHero.module.scss';
import Header from "../Header/Header";


const BoatHero = ({item}) => {
    const [readyModelsState, setReadyModelsState] = useState(null);
    useEffect(() => {
        if(item) {
            setReadyModelsState(item)
        }
    }, [item])

    return (
        <div className={styles.hero}
             style={readyModelsState && !readyModelsState.video ? {
                 backgroundImage: `url(${readyModelsState && readyModelsState.main.picture})`,
                 backgroundRepeat: 'no-repeat',
                 backgroundSize: 'cover'
             } : undefined}>
            <Header/>
            {readyModelsState && readyModelsState.video ?
                <video autoPlay loop muted className={styles.video} playsInline src={readyModelsState && readyModelsState.video}>
                <source src={readyModelsState && readyModelsState.video} type="video/mp4"/>
            </video> : null}
            <div className={styles.hero_container}>
                <div className={styles.hero_text}>
                    <h1>{readyModelsState && readyModelsState.main.title}</h1>
                    <h3>{readyModelsState && readyModelsState.main.desc}</h3>
                    <div className={styles.hero_button}>
                        <Link className={styles.hero_link} to="/get_promotion" replace>Получить предложение</Link>
                    </div>
                </div>
            </div>
            <div className={styles.hero_overlay}></div>
            <div className={styles.hero_gradient}></div>
        </div>
    )
}

export default BoatHero;