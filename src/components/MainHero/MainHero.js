import React from 'react';
import styles from './MainHero.module.scss';
import Header from "../Header/Header";
import Background from '../../assets/main.jpg';


const MainHero = () => {
    return (
        <div className={styles.hero} style={{
            backgroundImage: `url(${Background})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
            <Header/>
            <div className={styles.hero_container}>
                <h1>Проектирование и производство лодок</h1>
                <h3>Мы занимаемся производством и продажей алюминиевых лодок, адаптированных для эксплуатации в морях и океанах</h3>
                <div className={styles.hero_button}>
                    <button>Получить предложение</button>
                </div>
            </div>
            <div className={styles.hero_gradient}></div>
        </div>
    )
}

export default MainHero;