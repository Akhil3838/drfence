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
        <a className="navbar-brand" href="/">
          <img src="images/logo.svg" alt="Logo" />
        </a>
        {/* Logo End */}

        {/* Main Menu Start */}
        <div className="collapse navbar-collapse main-menu">
          <div className="nav-menu-wrapper">
            <ul className="navbar-nav mr-auto" id="menu">
              <li className="nav-item submenu">
                <a className="nav-link" href="/">Home</a>
                <ul className="sub-menu">
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/about-us">About Us</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/services">Services</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/blogs">Blog</a>
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
                <a className="nav-link" href="/contact-us">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Header Button */}
          <div className="header-btn d-inline-flex">
            <a href="/contact-us" className="btn-default">
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
            Services
          </h1>

          <nav className="wow fadeInUp">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">home</a>
              </li>
              <li
                className="breadcrumb-item active"
                aria-current="page"
              >
                services
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
{/* Page Service Start */}
<div className="page-service">
  <div className="container">
    <div className="row section-row">
      <div className="col-lg-12">
        {/* Section Title Start */}
        <div className="section-title">
          <h3 className="wow fadeInUp">our services</h3>
          <h2 className="text-anime-style-3" data-cursor="-opaque">
            Our fencing services
          </h2>
          <p className="wow fadeInUp" data-wow-delay="0.25s">
            We specialize in a wide range of fencing services, including
            residential, commercial, and industrial fencing solutions.
          </p>
        </div>
        {/* Section Title End */}
      </div>
    </div>

    <div className="row">
      {/* Service Item 1 */}
      <div className="col-lg-4 col-md-6">
        <div className="service-item wow fadeInUp" data-wow-delay="0.25s">
          <div className="service-image" data-cursor-text="View">
            <a href="#">
              <figure>
                <img src="images/service-img-1.jpg" alt="" />
              </figure>
            </a>
          </div>

          <div className="service-body">
            <div className="service-body-title">
              <h3>residential fencing</h3>
            </div>

            <div className="service-content">
              <p>
                Our residential fencing services provide security and privacy
                for your home with quality materials and professional installation.
              </p>
              <div className="service-content-footer">
                <a href="#" className="readmore-btn">view more</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Item 2 */}
      <div className="col-lg-4 col-md-6">
        <div className="service-item wow fadeInUp" data-wow-delay="0.5s">
          <div className="service-image" data-cursor-text="View">
            <a href="#">
              <figure>
                <img src="images/service-img-2.jpg" alt="" />
              </figure>
            </a>
          </div>

          <div className="service-body">
            <div className="service-body-title">
              <h3>commercial fencing</h3>
            </div>

            <div className="service-content">
              <p>
                Our commercial fencing solutions provide security and protection
                for businesses with durable materials and expert installation.
              </p>
              <div className="service-content-footer">
                <a href="#" className="readmore-btn">view more</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Item 3 */}
      <div className="col-lg-4 col-md-6">
        <div className="service-item wow fadeInUp" data-wow-delay="0.75s">
          <div className="service-image" data-cursor-text="View">
            <a href="#">
              <figure>
                <img src="images/service-img-3.jpg" alt="" />
              </figure>
            </a>
          </div>

          <div className="service-body">
            <div className="service-body-title">
              <h3>fence repair &amp; maintenance</h3>
            </div>

            <div className="service-content">
              <p>
                Our fence repair and maintenance services keep your fencing
                in excellent condition with regular upkeep and timely repairs.
              </p>
              <div className="service-content-footer">
                <a href="#" className="readmore-btn">view more</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Item 4 */}
      <div className="col-lg-4 col-md-6">
        <div className="service-item wow fadeInUp" data-wow-delay="1s">
          <div className="service-image" data-cursor-text="View">
            <a href="#">
              <figure>
                <img src="images/service-img-4.jpg" alt="" />
              </figure>
            </a>
          </div>

          <div className="service-body">
            <div className="service-body-title">
              <h3>custom fence design</h3>
            </div>

            <div className="service-content">
              <p>
                Our custom fence design services create unique fencing solutions
                tailored to your specific needs and property requirements.
              </p>
              <div className="service-content-footer">
                <a href="#" className="readmore-btn">view more</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Item 5 */}
      <div className="col-lg-4 col-md-6">
        <div className="service-item wow fadeInUp" data-wow-delay="1.25s">
          <div className="service-image" data-cursor-text="View">
            <a href="#">
              <figure>
                <img src="images/service-img-5.jpg" alt="" />
              </figure>
            </a>
          </div>

          <div className="service-body">
            <div className="service-body-title">
              <h3>industrial fencing</h3>
            </div>

            <div className="service-content">
              <p>
                Our industrial fencing solutions provide maximum security and
                protection for industrial facilities and warehouses.
              </p>
              <div className="service-content-footer">
                <a href="#" className="readmore-btn">view more</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Item 6 */}
      <div className="col-lg-4 col-md-6">
        <div className="service-item wow fadeInUp" data-wow-delay="1.5s">
          <div className="service-image" data-cursor-text="View">
            <a href="#">
              <figure>
                <img src="images/service-img-6.jpg" alt="" />
              </figure>
            </a>
          </div>

          <div className="service-body">
            <div className="service-body-title">
              <h3>security fencing</h3>
            </div>

            <div className="service-content">
              <p>
                Our security fencing solutions provide enhanced protection
                with high-quality materials designed for maximum security.
              </p>
              <div className="service-content-footer">
                <a href="#" className="readmore-btn">view more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Page Service End */}
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
          Securing properties with excellence in fencing
        </h2>
        <p
          className="wow fadeInUp"
          data-wow-delay="0.25s"
        >
          We specialize in a wide range of fencing services, including
          residential, commercial, and industrial fencing solutions. From initial
          consultation to final installation, we work closely with our clients to
          understand their unique needs and requirements.
        </p>
      </div>
      {/* Section Title End */}
    </div>

    <div className="row">
      {/* Counter 1 */}
      <div className="col-lg-3 col-md-6">
        <div className="company-counter-item">
          <div className="company-counter-content">
            <h3>
              <span className="counter">99</span>%
            </h3>
            <p>customer satisfaction rate</p>
          </div>
        </div>
      </div>

      {/* Counter 2 */}
      <div className="col-lg-3 col-md-6">
        <div className="company-counter-item">
          <div className="company-counter-content">
            <h3>
              <span className="counter">320</span>+
            </h3>
            <p>active fencing projects</p>
          </div>
        </div>
      </div>

      {/* Counter 3 */}
      <div className="col-lg-3 col-md-6">
        <div className="company-counter-item">
          <div className="company-counter-content">
            <h3>
              <span className="counter">200</span>+
            </h3>
            <p>fences installed every year</p>
          </div>
        </div>
      </div>

      {/* Counter 4 */}
      <div className="col-lg-3 col-md-6">
        <div className="company-counter-item">
          <div className="company-counter-content">
            <h3>
              <span className="counter">4.253</span>
            </h3>
            <p>miles of fencing installed</p>
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
            Let's secure your property with quality fencing!
          </h2>
          <p className="wow fadeInUp">
            Don't wait any longer to protect your property with professional fencing.
            Partner with DrFence and experience unparalleled service and quality.
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
      {/* About Footer */}
      <div className="col-lg-3 col-md-12">
        <div className="about-footer">
          <div className="footer-logo">
            <figure>
              <img src="images/footer-logo.svg" alt="" />
            </figure>
          </div>

          <div className="footer-content">
            <p>
              Our professional fencing services provide security and peace of mind
              for your property with quality materials and expert installation.
            </p>
          </div>
        </div>
      </div>

      {/* Services Links */}
      <div className="col-lg-3 col-md-4 col-12">
        <div className="footer-links">
          <h3>our services</h3>
          <ul>
            <li><a href="#">residential fencing</a></li>
            <li><a href="#">commercial fencing</a></li>
            <li><a href="#">fence repair &amp; maintenance</a></li>
            <li><a href="#">custom fence design</a></li>
            <li><a href="#">industrial fencing</a></li>
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
            <p>Copyright © 2024 DrFence. All Rights Reserved.</p>
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