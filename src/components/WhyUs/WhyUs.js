import React from 'react';
import styles from './WhyUs.module.scss';
import i18next from '../../fixtures/i18next';
import {useTranslation} from 'react-i18next';
import BoatIcon1 from '../../assets/certified.png';
import BoatIcon2 from '../../assets/nadezhnost.png';
import BoatIcon3 from '../../assets/universalnost.png';
import BoatIcon4 from '../../assets/funkcionalnost.png';

const WhyUs = ({whyUsRef}) => {
    const {t} = useTranslation();
    const whyUs = [
    {
            title: i18next.t('certifications'),
            desc: i18next.t('certificationsDesc'),
            icon: BoatIcon1
        },
        {
            title: i18next.t('reliability'),
            desc: i18next.t('reliabilityDesc'),
            icon: BoatIcon2
        },
        {
            title: i18next.t('universality'),
            desc: i18next.t('universalityDesc'),
            icon: BoatIcon3
        },
        {
            title: i18next.t('functionality'),
            desc: i18next.t('functionalityDesc'),
            icon: BoatIcon4
    }
]
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
                <h2>{i18next.t('whyUs')}</h2>
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