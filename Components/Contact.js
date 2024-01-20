import React, { useContext, useRef, useState } from 'react';
import { getLogger } from '../Logging/log-util';
import classes from './Contact.module.css';
import GlobalContext from '@/Store/GlobalContext';

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
        <section>
            <h2>CONTACT</h2>
            <form ref={form} onSubmit={sendEmail} id={classes.contactForm}>
                <div className={classes.formHeader}>
                    <input type="text" name="user_name" placeholder="NOM" required></input>
                    <input type="email" name="user_mail" placeholder="MAIL" required></input>
                </div>
                <div className={classes.formBody}>
                    <textarea name="message" placeholder="MESSAGE" required></textarea>
                </div>
                <div className={classes.formFooter}>
                    <button className="primary-button" disabled={isDisabled}>ENVOYEZ</button>
                </div>
            </form>
        </section>
    );
};

export default Contact;