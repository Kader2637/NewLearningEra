import React from "react";

const LabelCard = () => {
    return (
        <div className="row">
            <div className="col-lg-4 col-sm-6">
                <div className="dashboard__counter-item">
                    <div className="icon">
                        <i className="skillgro-book"></i>
                    </div>
                    <div className="content">
                        <span className="count odometer" data-count="15"></span>
                        <p>Enrolled Courses</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6">
                <div className="dashboard__counter-item">
                    <div className="icon">
                        <i className="skillgro-tutorial"></i>
                    </div>
                    <div className="content">
                        <span className="count odometer" data-count="12"></span>
                        <p>Active Courses</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6">
                <div className="dashboard__counter-item">
                    <div className="icon">
                        <i className="skillgro-diploma-1"></i>
                    </div>
                    <div className="content">
                        <span className="count odometer" data-count="10"></span>
                        <p>Completed Courses</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LabelCard;
