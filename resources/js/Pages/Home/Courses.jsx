import React from "react";

const Courses = () => {
    const courses = [
        {
            id: 1,
            title: "1A Sistem Informasi",
            author: "Erik abdul tjiptady",
            image: "assets/img/courses/course_thumb01.jpg",
            rating: 4.8,
            link: "",
        },
        {
            id: 2,
            title: "1A Sistem Informasi",
            author: "Erik abdul tjiptady",
            image: "assets/img/courses/course_thumb01.jpg",
            rating: 4.8,
            link: "",
        },
        {
            id: 3,
            title: "1A Sistem Informasi",
            author: "Erik abdul tjiptady",
            image: "assets/img/courses/course_thumb01.jpg",
            rating: 4.8,
            link: "",
        },
    ];
    return (
        <section
                className="courses-area section-py-110 d-flex justify-content-center"
                data-background="assets/img/bg/courses_bg.jpg"
            >
                <div className="container">
                    <div className="section__title-wrap">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-8">
                                <div className="section__title text-center mb-40">
                                    <span className="sub-title">
                                        Kelas teratas
                                    </span>
                                    <h2 className="title">
                                        Kelas Terbaik Kami
                                    </h2>
                                    <p className="desc">
                                    Kelas terbaik kami menawarkan pembelajaran berkualitas tinggi dengan materi terkini, dipandu oleh instruktur ahli untuk mendukung perkembangan keterampilan Anda.
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="tab-content" id="courseTabContent">
                        <div
                            className="tab-pane fade show active"
                            id="all-tab-pane"
                            role="tabpanel"
                            aria-labelledby="all-tab"
                            tabindex="0"
                        >
                            <div className="row d-flex justify-content-center">
                                {courses.map((course) => (
                                    <div
                                        key={course.id}
                                        className="col-lg-3 col-12 col-md-5 mb-4"
                                    >
                                        <div className="courses__item shine__animate-item">
                                            <div className="courses__item-thumb">
                                                <a
                                                    href={course.link}
                                                    className="shine__animate-link"
                                                >
                                                    <img
                                                        src={course.image}
                                                        alt={course.title}
                                                    />
                                                </a>
                                            </div>
                                            <div className="courses__item-content">
                                                <ul className="courses__item-meta list-wrap">
                                 
                                                </ul>
                                                <h5 className="title">
                                                    <a href={course.link}>
                                                        {course.title}
                                                    </a>
                                                </h5>
                                                <p className="author">
                                                    By{" "}
                                                    <a href="#">
                                                        {course.author}
                                                    </a>
                                                </p>
                                                <div className="courses__item-bottom">
                                                    <div className="button">
                                                        <a href={course.link}>
                                                            <span className="text">
                                                                Enroll Now
                                                            </span>
                                                            <i className="flaticon-arrow-right"></i>
                                                        </a>
                                                    </div>
                                                    <h5 className="price">
                                                        {course.price}
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="design-tab-pane"
                            role="tabpanel"
                            aria-labelledby="design-tab"
                            tabindex="0"
                        >
                            <div className="row d-flex justify-content-center">
                                {courses.map((course) => (
                                    <div
                                        key={course.id}
                                        className="col-lg-3 col-12 col-md-5 mb-4"
                                    >
                                        <div className="courses__item shine__animate-item">
                                            <div className="courses__item-thumb">
                                                <a
                                                    href={course.link}
                                                    className="shine__animate-link"
                                                >
                                                    <img
                                                        src={course.image}
                                                        alt={course.title}
                                                    />
                                                </a>
                                            </div>
                                            <div className="courses__item-content">
                                                <ul className="courses__item-meta list-wrap">
                                                    <li className="courses__item-tag">
                                                        <a href="">
                                                            {course.category}
                                                        </a>
                                                    </li>
                                                    <li className="avg-rating">
                                                        <i className="fas fa-star"></i>{" "}
                                                        ({course.rating}{" "}
                                                        Reviews)
                                                    </li>
                                                </ul>
                                                <h5 className="title">
                                                    <a href={course.link}>
                                                        {course.title}
                                                    </a>
                                                </h5>
                                                <p className="author">
                                                    By{" "}
                                                    <a href="#">
                                                        {course.author}
                                                    </a>
                                                </p>
                                                <div className="courses__item-bottom">
                                                    <div className="button">
                                                        <a href={course.link}>
                                                            <span className="text">
                                                                Enroll Now
                                                            </span>
                                                            <i className="flaticon-arrow-right"></i>
                                                        </a>
                                                    </div>
                                                    <h5 className="price">
                                                        {course.price}
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="business-tab-pane"
                            role="tabpanel"
                            aria-labelledby="business-tab"
                            tabindex="0"
                        >
                            <div className="row d-flex justify-content-center">
                                {courses.map((course) => (
                                    <div
                                        key={course.id}
                                        className="col-lg-3 col-12 col-md-5 mb-4"
                                    >
                                        <div className="courses__item shine__animate-item">
                                            <div className="courses__item-thumb">
                                                <a
                                                    href={course.link}
                                                    className="shine__animate-link"
                                                >
                                                    <img
                                                        src={course.image}
                                                        alt={course.title}
                                                    />
                                                </a>
                                            </div>
                                            <div className="courses__item-content">
                                                <ul className="courses__item-meta list-wrap">
                                                    <li className="courses__item-tag">
                                                        <a href="">
                                                            {course.category}
                                                        </a>
                                                    </li>
                                                    <li className="avg-rating">
                                                        <i className="fas fa-star"></i>{" "}
                                                        ({course.rating}{" "}
                                                        Reviews)
                                                    </li>
                                                </ul>
                                                <h5 className="title">
                                                    <a href={course.link}>
                                                        {course.title}
                                                    </a>
                                                </h5>
                                                <p className="author">
                                                    By{" "}
                                                    <a href="#">
                                                        {course.author}
                                                    </a>
                                                </p>
                                                <div className="courses__item-bottom">
                                                    <div className="button">
                                                        <a href={course.link}>
                                                            <span className="text">
                                                                Enroll Now
                                                            </span>
                                                            <i className="flaticon-arrow-right"></i>
                                                        </a>
                                                    </div>
                                                    <h5 className="price">
                                                        {course.price}
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="development-tab-pane"
                            role="tabpanel"
                            aria-labelledby="development-tab"
                            tabindex="0"
                        >
                             <div className="row d-flex justify-content-center">
                                {courses.map((course) => (
                                    <div
                                        key={course.id}
                                        className="col-lg-3 col-12 col-md-5 mb-4"
                                    >
                                        <div className="courses__item shine__animate-item">
                                            <div className="courses__item-thumb">
                                                <a
                                                    href={course.link}
                                                    className="shine__animate-link"
                                                >
                                                    <img
                                                        src={course.image}
                                                        alt={course.title}
                                                    />
                                                </a>
                                            </div>
                                            <div className="courses__item-content">
                                                <ul className="courses__item-meta list-wrap">
                                                    <li className="courses__item-tag">
                                                        <a href="">
                                                            {course.category}
                                                        </a>
                                                    </li>
                                                    <li className="avg-rating">
                                                        <i className="fas fa-star"></i>{" "}
                                                        ({course.rating}{" "}
                                                        Reviews)
                                                    </li>
                                                </ul>
                                                <h5 className="title">
                                                    <a href={course.link}>
                                                        {course.title}
                                                    </a>
                                                </h5>
                                                <p className="author">
                                                    By{" "}
                                                    <a href="#">
                                                        {course.author}
                                                    </a>
                                                </p>
                                                <div className="courses__item-bottom">
                                                    <div className="button">
                                                        <a href={course.link}>
                                                            <span className="text">
                                                                Enroll Now
                                                            </span>
                                                            <i className="flaticon-arrow-right"></i>
                                                        </a>
                                                    </div>
                                                    <h5 className="price">
                                                        {course.price}
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="all-courses-btn ">
                        <div className="tg-button-wrap justify-content-center">
                            <a href="courses.html" className="btn arrow-btn">
                                Lihat Semua Kelas{" "}
                                <img
                                    src="assets/img/icons/right_arrow.svg"
                                    alt="img"
                                    className="injectable"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Courses;