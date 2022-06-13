import React, { useEffect, useState } from 'react';
import axios from "axios";
import BookGarage from './BookGarage'
// import { CardBody, Card, CardTitle, CardText, CardImg, Input, Label, ButtonGroup, Button, Row, Col, Container } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Col, Row, Button
} from 'reactstrap';
import { showMessage } from '../../Healper';
import coupan from '../../Images/drawable-xxxhdpi/coupan.png';
import cartisan from '../../Images/ImagesAll/drawable-xxxhdpi/Cartisan.png';
import FirstChoice from '../../Images/ImagesAll/drawable-xxxhdpi/FirstChoice.png'
import bookmark from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/bookmark.png';

const Garages = (props) => {
    const [garages, getGarages] = useState([]);
    const [searchgarage, setGarages] = useState(false);
    const [isGarageSelected, setGarageSelected] = useState(false)
    
    function getAllGarages() {
        axios.post(process.env.REACT_APP_Api_Url + "garage/getGarageByPinCode",
            { pincode: "410502" })
            .then((res, err) => {
                if (res.data.status == true) {
                    if (res.data.resp.length > 0) {
                        getGarages(res.data.resp);
                    }

                }
                else {

                    showMessage("error", res.data.err)
                }
            })
    }
    useEffect(() => {
        getAllGarages()
    }, [searchgarage])

    useEffect(() => {
        console.log(isGarageSelected);
        props.setGarageSelected(isGarageSelected)
    }, [isGarageSelected])
    return (
        <>
            <div className="progressbar">
                <div className="prog12">
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
            <div className='container-fluid px-5'>
                <Row >
                    <div class="addvechiclebox py-3 px-3" style={{ textAlign: 'Left' }}>
                        <Row className='m-3'>
                            <Col sm={8}>
                                <p className='poppins18B'>{props.car.car}</p>
                                <p className='poppins12light'>{props.car.fueltype.toUpperCase()}</p>
                                <h6 style={{ color: 'red', cursor: "pointer" }} onClick={() => { props.setChangeCar(true); props.setCarSelect(false) }} ><i class="far fa-edit" ></i>change</h6>
                            </Col>
                            <Col sm={4}><img src={`${process.env.REACT_APP_Api_Url}models/${props.car.make}/${props.car.car}.jpeg`} style={{ height: '90px', float: 'right', width: '140px' }} alt="error"></img></Col>
                        </Row>
                        <hr size="3" color="black" />
                        <Row style={{position:"fixed",margin:"0 80px 20px 0"}}>
                            <div className='midbar'>
                                {
                                    garages?.map((garages) => {
                                        return (
                                            <>
                                                <Card style={{ cursor: "pointer" }} onClick={() => setGarageSelected(garages)}>
                                                    <CardBody>
                                                        <Row>
                                                            <Col sm="4">
                                                                <img width="70%" src={FirstChoice} alt="Card image cap" />
                                                            </Col>
                                                            <Col sm="4">
                                                                <h6>{garages.garageName}</h6>
                                                                {
                                                                    garages.garageAddress.map(add => {
                                                                        return (<p className='allgaragehead1'><small>{add.city + ' ' + add.pincode}</small>
                                                                        </p>
                                                                        )
                                                                    })}
                                                            </Col>
                                                            <Col sm="4">
                                                                <img width="40%" src={bookmark} alt="Card image cap" />
                                                            </Col>
                                                        </Row>

                                                    </CardBody>
                                                    <CardBody>
                                                        <Row>
                                                            <Col sm="6">
                                                                ameneties
                                                            </Col>
                                                            <Col sm="2">
                                                            </Col>
                                                            <Col sm="4">
                                                                <p className='OpenSans22'>&#8377;{garages.price}</p>
                                                            </Col>
                                                        </Row>
                                                        <div className='coupancont'>
                                                            <img src={coupan} alt="error" />
                                                            <p>50% Off I Use Code: TRYNEW</p>
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                                <br></br>
                                            </>
                                        )
                                    })}
                            </div>
                            </Row>
                        <Row style={{ marginTop: "80%",borderRadius:"2px" }}>
                            <button className='btn btn-lg btn-success'>See All Estimates</button>
                        </Row>
                    </div>
                </Row>
            </div>

        </>
    );
}

export default Garages