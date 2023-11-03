import React from 'react';

const FooterCopyright = () => (
    <div className="ps-footer__copyright">
        <p>&copy;  2023 Jalyuzi.uz </p>
        <p className='d-flex' >
            <span>Ijtimoiy tarmoqlarimiz:</span>
            <ul className="ps-list--social">
                    <li>
                        <a className="facebook" href="https://youtube.com/shorts/rYqdyqv-GTM?si=NjiDqtmw95p5qcji">
                            <i className="fa fa-youtube"></i>
                        </a>
                    </li>
                    {/* <li>
                        <a className="twitter" href="#">
                            <i className="fa fa-twitter"></i>
                        </a>
                    </li> */}
                    <li>
                        <a className="google-plus" href="https://t.me/Jalyuzi_aura">
                            <i className="fa fa-telegram"></i>
                        </a>
                    </li>
                    <li>
                        <a className="instagram" href="https://www.instagram.com/reel/CwfXWbVNHVn/">
                            <i className="fa fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a className="instagram" href="#">
                            {/* <i className="fa fa-instagram"></i> */}
                        </a>
                    </li>
                </ul>
        </p>
    </div>
);

export default FooterCopyright;
