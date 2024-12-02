import React from "react";

const Card = () => {
    const courses = [
        {
            id: 1,
            title: "Learning JavaScript With Imagination",
            author: "David Millar",
            image: "assets/img/courses/course_thumb01.jpg",
            category: "Development",
            rating: 4.8,
            price: "$15.00",
            link: "",
        },
        {
            id: 2,
            title: "The Complete Graphic Design for Beginners",
            author: "David Millar",
            image: "assets/img/courses/course_thumb02.jpg",
            category: "Design",
            rating: 4.5,
            price: "$19.00",
            link: "",
        },
        {
            id: 3,
            title: "Learning Digital Marketing on Facebook",
            author: "David Millar",
            image: "assets/img/courses/course_thumb03.jpg",
            category: "Marketing",
            rating: 4.3,
            price: "$24.00",
            link: "",
        },
        {
            id: 4,
            title: "Advanced Python Programming Keren",
            author: "David Millar",
            image: "assets/img/courses/course_thumb04.jpg",
            category: "Development",
            rating: 4.9,
            price: "$20.00",
            link: "",
        },
        {
            id: 1,
            title: "Learning JavaScript With Imagination",
            author: "David Millar",
            image: "assets/img/courses/course_thumb01.jpg",
            category: "Development",
            rating: 4.8,
            price: "$15.00",
            link: "",
        },
        {
            id: 2,
            title: "The Complete Graphic Design for Beginners",
            author: "David Millar",
            image: "assets/img/courses/course_thumb02.jpg",
            category: "Design",
            rating: 4.5,
            price: "$19.00",
            link: "",
        },
        {
            id: 3,
            title: "Learning Digital Marketing on Facebook",
            author: "David Millar",
            image: "assets/img/courses/course_thumb03.jpg",
            category: "Marketing",
            rating: 4.3,
            price: "$24.00",
            link: "",
        },
        {
            id: 4,
            title: "Advanced Python Programming Keren",
            author: "David Millar",
            image: "assets/img/courses/course_thumb04.jpg",
            category: "Development",
            rating: 4.9,
            price: "$20.00",
            link: "",
        },
    ];

    return (
        <section
            className="courses-area section-pt-120 section-pb-90"
            data-background="assets/img/bg/courses_bg.jpg"
        >
            <div className="container">
                <div className="row">
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
                                            <i className="fas fa-star"></i> (
                                            {course.rating} Reviews)
                                        </li>
                                    </ul>
                                    <h5 className="title">
                                        <a href={course.link}>{course.title}</a>
                                    </h5>
                                    <p className="author">
                                        By <a href="#">{course.author}</a>
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
                <div className="d-flex justify-content-center">
                    <nav class="pagination__wrap mt-30">
                        <ul class="list-wrap">
                            <li class="active">
                                <a href="#">1</a>
                            </li>
                            <li>
                                <a href="#">2</a>
                            </li>
                            <li>
                                <a href="#">3</a>
                            </li>
                            <li>
                                <a href="#">4</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    );
};

export default Card;
