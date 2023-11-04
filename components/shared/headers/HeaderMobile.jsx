import React, { Component } from 'react';
import Link from 'next/link';


class HeaderMobile extends Component {
    constructor({ props }) {
        super(props);
    }

    render() {
        return (
            <header className="header header--mobile">
              
                <div className="navigation--mobile">
                    <div className="navigation__left">
                        <Link href="/">
                            <a className="ps-logo">
                                 <p className='logo-name' > Jalyuzi</p>
                            </a>
                        </Link>
                    </div>
                </div>
            </header>
        );
    }
}

export default HeaderMobile;
