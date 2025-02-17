import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination  } from "swiper/modules"; // Import Autoplay module
import "swiper/css"; // Swiper core styles
import "swiper/css/autoplay";
import "swiper/css/pagination"

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close navbar when clicking a link
  const closeNavbar = () => setIsOpen(false);

  return (
    <>
      <section className="container-fluid homeHero">
        {/* hero section */}
        <div className="bg-blk"></div>
        <div className="container">
          <h1 className="w-75">Bringing Stories of Faith to Life Through Theater</h1>
        </div>
      </section>
      <section>
        {/* shows section */}
        <div className="container-lg homeShows">
          <div className="title-btn d-flex align-items-center" >{/*title plus btn */}
            <h1 className="ft-red">SHOWS</h1>
            <NavLink
              to="/Show"
              className="nav-link desk-btn btn"
              activeclassname="active"
              onClick={closeNavbar}
            >
              
                VIEW MORE
              
            </NavLink>
          </div>
          <div className="container p-lg-0">
            <p>
              Creating original musicals that aim to teach, inspire, and
              entertain
            </p>
          </div>
          <Swiper
            // install Swiper modules
            modules={[Autoplay, Pagination ]}
            className="pt-2 pb-5 cardHolder"
            pagination={{clickable: true}}
            loop={true}
            autoplay={{
              delay: 2000,
            }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },  // Tablets
              768: { slidesPerView: 2, spaceBetween: 30 },  // Medium screens
              1024: { slidesPerView: 3, spaceBetween: 40 }, // Large screens
            }}
          >
            <SwiperSlide>
              <NavLink
                to="/TLTW"
                className="card nav-link showCard"
                activeclassname="active"
                onClick={closeNavbar}
              >
                <div className="card-img-container imgs">
                  <img
                    src="thumbnail/LWWBanner.webp"
                    className="card-img-top"
                    alt="LWWBanner"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    The Lion, The witch and the wardrobe
                  </h5>
                </div>
              </NavLink>
            </SwiperSlide>
            <SwiperSlide>
              <NavLink
                to="/THB"
                className="card nav-link showCard"
                activeclassname="active"
                onClick={closeNavbar}
              >
                <div className="card-img-container imgs">
                  <img
                    src="thumbnail/BBBanner.webp"
                    className="card-img-top"
                    alt="BBBanner"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">The Bluebird of Hapiness</h5>
                </div>
              </NavLink>
            </SwiperSlide>
            <SwiperSlide>
              <NavLink
                to="/THHB"
                className="card nav-link showCard"
                activeclassname="active"
                onClick={closeNavbar}
              >
                <div className="card-img-container imgs ">
                  <img
                    src="thumbnail/THBBanner.webp"
                    className="card-img-top"
                    alt="THBBanner"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">The Horse and his Boy</h5>
                </div>
              </NavLink>
            </SwiperSlide>
          </Swiper>
          <NavLink
            to="/Show"
            className="nav-link mobile-btn btn"
            activeclassname="active"
            onClick={closeNavbar}
          >
                        VIEW MORE
          </NavLink>
        </div>
      </section>
      <section>
        {/* go to trumpets playshop website */}
        <div className="container news pt-5 pb-5">
            <div className="box1">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/PvE9torRNuQ?si=25ZWwOCEnWJb0QoK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="box2 d-flex flex-column justify-content-center">
              <h1 className="ft-red" style={{fontSize:"30px"}}> Whats New</h1>
              <p>COMING SOON THIS JULY 2025</p>
            </div>
        </div>
      </section>
      
    </>
  );
}

export default Home;
