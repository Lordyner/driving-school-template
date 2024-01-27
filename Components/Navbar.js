import React, { useContext, useRef } from 'react';
import logoTemplate from '@/public/images/logo_template.png';
import Image from 'next/image';
import classes from './Navbar.module.css'
import GlobalContext from '@/Store/GlobalContext';
import Link from 'next/link';


const Navbar = () => {
    const burger = useRef();
    const { isMobileResolution } = useContext(GlobalContext);
    const { isTabletResolution } = useContext(GlobalContext);
    const { isMenuOpen, setIsMenuOpen } = useContext(GlobalContext);
    const { toggleMenu } = useContext(GlobalContext);
    return (
        <nav className={classes.navbar}>
            <div className={classes.navWrapper}>
                <div className={classes.logo}>
                    <Link href="/">
                        <Image src={logoTemplate} alt='développeur thomas andré-lubin' className={classes.logoImg} width={50} height={50} />
                    </Link>
                </div>
                {/* Classic links */}
                <div className={`${isMobileResolution ? "display-none" : classes.navLink}`}>
                    <Link href="" className={classes.link}>Permis voiture</Link>
                    <Link href="" className={classes.link}>Code de la route</Link>
                    <Link href="" className={classes.link}>Permis moto</Link>
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
                    }}>Permis voiture</Link>

                    <Link href="" className={classes.mobileLink} onClick={() => {
                        toggleMenu();
                        burger.current.classList.toggle(classes.isActive);
                    }}>Code de la route</Link>

                    <Link href="" className={classes.mobileLink} onClick={() => {
                        toggleMenu();
                        burger.current.classList.toggle(classes.isActive);
                    }}>Permis moto</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;