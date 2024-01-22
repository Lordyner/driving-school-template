import React from 'react';
import classes from './Review.module.css';

import { LiaStarSolid } from 'react-icons/lia';

const Review = ({ review }) => {
    console.log(review)
    return (
        <div className={classes.review}>
            <div>
                {review.text}
            </div>
            <div className={classes.reviewAuthorAndNote}>
                <div className={classes.stars}>
                    {
                        Array.from(Array(review.rating), (e, i) => {
                            return <LiaStarSolid key={i} />
                        })
                    }
                </div>
                {review.author_name}


            </div>
        </div>
    );
};

export default Review;