import React, {useState} from 'react';
import axios from 'axios';
import styles from './ContactUs.module.scss';
import {useMediaQuery} from 'react-responsive';
import i18next from '../../fixtures/i18next';
import {useTranslation} from 'react-i18next';
import Cross from "../../assets/cross.svg";
import Tick from "../../assets/tick.svg";

const ContactUs = ({contactRef}) => {
    const {t} = useTranslation();
    const isMobile = useMediaQuery({maxWidth: 767});
    const [toggleModal, setToggleModal] = useState(false);
    const [form, setForm] = useState({
        name: '',
        surname: '',
        contact: '',
        message: ''
    })

    const handleTextField = e => {
        setForm({...form, [e.target.id]: e.target.value})
    };

    const handleSubmit = (e) => {
        const googleFormEndpoint = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSc893qm2MIGNwGzcMpxeQLebiMbkXw3-1qtg8t2BMeK5Wdv_g/formResponse";
        let request = new XMLHttpRequest();
        request.open('POST', googleFormEndpoint, true);

        request.onload = function() {
            setToggleModal(true);
            setForm({
                    name: '',
                    surname: '',
                    contact: '',
                    message: ''
                })
        };

        request.onerror = function() {
            console.log("err");
        };

        request.send(form);
        e.preventDefault();
        
    }

    return (
        <div className={styles.contact}>
            {toggleModal && <div className={styles.contact_overlay} onClick={() => setToggleModal(false)}></div>}
            {toggleModal && <div className={styles.contact_modal}>
                <div className={styles.modal}>
                    <div className={styles.modal_cross}>
                        <img src={Cross} alt="cross" onClick={() => setToggleModal(false)}/>
                    </div>
                    <h3>{i18next.t('messageSent')}</h3>
                    <div className={styles.modal_img}>
                        <img src={Tick} alt="tick"/>
                    </div>
                    <p>
                        {i18next.t('messageReceived')}
                    </p>
                    <div className={styles.modal_button}>
                        <button onClick={() => setToggleModal(false)}>OK</button>
                    </div>
                </div>
            </div>}
            <div className={styles.contact_container} ref={contactRef}>
                <h2>{i18next.t('contactUs')}</h2>
                <div className={styles.contact_form}>
                    <iframe
                    title="hidden_iframe"
                    name="hidden_iframe"
                    id="hidden_iframe"
                    style={{visibility: 'hidden', height: '1px'}}
                    >
                    </iframe>
                    <form
                        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSc893qm2MIGNwGzcMpxeQLebiMbkXw3-1qtg8t2BMeK5Wdv_g/formResponse"
                        method="POST"
                        target="hidden_iframe"
                        mode
                        onSubmit={handleSubmit}>
                        {!isMobile ? <div className={styles.form_name}>
                            <input name="entry.990647386" type="text" id="name" placeholder={i18next.t('name')} className={styles.form_input} required value={form.name} onChange={handleTextField}/>
                            <input name="entry.2005620554" type="text" id="surname" placeholder={i18next.t('surname')} className={styles.form_input} required value={form.surname} onChange={handleTextField}/>
                        </div> :
                            <><div className={styles.form_name}>
                                <input name="entry.990647386" type="text" id="name" placeholder={i18next.t('name')} className={styles.form_input} required value={form.name} onChange={handleTextField}/>
                            </div>
                            <div className={styles.form_name}>
                                <input name="entry.2005620554" type="text" id="surname" placeholder={i18next.t('surname')} className={styles.form_input} required value={form.surname} onChange={handleTextField}/>
                            </div></>}
                        <div className={styles.form_contact}>
                            <input name="entry.1045781291" type="text" id="contact" placeholder={i18next.t('emailAndPhone')} className={styles.form_input} required value={form.contact} onChange={handleTextField}/>
                        </div>
                        <div className={styles.form_message}>
                            <textarea name="entry.839337160" cols="30" rows="10" id="message" placeholder={i18next.t('message')} className={styles.form_input} required value={form.message} onChange={handleTextField}></textarea>
                        </div>
                        <div className={styles.form_button}>
                            <button type="submit">{i18next.t('send')}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;