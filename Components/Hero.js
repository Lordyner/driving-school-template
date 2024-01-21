import React, { useContext, useRef } from 'react';
import classes from './Hero.module.css';
import Image from 'next/image';
import heroImg from '@/public/images/hero_image.png';
import mobileHeroImg from '@/public/images/hero_image_mobile.png';
import GlobalContext from '@/Store/GlobalContext';


const Hero = () => {
    const { isMobileResolution } = useContext(GlobalContext);
    return (
        <section id="hero" className={classes.heroContainer}>
            <h1>Apprendre<br /> à bien <span className='underline gradient'>conduire</span></h1>
            <div className={classes.callToActionWrapper}>
                <button className='primary-button'>S&apos;inscrire</button>
                <button className='secondary-button'>
                    Voir nos offres
                    <span className=' icon-play'></span>
                </button>
            </div>
            <div className={classes.imgWrapper}>

                <Image src={isMobileResolution ? mobileHeroImg : heroImg} alt='moniteur et son élève dans une voiture en train de réviser' className={classes.heroImg} />
            </div>
        </section >
    );
};

export default Hero;