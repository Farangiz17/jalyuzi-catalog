import React from 'react';
import Link from 'next/link';

const FooterWidgets = () => {
    return (
      <>
      <div className="seaction_name"> Bizning manzil </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5997.631120552459!2d69.17951609215822!3d41.26935159926223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae89f3371e0833%3A0x657012c8c99d5f97!2z0KfQuNC70LDQvdC30LDRgC0xOSwg0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1698931939115!5m2!1sru!2s" width={600} height={450} style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div className="ps-footer__widgets mt-5 pt-5">
        <aside className="widget widget_footer widget_contact-us">
            <h4 className="widget-title">Aloqa</h4>
            <div className="widget_content">
                <p>Biz bilan bog'lanish 24/7</p>
                <Link href="tel:+998 99 659 99 90">
                <a >
                <h4>+998 99 659 99 90</h4>
                </a>
                </Link>
                <p>Ijtimoiy tarmoqlarimiz </p>
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
                </ul>
            </div>
        </aside>
        <aside className="widget widget_footer">
            <h4 className="widget-title">Menyu</h4>
            <ul className="ps-list--link">
                <li>
                    <Link href="/">
                        <a>Biz haqimizda</a>
                    </Link>
                </li>

                <li>
                    <Link href="/jalyuzi">
                        <a>Jalyuzi</a>
                    </Link>
                </li>
                <li>
                    <Link href="/parda">
                        <a>Parda</a>
                    </Link>
                </li>
               
            </ul>
        </aside>
        <aside className="widget widget_footer">
            <h4 className="widget-title">Afzalliklarimiz</h4>
            <ul className="ps-list--link">
                <li>
                    <Link href="#">
                        <a>Tezkorlik</a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a>Sifat</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/blank">
                        <a>Halollik</a>
                    </Link>
                </li>
               
            </ul>
        </aside>
        <aside className="widget widget_footer">
            <h4 className="widget-title">Biz bilan bog'lanish</h4>
            <ul className="ps-list--link">
                <li>
                    <Link href="tel:+998 99 659 99 90">
                        <a>Telefon orqali</a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a>Ijtimoiy tarmoqlar bilan</a>
                    </Link>
                </li>
               
            </ul>
        </aside>
    </div>
      </>
    )
}

export default FooterWidgets;
