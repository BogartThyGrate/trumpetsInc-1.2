import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Show() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close navbar when clicking a link
  const closeNavbar = () => setIsOpen(false);

  return (
    <>
      <div className="container-fluid showHero">
        
      <div className="boxShadow"></div>
        <div className="container">
          <h1 className="title">Enjoy different kinds of Genres</h1>
          <p>
            Explore Trumpets’ columnlection of acclaimed original musicals and
            adaptations suited for all ages.
          </p>
        </div>
      </div>
      <main>
        <section className="container mt-5 mb-5">
          <h1 className=" text-uppercase mb-5 ft-red">All shows</h1>

          <div className="DisplayShows">
          
            <div className="column">
              <NavLink 
               to="/TLTW"
               className="card nav-link"
               activeclassname="active"
               onClick={closeNavbar}>
                <div className="card mb-3 mb-lg-4 showCard">
                  <div className="imgs">
                    <img
                      src={`/thumbnail/LWWBanner.webp`}
                      alt={`TLMBanner`}
                      className="img"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title ">
                      The Lion, The witch and the wardrobe
                    </h5>

                    <p className="card-text">
                      The Lion, The Witch, and The Wardrobe begins when Peter,
                      Susan, Edmund, and Lucy Pevensie arrive at the country
                      manor of Professor Digory Kirke, sent there by their
                      parents to escape the air-raids over London during World
                      War II.
                    </p>
                    <button className="btn fw-normal">View more</button>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="column">
              <NavLink to="/THB" className="text-decoration-none">
                <div className="card mb-3 mb-lg-4 showCard">
                  <div className="imgs">
                    <img
                      src={`/thumbnail/BBBanner.webp`}
                      alt={`TLMBanner`}
                      className="img"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title ">Bluebird of hapiness</h5>

                    <p className="card-text">
                      This Trumpets adaptation follows the wondrous adventures
                      of brother and sister, Tyltyl and Mytyl. Discontent and
                      disappointed by having less in life than their neighbors,
                      they seek the elusive bluebird of happiness in an attempt
                      to find the “more” which their hearts desire.
                    </p>
                    <button className="btn fw-normal">View more</button>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="column">
              <NavLink to="/THHB" className="text-decoration-none">
                <div className="card mb-3 mb-lg-4 showCard">
                  <div className="imgs">
                    <img
                      src={`/thumbnail/THBBanner.webp`}
                      alt={`TLMBanner`}
                      className="img"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title ">The horse and his boy</h5>

                    <p className="card-text">
                      The Horse and His Boy is the story of an orphan boy,
                      Shasta, and a talking horse, Bree, as they journey towards
                      freedom from oppression and slavery. They fly from a
                      foreign land to Narnia, the place the horse calls home,
                      and where the boy hopes to find who he is and where he
                      truly belongs.
                    </p>
                    <button className="btn fw-normal">View more</button>
                  </div>
                </div>
              </NavLink>
            </div>
            {/*The horse and his boy*/}
            {/*Bluebird of hapiness*/}
            {/*The lion, the witch and the wardrobe */}
           
            <div className="column">
              <NavLink to="/FN" className="text-decoration-none">
                <div className="card mb-3 mb-lg-4 showCard">
                  <div className="imgs">
                    <img
                      src={`/thumbnail/fn-opti.webp`}
                      alt={`fn-opti`}
                      className="img"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title ">First Name</h5>

                    <p className="card-text">
                      This new staging of First Name is conceptualized to be a
                      celebration full of life, radicalism and energy.
                    </p>
                    <button className="btn fw-normal">View more</button>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="column">
              <NavLink to="/JD" className="text-decoration-none">
                <div className="card mb-3 mb-lg-4 showCard">
                  <div className="imgs">
                    <img
                      src={`/thumbnail/jtdOpti.webp`}
                      alt={`jtb-opti`}
                      className="img"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title ">Joseph the Dreamer</h5>

                    <p className="card-text">
                      Joseph the Dreamer is based on the Biblical story of
                      Jacob’s son who saves Egypt with the power of his dreams.
                    </p>
                    <button className="btn fw-normal">View more</button>
                  </div>
                </div>
              </NavLink>
            </div>
            {/*Joseph the Dreamer*/}
            <div className="column">
              <NavLink to="/TYK" className="text-decoration-none">
                <div className="card mb-3 mb-lg-4 showCard">
                  <div className="imgs">
                    <img
                      src={`/thumbnail/TYKBanner.webp`}
                      alt={`TLMBanner`}
                      className="img"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title ">The young king</h5>

                    <p className="card-text">
                      This touching tale by Oscar Wilde is retold in musical
                      form by Jaime del Mundo and Luna Griño-Inocian with
                      inspired music by Lito Villareal. Taking the story out of
                      Wilde’s accustomed melancholy, it is given the feel of a
                      Walt Disney animated feature through heartwarming
                      characters, and spirited music without losing its more
                      moving moments.
                    </p>
                    <button className="btn fw-normal">View more</button>
                  </div>
                </div>
              </NavLink>
            </div>
            {/*The young king */}
            {/*First name*/}
            <div className="column">
              <NavLink to="/NOAH" className="text-decoration-none">
                <div className="card mb-3 mb-lg-4 showCard">
                  <div className="imgs">
                    <img
                      src={`/thumbnail/NBanner.webp`}
                      alt={`TLMBanner`}
                      className="img"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title ">N.O.A.H</h5>

                    <p className="card-text">
                      Imagine a world full of garbage… Not that difficult to do,
                      huh? Well, that’s exactly the kind of world Mr. Noah and
                      his family live in.
                    </p>
                    <button className="btn fw-normal">View more</button>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="column">
            <NavLink 
             to="/TLM"
             className="card nav-link"
             activeclassname="active"
             onClick={closeNavbar}>
                <div className="card mb-3 mb-lg-4 showCard">
                  <div className="imgs">
                    <img
                      src={`/thumbnail/TLMBanner.webp`}
                      alt={`TLMBanner`}
                      className="img"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title ">The Little Mermaid</h5>

                    <p className="card-text">
                      This retelling of the classic Hans Christian Andersen
                      novel shows the meaning of unconditional and everlasting
                      love, and what one little mermaid is willing to sacrifice,
                      told through songs, movement, and vibrant storytelling.{" "}
                    </p>
                    <button className="btn fw-normal">View more</button>
                  </div>
                </div>
            </NavLink>
            </div>{" "}
            {/*Little mermaid */}
            {/*First name*/}
           

           
            
          </div>
        </section>
      </main>
    </>
  );
}

export default Show;
