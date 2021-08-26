import React from 'react';
import styles from './WhyUs.module.scss';
import {whyUs} from "../../fixtures/data";

const WhyUs = ({whyUsRef}) => {
    const whyUsItems = whyUs.map((item, index) => {
        return (
            <li key={index}>
                <div className={styles.whyUs_item}>
                    <div className={styles.whyUs_heading}>
                        <h3>{item.title}</h3>
                        <img src={item.icon} alt="whyUs"/>
                    </div>
                    <p>{item.desc}</p>
                </div>
            </li>
        )
    })
    return (
        <div className={styles.whyUs}>
            <div className={styles.whyUs_container} ref={whyUsRef}>
                <h2>Почему мы?</h2>
                <div className={styles.whyUs_list}>
                    <ul>
                        {whyUsItems}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default WhyUs;