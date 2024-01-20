import React, { useContext } from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import classes from './Footer.module.css';
import logoTemplate from '@/public/images/logo_template.png';
import Image from 'next/image';
import GlobalContext from '@/Store/GlobalContext';
import Link from 'next/link';

const Footer = () => {

    const { isMobileResolution } = useContext(GlobalContext)
    return (
        <footer className={classes.footer}>
            <div className={classes.container}>
                {isMobileResolution &&
                    <div className={classes.valueProposition}>

                        <Image src={logoTemplate} alt='développeur thomas andré-lubin' className={classes.profilImg} width={50} height={50} />
                        <div>
                            <h2>Thomas André-Lubin</h2>
                            <p>Value proposition qui fait des trucs</p>
                        </div>
                    </div>
                }
                {!isMobileResolution &&
                    <div className={classes.valueProposition}>
                        <div className={classes.imageAndNameContainer}>
                            <Image src={logoTemplate} alt='développeur thomas andré-lubin' className={classes.profilImg} width={50} height={50} />
                            <h2>Thomas André-Lubin</h2>
                        </div>
                        <p>Développement de site web sur mesure.</p>
                    </div>
                }
                {isMobileResolution && <div className={classes.separator}></div>}

                <div className={classes.linkContainer}>
                    <div className={classes.topLinks}>
                        <div className={classes.classicLinks}>
                            <Link href="/#home">Accueil</Link>
                            <a href="/CV-andrelubin-thomas.pdf">Curriculum Vitae</a>
                            <Link href="/#projects-section">Projets</Link>
                        </div>
                    </div>
                    <div className={classes.socialLinks}>
                        <a href="https://github.com/Lordyner" className={classes.icon} target='_blank'>
                            <SiGithub alt='icône Github' />
                        </a>
                        <a href="https://www.linkedin.com/in/thomas-andre-lubin-988760111/" className={classes.icon} target='_blank'>
                            <SiLinkedin alt='icône Linkedin' />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;