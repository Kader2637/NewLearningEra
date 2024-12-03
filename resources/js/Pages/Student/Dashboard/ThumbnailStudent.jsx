import React from "react";
import Side from "./Side";
import LabelCard from "./LabelCard";
import Card from "./Card";

const ThumbnailStudent = () => {
    return (
        <section className="dashboard__area section-pb-120">
            <div className="dashboard__bg">
                <img
                    src="http://127.0.0.1:8000/assets/img/bg/dashboard_bg.jpg"
                    alt="Background"
                />
            </div>
            <div className="container">
                <div className="dashboard__top-wrap">
                    <div
                        className="dashboard__top-bg"
                        data-background="http://127.0.0.1:8000/assets/img/bg/student_bg.jpg"
                        style={{
                            backgroundImage:
                                "url('http://127.0.0.1:8000/assets/img/bg/student_bg.jpg')",
                        }}
                    ></div>
                    <div className="dashboard__instructor-info">
                        <div className="dashboard__instructor-info-left">
                            <div className="thumb">
                                <img
                                    src="http://127.0.0.1:8000/assets/img/courses/details_instructors02.jpg"
                                    alt="Instructor"
                                />
                            </div>
                            <div className="content">
                                <h4 className="title">Emily Hannah</h4>
                                <ul className="list-wrap">
                                    <li>
                                        <img
                                            src="http://127.0.0.1:8000/assets/img/icons/course_icon03.svg"
                                            alt="Courses Icon"
                                            className="injectable"
                                        />
                                        10 Courses Enrolled
                                    </li>
                                    <li>
                                        <img
                                            src="http://127.0.0.1:8000/assets/img/icons/course_icon05.svg"
                                            alt="Certificate Icon"
                                            className="injectable"
                                        />
                                        7 Certificate
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="dashboard__instructor-info-right">
                            <a href="#" className="btn btn-two arrow-btn">
                                Become an Instructor{" "}
                                <img
                                    src="http://127.0.0.1:8000/assets/img/icons/right_arrow.svg"
                                    alt="Arrow"
                                    className="injectable"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="dashboard__inner-wrap">
                    <div className="row">
                        <Side />
                        <div className="col-lg-9">
                            <div className="dashboard__count-wrap">
                                <div className="dashboard__content-title">
                                    <h4 className="title">Dashboard</h4>
                                </div>
                                <LabelCard />
                            </div>
                            <Card />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ThumbnailStudent;
