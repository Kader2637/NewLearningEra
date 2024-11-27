import React from 'react';
import { NavLink } from 'react-router-dom';

const CardLogin = () => {
  return (
    <section className="singUp-area section-py-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="singUp-wrap">
              <h2 className="title">Selamat datang kembali!</h2>
              <p>Hai! Siap untuk masuk? Cukup masukkan nama pengguna dan kata sandi Anda di bawah ini, dan Anda akan segera kembali beraksi. Ayo!</p>
              <div className="account__social">
                <a href="#" className="account__social-btn">
                  <img src="assets/img/icons/google.svg" alt="Ikon Google" />
                  Lanjutkan dengan Google
                </a>
              </div>
              <div className="account__divider">
                <span>atau</span>
              </div>
              <form action="#" className="account__form">
                <div className="form-grp">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="text" placeholder="email" />
                </div>
                <div className="form-grp">
                  <label htmlFor="password">Kata Sandi</label>
                  <input id="password" type="password" placeholder="kata sandi" />
                </div>
                <div className="account__check">
                  <div className="account__check-remember">
                    <input type="checkbox" className="form-check-input" id="terms-check" />
                    <label htmlFor="terms-check" className="form-check-label">Ingat saya</label>
                  </div>
                  {/* <div className="account__check-forgot">
                    <a href="registration.html">Lupa Kata Sandi?</a>
                  </div> */}
                </div>
                <button type="submit" className="btn btn-two arrow-btn">
                  Masuk <img src="assets/img/icons/right_arrow.svg" alt="Ikon Panah" className="injectable" />
                </button>
              </form>
              <div className="account__switch">
                <p>Belum mempunyai akun? <NavLink to="/register">Register</NavLink></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardLogin;
