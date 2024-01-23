import React, { useContext, useRef, useState } from 'react';
import { getLogger } from '../Logging/log-util';
import classes from './Contact.module.css';
import GlobalContext from '@/Store/GlobalContext';
import Link from 'next/link';

const Contact = () => {
    const logger = getLogger('Contact');

    const form = useRef();
    const { setIsLoading } = useContext(GlobalContext);

    const { setShowPopupConfirmation } = useContext(GlobalContext);
    const { setShowPopupError } = useContext(GlobalContext);
    const { setShowPopupContactFormIncorrect } = useContext(GlobalContext);
    const [isDisabled, setIsDisabled] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsDisabled(true);
        setIsLoading(true);
        const mail = {
            name: form.current[0].value,
            mailAdress: form.current[1].value,
            message: form.current[2].value,
        }
        if (!mail.name || mail.name === ""
            || !mail.mailAdress || mail.mailAdress === "" || !mail.mailAdress.includes === "@"
            || !mail.message || mail.message === ""
        ) {
            logger.info('Formulaire envoie de mail non valide')
            setIsLoading(false);
            setShowPopupContactFormIncorrect(true);
            setIsDisabled(false);
            return;
        }
        fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify({
                name: form.current[0].value,
                mailAdress: form.current[1].value,
                message: form.current[2].value,
            }),
            headers: { 'Content-Type': 'application/json' }

        }).then(response => {
            if (response.status === 201) {
                setIsLoading(false);
                setShowPopupConfirmation(true);
                emptyForm();
            } else {
                setIsLoading(false);
                setShowPopupError(true);

            }
        }).finally(() => setIsDisabled(false))
    }

    const emptyForm = () => {
        form.current[0].value = "";
        form.current[1].value = "";
        form.current[2].value = "";
    }

    return (
        <section className={classes.contactSection}>
            <div className={classes.formWrapper}>
                <h2>Nous contacter</h2>
                <form ref={form} className={classes.form}>
                    <div className={classes.fieldsWrapper}>
                        <div className={classes.formGroup}>
                            <label htmlFor='name'>Nom</label>
                            <input type='text' name='name' id='name' placeholder='Nom' required></input>
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor='firstName'>Prénom</label>
                            <input type='text' name='firstName' id='firstName' placeholder='Prénom' required></input>
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor='mail'>Mail</label>
                            <input type='email' name='mail' id='mail' placeholder='Adresse mail' pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" required></input>
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor='tel'>Téléphone</label>
                            <input type='text' name='tel' id='tel' placeholder='Téléphone' pattern="[0-9]+" required></input>
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor='message'>Message</label>
                            <textarea type='textarea' id='message' name='message' placeholder='Message' rows={8} required></textarea>
                        </div>
                    </div>

                    <div className={classes.buttonWrapper}>
                        <button className='primary-button' type='submit'>Confirmer</button>
                    </div>
                </form>
            </div >
        </section>
    );
};

export default Contact;