import React, { useEffect, useState } from 'react';
import { CardBody, Input, Label, ButtonGroup, Card, Button, Row, Col, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import MapContainer from './googleLocation';
import './location.css'
import axios from 'axios'


const Location = ({ showSidebar }) => {
    const [currentlocation, setCurrentLocation] = useState(false)
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [homeAddress,getHomeAddress]=useState('')
    const [officeAddress,getOfficeAddress]=useState('')
    const [otherAddress,getOtherAddress]=useState('')

    function setLocation() {
        let x = navigator.geolocation;
        x.getCurrentPosition(success, failure);
        function success(position) {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
            setCurrentLocation(true)
        }
        function failure(error) {
            alert('need permission for this')
        }
    }
    useEffect(()=>{
        axios.post(process.env.REACT_APP_Api_Url+"user/getUserDetails", { mobileNumber: localStorage.getItem('mobileNumber') })
        .then((res, err) => {
            if (res.data.status == true) {
                if (res.data.resp.homeAddress || res.data.resp.otherAddress) {
                    getHomeAddress(res.data.resp.homeAddress||'')
                    getOfficeAddress(res.data.resp.officeAddress||'')
                    getOtherAddress(res.data.resp.otherAddress||'')
                }
            } else {
                console.log(res.data.err);
            }
        })
    },[homeAddress,officeAddress,otherAddress])
    return (
        <>
            <Container className="locationcont mt-3">
                <Card className="p-4">
                    <div className="mb-3">
                        <div className="local">
                            <p><i class="fas fa-map-marker-alt"></i>Location</p>
                            <Link to="/home"><i class="fas fa-times"></i></Link>
                        </div>
                        <div>
                            <p className="form-control-feedback1"> <i className="fa fa-search"></i></p>
                            <input type="text" className="inputlocation form-control1" placeholder="Search" />
                        </div>
                    </div>
                    <Card className="mb-3">
                        <Link onClick={setLocation} className="gpslocation p-3">
                            <i class="fas fa-crosshairs"></i>
                            <div className="getgps">
                                <p>Get Current Location</p>
                                <small>Using GPS</small>
                            </div>
                        </Link>
                    </Card>
                    <Card className="">
                        <div className="locationaddress p-4">
                            <p>Save Addresses</p>
                            <div className="gpslocation1 mb-4">
                                <i class="fas fa-home"></i>
                                <div className="getgps1">
                                    <p>Home</p>
                                    <small>{homeAddress}</small>
                                </div>
                            </div>
                            <div className="gpslocation1 mb-4">
                                <i class="fas fa-suitcase"></i>
                                <div className="getgps1">
                                    <p>Office</p>
                                    <small>{officeAddress}</small>
                                </div>
                            </div>
                            <div className="gpslocation1 mb-4">
                                <i class="fas fa-crosshairs"></i>
                                <div className="getgps1">
                                    <p>Other</p>
                                    <small>{otherAddress}</small>
                                </div>
                            </div>
                            <h5><Link className="viewmorelocation">VIEW MORE</Link></h5>
                        </div>

                    </Card>
                </Card>
            </Container>
            {currentlocation ? <MapContainer latlang={{ latitude: latitude,longitude:longitude }}></MapContainer> : 0}
        </>
    )
};

export default Location;
