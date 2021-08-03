import React from 'react';
import styles from './ContactUs.module.scss';
import {useMediaQuery} from 'react-responsive';

const ContactUs = () => {
    const isMobile = useMediaQuery({maxWidth: 767});
    const handleSubmit = () => {
        // e.preventDefault();
        console.log('SENT');
    }
    return (
        <div className={styles.contact}>
            <div className={styles.contact_container}>
                <h2>Связаться с нами</h2>
                <div className={styles.contact_form}>
                    <iframe
                    name="hidden_iframe"
                    id="hidden_iframe"
                    style={{display: 'none'}}
                    >
                    </iframe>
                    <form
                        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSc893qm2MIGNwGzcMpxeQLebiMbkXw3-1qtg8t2BMeK5Wdv_g/formResponse"
                        method="post"
                        target="hidden_iframe"
                        onSubmit={handleSubmit}>
                        {!isMobile ? <div className={styles.form_name}>
                            <input name="entry.990647386" type="text" placeholder="Имя" className={styles.form_input}/>
                            <input name="entry.2005620554" type="text" placeholder="Фамилия" className={styles.form_input}/>
                        </div> :
                            <><div className={styles.form_name}>
                                <input name="entry.990647386" type="text" placeholder="Имя" className={styles.form_input}/>
                            </div>
                            <div className={styles.form_name}>
                                <input name="entry.2005620554" type="text" placeholder="Фамилия" className={styles.form_input}/>
                            </div></>}
                        <div className={styles.form_contact}>
                            <input name="entry.1045781291" type="text" placeholder="E-mail или номер телефона" className={styles.form_input}/>
                        </div>
                        <div className={styles.form_message}>
                            <textarea name="entry.839337160" id="" cols="30" rows="10" placeholder="Сообщение" className={styles.form_input}></textarea>
                        </div>
                        <div className={styles.form_button}>
                            <button type="submit">Отправить</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;