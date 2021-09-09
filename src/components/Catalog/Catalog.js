import React from 'react';
import {useMediaQuery} from 'react-responsive';
import i18next from '../../fixtures/i18next';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import styles from './Catalog.module.scss';
import {readyModels, futureModels} from "../../fixtures/data";
import Draft from '../../assets/draw.jpg';

const Catalog = ({catalogRef}) => {
    const {t} = useTranslation();
    const isTablet = useMediaQuery({maxWidth: 1023});
    const individual = [
        {
            number: '1',
            title: i18next.t('ourProjectOurProduction'),
            desc:  i18next.t('ourProjectOurProductionDesc')
        },
        {
            number: '2',
            title: i18next.t('yourProjectOurProduction'),
            desc: i18next.t('yourProjectOurProductionDesc')
        },
        {
            number: '3',
            title: i18next.t('ourProjectYourProduction'),
            desc: i18next.t('ourProjectYourProductionDesc')
        },
    ]
    
    const individualCards = individual.map((item, index) => {
        return (
            <li key={index}>
               <div className={styles.individual_card}>
                   <div className={styles.individual_title}>
                       <div className={styles.individual_number}>{item.number}</div>
                       <h3>{item.title}</h3>
                   </div>
                   <div className={styles.individual_desc}>
                       <p>{item.desc}</p>
                   </div>
               </div> 
            </li>
        )
    })

    const readyModelsItems = readyModels.map((item, index) => {
        const title = item?.main.title === 'almarcraft590' ? i18next.t('almarcraft590') :
        item?.main.title === 'almarcraft590targa' ? i18next.t('almarcraft590withTarga') :
        item?.main.title === 'almarcraft470' ? i18next.t('almarcraft470') : 
        i18next.t('almarcraft590withCabin');
        return (
            <li key={index}>
                <div className={styles.menu_item}>
                    <div className={styles.menu_image}>
                        <img src={item.main.picture} alt="boat"/>
                    </div>
                    <div className={styles.menu_info}>
                        <h3>{title}</h3>
                        <div className={styles.menu_text}>
                            {item.main.metal && <p>{i18next.t('metal')}: {item.main.metal && i18next.t('aluminium')}</p>}
                            {item.main.motor && <p>{i18next.t('engine')}: {item.main.motor}</p>}
                            {item.main.fuelTank && <p>{i18next.t('fuelTank')}: {item.main.fuelTank === 'by request' ? i18next.t('byRequest') : '-'}</p>}
                        </div>
                        <div className={styles.menu_button}>
                            <Link to={`/boats/${item.main.short_link}`}>{i18next.t('view')}</Link>
                        </div>
                    </div>
                </div>
            </li>
        )
    })

    const futureModelsItems = futureModels.map((item, index) => {
        const title = item?.main.title === 'almarcraft590' ? i18next.t('almarcraft590') :
        item?.main.title === 'almarcraft590targa' ? i18next.t('almarcraft590withTarga') :
        item?.main.title === 'almarcraft470' ? i18next.t('almarcraft470') : 
        i18next.t('almarcraft590withCabin');
        return (
            <li key={index}>
                <div className={styles.menu_item}>
                    <div className={styles.menu_image}>
                        <img src={item.main.picture} alt="boat"/>
                    </div>
                    <div className={styles.menu_info}>
                        <h3>{title}</h3>
                        <div className={styles.menu_text}>
                            {item.main.metal && <p>{i18next.t('metal')}: {item.main.metal && i18next.t('aluminium')}</p>}
                            {item.main.motor && <p>{i18next.t('engine')}: {item.main.motor}</p>}
                            {item.main.fuelTank && <p>{i18next.t('fuelTank')}: {item.main.fuelTank === 'by request' ? i18next.t('byRequest') : '-'}</p>}
                        </div>
                        <div className={styles.menu_button}>
                            <Link to={`/boats/${item.main.short_link}`}>{i18next.t('view')}</Link>
                        </div>
                    </div>
                </div>
            </li>
        )
    })

    return (
        <div className={styles.catalog}>
            <div className={styles.catalog_container} ref={catalogRef}>
                <h2>{i18next.t('catalogue')}</h2>
                <div className={styles.catalog_section}>
                    <h3>{i18next.t('readyModels')}</h3>
                    <p className={styles.catalog_desc}>{i18next.t('readyForSaleModelsDesc')}</p>
                    <div className={styles.catalog_menu}>
                        <ul>
                            {readyModelsItems}
                        </ul>
                    </div>
                </div>
                <div className={styles.catalog_section}>
                    <h3>{i18next.t('certificationPassingModels')}</h3>
                    <p className={styles.catalog_desc}>{i18next.t('certificationPassingModelsDesc')}</p>
                    <div className={styles.catalog_menu}>
                        <ul>
                            {futureModelsItems}
                        </ul>
                    </div>
                </div>
                <div className={styles.catalog_section_individual}>
                    <h3>{i18next.t('individualProjects')}</h3>
                    <p className={styles.catalog_desc}>{i18next.t('individualProjectsDesc')}</p>
                    {!isTablet ? <div className={styles.individual_content}>
                        <div className={styles.individual_cards}>
                            <ul>{individualCards}</ul>
                        </div>
                        <div className={styles.individual_img}>
                            <img src={Draft} alt="draft"/>
                        </div>
                    </div> :
                        <div className={styles.individual_content}>
                            <div className={styles.individual_img}>
                                <img src={Draft} alt="draft"/>
                            </div>
                            <div className={styles.individual_cards}>
                                <ul>{individualCards}</ul>
                            </div>
                        </div>
                    }
                    <div className={styles.individual_add}>
                        <p>{i18next.t('elasticApproach')}</p>
                        <div className={styles.individual_button}>
                            <Link className={styles.button} to="/learn_more" replace>{i18next.t('learnMore')}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Catalog;
