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
            Our Blog
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
                blog
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
{/* Page Blog Start */}
<div className="page-blog">
  <div className="container">
    <div className="row">
      {/* Blog Item 1 */}
      <div className="col-lg-4 col-md-6">
        <div className="blog-item wow fadeInUp">
          <div className="post-featured-image" data-cursor-text="View">
            <figure>
              <a href="#" className="image-anime">
                <img src="images/post-1.jpg" alt="" />
              </a>
            </figure>
          </div>

          <div className="post-item-content">
            <div className="post-item-body">
              <h2>
                <a href="#">10 Essential Tips for Choosing the Right Fencing Company</a>
              </h2>
            </div>

            <div className="post-item-footer">
              <a href="#" className="readmore-btn">read more</a>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Item 2 */}
      <div className="col-lg-4 col-md-6">
        <div className="blog-item wow fadeInUp" data-wow-delay="0.25s">
          <div className="post-featured-image" data-cursor-text="View">
            <figure>
              <a href="#" className="image-anime">
                <img src="images/post-2.jpg" alt="" />
              </a>
            </figure>
          </div>

          <div className="post-item-content">
            <div className="post-item-body">
              <h2>
                <a href="#">The Future of Sustainable Fencing Materials</a>
              </h2>
            </div>

            <div className="post-item-footer">
              <a href="#" className="readmore-btn">read more</a>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Item 3 */}
      <div className="col-lg-4 col-md-6">
        <div className="blog-item wow fadeInUp" data-wow-delay="0.5s">
          <div className="post-featured-image" data-cursor-text="View">
            <figure>
              <a href="#" className="image-anime">
                <img src="images/post-3.jpg" alt="" />
              </a>
            </figure>
          </div>

          <div className="post-item-content">
            <div className="post-item-body">
              <h2>
                <a href="#">How to Choose the Perfect Fence for Your Property: A Guide</a>
              </h2>
            </div>

            <div className="post-item-footer">
              <a href="#" className="readmore-btn">read more</a>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Item 4 */}
      <div className="col-lg-4 col-md-6">
        <div className="blog-item wow fadeInUp" data-wow-delay="0.75s">
          <div className="post-featured-image" data-cursor-text="View">
            <figure>
              <a href="#" className="image-anime">
                <img src="images/post-4.jpg" alt="" />
              </a>
            </figure>
          </div>

          <div className="post-item-content">
            <div className="post-item-body">
              <h2>
                <a href="#">Fence Repair vs. New Installation: What's Best for You?</a>
              </h2>
            </div>

            <div className="post-item-footer">
              <a href="#" className="readmore-btn">read more</a>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Item 5 */}
      <div className="col-lg-4 col-md-6">
        <div className="blog-item wow fadeInUp" data-wow-delay="1s">
          <div className="post-featured-image" data-cursor-text="View">
            <figure>
              <a href="#" className="image-anime">
                <img src="images/post-5.jpg" alt="" />
              </a>
            </figure>
          </div>

          <div className="post-item-content">
            <div className="post-item-body">
              <h2>
                <a href="#">Top 5 Modern Fencing Trends for 2024</a>
              </h2>
            </div>

            <div className="post-item-footer">
              <a href="#" className="readmore-btn">read more</a>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Item 6 */}
      <div className="col-lg-4 col-md-6">
        <div className="blog-item wow fadeInUp" data-wow-delay="1.25s">
          <div className="post-featured-image" data-cursor-text="View">
            <figure>
              <a href="#" className="image-anime">
                <img src="images/post-6.jpg" alt="" />
              </a>
            </figure>
          </div>

          <div className="post-item-content">
            <div className="post-item-body">
              <h2>
                <a href="#">The Role of Technology in Modern Fencing Installation</a>
              </h2>
            </div>

            <div className="post-item-footer">
              <a href="#" className="readmore-btn">read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Pagination */}
    <div className="row">
      <div className="col-md-12">
        <div className="post-pagination wow fadeInUp" data-wow-delay="0.75s">
          <ul className="pagination">
            <li>
              <a href="#"><i className="fa-solid fa-arrow-left-long"></i></a>
            </li>
            <li className="active"><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li>
              <a href="#"><i className="fa-solid fa-arrow-right-long"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Page Blog End */}
{/* Footer Start */}
<footer className="main-footer">
  <div className="container">
    <div className="row">
      {/* About Footer */}
      <div className="col-lg-3 col-md-12">
        <div className="about-footer">
          <div className="footer-logo">
            <figure>
              <img src="images/footer-logo.svg" alt="Footer Logo" />
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
              <img src="images/icon-phone.svg" alt="Phone" />
            </div>
            <p>+1 809 120 6705</p>
          </div>

          <div className="footer-info-box">
            <div className="icon-box">
              <img src="images/icon-mail.svg" alt="Email" />
            </div>
            <p>info@domain.com</p>
          </div>

          <div className="footer-info-box">
            <div className="icon-box">
              <img src="images/icon-location.svg" alt="Location" />
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