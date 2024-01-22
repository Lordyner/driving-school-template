import React from 'react';
import classes from './Reviews.module.css';
import Review from './Review';
const Reviews = ({ reviews }) => {

    return (
        <section className={classes.reviewSection}>
            <h2><span className='underline'>Ce</span> que nos élèves <span className='underline gradient'>pensent de nous</span></h2>
            {reviews && reviews.length < 0 && <p>En cours</p>}
            {reviews && reviews.length > 0 && <div className={classes.reviews}>
                {reviews.map((review, index) => (
                    <Review key={index} review={review} />
                ))}
            </div>}
        </section>
    );
};

export default Reviews;