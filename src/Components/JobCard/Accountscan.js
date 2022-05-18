import React from 'react';
import { Link } from 'react-router-dom';
import { Container,Row,Col,Card,Button,ButtonGroup,CardHeader, CardBody, CardTitle, CardText,CardSubtitle, CardFooter } from 'reactstrap';
import './jobcar.css';
import profile from '../../Images/manprofile.png';
import logo from '../../Images/aboutlogo.PNG';
import smalllogo from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/Group 25829.png';
import scanqr from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/scanqr.png';
const Accountscan = () => {
  return (
      <Container>
          <div className="fullpage">
              <div className="accoutscan">
                  <p className="qrscanheader"><i class="fas fa-qrcode"></i><p>Account QR</p></p>
                  <Link className="qrscanheader"><i class="fas fa-download">Download QR</i></Link>
              </div>
              <Card className="shadow rounded">
                  <div className="Qrdetaiils">
                  <CardBody>
                        <div className="profilelogo">
                            <Link to="/vehicalqr"><img src={profile} alt="error"/></Link>
                        </div>
                         <div className="qrprofiledes">
                            <div> <h4>Sachin Tiwari</h4>
                              <p>MG 2021 401001 0099</p>
                              </div>
                         </div>
                         <div className="qrscanAccount">
                         <div className="backgroundAccount"><img src={scanqr} alt="error"/></div>
                         <p className="backgroundAccount">Show this QR at the time checkout </p>
                         </div>
                         <div className="moreQrinfo">
                             <p>All your account information are stored inside for
                                  a better checkout experience. This QR could be used for 
                                  checkout at partner garages, 
                                 also the members can pay in full with MG coins for his booking</p>
                         </div>
                         <div className="garagdes">
                             <p>Powered by</p>

                             <p><img src={smalllogo} alt="error" width="17.83px" height="16.32px"/></p>
                             <p>Master Garage</p>
                         </div>
                   </CardBody>
                   </div>
              </Card>
          </div>
      </Container>
  );
};

export default Accountscan;

