import React, { useState, useEffect } from 'react';
import { Button, Row, Col, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';
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
import EditVehicle from './EditVehicle'
import PeriodicServiceAdd from './PeriodicServiceAdd';
import axios from 'axios';
import PeriodicADDvechicle from './PeriodicADDvechicle';
function AddVechicle(props) {
    const [userCars, setUserCars] = useState('');
    const [selectCar, setSelectedCar] = useState('');
    const [changeCar, setChangeCar] = useState(false);
    const isLogin = localStorage.getItem("isLogin");
    const [show, setShow] = useState(false);
    const [id, setId] = useState('')
    const [isAddCar, setAddCar] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        setSelectedCar('');
        setChangeCar(false);
    }, [changeCar])

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
    }, [show, isAddCar])

    return (<>
        {selectCar ?
            <>
                {props.isBookByGarage ?
                    <PeriodicServiceAdd setCheckout={props.setCheckout} isGarageSelected={props.isGarageSelected} setCarSelect={props.setCarSelect} setChangeCar={setChangeCar} car={selectCar} setGarageSelected={props.setGarageSelected} isServiceSelect={props.isServiceSelect}></PeriodicServiceAdd> :
                    <PeriodicServiceAdded setCarSelect={props.setCarSelect} setChangeCar={setChangeCar} car={selectCar} setGarageSelected={props.setGarageSelected} isServiceSelect={props.isServiceSelect}>
                    </PeriodicServiceAdded>}
            </>
            :
            <div className="add_vehical">
                <div className="progressbar">
                    <div className="prog1">
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

                {userCars ?
                    <>
                        {isAddCar ? <PeriodicADDvechicle setAddCar={setAddCar}></PeriodicADDvechicle> : <div class="addvechiclebox py-3 px-2 midbar">
                            <form>
                                <Link onClick={() => setAddCar(true)} ><button className='btn btn-primary form-control'>Add Vehicle</button></Link>
                            </form>
                            <br></br>
                            <Row className='px-4' style={{ color: "blue" }}>
                                Select vehicle you need to service
                            </Row>
                            {userCars.map(cars => {
                                return (
                                    <Row className='vechiclesList mx-3 my-3'>

                                        <Col sm={6} style={{ cursor: "pointer" }} onClick={() => onCarSelect(cars)}>
                                            <div>
                                                <img src={qr} style={{ height: '45px', width: '45px;', marginBottom: '20px' }}></img>
                                            </div>
                                            <h5 className='fontsize20' style={{ marginBottam: '50px' }}><b>{cars.car}</b></h5>
                                            <h5>{cars.fueltype}</h5>
                                        </Col>
                                        <Col sm={6}>
                                            <img src={`${process.env.REACT_APP_Api_Url}models/${cars.make}/${cars.car}.jpeg`} style={{ height: '99px', float: 'right', width: '140px' }} />
                                            <h6 style={{ cursor: "pointer", color: 'red', marginLeft: "70%" }} onClick={() => { handleShow(); setId(cars._id) }} ><i class="far fa-edit" ></i>edit</h6>
                                            <Modal isOpen={show}>
                                                <div className="midBar-comp-body">
                                                    <ModalHeader closeButton>
                                                        <h4>Edit Vehicle</h4>
                                                        <Button className='btn btn-danger' onClick={handleClose}>
                                                            Close
                                                        </Button>
                                                    </ModalHeader>
                                                    <ModalBody>
                                                        <EditVehicle setShow={setShow} id={id}></EditVehicle>
                                                    </ModalBody>
                                                </div>
                                            </Modal>
                                        </Col>
                                    </Row>
                                )
                            })
                            }
                        </div>}
                    </>
                    :
                    <>
                        {isAddCar ? <PeriodicADDvechicle setAddCar={setAddCar}></PeriodicADDvechicle> :
                            <div class="addvechiclebox py-3 px-2 midbar">
                                <Row sm={2}>
                                    <img src={car} style={{ marginTop: "50px", marginLeft: "25%" }} ></img>
                                </Row>
                                <Row style={{ marginTop: "10%", textAlign: "center" }}>
                                    <h4 style={{ color: "navy" }}><b>No Vehicles Found!</b></h4>
                                </Row>

                                <form style={{ marginTop: "60px" }}>
                                    <Link onClick={() => setAddCar(true)}><button className='btn btn-primary form-control'>Add Vehicle</button></Link>
                                </form>
                            </div>}
                    </>
                }
            </div>
        }
    </>
    )
}

export default withRouter(AddVechicle);
