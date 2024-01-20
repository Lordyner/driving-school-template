import { getLogger } from '@/Logging/log-util'
import emailjs from '@emailjs/nodejs';

export default function sendEmail(req, res) {
    const logger = getLogger('contact');
    logger.info('Method sendEmail');
    const params = {
        name: req.body.name,
        mailAdress: req.body.mailAdress,
        message: req.body.message
    }
    if (!params.name || params.name === ""
        || !params.mailAdress || params.mailAdress === "" || !params.mailAdress.includes === "@"
        || !params.message || params.message === ""
    ) {
        logger.info('sendEmail params invalid');
        res.status(400).json({ message: 'Parameters are not correct' })
        return;
    }

    return emailjs
        .send(process.env.MAIL_CONTACT_SERVICE_ID, process.env.MAIL_CONTACT_TEMPLATE_ID, params, {
            publicKey: process.env.MAIL_CONTACT_PUBLIC_API_KEY,
            privateKey: process.env.MAIL_CONTACT_PRIVATE_API_KEY
        })
        .then(
            (response) => {
                logger.info(`Mail successfully sent : ${JSON.stringify(response)}`)
                res.status(201).json({ message: 'Mail sent' })
            },
            (err) => {
                logger.error(`Error sending mail : ${JSON.stringify(err)}`)
                res.status(500).json({ message: 'Error sending mail' })
            },
        ).catch(error => {
            logger.error(`Error sending mail : ${JSON.stringify(error)}`)
            res.status(500).json({ message: 'Error sending mail' });
        })
}