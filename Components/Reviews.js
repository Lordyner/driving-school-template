import React, { useContext } from 'react';
import classes from './Reviews.module.css';
import Review from './Review';
import GlobalContext from '@/Store/GlobalContext';
const Reviews = ({ reviews }) => {

    const { isMobileResolution } = useContext(GlobalContext);
    const { isTabletResolution } = useContext(GlobalContext);
    const { isLaptopResolution } = useContext(GlobalContext);
    const { isDesktopResolution } = useContext(GlobalContext);


    return (
        <section className={classes.reviewSection}>
            <h2><span className='underline'>Ce</span> que nos élèves <span className='underline gradient'>pensent de nous</span></h2>
            {reviews && reviews.length < 0 && <p>En cours</p>}
            {reviews && reviews.length > 0 && <div className={classes.reviews}>
                {(isMobileResolution || isTabletResolution || isLaptopResolution) &&
                    reviews.map((review, index) => (

                        <Review key={index} review={review} />
                    ))
                }
                {isDesktopResolution && <>
                    <Review review={reviews[0]} />
                    <Review review={reviews[1]} />
                    <Review review={reviews[2]} /></>
                }

            </div>}
            <div className='d-flex justify-content-center'>
                <button className='secondary-button black'>Voir plus d&apos;avis</button>
            </div>
        </section>
    );
};

export default Reviews;