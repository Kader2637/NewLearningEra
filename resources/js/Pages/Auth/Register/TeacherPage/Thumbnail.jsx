import React from "react";

const Thumbnail = () => {
    return (
        <section
            className="breadcrumb__area breadcrumb__bg"
            data-background="http://127.0.0.1:8000/assets/img/bg/breadcrumb_bg.jpg"
            style={{
                backgroundImage:
                    "url(http://127.0.0.1:8000/assets/img/bg/breadcrumb_bg.jpg)",
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="breadcrumb__content">
                            <h3 className="title">Register</h3>
                            <nav className="breadcrumb">
                                <span
                                    property="itemListElement"
                                    typeof="ListItem"
                                >
                                    <a href="index-2.html">Home</a>
                                </span>
                                <span className="breadcrumb-separator">
                                    <i className="fas fa-angle-right"></i>
                                </span>
                                <span
                                    property="itemListElement"
                                    typeof="ListItem"
                                >
                                    Register
                                </span>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="breadcrumb__shape-wrap">
                <img
                    src="http://127.0.0.1:8000/assets/img/others/breadcrumb_shape01.svg"
                    alt="img"
                    className="alltuchtopdown"
                />
                <img
                    src="http://127.0.0.1:8000/assets/img/others/breadcrumb_shape02.svg"
                    alt="img"
                    data-aos="fade-right"
                    data-aos-delay="300"
                />
                <img
                    src="http://127.0.0.1:8000/assets/img/others/breadcrumb_shape03.svg"
                    alt="img"
                    data-aos="fade-up"
                    data-aos-delay="400"
                />
                <img
                    src="http://127.0.0.1:8000/assets/img/others/breadcrumb_shape04.svg"
                    alt="img"
                    data-aos="fade-down-left"
                    data-aos-delay="400"
                />
                <img
                    src="http://127.0.0.1:8000/assets/img/others/breadcrumb_shape05.svg"
                    alt="img"
                    data-aos="fade-left"
                    data-aos-delay="400"
                />
            </div>
        </section>
    );
};

export default Thumbnail;
