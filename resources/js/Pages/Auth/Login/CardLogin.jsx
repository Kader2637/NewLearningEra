import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const CardLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            const userData = JSON.parse(user);
            if (userData.role) {
                if (userData.role === "admin") {
                    window.location.href = "/dashboard/admin";
                } else if (userData.role === "teacher") {
                    window.location.href = "/dashboard/teacher";
                } else if (userData.role === "student") {
                    window.location.href = "/dashboard/student";
                }
            }
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        const csrfToken = document
            .querySelector('meta[name="csrf-token"]')
            .getAttribute("content");
        axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

        axios
            .post("/api/actionLogin", { email, password })
            .then((response) => {
                const { token, user } = response.data.data;

                localStorage.setItem("authToken", token);
                localStorage.setItem("user", JSON.stringify(user));

                if (user.role === "admin") {
                    window.location.href = "/dashboard/admin";
                } else if (user.role === "teacher") {
                    window.location.href = "/dashboard/teacher";
                } else if (user.role === "student") {
                    window.location.href = "/dashboard/student";
                }
            })
            .catch((err) => {
                setError("Login gagal. Password atau email Anda salah.");
            });
    };

    return (
        <section className="singUp-area section-py-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8">
                        <div className="singUp-wrap">
                            <h2 className="title">Selamat datang kembali!</h2>
                            <p>
                                Hai! Siap untuk masuk? Masukkan email dan kata
                                sandi Anda di bawah ini.
                            </p>
                            {error && (
                                <div
                                    className="alert alert-danger alert-dismissible fade show"
                                    role="alert"
                                >
                                    <strong>Error!</strong> {error}
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="alert"
                                        aria-label="Close"
                                    ></button>
                                </div>
                            )}

                            <form
                                onSubmit={handleSubmit}
                                className="account__form"
                            >
                                <div className="form-grp">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        required
                                    />
                                </div>
                                <div className="form-grp">
                                    <label htmlFor="password">Kata Sandi</label>
                                    <input
                                        id="password"
                                        type="password"
                                        placeholder="Kata Sandi"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        required
                                    />
                                </div>
                                <div className="account__check">
                                    <div className="account__check-remember">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="terms-check"
                                        />
                                        <label
                                            htmlFor="terms-check"
                                            className="form-check-label"
                                        >
                                            Ingat saya
                                        </label>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-two arrow-btn"
                                >
                                    Masuk{" "}
                                    <img
                                        src="assets/img/icons/right_arrow.svg"
                                        alt="Ikon Panah"
                                    />
                                </button>
                            </form>
                            <div className="account__switch">
                                <p>
                                    Belum punya akun?{" "}
                                    <NavLink to="/register">Register</NavLink>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CardLogin;
