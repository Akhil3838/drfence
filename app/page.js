import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
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
                <a className="nav-link" href="contact.html">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Let’s Start Button Start */}
          <div className="header-btn d-inline-flex">
            <a href="/contact-us" className="btn-default">Contact Us</a>
          </div>
          {/* Let’s Start Button End */}
        </div>
        {/* Main Menu End */}

        <div className="navbar-toggle"></div>
      </div>
    </nav>

    <div className="responsive-menu"></div>
  </div>
</header>
{/* Header End */}
{/* Hero Section Start */}
<div className="hero bg-section parallaxie">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-12">
        {/* Hero Content Start */}
        <div className="hero-content">
          <div className="section-title">
            <h3 className="wow fadeInUp">welcome to builtup</h3>
            <h1
              className="text-anime-style-3"
              data-cursor="-opaque"
            >
              Building dreams with precision and excellence
            </h1>
            <p
              className="wow fadeInUp"
              data-wow-delay="0.25s"
            >
              we specialize in turning visions into reality with exceptional
              craftsmanship and meticulous attention to detail. With years of
              experience and a commitment to quality.
            </p>
          </div>

          <div
            className="hero-content-body wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <a href="#" className="btn-default">
              get started
            </a>
            <a href="#" className="btn-default btn-highlighted">
              view Projects
            </a>
          </div>
        </div>
        {/* Hero Content End */}
      </div>
    </div>
  </div>
</div>
{/* Hero Section End */}
{/* About Section Start */}
<div className="about-us">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-5">
        {/* About Us Image Start */}
        <div className="about-image">
          <div className="about-img">
            <figure className="reveal">
              {/* <img src="images/about-us-img.png" alt="" /> */}
              <img src="/images/m2.png" alt="" />
            </figure>
          </div>
        </div>
        {/* About Us Image End */}
      </div>

      <div className="col-lg-7">
        {/* About Content Start */}
        <div className="about-content">
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
            className="about-content-body wow fadeInUp"
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
            className="about-content-footer wow fadeInUp"
            data-wow-delay="0.75s"
          >
            <div className="about-footer-btn">
              <a href="#" className="btn-default">
                get free quote
              </a>
            </div>

            <div className="about-contact-support">
              <div className="icon-box">
                <img src="images/icon-phone.svg" alt="" />
              </div>
              <div className="about-support-content">
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
{/* About Section End */}
{/* Our Service Section Start */}
<div className="our-service">
  <div className="light-bg-section">
    <div className="container-fluid">
      <div className="row section-row">
        <div className="col-lg-12">
          {/* Section Title Start */}
          <div className="section-title">
            <h3 className="wow fadeInUp">our services</h3>
            <h2
              className="text-anime-style-3"
              data-cursor="-opaque"
            >
              Our construction services
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
      </div>

      <div className="row">
        {/* Service Item 1 */}
        <div className="col-lg-3 col-md-6">
          <div
            className="service-item wow fadeInUp"
            data-wow-delay="0.25s"
          >
            <div
              className="service-image"
              data-cursor-text="View"
            >
              <a href="#">
                <figure>
                  {/* <img src="images/service-img-1.jpg" alt="" /> */}
              <img src="images/n1.jpeg" alt="" />

                </figure>
              </a>
            </div>

            <div className="service-body">
              <div className="service-body-title">
                <h3>building construction</h3>
              </div>

              <div className="service-content">
                <p>
                  Our post-construction services gives you peace of mind knowing
                  that we are still here for you even after.
                </p>
                <div className="service-content-footer">
                  <a href="#" className="readmore-btn">
                    view more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Item 2 */}
        <div className="col-lg-3 col-md-6">
          <div
            className="service-item wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <div
              className="service-image"
              data-cursor-text="View"
            >
              <a href="#">
                <figure>
                  {/* <img src="images/service-img-2.jpg" alt="" /> */}
                   <img src="images/n3.jpeg" alt="" />

                </figure>
              </a>
            </div>

            <div className="service-body">
              <div className="service-body-title">
                <h3>architecture design</h3>
              </div>

              <div className="service-content">
                <p>
                  Our post-construction services gives you peace of mind knowing
                  that we are still here for you even after.
                </p>
                <div className="service-content-footer">
                  <a href="#" className="readmore-btn">
                    view more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Item 3 */}
        <div className="col-lg-3 col-md-6">
          <div
            className="service-item wow fadeInUp"
            data-wow-delay="0.75s"
          >
            <div
              className="service-image"
              data-cursor-text="View"
            >
              <a href="#">
                <figure>
                  {/* <img src="images/service-img-3.jpg" alt="" /> */}
                                    <img src="images/m1.jpeg" alt="" />

                </figure>
              </a>
            </div>

            <div className="service-body">
              <div className="service-body-title">
                <h3>building renovation</h3>
              </div>

              <div className="service-content">
                <p>
                  Our post-construction services gives you peace of mind knowing
                  that we are still here for you even after.
                </p>
                <div className="service-content-footer">
                  <a href="#" className="readmore-btn">
                    view more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Item 4 */}
        <div className="col-lg-3 col-md-6">
          <div
            className="service-item wow fadeInUp"
            data-wow-delay="1s"
          >
            <div
              className="service-image"
              data-cursor-text="View"
            >
              <a href="#">
                <figure>
                  {/* <img src="images/service-img-4.jpg" alt="" /> */}
                   <img src="images/n6.jpeg" alt="" />

                </figure>
              </a>
            </div>

            <div className="service-body">
              <div className="service-body-title">
                <h3>building maintenance</h3>
              </div>

              <div className="service-content">
                <p>
                  Our post-construction services gives you peace of mind knowing
                  that we are still here for you even after.
                </p>
                <div className="service-content-footer">
                  <a href="#" className="readmore-btn">
                    view more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Footer Btn */}
        <div
          className="service-footer-btn wow fadeInUp"
          data-wow-delay="1.25s"
        >
          <a href="#" className="btn-default">
            view all services
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Our Service Section End */}
{/* Why Choose Us Section Start */}
<div className="why-choose-us">
  <div className="container">
    <div className="row section-row">
      <div className="col-lg-12">
        {/* Section Title Start */}
        <div className="section-title">
          <h3 className="wow fadeInUp">why choose us?</h3>
          <h2
            className="text-anime-style-3"
            data-cursor="-opaque"
          >
            Why we're your best choice
          </h2>
          <p
            className="wow fadeInUp"
            data-wow-delay="0.25s"
          >
            Developed in close collaboration with our partners and clients,
            combines industry knowledge, decades of experience, ingenuity and
            adaptability to deliver excellence to our clients.
          </p>
        </div>
        {/* Section Title End */}
      </div>
    </div>

    <div className="row">
      {/* Item 1 */}
      <div className="col-lg-4 col-md-6">
        <div
          className="why-choose-item wow fadeInUp"
          data-wow-delay="0.25s"
        >
          <div className="icon-box">
            <img src="images/icon-why-choose-1.svg" alt="" />
          </div>
          <div className="why-choose-content">
            <h3>innovation solutions</h3>
            <p>
              Simple actions make a difference. It starts and ends with each
              employee striving to work safer every single day so they can
              return.
            </p>
          </div>
          <div className="why-choose-counter">
            <h3>
              <span className="counter">800</span>+
            </h3>
            <p>project complated</p>
          </div>
        </div>
      </div>

      {/* Image 1 */}
      <div className="col-lg-4 col-md-6">
        <div className="why-choose-image">
          <figure className="image-anime reveal">
            {/* <img src="images/why-choose-img-1.jpg" alt="" /> */}
              <img src="images/h5.jpeg" alt="" />

          </figure>
        </div>
      </div>

      {/* Item 2 */}
      <div className="col-lg-4 col-md-6">
        <div
          className="why-choose-item wow fadeInUp"
          data-wow-delay="0.25s"
        >
          <div className="icon-box">
            <img src="images/icon-why-choose-2.svg" alt="" />
          </div>
          <div className="why-choose-content">
            <h3>quality craftsmanship</h3>
            <p>
              Simple actions make a difference. It starts and ends with each
              employee striving to work safer every single day so they can
              return.
            </p>
          </div>
          <div className="why-choose-counter">
            <h3>
              <span className="counter">800</span>+
            </h3>
            <p>project complated</p>
          </div>
        </div>
      </div>

      {/* Image 2 */}
      <div className="col-lg-4 col-md-6">
        <div className="why-choose-image">
          <figure className="image-anime reveal">
            {/* <img src="images/why-choose-img-2.jpg" alt="" /> */}
                        <img src="images/m1.jpeg" alt="" />

          </figure>
        </div>
      </div>

      {/* Item 3 */}
      <div className="col-lg-4 col-md-6">
        <div
          className="why-choose-item wow fadeInUp"
          data-wow-delay="0.25s"
        >
          <div className="icon-box">
            <img src="images/icon-why-choose-3.svg" alt="" />
          </div>
          <div className="why-choose-content">
            <h3>expertise and experience</h3>
            <p>
              Simple actions make a difference. It starts and ends with each
              employee striving to work safer every single day so they can
              return.
            </p>
          </div>
          <div className="why-choose-counter">
            <h3>
              <span className="counter">800</span>+
            </h3>
            <p>project complated</p>
          </div>
        </div>
      </div>

      {/* Image 3 */}
      <div className="col-lg-4 col-md-6">
        <div className="why-choose-image">
          <figure className="image-anime reveal">
            {/* <img src="images/why-choose-img-3.jpg" alt="" /> */}
                        <img src="images/n4.jpeg" alt="" />

          </figure>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Why Choose Us Section End */}
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
{/* Our Testimonial Start */}
<div className="our-testimonial">
  <div className="container">
    <div className="row section-row">
      <div className="col-lg-12">
        {/* Section Title Start */}
        <div className="section-title">
          <h3 className="wow fadeInUp">testimonials</h3>
          <h2
            className="text-anime-style-3"
            data-cursor="-opaque"
          >
            What people are saying about us
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
    </div>

    <div className="row">
      <div className="col-lg-12">
        {/* Testimonial Slider Start */}
        <div className="testimonial-slider">
          <div className="swiper">
            <div
              className="swiper-wrapper"
              data-cursor-text="Drag"
            >
              {/* Slide 1 */}
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="testimonial-header">
                    <div className="testimonial-rating">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="testimonial-content">
                      <p>
                        We specialize in a wide range of construction services,
                        including residential, commercial, and industrial
                        projects. From initial design to final inspection, we
                        work closely with our clients to understand their unique
                        needs and vision.
                      </p>
                    </div>
                  </div>

                  <div className="testimonial-body">
                    <div className="author-image">
                      <figure className="image-anime">
                        <img src="images/author-1.jpg" alt="" />
                      </figure>
                    </div>
                    <div className="author-content">
                      <h3>johan duo</h3>
                      <p>project manager</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="testimonial-header">
                    <div className="testimonial-rating">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="testimonial-content">
                      <p>
                        We specialize in a wide range of construction services,
                        including residential, commercial, and industrial
                        projects. From initial design to final inspection, we
                        work closely with our clients to understand their unique
                        needs and vision.
                      </p>
                    </div>
                  </div>

                  <div className="testimonial-body">
                    <div className="author-image">
                      <figure className="image-anime">
                        <img src="images/author-2.jpg" alt="" />
                      </figure>
                    </div>
                    <div className="author-content">
                      <h3>Jane Smith</h3>
                      <p>interior designer</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="testimonial-header">
                    <div className="testimonial-rating">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="testimonial-content">
                      <p>
                        We specialize in a wide range of construction services,
                        including residential, commercial, and industrial
                        projects. From initial design to final inspection, we
                        work closely with our clients to understand their unique
                        needs and vision.
                      </p>
                    </div>
                  </div>

                  <div className="testimonial-body">
                    <div className="author-image">
                      <figure className="image-anime">
                        <img src="images/author-3.jpg" alt="" />
                      </figure>
                    </div>
                    <div className="author-content">
                      <h3>chris martinez</h3>
                      <p>logistics coordinator</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 4 */}
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="testimonial-header">
                    <div className="testimonial-rating">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="testimonial-content">
                      <p>
                        We specialize in a wide range of construction services,
                        including residential, commercial, and industrial
                        projects. From initial design to final inspection, we
                        work closely with our clients to understand their unique
                        needs and vision.
                      </p>
                    </div>
                  </div>

                  <div className="testimonial-body">
                    <div className="author-image">
                      <figure className="image-anime">
                        <img src="images/author-4.jpg" alt="" />
                      </figure>
                    </div>
                    <div className="author-content">
                      <h3>alis white</h3>
                      <p>structural engineer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-pagination"></div>
          </div>
        </div>
        {/* Testimonial Slider End */}
      </div>
    </div>
  </div>
</div>
{/* Our Testimonial End */}
{/* Our FAQs Section Start */}
<div className="our-faqs">
  <div className="container">
    <div className="row section-row">
      <div className="col-lg-12">
        {/* Section Title Start */}
        <div className="section-title">
          <h3 className="wow fadeInUp">faqs</h3>
          <h2
            className="text-anime-style-3"
            data-cursor="-opaque"
          >
            Got questions? we've got answers
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
    </div>

    <div className="row align-items-center">
      <div className="col-lg-5">
        {/* Our FAQs Images Start */}
        <div className="our-faqs-images">
          <div className="row align-items-end">
            <div className="col-md-6 col-6">
              <div className="faqs-img-1">
                <figure className="image-anime reveal">
                  <img src="images/m1.jpeg" alt="" />
                </figure>
              </div>
            </div>

            <div className="col-md-6 col-6">
              <div className="faqs-img-2">
                <figure className="image-anime reveal">
                  <img src="images/m2.png" alt="" />
                </figure>
              </div>
            </div>
          </div>

          <div className="row align-items-start">
            <div className="col-md-6 col-6">
              <div className="faqs-img-1">
                <figure className="image-anime reveal">
                  <img src="images/m3.jpg" alt="" />
                </figure>
              </div>
            </div>

            <div className="col-md-6 col-6">
              <div className="faqs-img-2">
                <figure className="image-anime reveal">
                  <img src="images/m4.jpg" alt="" />
                </figure>
              </div>
            </div>
          </div>

          <div className="our-faqs-bulitup">
            <img src="images/icon-faq-bulitup.svg" alt="" />
          </div>
        </div>
        {/* Our FAQs Images End */}
      </div>

      <div className="col-lg-7">
        {/* FAQ Accordion Start */}
        <div className="faq-accordion" id="accordion">
          {/* FAQ Item 1 */}
          <div
            className="accordion-item wow fadeInUp"
            data-wow-delay="0.25s"
          >
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Do you offer a free, no obligation quotation?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordion"
            >
              <div className="accordion-body">
                <p>
                  Our post-construction services gives you peace of mind knowing
                  that we are still here for you even after.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Item 2 */}
          <div
            className="accordion-item wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                What services do you offer?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordion"
            >
              <div className="accordion-body">
                <p>
                  Our post-construction services gives you peace of mind knowing
                  that we are still here for you even after.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Item 3 */}
          <div
            className="accordion-item wow fadeInUp"
            data-wow-delay="0.75s"
          >
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                What types of projects do you specialize in?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordion"
            >
              <div className="accordion-body">
                <p>
                  Our post-construction services gives you peace of mind knowing
                  that we are still here for you even after.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Item 4 */}
          <div
            className="accordion-item wow fadeInUp"
            data-wow-delay="1s"
          >
            <h2 className="accordion-header" id="headingfour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsefour"
                aria-expanded="false"
                aria-controls="collapsefour"
              >
                How do I start a project with your company?
              </button>
            </h2>
            <div
              id="collapsefour"
              className="accordion-collapse collapse"
              aria-labelledby="headingfour"
              data-bs-parent="#accordion"
            >
              <div className="accordion-body">
                <p>
                  Our post-construction services gives you peace of mind knowing
                  that we are still here for you even after.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* FAQ Accordion End */}
      </div>
    </div>
  </div>
</div>
{/* Our FAQs Section End */}
{/* Our Blog Section Start */}
{/* <div className="our-blog">
  <div className="container">
    <div className="row section-row">
      <div className="col-lg-12">
        <div className="section-title">
          <h3 className="wow fadeInUp">news &amp; blog</h3>
          <h2
            className="text-anime-style-3"
            data-cursor="-opaque"
          >
            Articles &amp; blog posts
          </h2>
          <p
            className="wow fadeInUp"
            data-wow-delay="0.25s"
          >
            We specialize in a wide range of construction services, including
            residential, commercial, and industrial projects.
          </p>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-lg-4 col-md-6">
        <div
          className="blog-item wow fadeInUp"
          data-wow-delay="0.25s"
        >
          <div
            className="post-featured-image"
            data-cursor-text="View"
          >
            <figure>
              <a href="#" className="image-anime">
                <img src="images/post-1.jpg" alt="" />
              </a>
            </figure>
          </div>

          <div className="post-item-content">
            <div className="post-item-body">
              <h2>
                <a href="#">
                  10 Essential Tips for Choosing the Right Builder
                </a>
              </h2>
            </div>

            <div className="post-item-footer">
              <a href="#" className="readmore-btn">
                read more
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div
          className="blog-item wow fadeInUp"
          data-wow-delay="0.5s"
        >
          <div
            className="post-featured-image"
            data-cursor-text="View"
          >
            <figure>
              <a href="#" className="image-anime">
                <img src="images/post-2.jpg" alt="" />
              </a>
            </figure>
          </div>

          <div className="post-item-content">
            <div className="post-item-body">
              <h2>
                <a href="#">
                  The Future of Sustainable Construction Innovations
                </a>
              </h2>
            </div>

            <div className="post-item-footer">
              <a href="#" className="readmore-btn">
                read more
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div
          className="blog-item wow fadeInUp"
          data-wow-delay="0.75s"
        >
          <div
            className="post-featured-image"
            data-cursor-text="View"
          >
            <figure>
              <a href="#" className="image-anime">
                <img src="images/post-3.jpg" alt="" />
              </a>
            </figure>
          </div>

          <div className="post-item-content">
            <div className="post-item-body">
              <h2>
                <a href="#">
                  How to Design Your Dream Home: A Step-by-Step Guide
                </a>
              </h2>
            </div>

            <div className="post-item-footer">
              <a href="#" className="readmore-btn">
                read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */}
{/* Our Blog End */}
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
              Our post-construction services gives you peace of mind knowing
              that we are still here for you even after.
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
            <p>
              37 San Juan Lane Graaf Florisstraat 22A,3021 CH
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Footer Copyright */}
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
              <li>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
              </li>
              <li>
                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
              </li>
              <li>
                <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
              </li>
              <li>
                <a href="#"><i className="fa-brands fa-github"></i></a>
              </li>
              <li>
                <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
{/* Footer End */}


    </>
  );
}
