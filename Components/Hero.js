import React, { useContext, useRef } from 'react';
import classes from './Hero.module.css';
import Image from 'next/image';
import instructorAndStudent from '@/public/images/driving-instructor-with-student-and-key.png';
import GlobalContext from '@/Store/GlobalContext';


const Hero = () => {
    const { isMobileResolution } = useContext(GlobalContext);
    const { isTabletResolution } = useContext(GlobalContext);
    const { isLaptopResolution } = useContext(GlobalContext);
    const { isDesktopResolution } = useContext(GlobalContext);
    return (
        <section id="hero" className={classes.heroContainer}>
            <div className={classes.heroContentAndCTA}>
                {(isMobileResolution || isTabletResolution) && <h1>Apprendre<br /> à bien <span className='underline gradient'>conduire</span></h1>}
                {(isLaptopResolution || isDesktopResolution) && <h1>Apprendre à <br /> bien <span className='underline gradient'>conduire</span></h1>}
                <div className={classes.callToActionWrapper}>
                    <button className='primary-button glow-effect'>
                        S&apos;inscrire
                        <svg className='glow-container'>
                            <rect pathLength="100" strokeLinecap='round' className='glow-blur'></rect>
                            <rect pathLength="100" strokeLinecap='round' className='glow-line'></rect>
                        </svg>
                    </button>
                    <button className='secondary-button withIcon'>
                        Voir nos offres
                        <span className=' icon-play'></span>
                    </button>
                </div>
            </div>
            <div className={classes.imgWrapper}>
                {/* {(!isMobileResolution && !isTabletResolution) && <>
                    <div className={classes.successRateRectangle}>
                        <svg className={classes.svgCircleProgress} width="7.5rem" height="7.5rem" viewBox="-20.75 -20.75 207.5 207.5" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <circle r="73" cx="83" cy="83" fill="transparent" stroke="#FAEAE9" strokeWidth="18" strokeDasharray="458.44px" strokeDashoffset="0"></circle>
                            <circle r="73" cx="83" cy="83" stroke="#1d1c1d" strokeWidth="16" strokeLinecap="round" strokeDashoffset="46px" fill="transparent" strokeDasharray="458.44px"></circle>
                            <text x="53px" y="94px" fill="#1d1c1d" fontSize="33px" fontWeight="bold">90%</text>
                        </svg>
                        <p>de réussite à l&apos;examen du permis B</p>
                    </div>
                    <div className={classes.nbSuccessRectangle}>
                        <p><span className={classes.semiBold}>+ d&apos; 1 000 000 <br /></span>d&apos;élèves diplomés</p>
                        <svg width="6.25rem" height="6.25rem" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
                            <g fill="#000000">
                                <path d="M12 2a1 1 0 011 1v10a1 1 0 11-2 0V3a1 1 0 011-1zM8 6a1 1 0 011 1v6a1 1 0 11-2 0V7a1 1 0 011-1zM5 10a1 1 0 00-2 0v3a1 1 0 102 0v-3z" />
                            </g>
                        </svg>
                    </div>
                </>} */}
                <Image src={instructorAndStudent} alt='moniteur et son élève tenant la clé de la voiture' className={classes.heroImg} />
            </div >
        </section >
    );
};

export default Hero;