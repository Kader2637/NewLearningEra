import React from "react";

const Instructor = () => {
    return (
        <section class="instructor__area-four mt-5" >
                <div class="container">
                    <div class="instructor__item-wrap-two">
                        <div class="row">
                            <div class="col-xl-6">
                                <div class="instructor__item-two tg-svg">
                                    <div class="instructor__thumb-two">
                                        <img
                                            src="assets/img/instructor/instructor_two01.png"
                                            alt="img"
                                        />
                                        <div class="shape-one">
                                            <img
                                                src="assets/img/instructor/instructor_shape01.svg"
                                                alt="img"
                                                class="injectable"
                                            />
                                        </div>
                                        <div class="shape-two">
                                            <span
                                                class="svg-icon"
                                                id="instructor-svg"
                                                data-svg-icon="assets/img/instructor/instructor_shape02.svg"
                                            ></span>
                                        </div>
                                    </div>
                                    <div class="instructor__content-two">
                                        <h3 class="title">
                                            <a href="contact.html">
                                                Masuk Sebagai Guru
                                            </a>
                                        </h3>
                                        <p>
                                        Bergabunglah sebagai guru untuk berbagi ilmu, menginspirasi, dan mendukung perkembangan siswa dalam lingkungan pembelajaran yang dinamis.</p>
                                        <div class="tg-button-wrap">
                                            <a
                                                href="contact.html"
                                                class="btn arrow-btn"
                                            >
                                                Masuk{" "}
                                                <img
                                                    src="assets/img/icons/right_arrow.svg"
                                                    alt="img"
                                                    class="injectable"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6">
                                <div class="instructor__item-two tg-svg">
                                    <div class="instructor__thumb-two">
                                        <img
                                            src="assets/img/instructor/siswa.png"
                                            width="300px"
                                            alt="img"
                                        />
                                        <div class="shape-one">
                                            <img
                                                src="assets/img/instructor/instructor_shape01.svg"
                                                alt="img"
                                                class="injectable"
                                            />
                                        </div>
                                        <div class="shape-two">
                                            <span
                                                class="svg-icon"
                                                id="instructor-svg-two"
                                                data-svg-icon="assets/img/instructor/instructor_shape02.svg"
                                            ></span>
                                        </div>
                                    </div>
                                    <div class="instructor__content-two">
                                        <h3 class="title">
                                            <a href="contact.html">
                                                Masuk Sebagai Siswa
                                            </a>
                                        </h3>
                                        <p>
                                        Daftar sebagai siswa untuk mengakses pembelajaran berkualitas, meningkatkan keterampilan, dan mencapai tujuan Anda bersama para ahli.
                                        </p>
                                        <div class="tg-button-wrap">
                                            <a
                                                href="contact.html"
                                                class="btn arrow-btn"
                                            >
                                                Masuk{" "}
                                                <img
                                                    src="assets/img/icons/right_arrow.svg"
                                                    alt="img"
                                                    class="injectable"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};
export default Instructor;