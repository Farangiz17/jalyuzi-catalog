import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import MiniCart from '~/components/shared/headers/modules/MiniCart';
import AccountQuickLinks from '~/components/shared/headers/modules/AccountQuickLinks';

const HeaderActions = ({ ecomerce, auth }) => {
    const { compareItems, wishlistItems } = ecomerce;
    // views
    let headerAuthView;
    if (auth.isLoggedIn && Boolean(auth.isLoggedIn) === true) {
        headerAuthView = <AccountQuickLinks isLoggedIn={true} />;
    } else {
        headerAuthView = <AccountQuickLinks isLoggedIn={false} />;
    }
    return (
        <div className="header__actions">
           
            <Link href="/jalyuzi">
                <a className="header__extra">
                   Jalyuzi
                </a>
            </Link>
            <Link href="/parda">
                <a className="header__extra">
                  
                    Pardalar
                </a>
            </Link>
            <Link href="#about">
                <a className="header__extra">
                    Biz haqimizda
                </a>
            </Link>
            <Link href="tel: +998 99 659 99 90">
                <a className="header__extra">
                    +998 99 659 99 90
                </a>
            </Link>
        </div>
    );
};

export default connect((state) => state)(HeaderActions);
