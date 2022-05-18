import React from 'react'
import {Link} from "react-router-dom";
import { Container,Row,Col,Card,Button,ButtonGroup,CardHeader, CardBody,UncontrolledCollapse } from 'reactstrap';
import MakeGroup66 from '../../Images/drawable-xxxhdpi/drawable-hdpi/Mask Group 66.png';
import MakeGroup67 from '../../Images/drawable-xxxhdpi/drawable-hdpi/Mask Group 67.png';
import MakeGroup68 from '../../Images/drawable-xxxhdpi/drawable-hdpi/Mask Group 68.png';
import MakeGroup69 from '../../Images/drawable-xxxhdpi/drawable-hdpi/Mask Group 69.png';

const Chats = () => {
    return (
        <Container>
            <Card className="p-4 mt-3">
            <Card className='mb-3'>
                <div className="chatHead p-3">
                    <img src={MakeGroup66} alt="error"/>
                    <div className="chatinfo">
                        <h5>Aditya Mishra-Service Advisor</h5>
                        <p className="chatHead1">Mahindra First Choice, Kandivali East  400 101</p>
                        <small>We have diagnosed your vehicle and needs some additional fittings...</small>
                    </div>
                    <div className="chatfoot">
                        <small>Last message 21/01/2021</small>
                        <p><i class="far fa-comment"></i></p>
                    </div>
                </div>
            </Card>
            <Card className='mb-3'>
                <div className="chatHead p-3">
                    <img src={MakeGroup67} alt="error"/>
                    <div className="chatinfo">
                        <h5>Aditya Mishra-Service Advisor</h5>
                        <p className="chatHead1">Mahindra First Choice, Kandivali East  400 101</p>
                        <small>We have diagnosed your vehicle and needs some additional fittings...</small>
                    </div>
                    <div className="chatfoot">
                        <small>Last message 21/01/2021</small>
                        <p><i class="far fa-comment"></i></p>
                    </div>
                </div>
            </Card>
            <Card className='mb-3'>
                <div className="chatHead p-3">
                    <img src={MakeGroup68} alt="error"/>
                    <div className="chatinfo">
                        <h5>Aditya Mishra-Service Advisor</h5>
                        <p className="chatHead1">Mahindra First Choice, Kandivali East  400 101</p>
                        <small>We have diagnosed your vehicle and needs some additional fittings...</small>
                    </div>
                    <div className="chatfoot">
                        <small>Last message 21/01/2021</small>
                        <p><i class="far fa-comment"></i></p>
                    </div>
                </div>
            </Card>
            <Card className='mb-3'>
                <div className="chatHead p-3">
                    <img src={MakeGroup69} alt="error"/>
                    <div className="chatinfo">
                        <h5>Aditya Mishra-Service Advisor</h5>
                        <p className="chatHead1">Mahindra First Choice, Kandivali East  400 101</p>
                        <small>We have diagnosed your vehicle and needs some additional fittings...</small>
                    </div>
                    <div className="chatfoot">
                        <small>Last message 21/01/2021</small>
                        <p><i class="far fa-comment"></i></p>
                    </div>
                </div>
            </Card>
            </Card>
        </Container>
    )
}

export default Chats
