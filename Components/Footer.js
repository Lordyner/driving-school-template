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

                        <Image src={logoTemplate} alt='logo auto-école' className={classes.logo} width={50} height={50} />
                        <div>
                            <h2>Nom auto-école</h2>
                            <p>Value proposition auto-école</p>
                            <p>Ligne d&apos;adresse numéro 1</p>
                            <p>02 41 75 95 96</p>
                        </div>
                    </div>
                }
                {!isMobileResolution &&
                    <div className={classes.valueProposition}>
                        <Image src={logoTemplate} alt='logo auto-école' className={classes.logo} width={50} height={50} />
                        <div className={classes.imageAndNameContainer}>
                            <h2>Nom auto-école</h2>
                            <p>Value proposition auto-école</p>
                            <p>10 avenue des champs-élysée</p>
                            <p>02 41 75 95 96</p>
                        </div>
                    </div>
                }
                {isMobileResolution && <div className={classes.separator}></div>}

                <div className={classes.linkContainer}>
                    <div className={classes.topLinks}>
                        <div className={classes.classicLinks}>
                            <Link href="/#home">Lien 1</Link>
                            <Link href="/#home">Lien 2</Link>
                            <Link href="/#home">Lien 3</Link>
                            <Link href="/#home">Lien 4</Link>
                            <Link href="/#home">Lien 5</Link>

                        </div>
                    </div>
                    <div className={classes.topLinks}>
                        <div className={classes.classicLinks}>
                            <Link href="/#home">Lien 6</Link>
                            <Link href="/#home">Lien 7</Link>
                            <Link href="/#home">Lien 8</Link>
                            <Link href="/#home">Lien 9</Link>
                            <Link href="/#home">Lien 10</Link>
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