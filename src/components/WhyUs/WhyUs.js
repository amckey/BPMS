import React from 'react';
import styles from './WhyUs.module.scss';
import {whyUs} from "../../fixtures/data";
import {useMediaQuery} from 'react-responsive';

const WhyUs = () => {
    const isMobile = useMediaQuery({maxWidth: 767});
    const whyUsItems = whyUs.map((item, index) => {
        return (
            <li key={index}>
                <div className={styles.whyUs_item}>
                    <div className={styles.whyUs_heading}>
                        <h3>{item.title}</h3>
                        {!isMobile && <img src={item.icon} alt="whyUs"/>}
                    </div>
                    <p>{item.desc}</p>
                </div>
            </li>
        )
    })
    return (
        <div className={styles.whyUs}>
            <div className={styles.whyUs_container}>
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