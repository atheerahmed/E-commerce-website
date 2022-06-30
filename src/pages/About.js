import React from "react";
import Footer from "../components/Footer";

export const About = () => {
  return (
    <div >
      <section className="home-info-grey">
        <div className="container">
          <div className="row">
            <div className="col-md-7 py-4">
              {" "}
              <h2>
              The Franso group is one of the world’s leading fashion companies – with the brands
                COS and Other Stories, Monki, Weekday Cheap Monday and ARKET. Each with its own unique
                 identity, all our brands are united by a passion for fashion
                and quality and the drive to dress customers in a sustainable way.
              </h2>{" "}
            </div>
            <div className="col-md-5 drop-cap-text">
              <span className="drop-cap">
                <span className="drop-cap-letter">A</span>
              </span>{" "}
              FRANSO GROUP AT A GLANCE

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
