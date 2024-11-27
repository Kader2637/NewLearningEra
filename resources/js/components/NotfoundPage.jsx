import React from "react";
import { Link } from "react-router-dom";

const NotfoundPage = () => {
    return (
        <section className="error-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="error-wrap text-center">
                            <div className="error-img">
                                <img
                                    src="assets/img/others/error_img.svg"
                                    alt="Error"
                                    className="injectable"
                                />
                            </div>
                            <div className="error-content">
                                <h2 className="title">
                                    ERROR PAGE!{" "}
                                    <span>
                                        HALAMAN TIDAK TERSEDIA
                                    </span>
                                </h2>
                                <div className="tg-button-wrap">
                                    <Link to="/" className="btn arrow-btn">
                                        Go To Home Page{" "}
                                        <img
                                            src="assets/img/icons/right_arrow.svg"
                                            alt="Arrow"
                                            className="injectable"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotfoundPage;
