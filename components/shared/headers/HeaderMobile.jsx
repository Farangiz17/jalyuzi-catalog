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
                                {/* <img
                                style={{width:'130px'}}
                                    src="/static/fon/logos.png"
                                    alt="jalyuzi"
                                /> */}
                                 <p className='logo-name' > Jalyuzi</p>
                            </a>
                        </Link>
                    </div>
                    {/* <MobileHeaderActions /> */}
                </div>
                <div className="ps-search--mobile">
                    <form
                        className="ps-form--search-mobile"
                        action="/"
                        method="get">
                        <div className="form-group--nest">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Search something..."
                            />
                            <button>
                                <i className="icon-magnifier"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </header>
        );
    }
}

export default HeaderMobile;
