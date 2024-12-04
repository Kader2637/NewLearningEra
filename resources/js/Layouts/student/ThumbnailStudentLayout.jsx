import React from "react";

const ThumbnailStudentLayout = () => {
    return (
        <div className="dashboard__top-wrap">
            <div
                className="dashboard__top-bg"
                data-background="http://127.0.0.1:8000/assets/img/bg/student_bg.jpg"
                style={{
                    backgroundImage:
                        "url('http://127.0.0.1:8000/assets/img/bg/student_bg.jpg')",
                }}
            ></div>{" "}
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
                                    alt="Courses Enrolled"
                                    className="injectable"
                                />
                                10 Courses Enrolled
                            </li>
                            <li>
                                <img
                                    src="http://127.0.0.1:8000/assets/img/icons/course_icon05.svg"
                                    alt="Certificates"
                                    className="injectable"
                                />
                                7 Certificates
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="dashboard__instructor-info-right">
                    <a href="#" className="btn btn-two arrow-btn">
                        Become an Instructor
                        <img
                            src="http://127.0.0.1:8000/assets/img/icons/right_arrow.svg"
                            alt="Arrow"
                            className="injectable"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ThumbnailStudentLayout;
