import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small text-center pt-4 mt-4">
      <MDBContainer className="footer-copyright text-center py-3">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()}<a> deltaStack </a> <div> <img src="ds.png" hegiht="70" width="70" alt="deltaStack"/> </div>
        </MDBContainer>
      </div>
      </MDBContainer>

    </MDBFooter>
  );
}

export default FooterPage;
