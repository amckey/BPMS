import React from 'react';
import {useMediaQuery} from 'react-responsive';
import {Link} from 'react-router-dom';
import styles from './Catalog.module.scss';
import {readyModels, futureModels} from "../../fixtures/data";
import Draft from '../../assets/draft.jpg';

const Catalog = ({catalogRef}) => {
    // const isMobile = useMediaQuery({maxWidth: 767});
    const isTablet = useMediaQuery({maxWidth: 1023});
    const individual = [
        {
            number: '1',
            title: 'Наш проект, наше производство',
            desc: 'в соответствии с вашими требованиями, наша компания подготовит для вас индивидуальный проект, пройдет все необходимые сертификации, а также, займется производством лодки по подготовленному проекту.'
        },
        {
            number: '2',
            title: 'Ваш проект, наше производство',
            desc: 'При наличии уже готового проекта лодки, наша компания займется производством лодки по подготовленному проекту.'
        },
        {
            number: '3',
            title: 'Наш проект, ваше производство',
            desc: 'Наша компания подготовит проект и пройдет все необходимые сертификации, а вы возьмете этап производства на себя'
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
        return (
            <li key={index}>
                <div className={styles.menu_item}>
                    <div className={styles.menu_image}>
                        <img src={item.main.picture} alt="boat"/>
                    </div>
                    <div className={styles.menu_info}>
                        <h3>{item.main.title}</h3>
                        <div className={styles.menu_text}>
                            {item.main.metal && <p>Метал: {item.main.metal}</p>}
                            {item.main.motor && <p>Мотор: {item.main.motor}</p>}
                            {item.main.fuelTank && <p>Топл. бак: {item.main.fuelTank}</p>}
                        </div>
                        <div className={styles.menu_button}>
                            {/*<button onClick={() => push(`/boats/${item.main.short_link}`)}>Просмотреть</button>*/}
                            <Link to={`/boats/${item.main.short_link}`}>Просмотреть</Link>
                        </div>
                    </div>
                </div>
            </li>
        )
    })

    const futureModelsItems = futureModels.map((item, index) => {
        return (
            <li key={index}>
                <div className={styles.menu_item}>
                    <div className={styles.menu_image}>
                        <img src={item.main.picture} alt="boat"/>
                    </div>
                    <div className={styles.menu_info}>
                        <h3>{item.main.title}</h3>
                        <div className={styles.menu_text}>
                            {item.main.metal && <p>Метал: {item.main.metal}</p>}
                            {item.main.motor && <p>Мотор: {item.main.motor}</p>}
                            {item.main.fuelTank && <p>Топл. бак: {item.main.fuelTank}</p>}
                        </div>
                        <div className={styles.menu_button}>
                            <Link to={`/boats/${item.main.short_link}`}>Просмотреть</Link>
                        </div>
                    </div>
                </div>
            </li>
        )
    })

    return (
        <div className={styles.catalog}>
            <div className={styles.catalog_container} ref={catalogRef}>
                <h2>Каталог</h2>
                <div className={styles.catalog_section}>
                    <h3>Готовые модели</h3>
                    <p className={styles.catalog_desc}>ниже представдлены модели лодок, которые прошли все необходимые сертификации и готовы к продаже прямо сейчас</p>
                    <div className={styles.catalog_menu}>
                        <ul>
                            {readyModelsItems}
                        </ul>
                    </div>
                </div>
                <div className={styles.catalog_section}>
                    <h3>Модели, проходящие сертификацию</h3>
                    <p className={styles.catalog_desc}>ниже представдлены модели лодок, которые в данный момент находятся в процессе прохождения необходимых сертификаций и будут доступны для продажи в ближайшее время</p>
                    <div className={styles.catalog_menu}>
                        <ul>
                            {futureModelsItems}
                        </ul>
                    </div>
                </div>
                <div className={styles.catalog_section_individual}>
                    <h3>Индивидуальные проекты</h3>
                    <p className={styles.catalog_desc}>наша компания занимается индивидуальными проектами, ниже представлены варианты сотрудничества с нами</p>
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
                        <p>мы гибко подходим к требованиям наших клиентов и всегда готовы найти решение в соответствии с любыми требованиями</p>
                        <div className={styles.individual_button}>
                            <Link className={styles.button} to="/learn_more" replace>узнать больше</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Catalog;
