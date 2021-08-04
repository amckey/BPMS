import React, {useState} from 'react';
import styles from './ContactUs.module.scss';
import {useMediaQuery} from 'react-responsive';
// import MessageModal from "../MessageModal/MessageModal";
import Cross from "../../assets/cross.svg";
import Tick from "../../assets/tick.svg";

const ContactUs = () => {
    const isMobile = useMediaQuery({maxWidth: 767});
    const [toggleModal, setToggleModal] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setToggleModal(true);
    }

    return (
        <div className={styles.contact}>
            {toggleModal && <div className={styles.contact_overlay} onClick={() => setToggleModal(false)}></div>}
            {toggleModal && <div className={styles.contact_modal}>
                <div className={styles.modal}>
                    <div className={styles.modal_cross}>
                        <img src={Cross} alt="cross"/>
                    </div>
                    <h3>Сообщение отправлено!</h3>
                    <div className={styles.modal_img}>
                        <img src={Tick} alt="tick"/>
                    </div>
                    <p>
                        Мы получили ваше сообщение и свяжемся с вами в течение следующих 24 часов!
                    </p>
                    <div className={styles.modal_button}>
                        <button>OK</button>
                    </div>
                </div>
            </div>}
            <div className={styles.contact_container}>
                <h2>Связаться с нами</h2>
                <div className={styles.contact_form}>
                    <iframe
                    title="form"
                    name="hidden_iframe"
                    id="hidden_iframe"
                    style={{display: 'none'}}
                    >
                    </iframe>
                    <form
                        // action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSc893qm2MIGNwGzcMpxeQLebiMbkXw3-1qtg8t2BMeK5Wdv_g/formResponse"
                        // method="post"
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