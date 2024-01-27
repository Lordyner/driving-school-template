import React, { useContext, useEffect, useRef, useState } from 'react';
import { getLogger } from '../Logging/log-util';
import classes from './Contact.module.css';
import GlobalContext from '@/Store/GlobalContext';
import Link from 'next/link';
import Image from 'next/image';

const Contact = () => {
    const logger = getLogger('Contact');

    const form = useRef();
    const { setIsLoading } = useContext(GlobalContext);

    const { setShowPopupConfirmation } = useContext(GlobalContext);
    const { setShowPopupError } = useContext(GlobalContext);
    const { setShowPopupContactFormIncorrect } = useContext(GlobalContext);
    const [isDisabled, setIsDisabled] = useState(false);
    const { isLaptopResolution } = useContext(GlobalContext);
    const { isDesktopResolution } = useContext(GlobalContext);

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
                {(isLaptopResolution || isDesktopResolution) && <div className={classes.contactInfoWrapper}>
                    <div className={classes.contactInfo}>
                        <svg fill="#000000" width="800px" height="800px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M49,18.92A23.74,23.74,0,0,0,25.27,42.77c0,16.48,17,31.59,22.23,35.59a2.45,2.45,0,0,0,3.12,0c5.24-4.12,22.1-19.11,22.1-35.59A23.74,23.74,0,0,0,49,18.92Zm0,33.71a10,10,0,1,1,10-10A10,10,0,0,1,49,52.63Z" /></svg>
                        <p>Du Lundi au Vendredi, de 8h à 19h</p>
                    </div>
                    <div className={classes.contactInfo}>

                        <svg fill="#000000" width="800px" height="800px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M49,18.92A23.74,23.74,0,0,0,25.27,42.77c0,16.48,17,31.59,22.23,35.59a2.45,2.45,0,0,0,3.12,0c5.24-4.12,22.1-19.11,22.1-35.59A23.74,23.74,0,0,0,49,18.92Zm0,33.71a10,10,0,1,1,10-10A10,10,0,0,1,49,52.63Z" /></svg>
                        <p>1 rue de la paix, 75000 Paris</p>
                        <p></p>
                    </div>
                    <div className={classes.contactInfo}>
                        <svg fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M20.629 5h-9.257a1.6 1.6 0 0 0-1.601 1.603V25.4a1.6 1.6 0 0 0 1.601 1.601h9.257c.883 0 1.6-.718 1.6-1.601V6.603c0-.885-.717-1.603-1.6-1.603zm-6.247 1.023h3.302v.768h-3.302v-.768zm1.619 19.395a1.024 1.024 0 0 1-1.023-1.021 1.023 1.023 0 0 1 2.044 0c-.001.494-.46 1.021-1.021 1.021zm5.028-3.501H10.971V7.704h10.058v14.213z" /></svg>
                        <p>01 02 03 04 05</p>
                    </div>
                    <div className={classes.contactInfo}>
                        <svg
                            width="800px" height="800px" viewBox="0 0 512 512" >
                            <g>
                                <path className="st0" d="M496.563,68.828H15.438C6.922,68.828,0,75.75,0,84.281v30.391l256,171.547l256-171.563V84.281
		C512,75.75,505.078,68.828,496.563,68.828z"/>
                                <path className="st0" d="M0,178.016v203.391c0,34.125,27.641,61.766,61.781,61.766h388.438c34.141,0,61.781-27.641,61.781-61.766V178
		L256,349.563L0,178.016z"/>
                            </g>
                        </svg>
                        <p>autoécole@école.fr</p>
                    </div>
                </div>
                }
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