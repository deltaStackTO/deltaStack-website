import React from 'react';
import './Details.css';

function Details(props) {
   return (
      <div className="Details section">
        <div className="container">
          <div className="py-5">

            <h3 className="">Some of our services:</h3>

            <div className="row py-5">

              <div className="col-sm">
                <div className="card my-3">
                  <img src="coding2.jpg" className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Full Stack Development</h5>
                    <p className="card-text">
                      We do everything from planning backend architecture to user interface creation,
                      to deployment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm">
                <div className="card my-3">
                  <img src="security5.jpg" className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Security</h5>
                    <p className="card-text">
                      We use data encryption, authentication security, and industry best practices to
                      keep your data and platform safe.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm">
                <div className="card my-3">
                  <img src="db.png" className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">System Infrastructure</h5>
                    <p className="card-text">
                      We build all the tech for your business following an agile development model,
                      launch it, and diligently maintain it.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
   );
}

export default Details;
