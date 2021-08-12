import React from 'react';
import styles from './Reviews.module.scss';
import {reviews} from "../../fixtures/data";
import Background from "../../assets/sea.png";
import Star from '../../assets/star.svg';

const Reviews = ({reviewsRef}) => {
    const reviewsItems = reviews.map((item, index) => {
        return (
            <li key={index}>
                <div className={styles.reviews_item}>
                    <div className={styles.reviews_heading}>
                        <div className={styles.reviews_user} >
                            <div className={styles.reviews_avatar}>
                                <img src={item.avatar} alt="avatar"/>
                            </div>
                            <div className={styles.reviews_name}>
                                <h4>{item.name}</h4>
                                <p>{item.info}</p>
                            </div>
                        </div>
                        <div className={styles.reviews_boat}>
                            <h4>{item.title}</h4>
                            <div className={styles.reviews_stars}>
                                <img src={Star} alt="start"/>
                                <img src={Star} alt="start"/>
                                <img src={Star} alt="start"/>
                                <img src={Star} alt="start"/>
                                <img src={Star} alt="start"/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.reviews_desc}>
                        <p>{item.desc}</p>
                    </div>
                </div>
            </li>
        )
    })
    return (
        <div className={styles.reviews} style={{
            backgroundImage: `url(${Background})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
            <div className={styles.reviews_container} ref={reviewsRef}>
                <h2>Отзывы</h2>
                <div className={styles.reviews_list}>
                    <ul>
                        {reviewsItems}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Reviews;