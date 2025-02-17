import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import Autoplay module
import "swiper/css"; // Swiper core styles
import "swiper/css/autoplay";

function About() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close navbar when clicking a link
  const closeNavbar = () => setIsOpen(false);

  return (
    <section className="aboutContainer">
      <div className="container-fluid" id="Abouthero">
        {/* hero section */}
        <div className="container">
          <h1>About Trumpets</h1>
        </div>
      </div>
      <section>
        <div className="container p-5">
          <h1 className="ft-red">
            Our <span className="text-bold">Story</span>
          </h1>
          <p>
            Established in 1991, Trumpets is Asia’s premier Christian theater
            company. <br /> <br />
            Trumpets has become known for critically and popularly acclaimed
            original productions: JOSEPH THE DREAMER, FABLES AND PARABLES, SO
            DAVID, N.O.A.H (NO ORDINARY AQUATIC HABITAT), the Filipino musical
            PAMILYA MALETA, and a hit concert entitled THE SOUND OF TRUMPETS.{" "}
            <br /> <br />
            Trumpets is also known for its outstanding adaptations of classic
            tales such as: C.S. Lewis’ THE LION, THE WITCH, AND THE WARDROBE and
            THE HORSE AND HIS BOY; Hans Christian Andersen’s THE LITTLE MERMAID;
            Oscar Wilde’s THE YOUNG KING, and Maurice Maeterlinck’s THE BLUEBIRD
            OF HAPPINESS. <br /> <br />
            Trumpets’ mission is to not only develop world-class productions,
            but to teach, inspire, entertain, and to change lives through
            theater <br /> <br />
            This mission is completed through Playshop – an all-year round
            workshop that Trumpets takes pride in. Its aim is to develop and
            enrich the passion, skills, and talents of theater enthusiasts and
            aspiring theater professionals alike. Playshop offers programs that
            range from basic principles of acting up to advanced stage
            performance techniques, and also includes music and dance. <br />{" "}
            <br />
            Trumpets Playshop features a faculty roster of some of the most
            renowned names in the Philippine theater and music industry. As a
            training ground, it has to date produced artists who have
            established highly successful careers both in the Philippines and
            abroad. <br /> 
            
          </p>
        </div>
      </section>
      <section className="banner2">
        <img src="/AboutBanner2.png" alt="AboutBanner2" />
      </section>
      <section className="MV mt-5 mb-5">
        <div className="container">
          <div className="">
            <h1 className="ft-red text-end">
              our <span className="text-bold">Mission & Vision</span>
            </h1>
            <p>
              Trumpets will be a professional global company focused on Jesus
              Christ and aimed at attracting, developing and utilizing God-given
              gifts in all media of the performing arts in order to bring people
              to a growing and productive relationship with Jesus.
            </p>
          </div>
        </div>
      </section>
     
      <section className="banner3 pt-5 pb-5">
        <img src="/AboutBanner3.png" alt="AboutBanner3" />
      </section>
      <section className="pt-5 pb-5">
        <div className="container">
          <h1 className="ft-red text-start">
            About <span className="text-bold"> Trumpets playshop</span>
          </h1>
          <p>
            TRUMPETS PLAYSHOP began in 1993 with a few acting courses for
            children, teens and adults. Over the years it has gradually gained
            exposure and for the past 16 years, has generated over a thousand
            enrollees for its summer workshop. <br /> <br />
            The idea behind Playshop is quite simple. We wanted to share our
            knowledge on the technical aspects of theatre. At the same time we
            envisioned a more pro-active method of teaching, while infusing
            morally upright ideas and actions. <br />
            <br />
            Playshop has consistently been successful in developing the creative
            talents of young and creative minds through its summer workshop
            using the basic principles and tools of acting. As a result,
            Playshop has expanded to now include a broader selection of courses
            covering most multimedia disciplines while still using the basic
            tenets of theatre acting as its groundwork.
            <br />
            Playshop has consistently been successful in developing talents
            using the basic principles of interactive teaching and creative
            dramatics in the Summer Playshop. The courses offered by Playshop
            now include most multi-media disciplines. In each of these courses,
            participants are taken through exercises and games for creative
            expression and improvisation focusing on their own disciplines
            whether acting, performance, voice, dance, movement, art, singing,
            technical theatre, theatre design, photography, newscasting , to
            name a few.
          </p>
        </div>
      </section>
      
      <div
        className="container-fluid maps"
        style={{ backgroundColor: "#000", padding: " 100px 0" }}
      >
        <div className="container">
          <div
            className="row row-cols-1 row-cols-lg-2"
            style={{ margin: "auto" }}
          >
            <div className="col ">
              <div>
                <h2 className="ft-red">Contact Details</h2>
                <p>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4s-4 1.794-4 4s1.794 4 4 4m0-6c1.103 0 2 .897 2 2s-.897 2-2 2s-2-.897-2-2s.897-2 2-2"
                      />
                      <path
                        fill="currentColor"
                        d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819M12 4c3.309 0 6 2.691 6 6.005c.021 4.438-4.388 8.423-6 9.73c-1.611-1.308-6.021-5.294-6-9.735c0-3.309 2.691-6 6-6"
                      />
                    </svg>{" "}
                  </span>
                  <span className="fw-bold text-white">Address: </span> Unit
                  606, Greenbelt Mansions, 106 Perea, Legazpi Village, Makati,
                  1200 Metro Manila.
                </p>
                <p>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"
                      />
                    </svg>{" "}
                  </span>
                  <span className="fw-bold text-white">Phone: </span>{" "}
                  09175664777
                </p>
                <p>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"
                      />
                    </svg>
                  </span>
                  &nbsp;
                  <span className="fw-bold text-white">Email: </span>
                  <span className="text-decoration-underline">
                    playshopworkshops@gmail.com
                  </span>
                </p>
                <h2 className="ft-red">Office hours</h2>
                <p>Monday to Friday from 9am to 4pm</p>
              </div>
            </div>
            <div className="col text-center">
              {" "}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d965.4447274945379!2d121.01954099527548!3d14.554631984625868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c90f95f5f733%3A0x5816979ae912bbc6!2sGreenbelt%20Mansion!5e0!3m2!1sen!2sph!4v1720623531287!5m2!1sen!2sph"
                width="100%"
                height="400"
                style={{ border: "0", borderRadius: "10px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Embed"
              ></iframe>{" "}
            </div>
          </div>
        </div>
      </div>
      <section className="pContainer container">
        <h1 className="ft-red">Partners</h1>
        <div className="partners mt-5"></div>
        <Swiper
          modules={[Autoplay]} // Add Autoplay module
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
          grabCursor={true}
          breakpoints={{
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <img src="/1.webp" alt="1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/2.webp" alt="2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/3.webp" alt="3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/4.webp" alt="4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/5.webp" alt="5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/6.webp" alt="6" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/7.webp" alt="7" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/8.webp" alt="8" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/9.webp" alt="9" />
          </SwiperSlide>
        </Swiper>
      </section>
    </section>
  );
}

export default About;
