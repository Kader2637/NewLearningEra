import React from 'react'

const Banner = () =>{
    return (
        <section
        className="banner-area-two banner-bg-two tg-motion-effects"
        data-background="assets/img/banner/banner_bg02.png"
        style={{
            backgroundImage: "url(assets/img/bg/breadcrumb_bg.jpg)",
        }}
    >
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-5 col-lg-6">
                    <div className="banner__content-two">
                        <h3
                            className="title"
                            data-aos="fade-right"
                            data-aos-delay="400"
                        >
                            New Learning
                            <span className="position-relative">
                                <svg
                                    x="0px"
                                    y="0px"
                                    preserveAspectRatio="none"
                                    viewBox="0 0 209 59"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4.74438 7.70565C69.7006 -1.18799 136.097 -2.38304 203.934 4.1205C207.178 4.48495 209.422 7.14626 208.933 10.0534C206.793 23.6481 205.415 36.5704 204.801 48.8204C204.756 51.3291 202.246 53.5582 199.213 53.7955C136.093 59.7623 74.1922 60.5985 13.5091 56.3043C10.5653 56.0924 7.84371 53.7277 7.42158 51.0325C5.20725 38.2627 2.76333 25.6511 0.0898448 13.1978C-0.465589 10.5873 1.61173 8.1379 4.73327 7.70565"
                                        fill="currentcolor"
                                    />
                                </svg>
                                Era
                            </span>
                            <p>
                            Platform pembelajaran yang menyediakan akses ke koleksi materi pembelajaran terbaik dan terbaru dalam satu lokasi yang mudah diakses. Dengan berbagai topik yang mencakup berbagai bidang, mulai dari pengembangan web hingga keterampilan digital lainnya, platform ini memudahkan Anda untuk menemukan materi berkualitas tanpa harus mencari ke tempat lain.                            </p>
                        </h3>
                        <div
                            className="banner__btn-two"
                            data-aos="fade-right"
                            data-aos-delay="600"
                        >
                            <a
                                href="contact.html"
                                className="btn arrow-btn"
                            >
                                Tentang Kami{" "}
                                <img
                                    src="assets/img/icons/right_arrow.svg"
                                    alt="Right arrow icon"
                                    className="injectable"
                                />
                            </a>
                            <a
                                href="https://www.youtube.com/watch?v=b2Az7_lLh3g"
                                className="play-btn popup-video"
                            >
                                <i className="fas fa-play"></i>Trio Of <br /> Innofator
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-7 col-lg-6 col-md-8">
                    <div className="banner__images-two tg-svg">
                        <img
                            src="assets/img/banner/bannerlandingpage.png"
                            alt="Banner"
                            className="main-img "
                        />
                        <span
                            className="svg-icon"
                            id="banner-svg"
                            data-svg-icon="assets/img/banner/h2_banner_shape02.svg"
                        ></span>
                    </div>
                </div>
            </div>
        </div>
        <img
            src="assets/img/banner/h2_banner_shape03.svg"
            alt="Decorative shape"
            className="line-shape-two"
            data-aos="fade-right"
            data-aos-delay="1600"
        />
    </section>
    );
};

export default Banner;
