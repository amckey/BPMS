import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import styles from './BoatGallery.module.scss';
import {useMediaQuery} from "react-responsive";
import {useTranslation} from 'react-i18next';
import i18next from "../../fixtures/i18next";

const BoatGallery = ({item}) => {
    const {t} = useTranslation();
    const isMobile = useMediaQuery({maxWidth: 767});
    const [readyModelsState, setReadyModelsState] = useState(null);
    useEffect(() => {
        if(item) {
            setReadyModelsState(item)
        }
    }, [item])
    const pictures = readyModelsState && readyModelsState.pictures.map((item, index) => {
        const classNames = `pic-${index + 1}`;
        if(!isMobile) {
            return (
                <li className={classNames} style={{gridArea: `pic-${index + 1}`}} key={index}>
                    <img src={item} alt="boat"/>
                </li>
            )
        }
        return (
            <li className={styles.mobile_img} key={index}>
                <img src={item} alt="boat"/>
            </li>
        )

    })
    return (
        <div className={styles.gallery}>
            <div className={styles.gallery_container}>
                <div className={styles.gallery_list}>
                    <ul>
                        {pictures}
                    </ul>
                </div>
                <div className={styles.gallery_button}>
                    <Link to="/contacts" replace className={styles.gallery_link}>{i18next.t('getPromotion')}</Link>
                </div>
            </div>
        </div>
    )
}

export default BoatGallery;