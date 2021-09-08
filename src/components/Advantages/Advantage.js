import React from 'react';
import styles from './Advantages.module.scss';
import Background from "../../assets/sea.png";
import i18next from '../../fixtures/i18next';
import {useTranslation} from 'react-i18next';


const Advantages = ({advantagesRef}) => {
    const {t} = useTranslation();
    const advantages = [
    {
        title: i18next.t('quality'),
        desc: i18next.t('qualityDesc')
    },
    {
        title: i18next.t('responsibility'),
        desc:  i18next.t('responsibilityDesc')
    },
    {
        title: i18next.t('guarantee'),
        desc:  i18next.t('guaranteeDesc')
    },
    {
        title: i18next.t('individualApproach'),
        desc:  i18next.t('individualApproachDesc')
    },
  ]

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
                <h2>{i18next.t('ourAdvantages')}</h2>
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