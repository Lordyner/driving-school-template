import React from 'react';
import classes from './Values.module.css';
import Image from 'next/image';
import valueImg1 from '@/public/images/value_img_1.PNG';
import valueImg2 from '@/public/images/driving_school_car.png';
import experienceIcon from '@/public/images/experience_icon.svg';
const Values = () => {
    return (
        <section className={classes.valueSection}>
            <div className={classes.value}>
                <div className={`${classes.valueContent} ${classes.fromLeft} ${classes.secondaryColor}`}>
                    <h2>+ 20 ans d&apos;expérience</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur perspiciatis voluptatem autem dicta facilis fugit impedit, minima placeat totam iste officia neque aliquid minus. </p>
                </div>
                {/* <Image src={valueImg1} alt='élève dans la voiture avec son moniteur' className={classes.valueImg} /> */}
            </div>
            <div className={classes.value}>
                <div className={`${classes.valueContent} ${classes.fromRight} ${classes.tertiaryColor}`}>
                    <h2>Des véhicules de qualités supérieur</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur perspiciatis voluptatem autem dicta facilis fugit impedit, minima placeat totam iste officia neque aliquid minus. </p>
                </div>
                {/* <Image src={valueImg1} alt='élève dans la voiture avec son moniteur' className={classes.valueImg} /> */}
            </div>
            <div className={classes.value}>
                <div className={`${classes.valueContent} ${classes.fromLeft} ${classes.primaryColor}`}>
                    <h2>Lorepsum init fam</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur perspiciatis voluptatem autem dicta facilis fugit impedit, minima placeat totam iste officia neque aliquid minus. </p>
                </div>
                {/* <Image src={valueImg1} alt='élève dans la voiture avec son moniteur' className={classes.valueImg} /> */}
            </div>
        </section >
    );
};

export default Values;