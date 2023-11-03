import React from 'react';

const SiteFeatures = () => (
    <div className="ps-site-features mt-5">
        <div className="ps-container">
            <div className="ps-block--site-features">
                <div className="ps-block__item" style={{padding:'15px'}} >
                    <div className="ps-block__left" >
                        <i
                            style={{ color: '#009F7F' }}
                            class="fa-solid fa-user-plus fa-beat-fade"></i>
                    </div>
                    <div className="ps-block__right">
                        <h4>
                            O'lchovchining <strong>bepul</strong> tashrifi
                        </h4>
                    </div>
                </div>
                <div className="ps-block__item" style={{padding:'15px'}}>
                    <div className="ps-block__left">
                    <i style={{ color: '#009F7F' }} class="fa-solid fa-car fa-beat-fade"></i>
                    </div>
                    <div className="ps-block__right">
                        <h4>
                            {' '}
                            <strong>Bepul</strong> yetkazib berish va o'rnatish
                        </h4>
                    </div>
                </div>
                <div className="ps-block__item" style={{padding:'15px'}} >
                    <div className="ps-block__left">
                    <i style={{ color: '#009F7F' }} class="fa-solid fa-gear fa-beat-fade"></i>
                    </div>
                    <div className="ps-block__right">
                        <h4>
                            Faqat <strong>100%</strong> ekologik toza
                            materiallar
                        </h4>
                    </div>
                </div>
                <div className="ps-block__item" style={{padding:'15px'}} >
                    <div className="ps-block__left">
                    <i style={{ color: '#009F7F' }} class="fa-solid fa-hand-holding-dollar fa-beat-fade"></i>
                    </div>
                    <div className="ps-block__right">
                        <h4>
                            Yashirin ortiqcha to'lovlarsiz{' '}
                            <strong>halol</strong> narx
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default SiteFeatures;
