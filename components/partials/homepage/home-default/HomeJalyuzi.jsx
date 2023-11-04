import React from 'react';
import Link from 'next/link';
import dataJalyuzi from '~/utilities/dataJalyuzi';

const HomeJalyuzi = () => {
    console.log('data', dataJalyuzi);
    return (
        <div className="ps-top-categories">
            <div
                className="container"
                // style={{
                //     backgroundImage: `url(/static/fon/photo_2023-11-02_11-23-59.jpg)`,
                //     backgroundRepeat: 'no-repeat',
                //     width: '100%',
                //     backgroundSize: 'cover',
                //     backgroundPosition: 'center',
                // }}
            >
                <Link href="/jalyuzi">
                    <a>
                        <div className="seaction_name"> Jalyuzilar </div>
                    </a>
                </Link>
                <div className="jalyuzi-parent">
                    {dataJalyuzi?.slice(0, 12).map((item, i) => (
                        <Link href={`/jalyuzi/${item.id}`}>
                            <a className={` cardd ps-block__overlay parda_item-${i}`}>
                                <div
                                    className='parent_item'
                                    style={{
                                        backgroundImage: `url(${item?.image})`,
                                        backgroundRepeat: 'no-repeat',
                                        width: '100%',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        height: '300px',
                                    }}>

                                    <div className='hover-card' >Jalyuzi</div>
                                    </div>
                            </a>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeJalyuzi;
