import React from 'react';
import Link from 'next/link';

const Logo = ({ type }) => {
    let data;
       return (
        <Link href='/'>
            <a style={{height:'25px'}} className="s-logo">
                {/* <img src="/static/fon/logos.png" alt="" /> */}
               <p className='logo-name' > Jalyuzi</p>
            </a>
        </Link>
    );
};

export default Logo;
