import React, { useContext } from 'react';
import classes from './Values.module.css';
import Image from 'next/image';
import studentDriving from '@/public/images/student_driving.png';
import showingKeyStudent from '@/public/images/instruction_and_student_in_a_car_showing_key.png';
import drivingExam from '@/public/images/driving_exam.PNG';
import GlobalContext from '@/Store/GlobalContext';
const Values = () => {

    const { isLaptopResolution } = useContext(GlobalContext);
    const { isDesktopResolution } = useContext(GlobalContext);
    return (
        <section className={classes.valueSection}>
            <div className={classes.value}>
                <div className={`${classes.valueContent} ${classes.fromLeft} ${classes.secondaryColor}`}>
                    {(isLaptopResolution || isDesktopResolution) &&
                        <div className={`${classes.imgWrapper} pl-1`}><Image src={studentDriving} alt='élève dans la voiture avec son moniteur' className={`${classes.valueImg} bottom-minus-2`} /></div>
                    }
                    <div className={classes.valueText}>
                        <h2>+ 20 ans d&apos;expérience</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur perspiciatis voluptatem autem dicta facilis fugit impedit, minima placeat totam iste officia neque aliquid minus. </p>

                        {(isLaptopResolution || isDesktopResolution) &&
                            <div className={classes.icons}>
                                <div className={classes.statSvg}>
                                    <svg className={classes.svgCircleProgress} width="7.5rem" height="7.5rem" viewBox="-20.75 -20.75 207.5 207.5" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <circle r="73" cx="83" cy="83" fill="transparent" stroke="#FAEAE9" strokeWidth="18" strokeDasharray="458.44px" strokeDashoffset="0"></circle>
                                        <circle r="73" cx="83" cy="83" stroke="#1d1c1d" strokeWidth="16" strokeLinecap="round" strokeDashoffset="46px" fill="transparent" strokeDasharray="458.44px"></circle>
                                        <text x="53px" y="94px" fill="#1d1c1d" fontSize="33px" fontWeight="bold">90%</text>
                                    </svg>
                                    <p>de réussite à l&apos;examen du permis B</p>
                                </div>
                                <div className={classes.statSvg}>
                                    <svg width="7.5rem" height="7.5rem" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
                                        <g fill="#000000">
                                            <path d="M12 2a1 1 0 011 1v10a1 1 0 11-2 0V3a1 1 0 011-1zM8 6a1 1 0 011 1v6a1 1 0 11-2 0V7a1 1 0 011-1zM5 10a1 1 0 00-2 0v3a1 1 0 102 0v-3z" />
                                        </g>
                                    </svg>
                                    <p>+ d&apos; 1 000 000 d&apos;élèves diplomés</p>
                                </div>
                            </div>}
                    </div>
                </div>
            </div>
            <div className={classes.value}>
                <div className={`${classes.valueContent} ${classes.fromRight} ${classes.tertiaryColor}`}>
                    <div className={`${classes.valueText} justify-self-start`}>
                        <h2>Ton permis en moins d&apos;1 mois</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur perspiciatis voluptatem autem dicta facilis fugit impedit, minima placeat totam iste officia neque aliquid minus. </p>

                        {(isLaptopResolution || isDesktopResolution) &&
                            <div className={classes.icons}>
                                <div className={classes.statSvg}>
                                    <svg className={classes.svgCircleProgress} width="7.5rem" height="7.5rem" viewBox="-20.75 -20.75 207.5 207.5" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <circle r="73" cx="83" cy="83" fill="transparent" stroke="#FAEAE9" strokeWidth="18" strokeDasharray="458.44px" strokeDashoffset="0"></circle>
                                        <circle r="73" cx="83" cy="83" stroke="#1d1c1d" strokeWidth="16" strokeLinecap="round" strokeDashoffset="46px" fill="transparent" strokeDasharray="458.44px"></circle>
                                        <text x="53px" y="94px" fill="#1d1c1d" fontSize="33px" fontWeight="bold">90%</text>
                                    </svg>
                                    <p>de réussite à l&apos;examen du permis B</p>
                                </div>
                                <div className={classes.statSvg}>
                                    <svg width="7.5rem" height="7.5rem" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
                                        <g fill="#000000">
                                            <path d="M12 2a1 1 0 011 1v10a1 1 0 11-2 0V3a1 1 0 011-1zM8 6a1 1 0 011 1v6a1 1 0 11-2 0V7a1 1 0 011-1zM5 10a1 1 0 00-2 0v3a1 1 0 102 0v-3z" />
                                        </g>
                                    </svg>
                                    <p>+ d&apos; 1 000 000 d&apos;élèves diplomés</p>
                                </div>
                            </div>}
                    </div>
                    {(isLaptopResolution || isDesktopResolution) &&
                        <div className={`${classes.imgWrapper} ${classes.fromRight}`}><Image src={showingKeyStudent} alt='élève dans la voiture avec son moniteur' className={`${classes.valueImg} top-minus-2`} /></div>
                    }
                </div>
            </div>
            <div className={classes.value}>
                <div className={`${classes.valueContent} ${classes.fromLeft} ${classes.primaryColor}`}>
                    {(isLaptopResolution || isDesktopResolution) &&
                        <div className={`${classes.imgWrapper}`}><Image src={drivingExam} alt='élève dans la voiture avec son moniteur' className={`${classes.valueImg} top-minus-2`} /></div>
                    }
                    <div className={classes.valueText}>
                        <h2>+ 20 ans d&apos;expérience</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur perspiciatis voluptatem autem dicta facilis fugit impedit, minima placeat totam iste officia neque aliquid minus. </p>

                        {(isLaptopResolution || isDesktopResolution) &&
                            <div className={classes.icons}>
                                <div className={classes.statSvg}>
                                    <svg className={classes.svgCircleProgress} width="7.5rem" height="7.5rem" viewBox="-20.75 -20.75 207.5 207.5" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <circle r="73" cx="83" cy="83" fill="transparent" stroke="#FAEAE9" strokeWidth="18" strokeDasharray="458.44px" strokeDashoffset="0"></circle>
                                        <circle r="73" cx="83" cy="83" stroke="#1d1c1d" strokeWidth="16" strokeLinecap="round" strokeDashoffset="46px" fill="transparent" strokeDasharray="458.44px"></circle>
                                        <text x="53px" y="94px" fill="#1d1c1d" fontSize="33px" fontWeight="bold">90%</text>
                                    </svg>
                                    <p>de réussite à l&apos;examen du permis B</p>
                                </div>
                                <div className={classes.statSvg}>
                                    <svg width="7.5rem" height="7.5rem" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
                                        <g fill="#000000">
                                            <path d="M12 2a1 1 0 011 1v10a1 1 0 11-2 0V3a1 1 0 011-1zM8 6a1 1 0 011 1v6a1 1 0 11-2 0V7a1 1 0 011-1zM5 10a1 1 0 00-2 0v3a1 1 0 102 0v-3z" />
                                        </g>
                                    </svg>
                                    <p>+ d&apos; 1 000 000 d&apos;élèves diplomés</p>
                                </div>
                            </div>}
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Values;