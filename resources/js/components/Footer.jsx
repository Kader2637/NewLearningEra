import React from "react";

const Footer = () => {
    return (
        <footer className="footer__area">
            <div className="footer__top">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="footer__widget">
                                <div className="logo mb-35">
                                    <a href="/">
                                        <img
                                            src="assets/img/logo/logo.png"
                                            alt="img"
                                        />
                                    </a>
                                </div>
                                <div className="footer__content">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Dolores quam
                                        distinctio, unde sunt architecto in quis
                                        molestias neque quaerat facilis.
                                    </p>
                                    <ul className="list-wrap">
                                        <li>Kota malang, Jawa Timur</li>
                                        <li>+62 0987654321</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="footer__widget">
                                <h4 className="footer__widget-title">
                                    Layanan
                                </h4>
                                <div className="footer__link">
                                    <ul className="list-wrap">
                                        <li>
                                            <a href="#">Coming Soon</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="footer__widget">
                                <h4 className="footer__widget-title">
                                    Hubungi Kami
                                </h4>
                                <div className="footer__link">
                                    <ul className="list-wrap">
                                        <li>
                                            <a href="#">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="footer__widget">
                                <h4 className="footer__widget-title">Maps</h4>
                                <div className="footer__contact-content">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.176419840137!2d110.36639701477896!3d-7.798126994443247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a2e3ab3e3b5e5%3A0x9b79c7a0f8d2c8e0!2sIndonesia!5e0!3m2!1sen!2sid!4v1616161616161!5m2!1sen!2sid"
                                        width="450"
                                        height="250"
                                        style={{ border: "0" }}
                                        allowFullScreen=""
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-7">
                            <div className="copy-right-text">
                                <p>
                                    ©2024 TrioOfInnovator.com. All rights
                                    reserved.
                                </p>
                            </div>
                        </div>
                        {/* <div className="col-md-5">
              <div className="footer__bottom-menu">
                <ul className="list-wrap">
                  <li><a href="contact.html">Term of Use</a></li>
                  <li><a href="contact.html">Privacy Policy</a></li>
                </ul>
              </div>
            </div> */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
