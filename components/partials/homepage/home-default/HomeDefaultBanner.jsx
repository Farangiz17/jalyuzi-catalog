import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import NextArrow from '~/components/elements/carousel/NextArrow';
import PrevArrow from '~/components/elements/carousel/PrevArrow';
import Link from 'next/link';
import MediaRepository from '~/repositories/MediaRepository';
import { baseUrl } from '~/repositories/Repository';
import { getItemBySlug } from '~/utilities/product-helper';
import Promotion from '~/components/elements/media/Promotion';

const HomeDefaultBanner = () => {
    const [bannerItems, setBannerItems] = useState(null);
    const [promotion1, setPromotion1] = useState(null);
    const [promotion2, setPromotion2] = useState(null);

    async function getBannerItems() {
        const responseData = await MediaRepository.getBannersBySlug(
            'banner-home-fullwidth'
        );
        if (responseData) {
            setBannerItems(responseData);
        }
    }

    async function getPromotions() {
        const responseData = await MediaRepository.getPromotionsBySlug(
            'home_fullwidth_promotions'
        );
        if (responseData) {
            setPromotion1(getItemBySlug(responseData, 'main_1'));
            setPromotion2(getItemBySlug(responseData, 'main_2'));
        }
    }

    useEffect(() => {
        getBannerItems();
        getPromotions();
    }, []);

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
                            backgroundImage: `url(/static/pardalar/IMG_3523.JPG)`,
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
            {/* <div className="ps-container"> */}
                <div
                    className="bannerr d-flex text-center justify-content-center align-items-center"
                    style={{
                        backgroundImage: `url(/static/pardalar/IMG_3523.JPG)`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        width: '100%',
                        height: '500px',
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
