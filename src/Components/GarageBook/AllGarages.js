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

const AllGarages = (props) => {
    const [garages, getGarages] = useState([]);
    const [searchgarage, setGarages] = useState(false);
    const [isGarageSelected,setGarageSelected]=useState(false)
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
     <div className='boxlast py-3 midbar' >
            {
                garages?.map((garages) => {
                    return (
                        <>
                            <Card style={{cursor:"pointer"}} onClick={()=>setGarageSelected(garages)}>
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
        </>
    );
}

export default AllGarages