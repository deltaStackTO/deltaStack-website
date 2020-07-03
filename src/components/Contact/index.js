import React from 'react';
import './Contact.css';
// get our fontawesome imports
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";



function Contact(props) {
   return (



      <div className="Contact section">
        <div className="container py-5">

          <h4 className="my-5">Our team:</h4>

          <div className="my-5">
            <div className="row">

              <div className="col-sm">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Amir Yalamov</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Co-Founder</h6>
                    <p className="card-text">
                      Software developer for AliceVision with experience in backend and product management. Previously buidling automation systems and doing risk analysis at TD Bank, and improving performance for various open source projects.
                    </p>
                    <span className="card-link"><a href="mailto:amir.yalamov@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="lg" /></a></span>
                    <a href="https://www.linkedin.com/in/amiryalamov/" className="card-link"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a>
                  </div>
                </div>
              </div>

              <div className="col-sm">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Danny Ngo</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Co-Founder</h6>
                    <p className="card-text">
                      Software developer at RBC with experience in web development and product management. Previously doing full stack development for startups and local businesses, and leading tech teams and architecturing software for Beta Lab.
                    </p>
                    <span className="card-link"><a href="mailto:dannyngo.1199@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="lg" /></a></span>
                    <a href="https://www.linkedin.com/in/dannyngo1199/" className="card-link"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <br/>
          <h5 className="my-5">We would love to work with you!</h5>

          <p className="my-5">Contact us if you are a company or business and need development done.</p>
          <br/><br/>
          <div className="my-5">
            <h5>Interested in our future work? Give us a follow on <a href="https://www.linkedin.com/company/deltastackpage/">LinkedIn</a>!</h5>
          </div>

        </div>
      </div>
   );
}

export default Contact;
