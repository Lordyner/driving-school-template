import React, { useRef } from 'react';
import Image from 'next/image';
import classes from './Reviews.module.css';
import moment from 'moment';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';;

import { LiaStarSolid } from 'react-icons/lia';

import 'swiper/css';
import 'swiper/css/pagination';

const Carousel = ({ reviews }) => {

    const swiperRef = useRef();
    return (

        <Swiper
            onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="customSwiper"
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
                1400: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
            }}>
            {reviews.map(review => (
                <SwiperSlide key={review.author_name}>
                    <div className={classes.card}>
                        <div className={classes.cardHeader}>
                            <Image src={review.profile_photo_url} alt='profile picture of user' width={60} height={60} />
                            <div className={classes.headerText}>
                                <span className={classes.reviewerName}>{review.author_name}</span>
                                <span className={classes.reviewDate}>{moment.unix(review.time).format('DD/MM/YYYY')}</span>
                                <div className={classes.stars}>
                                    {
                                        Array.from(Array(review.rating), (e, i) => {
                                            return <LiaStarSolid key={i} />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={classes.cardBody}>
                            <span>{review.text}</span>
                        </div>
                    </div>
                </SwiperSlide>

            ))}
        </Swiper>

    );
};


export default Carousel;