import React, { useContext, useRef } from 'react';
import logoTemplate from '@/public/images/logo_template.png';
import Image from 'next/image';
import classes from './Navbar.module.css'
import GlobalContext from '@/Store/GlobalContext';
import Link from 'next/link';


const Navbar = () => {
    const burger = useRef();
    const { isMobileResolution } = useContext(GlobalContext);
    const { isMenuOpen, setIsMenuOpen } = useContext(GlobalContext);
    const { toggleMenu } = useContext(GlobalContext);
    return (
        <nav className={classes.navbar}>
            <div className={classes.logo}>
                <Link className={classes.link} href="/">
                    {isMobileResolution && <Image src={logoTemplate} alt='développeur thomas andré-lubin' className={classes.profilImg} width={50} height={50} />}
                    <span className={`${isMobileResolution ? "display-none" : ""}`}>Nom entreprise</span>
                </Link>
            </div>
            {/* Classic links */}
            <div className={`${isMobileResolution ? "display-none" : classes.navLink}`}>
                <Link href="" className={classes.link}>Lien 1</Link>
                <Link href="" className={classes.link}>Lien 2</Link>
                <Link href="" className={classes.link}>Lien 3</Link>
            </div>

            {/* Burger menu */}
            <div ref={burger} className={`${isMobileResolution ? classes.hamburger : classes.hamburger + " display-none"}`}
                onClick={() => {
                    toggleMenu();
                    burger.current.classList.toggle(classes.isActive);

                }}>
                <div className={classes.bar} />
            </div>

            {/* Mobile menu */}
            <div className={`${classes.mobileNav} ${isMenuOpen ? classes.active : ""}`}>
                <Link href="" className={classes.mobileLink} onClick={() => {
                    toggleMenu();
                    burger.current.classList.toggle(classes.isActive);
                }}>Lien 1</Link>

                <Link href="" className={classes.mobileLink} onClick={() => {
                    toggleMenu();
                    burger.current.classList.toggle(classes.isActive);
                }}>Lien 2</Link>

                <Link href="" className={classes.mobileLink} onClick={() => {
                    toggleMenu();
                    burger.current.classList.toggle(classes.isActive);
                }}>Lien 3</Link>
            </div>
        </nav >
    );
};

export default Navbar;