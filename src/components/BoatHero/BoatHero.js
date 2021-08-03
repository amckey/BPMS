import React from 'react';
import styles from './BoatHero.module.scss';
import Header from "../Header/Header";
import Background from '../../assets/heroBoat.jpg';


const BoatHero = () => {
    return (
        <div className={styles.hero} style={{
            backgroundImage: `url(${Background})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
            <Header/>
            <div className={styles.hero_container}>
                <h1>Almarcraft</h1>
                <h3>Катер идеально подходит для любительской рыбалки и прогулок</h3>
                <div className={styles.hero_button}>
                    <button>Получить предложение</button>
                </div>
            </div>
            <div className={styles.hero_gradient}></div>
        </div>
    )
}

export default BoatHero;