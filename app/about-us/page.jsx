import React from 'react'

function page() {
  return (
    <>
    {/* Header Start */}
<header className="main-header">
  <div className="header-sticky">
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        {/* Logo Start */}
        <a className="navbar-brand" href="index-2.html">
          <img src="images/logo.svg" alt="Logo" />
        </a>
        {/* Logo End */}

        {/* Main Menu Start */}
        <div className="collapse navbar-collapse main-menu">
          <div className="nav-menu-wrapper">
            <ul className="navbar-nav mr-auto" id="menu">
              <li className="nav-item submenu">
                <a className="nav-link" href="index-2.html">Home</a>
                <ul className="sub-menu">
                  <li className="nav-item">
                    <a className="nav-link" href="index.html">Home - Image</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="index-3.html">Home - Slider</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="index-4.html">Home - Video</a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="about.html">About Us</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="service.html">Services</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="blog.html">Blog</a>
              </li>

              <li className="nav-item submenu">
                <a className="nav-link" href="#">Pages</a>
                <ul>
                  <li className="nav-item">
                    <a className="nav-link" href="service-single.html">
                      Service Details
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="blog-single.html">
                      Blog Details
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="project.html">Project</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="project-single.html">
                      Project Details
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="team.html">Our Team</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="faqs.html">FAQ</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="404.html">404</a>
                  </li>
                </ul>
              </li>

              <li className="nav-item highlighted-menu">
                <a className="nav-link" href="contact.html">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Header Button */}
          <div className="header-btn d-inline-flex">
            <a href="contact.html" className="btn-default">
              Contact Us
            </a>
          </div>
        </div>
        {/* Main Menu End */}

        <div className="navbar-toggle"></div>
      </div>
    </nav>

    <div className="responsive-menu"></div>
  </div>
</header>
{/* Header End */}
{/* Page Header Start */}
<div className="page-header parallaxie">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        {/* Page Header Box Start */}
        <div className="page-header-box">
          <h1
            className="text-anime-style-3"
            data-cursor="-opaque"
          >
            About Us
          </h1>

          <nav className="wow fadeInUp">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index-2.html">home</a>
              </li>
              <li
                className="breadcrumb-item active"
                aria-current="page"
              >
                about us
              </li>
            </ol>
          </nav>
        </div>
        {/* Page Header Box End */}
      </div>
    </div>
  </div>
</div>
{/* Page Header End */}
{/* Page About Us Start */}
<div className="page-about-us">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-5">
        {/* About Us Image Start */}
        <div className="about-us-image">
          <div className="about-us-img">
            <figure className="reveal">
              <img src="images/about-us-img.png" alt="" />
            </figure>
          </div>
        </div>
        {/* About Us Image End */}
      </div>

      <div className="col-lg-7">
        {/* About Content Start */}
        <div className="about-us-content">
          {/* Section Title Start */}
          <div className="section-title">
            <h3 className="wow fadeInUp">about us</h3>
            <h2
              className="text-anime-style-3"
              data-cursor="-opaque"
            >
              Crafting structures that last a lifetime
            </h2>
            <p
              className="wow fadeInUp"
              data-wow-delay="0.25s"
            >
              Crafting structures that last a lifetime requires a holistic
              approach that integrates advanced materials, resilient design,
              regular maintenance, and sustainability practices. By learning
              from historical examples and leveraging modern technology.
            </p>
          </div>
          {/* Section Title End */}

          {/* About Content Body Start */}
          <div
            className="about-us-content-body wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <ul>
              <li>Comprehensive Services</li>
              <li>Advanced Technology</li>
              <li>Transparent Communication</li>
            </ul>
          </div>
          {/* About Content Body End */}

          {/* About Content Footer Start */}
          <div
            className="about-us-content-footer wow fadeInUp"
            data-wow-delay="0.75s"
          >
            <div className="about-us-footer-btn">
              <a href="#" className="btn-default">
                get free quote
              </a>
            </div>

            <div className="about-us-contact-support">
              <div className="icon-box">
                <img src="images/icon-phone.svg" alt="" />
              </div>
              <div className="about-us-support-content">
                <p>call support center 24X7</p>
                <h3>+1 809 120 6705</h3>
              </div>
            </div>
          </div>
          {/* About Content Footer End */}
        </div>
      </div>
    </div>
  </div>
</div>
{/* Page About Us End */}
{/* Our Company History Start */}
<div className="our-company-history">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6">
        {/* Company History Image Start */}
        <div className="company-history-image">
          <div className="company-history-img">
            <figure className="image-anime reveal">
              <img src="images/company-history-img.jpg" alt="" />
            </figure>
          </div>

          {/* Company Experience Box Start */}
          <div className="company-experience">
            <div className="company-experience-content">
              <h3>
                <span className="counter">25</span>+
              </h3>
              <p>years of experience</p>
            </div>
          </div>
          {/* Company Experience Box End */}
        </div>
        {/* Company History Image End */}
      </div>

      <div className="col-lg-6">
        <div className="company-history-content">
          {/* Section Title Start */}
          <div className="section-title">
            <h3 className="wow fadeInUp">our history</h3>
            <h2
              className="text-anime-style-3"
              data-cursor="-opaque"
            >
              Crafting structures that last a lifetime
            </h2>
          </div>
          {/* Section Title End */}

          {/* Company History Body Start */}
          <div className="company-history-body">
            <p
              className="wow fadeInUp"
              data-wow-delay="0.25s"
            >
              We specialize in a wide range of construction services, including
              residential, commercial, and industrial projects. From initial
              design to final inspection, we work closely with our clients to
              understand their unique needs and vision.
            </p>

            <p
              className="wow fadeInUp"
              data-wow-delay="0.5s"
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters.
            </p>
          </div>
          {/* Company History Body End */}
        </div>
      </div>
    </div>
  </div>
</div>
{/* Our Company History End */}
{/* Our Mission Vision Start */}
<div className="our-mission-vision">
  <div className="container">
    <div className="row">
      {/* Mission */}
      <div className="col-lg-4">
        <div className="mission-vision-item wow fadeInUp">
          <div className="icon-box">
            <img src="images/icon-our-mission.svg" alt="" />
          </div>

          <div className="mission-vision-content">
            <h3>our mission</h3>
            <p>
              Simple actions make a difference. It starts and ends with each
              employee striving to work safer every single day so they can
              return.
            </p>
          </div>
        </div>
      </div>

      {/* Vision */}
      <div className="col-lg-4">
        <div
          className="mission-vision-item wow fadeInUp"
          data-wow-delay="0.25s"
        >
          <div className="icon-box">
            <img src="images/icon-our-vision.svg" alt="" />
          </div>

          <div className="mission-vision-content">
            <h3>our vision</h3>
            <p>
              Simple actions make a difference. It starts and ends with each
              employee striving to work safer every single day so they can
              return.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="col-lg-4">
        <div
          className="mission-vision-item wow fadeInUp"
          data-wow-delay="0.5s"
        >
          <div className="icon-box">
            <img src="images/icon-our-values.svg" alt="" />
          </div>

          <div className="mission-vision-content">
            <h3>our values</h3>
            <p>
              Simple actions make a difference. It starts and ends with each
              employee striving to work safer every single day so they can
              return.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Our Mission Vision End */}
{/* Intro Video Section Start */}
<div className="intro-video">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-12">
        {/* Intro Video Box Start */}
        <div
          className="intro-video-box"
          data-cursor-text="Play"
        >
          {/* Video Image Start */}
          <div className="video-image">
            <a
              href="https://www.youtube.com/watch?v=Y-x0efG1seA"
              className="popup-video"
            >
              <figure className="image-anime">
                <img src="images/video-bg.jpg" alt="" />
              </figure>
            </a>
          </div>
          {/* Video Image End */}

          {/* Video Play Button Start */}
          <div className="video-play-button">
            <a
              href="https://www.youtube.com/watch?v=Y-x0efG1seA"
              className="popup-video"
            >
              <i className="fa-solid fa-play"></i>
            </a>
          </div>
          {/* Video Play Button End */}
        </div>
        {/* Intro Video Box End */}
      </div>
    </div>
  </div>
</div>
{/* Intro Video Section End */}
{/* What We Do Section Start */}
<div className="what-we-do">
  <div className="container">
    <div className="row section-row">
      {/* Section Title Start */}
      <div className="section-title">
        <h3 className="wow fadeInUp">what we do</h3>
        <h2
          className="text-anime-style-3"
          data-cursor="-opaque"
        >
          Building the future on a foundation of excellence
        </h2>
        <p
          className="wow fadeInUp"
          data-wow-delay="0.25s"
        >
          We specialize in a wide range of construction services, including
          residential, commercial, and industrial projects. From initial design
          to final inspection, we work closely with our clients to understand
          their unique needs and vision.
        </p>
      </div>
      {/* Section Title End */}
    </div>

    <div className="row">
      {/* Counter 1 */}
      <div className="col-lg-3 col-6">
        <div className="company-counter-item">
          <div className="company-counter-content">
            <h3>
              <span className="counter">99</span>%
            </h3>
            <p>buildings control approval rate</p>
          </div>
        </div>
      </div>

      {/* Counter 2 */}
      <div className="col-lg-3 col-6">
        <div className="company-counter-item">
          <div className="company-counter-content">
            <h3>
              <span className="counter">320</span>+
            </h3>
            <p>active construction management</p>
          </div>
        </div>
      </div>

      {/* Counter 3 */}
      <div className="col-lg-3 col-6">
        <div className="company-counter-item">
          <div className="company-counter-content">
            <h3>
              <span className="counter">200</span>+
            </h3>
            <p>completed projects every year</p>
          </div>
        </div>
      </div>

      {/* Counter 4 */}
      <div className="col-lg-3 col-6">
        <div className="company-counter-item">
          <div className="company-counter-content">
            <h3>
              <span className="counter">4.253</span>
            </h3>
            <p>million euros turnover in 2020</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* What We Do Section End */}
{/* Cta Box Section Start */}
<div className="cta-box">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-7 col-md-8">
        {/* Section Title Start */}
        <div className="section-title">
          <h2
            className="text-anime-style-3"
            data-cursor="-opaque"
          >
            Let's bulid something great together!
          </h2>
          <p className="wow fadeInUp">
            Don't wait any longer to bring your construction dreams to life.
            Partner with Builtup and experience unparalleled service and
            quality.
          </p>
        </div>
        {/* Section Title End */}

        {/* Section Btn Start */}
        <div
          className="section-btn wow fadeInUp"
          data-wow-delay="0.25s"
        >
          <a href="#" className="btn-default btn-large">
            get free quote
          </a>
        </div>
        {/* Section Btn End */}
      </div>

      <div className="col-lg-5 col-md-4">
        {/* Cta Box Image Start */}
        <div className="cta-box-image">
          <figure>
            <img src="images/cta-box-img.png" alt="" />
          </figure>
        </div>
        {/* Cta Box Image End */}
      </div>
    </div>
  </div>
</div>
{/* Cta Box Section End */}
{/* Our Team Start */}
<div className="our-team">
  <div className="container">
    <div className="row section-row">
      {/* Section Title Start */}
      <div className="section-title">
        <h3 className="wow fadeInUp">team</h3>
        <h2
          className="text-anime-style-3"
          data-cursor="-opaque"
        >
          Our team
        </h2>
        <p
          className="wow fadeInUp"
          data-wow-delay="0.25s"
        >
          We specialize in a wide range of construction services, including
          residential, commercial, and industrial projects.
        </p>
      </div>
      {/* Section Title End */}
    </div>

    <div className="row">
      {/* Team Member 1 */}
      <div className="col-lg-4 col-md-6">
        <div
          className="team-member-item wow fadeInUp"
          data-wow-delay="0.25s"
        >
          <div className="team-image">
            <figure className="image-anime">
              <img src="images/team-1.jpg" alt="" />
            </figure>
          </div>

          <div className="team-body">
            <div className="team-content">
              <h3>benjamin miller</h3>
              <p>project manager</p>
            </div>

            <div className="team-social-icon">
              <ul>
                <li>
                  <a href="#" className="social-icon">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="social-icon">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="social-icon">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Team Member 2 */}
      <div className="col-lg-4 col-md-6">
        <div
          className="team-member-item wow fadeInUp"
          data-wow-delay="0.5s"
        >
          <div className="team-image">
            <figure className="image-anime">
              <img src="images/team-2.jpg" alt="" />
            </figure>
          </div>

          <div className="team-body">
            <div className="team-content">
              <h3>jane smith</h3>
              <p>lead architect</p>
            </div>

            <div className="team-social-icon">
              <ul>
                <li>
                  <a href="#" className="social-icon">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="social-icon">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="social-icon">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Team Member 3 */}
      <div className="col-lg-4 col-md-6">
        <div
          className="team-member-item wow fadeInUp"
          data-wow-delay="0.75s"
        >
          <div className="team-image">
            <figure className="image-anime">
              <img src="images/team-3.jpg" alt="" />
            </figure>
          </div>

          <div className="team-body">
            <div className="team-content">
              <h3>mike johnson</h3>
              <p>chief engineer</p>
            </div>

            <div className="team-social-icon">
              <ul>
                <li>
                  <a href="#" className="social-icon">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="social-icon">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="social-icon">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Our Team End */}
{/* Contact Us Section Start */}
<div className="contact-us">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-4 col-md-5">
        {/* Contact Sidebar Start */}
        <div
          className="contact-sidebar wow fadeInUp"
          data-wow-delay="0.25s"
        >
          {/* Contact Info */}
          <div className="contact-info">
            <div className="icon-box">
              <img src="images/icon-phone.svg" alt="" />
            </div>
            <div className="contact-info-content">
              <p>call support center 24/7</p>
              <h3>+1 809 120 6705</h3>
            </div>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <div className="icon-box">
              <img src="images/icon-mail.svg" alt="" />
            </div>
            <div className="contact-info-content">
              <p>write to us</p>
              <h3>info@domain.com</h3>
            </div>
          </div>

          {/* Contact Info Image */}
          <div className="contact-info-image">
            <figure>
              <img src="images/contact-info-img.png" alt="" />
            </figure>
          </div>
        </div>
        {/* Contact Sidebar End */}
      </div>

      <div className="col-lg-8 col-md-7">
        {/* Contact Form Start */}
        <div
          className="contact-form wow fadeInUp"
          data-wow-delay="0.25s"
        >
          {/* Section Title */}
          <div className="section-title">
            <h3 className="wow fadeInUp">contact us</h3>
            <h2
              className="text-anime-style-3"
              data-cursor="-opaque"
            >
              Get in touch with us
            </h2>
          </div>

          <form
            id="contactForm"
            action="#"
            method="POST"
            data-toggle="validator"
          >
            <div className="row">
              <div className="form-group col-md-6 mb-4">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Enter Your name"
                  required
                />
                <div className="help-block with-errors"></div>
              </div>

              <div className="form-group col-md-6 mb-4">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter Your email"
                  required
                />
                <div className="help-block with-errors"></div>
              </div>

              <div className="form-group col-md-6 mb-4">
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  id="phone"
                  placeholder="Phone number"
                  required
                />
                <div className="help-block with-errors"></div>
              </div>

              <div className="form-group col-md-6 mb-4">
                <input
                  type="text"
                  name="website"
                  className="form-control"
                  id="website"
                  placeholder="Subject"
                  required
                />
                <div className="help-block with-errors"></div>
              </div>

              <div className="form-group col-md-12 mb-5">
                <textarea
                  name="msg"
                  className="form-control"
                  id="msg"
                  rows={3}
                  placeholder="Message"
                  required
                ></textarea>
                <div className="help-block with-errors"></div>
              </div>

              <div className="col-md-12">
                <button type="submit" className="btn-default">
                  submit
                </button>
                <div id="msgSubmit" className="h3 hidden"></div>
              </div>
            </div>
          </form>
        </div>
        {/* Contact Form End */}
      </div>
    </div>
  </div>
</div>
{/* Contact Us Section End */}
{/* Footer Start */}
<footer className="main-footer">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-12">
        {/* About Footer */}
        <div className="about-footer">
          <div className="footer-logo">
            <figure>
              <img src="images/footer-logo.svg" alt="" />
            </figure>
          </div>

          <div className="footer-content">
            <p>
              Our post-construction services gives you peace of mind knowing that
              we are still here for you even after.
            </p>
          </div>
        </div>
      </div>

      {/* Services Links */}
      <div className="col-lg-3 col-md-4 col-12">
        <div className="footer-links">
          <h3>our services</h3>
          <ul>
            <li><a href="#">building construction</a></li>
            <li><a href="#">architecture design</a></li>
            <li><a href="#">building renovation</a></li>
            <li><a href="#">flooring &amp; roofing</a></li>
            <li><a href="#">building maintenance</a></li>
          </ul>
        </div>
      </div>

      {/* Company Links */}
      <div className="col-lg-3 col-md-4 col-12">
        <div className="footer-links">
          <h3>company</h3>
          <ul>
            <li><a href="#">about us</a></li>
            <li><a href="#">services</a></li>
            <li><a href="#">blog</a></li>
            <li><a href="#">faqs</a></li>
            <li><a href="#">contact us</a></li>
          </ul>
        </div>
      </div>

      {/* Contact Info */}
      <div className="col-lg-3 col-md-4 col-12">
        <div className="footer-links footer-contact-box">
          <h3>contact us</h3>

          <div className="footer-info-box">
            <div className="icon-box">
              <img src="images/icon-phone.svg" alt="" />
            </div>
            <p>+1 809 120 6705</p>
          </div>

          <div className="footer-info-box">
            <div className="icon-box">
              <img src="images/icon-mail.svg" alt="" />
            </div>
            <p>info@domain.com</p>
          </div>

          <div className="footer-info-box">
            <div className="icon-box">
              <img src="images/icon-location.svg" alt="" />
            </div>
            <p>37 San Juan Lane Graaf Florisstraat 22A,3021 CH</p>
          </div>
        </div>
      </div>
    </div>

    {/* Copyright */}
    <div className="footer-copyright">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-7">
          <div className="footer-copyright-text">
            <p>Copyright © 2024 BuiltUp. All Rights Reserved.</p>
          </div>
        </div>

        <div className="col-lg-6 col-md-5">
          <div className="footer-social-links">
            <ul>
              <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-github"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
{/* Footer End */}

    </>
  )
}

export default page