import React from "react";
import { NavLink } from "react-router-dom";


const CardTeacherPage = () => {
    return (
        <section className="singUp-area section-py-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8">
                        <div className="singUp-wrap">
                            <h2 className="title">Buat Akun Guru</h2>
                            <p>
                                Selamat datang! Isi detail di bawah ini untuk
                                mendaftar sebagai guru.
                            </p>
                            <div className="account__social">
                                <NavLink
                                    to="/register"
                                    className="account__social-btn"
                                >
                                    {/* <img src="assets/img/icons/google.svg" alt="Ikon Google" /> */}
                                    Kembali Sebagai siswa
                                </NavLink>
                            </div>
                            <div className="account__divider">
                                <span>atau</span>
                            </div>
                            <form action="#" className="account__form">
                                <div className="row gutter-20">
                                    <div className="col-md-6">
                                        <div className="form-grp">
                                            <label htmlFor="first-name">
                                                Nama Belakang
                                                <span className="required">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                type="text"
                                                id="first-name"
                                                placeholder="Nama Depan"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-grp">
                                            <label htmlFor="last-name">
                                                Nama Belakang*
                                            </label>
                                            <input
                                                type="text"
                                                id="last-name"
                                                placeholder="Nama Belakang"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-grp">
                                    <label htmlFor="nip">
                                        NIP (Nomor Induk Pegawai)
                                    </label>
                                    <input
                                        type="text"
                                        id="nip"
                                        placeholder="Masukkan NIP"
                                    />
                                </div>
                                <div className="form-grp">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="email"
                                    />
                                </div>
                                <div className="form-grp">
                                    <label htmlFor="subject">
                                        Spesialisasi Mata Pelajaran
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        placeholder="Masukkan mata pelajaran"
                                    />
                                </div>
                                <div className="form-grp">
                                    <label htmlFor="school">
                                        Sekolah/Institusi
                                    </label>
                                    <input
                                        type="text"
                                        id="school"
                                        placeholder="Nama Sekolah/Institusi"
                                    />
                                </div>
                                <div className="form-grp">
                                    <label htmlFor="password">Kata Sandi</label>
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder="Kata sandi"
                                    />
                                </div>
                                <div className="form-grp">
                                    <label htmlFor="confirm-password">
                                        Konfirmasi Kata Sandi
                                    </label>
                                    <input
                                        type="password"
                                        id="confirm-password"
                                        placeholder="Konfirmasi Kata Sandi"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-two arrow-btn"
                                >
                                    Daftar{" "}
                                    <img
                                        src="assets/img/icons/right_arrow.svg"
                                        alt="Ikon Panah"
                                        className="injectable"
                                    />
                                </button>
                            </form>
                            <div className="account__switch">
                                <p>
                                    Sudah memiliki akun?{" "}
                                    <NavLink to="/login">Login</NavLink>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CardTeacherPage;
