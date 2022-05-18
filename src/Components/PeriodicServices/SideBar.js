import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CardBody, Input, Label, ButtonGroup, Button, Row, Col, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import MidBar from './MidBar';
import './periodic.css';


function SideBar(props) {
   
    const [Periodic, setPeriodic] = useState([]);
    const [service, setService] = useState('')
    const url = "http://mastergarage.in/garageapi/getServiceList.php"

    useEffect(() => {
        axios.get(process.env.REACT_APP_Api_Url + "service/getAllServices").then((res) => {
            if (res.data.status == true) {
                console.log(res.data.resp);
                setPeriodic(res.data.resp);
                setService(res.data.resp[0]._id)
            }
            else {
                console.log("something went wrong");
            }
        })
    }, [])

    useEffect(() => {

    }, [service])

    function handleClick(e) {
        setService(e)
    }

    return <>
        <Row>
            <Col className='midbar'>
                {Periodic?.map((per, key) => (
                    <ul className="sidebar" key={per._id}>
                        <li className='btn btn-light sideservice_click addcar' value={per._id} onClick={() => handleClick(per._id)}>{per.service}</li>
                    </ul>
                ))}
            </Col>
            <Col className=''>
                <MidBar service={service} isCarSelect={props.isCarSelect} setServiceSelect={props.setServiceSelect}></MidBar>
            </Col>
        </Row>






        {/* <li className='btn1 btn btn-secondary '><Link to="" style={{textDecoration:'none'}} ><p style={{color:'#2650D8',fontSize:'15px',fontWeight:'bold',marginBottom:'8px'}}>Periodic Service</p>
            <p className='poppins12light'>Scheduled Service Packages</p>
            <p className='poppins12light' style={{color:'#999999'}}>Other Service Packages</p></Link></li>
            <li  className='btn btn-light' ><Link to="" style={{textDecoration:'none',color:'#00155A'}}  >Running Repairs</Link></li>
            <li  className='btn btn-light '><Link to=""  style={{textDecoration:'none',color:'#00155A'}}  >Denting & Painting</Link></li>
            <li  className='btn btn-light '><Link to=""  style={{textDecoration:'none',color:'#00155A'}}  >Body Fittings</Link></li>
            <li  className='btn btn-light '><Link to="" style={{textDecoration:'none',color:'#00155A'}}  >AC Service & Repairs</Link></li>
            <li  className='btn btn-light '><Link to="" style={{textDecoration:'none',color:'#00155A'}}  >Battery Care</Link></li>
            <li  className='btn btn-light '><Link to="" style={{textDecoration:'none',color:'#00155A'}}  >Wheel Care</Link></li>
            <li  className='btn btn-light '><Link to="" style={{textDecoration:'none',color:'#00155A'}}  >Inspection Service</Link></li>
            <li  className='btn btn-light '><Link to="" style={{textDecoration:'none',color:'#00155A'}}  >Insurance Repairs</Link></li> */}

    </>


}
export default SideBar;