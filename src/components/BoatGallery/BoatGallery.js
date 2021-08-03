import React from 'react';
import styles from './BoatGallery.module.scss';
import {readyModels} from "../../fixtures/data";
import {useMediaQuery} from "react-responsive";

const BoatGallery = () => {
    const item = readyModels[0];
    const isMobile = useMediaQuery({maxWidth: 767});
    const pictures = item.pictures.map((item, index) => {
        const classNames = `pic-${index + 1}`;
        if(!isMobile) {
            return (
                <li className={classNames} style={{gridArea: `pic-${index + 1}`}}>
                    <img src={item} alt="boat"/>
                </li>
            )
        }
        return (
            <li className={styles.mobile_img}>
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
                    <button>Получить предложение</button>
                </div>
            </div>
        </div>
    )
}

export default BoatGallery;