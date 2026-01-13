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
                    <a className="nav-link" href="service-single.html">Service Details</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="blog-single.html">Blog Details</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="project.html">Project</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="project-single.html">Project Details</a>
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
                <a className="nav-link" href="/contact-us">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Header Button */}
          <div className="header-btn d-inline-flex">
            <a href="/contact-us" className="btn-default">Contact Us</a>
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
          <h1 className="text-anime-style-3" data-cursor="-opaque">
            Contact Us
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
                contact us
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
{/* Contact Information Section Start */}
<div className="contact-information">
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        {/* Contact Info Item Start */}
        <div
          className="contact-info-item wow fadeInUp"
          data-wow-delay="0.25s"
        >
          <div className="icon-box">
            <img src="images/icon-phone.svg" alt="" />
          </div>
          <div className="contact-info-body">
            <h3>call support center 24/7</h3>
            <p>+1 809 120 6705</p>
            <p>+1 809 120 6705</p>
          </div>
        </div>
        {/* Contact Info Item End */}
      </div>

      <div className="col-md-4">
        {/* Contact Info Item Start */}
        <div
          className="contact-info-item wow fadeInUp"
          data-wow-delay="0.5s"
        >
          <div className="icon-box">
            <img src="images/icon-mail.svg" alt="" />
          </div>
          <div className="contact-info-body">
            <h3>write to us</h3>
            <p>info@domain.com</p>
            <p>Support@domain.com</p>
          </div>
        </div>
        {/* Contact Info Item End */}
      </div>

      <div className="col-md-4">
        {/* Contact Info Item Start */}
        <div
          className="contact-info-item wow fadeInUp"
          data-wow-delay="0.75s"
        >
          <div className="icon-box">
            <img src="images/icon-location.svg" alt="" />
          </div>
          <div className="contact-info-body">
            <h3>visit us</h3>
            <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
          </div>
        </div>
        {/* Contact Info Item End */}
      </div>
    </div>
  </div>
</div>
{/* Contact Information Section End */}
{/* Page Contact Us Start */}
<div className="contact-us page-contact-us">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-8 col-md-7">
        {/* Contact Form start */}
        <div
          className="contact-form wow fadeInUp"
          data-wow-delay="0.5s"
        >
          {/* Section Title Start */}
          <div className="section-title">
            <h2
              className="text-anime-style-3"
              data-cursor="-opaque"
            >
              Ready to get started? let's chat.
            </h2>
            <p>
              Please fill out the form below, and a member of our team
              will get back to you as soon as possible.
            </p>
          </div>
          {/* Section Title End */}

          <form
            id="contactForm"
            action="#"
            method="POST"
            data-toggle="validator"
          >
            <div className="row">
              <div className="form-group col-md-6 mb-3">
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

              <div className="form-group col-md-6 mb-3">
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

              <div className="form-group col-md-6 mb-3">
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

              <div className="form-group col-md-6 mb-3">
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  id="subject"
                  placeholder="Subject"
                  required
                />
                <div className="help-block with-errors"></div>
              </div>

              <div className="form-group col-md-12 mb-4">
                <textarea
                  name="msg"
                  className="form-control"
                  id="msg"
                  rows={3}
                  placeholder="Message"
                  required
                />
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
        {/* Contact Form end */}
      </div>

      <div className="col-lg-4 col-md-5">
        {/* Contact Sidebar Start */}
        <div
          className="contact-sidebar page-contact-sidebar wow fadeInUp"
          data-wow-delay="0.5s"
        >
          <div className="contact-social-list">
            <h3>follow us</h3>
            <ul>
              <li>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Image Start */}
          <div className="contact-info-image">
            <figure>
              <img src="images/contact-info-img.png" alt="" />
            </figure>
          </div>
          {/* Contact Info Image End */}
        </div>
        {/* Contact Sidebar End */}
      </div>
    </div>
  </div>
</div>
{/* Page Contact Us End */}
{/* Google Map Start */}
<div className="google-map">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-12">
        {/* Google Map Iframe Start */}
        <div className="google-map-iframe">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96737.10562045308!2d-74.08535042841811!3d40.739265258395164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1703158537552!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        {/* Google Map Iframe End */}
      </div>
    </div>
  </div>
</div>
{/* Google Map End */}
{/* Footer Start */}
<footer className="main-footer">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-12">
        {/* About Footer Start */}
        <div className="about-footer">
          {/* Footer Logo Start */}
          <div className="footer-logo">
            <figure>
              <img src="images/footer-logo.svg" alt="" />
            </figure>
          </div>
          {/* Footer Logo End */}

          {/* Footer Content Start */}
          <div className="footer-content">
            <p>
              Our professional fencing services provide security and peace of mind
              for your property with quality materials and expert installation.
            </p>
          </div>
          {/* Footer Content End */}
        </div>
        {/* About Footer End */}
      </div>

      <div className="col-lg-3 col-md-4 col-12">
        {/* Footer Quick Links Start */}
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
        {/* Footer Quick Links End */}
      </div>

      <div className="col-lg-3 col-md-4 col-12">
        {/* Footer Links Start */}
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
        {/* Footer Links End */}
      </div>

      <div className="col-lg-3 col-md-4 col-12">
        {/* Footer Contact Info Box Start */}
        <div className="footer-links footer-contact-box">
          <h3>contact us</h3>

          {/* Info Box Start */}
          <div className="footer-info-box">
            <div className="icon-box">
              <img src="images/icon-phone.svg" alt="" />
            </div>
            <p>+1 809 120 6705</p>
          </div>
          {/* Info Box End */}

          {/* Info Box Start */}
          <div className="footer-info-box">
            <div className="icon-box">
              <img src="images/icon-mail.svg" alt="" />
            </div>
            <p>info@domain.com</p>
          </div>
          {/* Info Box End */}

          {/* Info Box Start */}
          <div className="footer-info-box">
            <div className="icon-box">
              <img src="images/icon-location.svg" alt="" />
            </div>
            <p>37 San Juan Lane Graaf Florisstraat 22A,3021 CH</p>
          </div>
          {/* Info Box End */}
        </div>
        {/* Footer Contact Info Box End */}
      </div>
    </div>

    {/* Footer Copyright Section Start */}
    <div className="footer-copyright">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-7">
          <div className="footer-copyright-text">
            <p>Copyright © 2024 DrFence. All Rights Reserved.</p>
          </div>
        </div>

        <div className="col-lg-6 col-md-5">
          {/* Footer Social Link Start */}
          <div className="footer-social-links">
            <ul>
              <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-github"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
            </ul>
          </div>
          {/* Footer Social Link End */}
        </div>
      </div>
    </div>
    {/* Footer Copyright Section End */}
  </div>
</footer>
{/* Footer End */}

    </>
  )
}

export default page