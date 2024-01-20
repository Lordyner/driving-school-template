import React from 'react';
import Carousel from './Carousel';

const Reviews = ({ reviews }) => {

    return (
        <section>
            {reviews && reviews.length < 0 && <p>En cours</p>}
            {reviews && reviews.length > 0 && <Carousel reviews={reviews} />}
        </section>
    );
};

export default Reviews;