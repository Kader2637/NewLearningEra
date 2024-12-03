import React from "react";

const FeaturesTop = () => {
    return (
        <section className="features__area-two section-pt-120 section-pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="section__title text-center mb-40">
                                <span className="sub-title">
                                    Fitur Utama Kami
                                </span>
                                <h2 className="title">
                                Raih Tujuan Anda Dengan New Learning Era
                                </h2>
                                <p>
                                Teknologi adalah jendela untuk membuka dunia baru. <br /> Manfaatkanlah untuk memperluas wawasan dan pengetahuanmu.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="features__item-wrap">
                        <div className="row justify-content-center">
                            {[
                                "Tutor Ahli",
                                "Pembelajaran yang Efektif",
                                "Dapatkan Sertifikat",
                            ].map((feature, index) => (
                                <div className="col-lg-4 col-md-6" key={index}>
                                    <div className="features__item-two">
                                        <div className="features__content-two">
                                            <div className="content-top">
                                                <div className="features__icon-two">
                                                    <img
                                                        src={`assets/img/icons/h2_features_icon0${
                                                            index + 1
                                                        }.svg`}
                                                        alt={`${feature} icon`}
                                                        className="injectable"
                                                    />
                                                </div>
                                                <h2 className="title">
                                                    {feature}
                                                </h2>
                                            </div>
                                            <p>
                                            Dapatkan pembelajaran yang efektif dan terstruktur di Ne Learning Era, dengan tutorial ahli dan e-sertifikat yang mengakui kemampuan Anda di dunia.                                            </p>
                                        </div>
                                        <div className="features__item-shape">
                                            <img
                                                src="assets/img/others/features_item_shape.svg"
                                                alt="Shape decoration"
                                                className="injectable"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default FeaturesTop;