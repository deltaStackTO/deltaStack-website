import React from 'react';
import './Contact.css';


function Contact(props) {
   return (

      <div className="Contact section">
        <div className="container py-5">

          <h4 className="my-5">We would love to work with you!</h4>

          <p className="my-5">Contact us if you are a company or business and need development done:</p>

          <div className="my-5">
            <div className="row">

              <div className="col-sm">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Amir Yalamov</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Co-Founder</h6>
                    <p className="card-text">
                      A 4th year computer science student and swimmer at Western University
                      with experience working for TD.
                    </p>
                    <span className="card-link"><a href="mailto:amir.yalamov@gmail.com">Email me!</a></span>
                    <a href="https://www.linkedin.com/in/amiryalamov/" className="card-link">LinkedIn</a>
                  </div>
                </div>
              </div>

              <div className="col-sm">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Danny Ngo</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Co-Founder</h6>
                    <p className="card-text">
                      A 4th year computer science student and dancer at
                      Queen's University with experience working for RBC.
                    </p>
                    <span className="card-link">dannyngo.1199@gmail.com</span>
                    <a href="https://www.linkedin.com/in/dannyngo1199/" className="card-link">LinkedIn</a>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="my-5">
            <h5>Visit deltaStack on <a href="https://www.linkedin.com/company/deltastackpage/">LinkedIn</a>!</h5>
          </div>

        </div>
      </div>
   );
}

export default Contact;
