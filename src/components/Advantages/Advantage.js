import React from 'react';
import styles from './Advantages.module.scss';
import {advantages} from "../../fixtures/data";
// import {useMediaQuery} from 'react-responsive';
import Background from "../../assets/sea.png";


const Advantages = ({advantagesRef}) => {
    // const isMobile = useMediaQuery({maxWidth: 767});
    const advantagesItems = advantages.map((item, index) => {
        return (
            <li key={index}>
                <div className={styles.advantages_item}>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                </div>
            </li>
        )
    })

    return (
        <div className={styles.advantages} style={{
            backgroundImage: `url(${Background})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
            <div className={styles.advantages_container} ref={advantagesRef}>
                <h2>Наши преимущества</h2>
                 <div className={styles.advantages_list}>
                    <ul>
                        {advantagesItems}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Advantages;