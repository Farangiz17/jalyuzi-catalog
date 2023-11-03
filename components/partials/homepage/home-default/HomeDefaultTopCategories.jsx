import React from 'react';
import Link from 'next/link';
import data from '~/utilities/data';

const HomeDefaultTopCategories = () => {
    console.log('data', data);
    return (
        <div className="ps-top-categories ">
            <div
                className="ps-container"
                style={{
                    backgroundImage: `url(/static/fon/photo_2023-11-02_11-23-37.jpg)`,
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
               <div className='container' >
               <Link href="/parda">
                    <a>
                        <div className="seaction_name">Pardalar</div>
                    </a>
                </Link>
                <div className="row">
                    {data?.slice(0, 12).map((item, i) => (
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6 ">
                            <div className="ps-block--category">
                                <div
                                    className="parda_item"
                                    style={{
                                        backgroundImage: `url(${item.image})`,
                                        backgroundRepeat: 'no-repeat',
                                        width: '100%',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        height: '220px',
                                    }}>
                                    <Link href={`/parda/${item.id}`}>
                                        <a className="ps-block__overlay"></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
               </div>
            </div>
        </div>
    );
};

export default HomeDefaultTopCategories;
