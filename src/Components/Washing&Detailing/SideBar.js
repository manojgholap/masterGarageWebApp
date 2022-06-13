import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CardBody, Input, Label, ButtonGroup, Button, Row, Col, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import MidBar from './MidBar';
import '../PeriodicServices/periodic.css';
import LoadingScreen from 'react-loading-screen';


function SideBar(props) {

    const [Periodic, setPeriodic] = useState([]);
    const [serviceId, setService] = useState('')
    const [serviceName,setServiceName]=useState('')
    
    useEffect(() => {
        axios.post(process.env.REACT_APP_Master_Garage + "getServiceById.php",{serviceId:10}).then((res) => {
            console.log(res.data)
            setPeriodic(res.data.result)
            setService(res.data.result[0].serviceId)
            setServiceName(res.data.result[0].name)
        }).catch((err) => {
            console.log(err);
        })
        // axios.get(process.env.REACT_APP_Master_Garage + "getServiceList.php").then((res) => {
        //     setPeriodic(res.data.result)
        //     setService(res.data.result[0].serviceId)
        //     setServiceName(res.data.result[0].name)
        // }).catch((err) => {
        //     console.log(err);
        // })
    }, [])

    useEffect(() => {

    }, [serviceId])

    function handleClick(serviceId,name) {
        setService(serviceId);
        setServiceName(name)
    }

    return <>
        {serviceId ? <Row>
            <Col className='midbar'>
                {Periodic?.map((per, key) => (
                    <ul className="sidebar">
                        <li className='btn btn-light sideservice_click' onClick={() => handleClick(per.serviceId,per.name)}>
                            {per.package_type}</li>
                    </ul>
                ))}
            </Col>
            <Col className=''>
                <MidBar serviceName={serviceName} serviceId={serviceId} isCarSelect={props.isCarSelect} setServiceSelect={props.setServiceSelect}></MidBar>
            </Col>
        </Row>
            :
            <LoadingScreen
                loading={true}
                spinnerColor='#9ee5f8'
                textColor='#676767'
            />}
    </>


}
export default SideBar;