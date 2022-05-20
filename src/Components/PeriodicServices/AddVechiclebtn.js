import React, { useState, useEffect } from 'react';
import { CardBody, Input, Label, ButtonGroup, Button, Row, Col, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import './periodic.css';
import './addvechiclebtn.css';
import Venue from '../../Images/CarBrand/Models/2 Hyundai/Venue.jpeg';
import Elitei20 from '../../Images/CarGarage/Models/2 Hyundai/Elitei20.jpeg';
import qr from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/qr.png';
import Baleno from '../../Images/CarBrand/Models/1 Maruti Suzuki/WBG/Baleno.png';
import car from '../../Images/drawable-xxhdpi/Car.png'
import { useSelector, useDispatch } from 'react-redux';
import { selectVehical } from '../../redux/action';
import { withRouter } from "react-router-dom";
import PeriodicServiceAdded from './PeriodicServicesAdded';
import axios from 'axios';

function AddVechicle(props) {
    const [userCars, setUserCars] = useState('');
    const [selectCar, setSelectedCar] = useState('')
    const isLogin = localStorage.getItem("isLogin")

     console.log(props);

    function getUserCarDetails() {
        axios.post(process.env.REACT_APP_Api_Url + "user/getUserCarDetails", { mobileNumber: localStorage.getItem('mobileNumber') })
            .then((res) => {
                if (res.data.status == true) {
                    console.log(res.data.resp);
                    setUserCars(res.data.resp);
                }
            })
    }

    function getUserTempCarDetails() {
        axios.post(process.env.REACT_APP_Api_Url + "user/getUserTempCarDetails", { token: localStorage.getItem('token') })
            .then((res) => {
                if (res.data.status == true) {
                    console.log(res.data.resp);
                    setUserCars(res.data.resp);
                }
            })
    }
    function onCarSelect(cars) {
        props.setCarSelect(cars)
        setSelectedCar(cars)
    }

    useEffect(() => {
        if (isLogin == "true") {
            getUserCarDetails()
        } else {
            getUserTempCarDetails()
        }
    }, [])
    return (<>
        {selectCar?<PeriodicServiceAdded car={selectCar} setGarageSelected={props.setGarageSelected} isServiceSelect={props.isServiceSelect}></PeriodicServiceAdded>:<div className="add_vehical">
            <div className="progressbar">
                <div className="prog">
                </div>
                <div className="pagesize1"><li></li><li>|</li><li>|</li><li>|</li><li>|</li><li></li></div>
                <div className="pagesize">
                    <li>E</li>
                    <li>Vehical</li>
                    <li>Service</li>
                    <li>Garage</li>
                    <li>Basic</li>
                    <li>F</li>
                </div>
            </div>
            <div class="addvechiclebox py-3 px-2 midbar" >
            <form>
                    <Link to="/PeriodicADDvechicle"><button className='btn btn-primary form-control'>Add Vechicle</button></Link>
                </form>
                <Row className='px-4'>
                    Select vechicle you need to service
                </Row>
                {userCars ?
                    userCars.map(cars => {
                        return (
                            <Row className='vechiclesList mx-3 my-3' style={{ cursor: "pointer" }} onClick={() => onCarSelect(cars)} >
                                <Col sm={6}>
                                    <div>
                                        {/* <img src={qr} style={{ height: '45px', width: '45px;', marginBottom: '20px' }}></img> */}
                                    </div>
                                    <h5 className='fontsize20' style={{ marginBottam: '50px' }}>{cars.car}</h5>
                                    <h5>{cars.fueltype}</h5>
                                </Col>
                                <Col sm={6}><div>
                                    <img src={`${process.env.REACT_APP_Api_Url}models/${cars.make}/${cars.car}.jpeg`} style={{ height: '99px', float: 'right', width: '140px' }} />
                                </div>
                                    <h6 style={{ color: 'red' }} ><i class="far fa-edit" ></i>edit</h6>
                                </Col>
                            </Row>
                        )
                    })
                    :
                    <Row >
                        <img src={car} style={{ marginTop: "50px" }} ></img>
                    </Row>
                }
            </div>
        </div>}
    </>)
}
export default withRouter(AddVechicle);
