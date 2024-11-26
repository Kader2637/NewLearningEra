import React from 'react';
import CardCourse from './ComponentHomePage/CardCourse';

const HomePage = () => {
    return (
        <main className='main-area fix'>
            <section className="banner-area banner-bg tg-motion-effects" color='red' data-background="assets/img/banner/banner_bg.png">
                <div className="container">
                    <div className="row justify-content-between align-items-start">
                        <div className="col-xl-5 col-lg-6">
                            <div className="banner__content">
                                <h3 className="title tg-svg" data-aos="fade-right" data-aos-delay="400">
                                    Never Stop
                                    <span className="position-relative">
                                        <span className="svg-icon" id="banner-svg" data-svg-icon="assets/img/objects/title_shape.svg"></span>
                                        <svg x="0px" y="0px" preserveAspectRatio="none" viewBox="0 0 209 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.74438 7.70565C69.7006 -1.18799 136.097 -2.38304 203.934 4.1205C207.178 4.48495 209.422 7.14626 208.933 10.0534C206.793 23.6481 205.415 36.5704 204.801 48.8204C204.756 51.3291 202.246 53.5582 199.213 53.7955C136.093 59.7623 74.1922 60.5985 13.5091 56.3043C10.5653 56.0924 7.84371 53.7277 7.42158 51.0325C5.20725 38.2627 2.76333 25.6511 0.0898448 13.1978C-0.465589 10.5873 1.61173 8.1379 4.73327 7.70565" fill="currentColor" />
                                        </svg>
                                        Learning
                                    </span>
                                    <br />
                                    Life <b>Never Stop</b> Teaching
                                </h3>
                                <p data-aos="fade-right" data-aos-delay="600">
                                    Every teaching and learning journey is unique. Following, we'll help guide your way.
                                </p>
                                <div className="banner__btn-wrap" data-aos="fade-right" data-aos-delay="800">
                                    <a href="contact.html" className="btn arrow-btn">
                                        Start Free Trial <img src="assets/img/icons/right_arrow.svg" alt="img" className="injectable" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="banner__images">
                                <img src="assets/img/banner/banner_img.png" alt="img" className="main-img" />
                                <div className="shape big-shape" data-aos="fade-up-right" data-aos-delay="600">
                                    <img src="assets/img/banner/banner_shape01.png" alt="shape" className="tg-motion-effects1" />
                                </div>
                                <img src="assets/img/banner/bg_dots.svg" alt="shape" className="shape bg-dots rotateme" />
                                <img src="assets/img/banner/banner_shape02.png" alt="shape" className="shape small-shape tg-motion-effects3" />
                                <div className="banner__author">
                                    <div className="banner__author-item">
                                        <div className="image">
                                            <img src="assets/img/banner/banner_author01.png" alt="img" />
                                        </div>
                                        <h6 className="name">Robert Fox</h6>
                                    </div>
                                    <div className="banner__author-item">
                                        <div className="image">
                                            <img src="assets/img/banner/banner_author02.png" alt="img" />
                                        </div>
                                        <h6 className="name">Michel Jones</h6>
                                    </div>
                                    <img src="assets/img/banner/banner_shape02.svg" alt="shape" className="arrow-shape tg-motion-effects3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="assets/img/banner/banner_shape01.svg" alt="shape" className="line-shape" data-aos="fade-right" data-aos-delay="1600" />
            </section>
            <CardCourse />
        </main>
    );
};

export default HomePage;
