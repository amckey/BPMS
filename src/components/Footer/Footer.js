import React from 'react';
import styles from './Footer.module.scss';
import i18next from '../../fixtures/i18next';
import {useTranslation} from 'react-i18next';
import Logo from '../../assets/big_logo.svg';
import Facebook from '../../assets/facebook.svg';
import Instagram from '../../assets/instagram.svg';
import Youtube from '../../assets/youtube.svg';
import Location from '../../assets/location.svg';
import Phone from '../../assets/phone.svg';
import Letter from '../../assets/letter.svg';
import Agency from '../../assets/EAIC.svg';

const Footer = () => {
    const {t} = useTranslation();
    const contacts = [
    {
        street: 'Jaunā iela 74, LV-3401, Liepāja, Latvija',
        phone: '+371 29984546 (Pavel Pylskij)',
        email: 'bpm_s@inbox.lv',
        contacts: i18next.t('contactsInLatvia')
    },
    {
        // street: 'Jaunā iela 74, LV-3401, Liepāja, Latvija',
        phone: '+47 456 66 111 (Vlad Misko)',
        email: 'bpm_s@inbox.lv',
        contacts: i18next.t('contactsInNorway')
    },
    {
        // street: `Jaunā iela 74,LV-3401, Liepāja, Latvija`,
        phone: '+358 442550505 (Jaakko Jätinvuori)',
        email: 'bpm_s@inbox.lv',
        contacts: i18next.t('contactsInFinland')
    }
]
    const contactItems = contacts.map((item, index) => {
        return (
                <li key={index}>
                    <div className={styles.contacts_cart}>
                        <h4>{item.contacts}</h4>
                        <div className={styles.contacts_details}>
                            {item.street && <div className={styles.contacts_item}>
                                <img src={Location} alt="location"/>
                                <div>
                                    <p>{item.city}</p>
                                    <p>{item.street}</p>
                                </div>
                            </div>}
                            <div className={styles.contacts_item}>
                                <img src={Phone} alt="phone"/>
                                <div>
                                    <p>{item.phone}</p>
                                </div>
                            </div>
                            <div className={styles.contacts_item}>
                                <img src={Letter} alt="letter"/>
                                <div>
                                    <p>{item.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            )
    })
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_container}>
                <div className={styles.footer_top}>
                    <div className={styles.footer_logo}>
                        <div className={styles.footer_image}>
                            <img src={Logo} alt="logo"/>
                        </div>
                        <div className={styles.footer_socials}>
                            <a href="https://www.facebook.com/almarcraft/" target="_blank" rel="noreferrer"><img src={Facebook} alt="facebook"/></a>
                            <a href="https://instagram.com/balticpmservice" target="_blank" rel="noreferrer" ><img src={Instagram} alt="instagram"/></a>
                            <a href="https://www.youtube.com/channel/UCm83nxYg89e1-jymrBW3Qfw" target="_blank" rel="noreferrer" ><img src={Youtube} alt="youtube"/></a>
                        </div>
                    </div>
                    <div className={styles.footer_contacts}>
                        <ul>
                            {contactItems}
                        </ul>
                    </div>
                </div>
                <div className={styles.footer_bottom}>
                    <div>
                        <div className={styles.footer_sign}>
                            <img src={Agency} alt="agency"/>
                        </div>
                            <div className={styles.footer_agency}>
                                <p>European Agency of Inspecting and Certification OU</p>
                                <p>Notifed Body 2702</p>
                            </div>
                    </div>
                    <div className={styles.footer_developers}>
                        <p>{i18next.t('webDevelopment')}: <span><a href="https://webbynavia.no">webbynavia.no</a></span></p>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer;