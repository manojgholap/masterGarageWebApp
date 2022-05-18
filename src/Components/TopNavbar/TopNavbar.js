import React, { useState,useEffect } from 'react';
import './topnavbar.css'
import avatar from "../../Images/avatar.png";
import Location from '../Locaton/Location'
import logo from "../../Images/drawable-xxhdpi/Group 37749.png"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';



const TopNavbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [onlogoclick, setLogo] = useState(false);
  const [home, setHome] = useState(false);
  const [aboutUs, setAboutUs] = useState(false);
  const [joinUs, setJoinUs] = useState(false);
  const [faq, setFaq] = useState(false);
  const [location, getLocation] = useState('')

  const showSidebar = () => setSidebar(!sidebar)
  function getUserDetails() {
    axios.post(process.env.REACT_APP_Api_Url+"user/getUserDetails", { mobileNumber: localStorage.getItem('mobileNumber') })
      .then((res, err) => {
        if (res.data.status == true) {
          if (res.data.resp.homeAddress || res.data.resp.otherAddress) {
            getLocation(res.data.resp.homeAddress || res.data.resp.officeAddress||res.data.resp.otherAddress||'')
          }
        } else {
          console.log(res.data.err);
        }
      })
  }
  useEffect(() => {
    getUserDetails()
  }, [location])


  return (
    <>
      <div className="App">
        <div className="header">
          <div className="navbar">
            <div className="navbar-toggle">
              <div>
                <Link to="/home" onClick={showSidebar} className="logo"><img src={logo} alt="error" />
                  <h5>Master Garage</h5></Link>
              </div>
              {/* {sidebar &&(
                 <Location showSidebar={showSidebar} />
               )} */}
            </div>
            <div className="navbar-toggle">
              <div>
                <Link to="/location" className="logo">
                  {location}<i class="fas fa-map-marker-alt"></i>
                </Link>
              </div>
            </div>
            <div className="menu">
              <ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/aboutus">About Us</Link>
                </li>
                <li>
                  <Link to="/joinus">Join us</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ's</Link>
                </li>
                <li>
                  <Link to="/search" className="icons1"><i class="fas fa-search-plus"></i></Link>
                </li>
                <li>
                  <Link to="/notification" className="icons1"><i class="fas fa-bell"></i></Link>
                </li>

                <li>
                  <Link to="/login">
                    <img src={avatar} style={{ width: "30px" }} alt="error" /><i class="fas fa-chevron-down"></i>
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>
        <div className="media_Nav">

        </div>
        {/* <Login show={sidebar}/> */}
      </div>
    </>
  );
}

export default TopNavbar;
