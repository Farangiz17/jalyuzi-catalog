import React, {useState } from 'react';
import Slider from 'react-slick';
import NextArrow from '~/components/elements/carousel/NextArrow';
import PrevArrow from '~/components/elements/carousel/PrevArrow';
import Link from 'next/link';

const HomeDefaultBanner = () => {
    const [bannerItems, setBannerItems] = useState(null);


    const carouselSetting = {
        dots: false,
        infinite: true,
        speed: 750,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    // Views
    let mainCarouselView;
    if (bannerItems) {
        const carouseItems = bannerItems.map((item) => (
            <div className="slide-item" key={item.id}>
                <Link href="/shop">
                    <a
                        className="ps-banner-item--default bg--cover"
                        style={{
                            position:'relative',
                            backgroundImage: `url(/static/fon/Untitled (1).png)`
                        }}
                    />
                </Link>
            </div>
        ));
        mainCarouselView = (
            <Slider {...carouselSetting} className="ps-carousel">
                {carouseItems}
            </Slider>
        );
    }
    return (
        <div className="ps-home-banner ps-home-banner--1">
                <div
                    className="bannerr d-flex text-center justify-content-center align-items-center"
                    style={{
                        backgroundImage: `url(/static/fon/Untitled.png)`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        width: '100%',
                        height: '570px',
                    }}>
                        <div className='ps-container'>

                    <div className="banner-text  ">
                        <h3 className="text-white ">Jalyuzi ROOM</h3>
                        <p className="text-white fs-3">
                            kompaniyasi " JALYUZILAR.UZ» o'zining ishlab
                            chiqarish majmuasiga ega va faqat yuqori sifatli
                            xizmatlarni taqdim etadi
                        </p>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </div>
    );
};

export default HomeDefaultBanner;
