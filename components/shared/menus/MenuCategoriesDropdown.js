import Link from 'next/link';
import React from 'react';

const MenuCategoriesDropdown = () => {
    return (
        <div className="menu--product-categories">
            <div className="menu__toggle">
                <Link href="/">
                    <a className="ps-logo">
                        {/* <img src="/static/fon/logos.png" alt="" /> */}
                       <p style={{fontWeight:'600', fontSize:'18px'}} > Jalyuzi</p>
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategoriesDropdown;
