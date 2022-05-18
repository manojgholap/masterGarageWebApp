import React from 'react'
import {Link} from "react-router-dom";
import { Container,Row,Col,Card,Button,ButtonGroup,CardHeader, CardBody,UncontrolledCollapse } from 'reactstrap';
import Gift from '../../Images/Images/drawable-hdpi/gift.png';
import Coins from '../../Images/Images/drawable-hdpi/coins.png';
import './dashboard.css'

const Refer = () => {
    return (
        <Container>
          <Card className="mb-4">
              <p className='mgworldgift'><img src={Gift} alt="error"/></p>
              <div className="refersecondcont">
                  <h3>Refer & Earn 500 MG Coins</h3>
                  <div>
                      <small>Your referral code:</small>
                      <div className="refercodemggift">
                          <p>MG1234567890</p>
                          <button><i class="far fa-copy"></i> Copy</button>
                      </div>
                  </div>
              </div>
              <div className="thirdcontref">
                  <small>Invite friends and earn mg coins and more rewards</small>
                  <div>
                      <ul className="listsocial">
                          <li><i class="fas fa-share-alt"></i>Share</li>
                          <li><i class="fab fa-facebook-square"></i></li>
                          <li><i class="fab fa-twitter"></i></li>
                          <li><i class="fab fa-linkedin"></i></li>
                          <li><i class="fab fa-instagram"></i></li>
                      </ul>
                  </div>
              </div>
              <div>
                  <div className='footmgworld p-4'>
                  <div className='mgworld'>
                      <div>
                          <div className="visitMg">
                            <h3>Visit MG World</h3>
                            <i class="fas fa-arrow-circle-right"></i>
                          </div>
                          <p>Get epic deals on your favourite brands
                               and accessories! Check out now!</p>
                      </div>
                  </div>
                  <p><img src={Coins} alt="error"/></p>
                  </div>
              </div>
          </Card>
        </Container>
    )
}

export default Refer
