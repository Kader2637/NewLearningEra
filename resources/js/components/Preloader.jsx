import React from "react";

const Preloader = () => {
    return (
        <div>
            <div id="preloader">
                <div id="loader" class="loader">
                    <div class="loader-container">
                        <div class="loader-icon">
                            <img
                                src="assets/img/logo/preloader.svg"
                                alt="Preloader"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preloader;

