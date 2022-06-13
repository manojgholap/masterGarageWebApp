import React, { useEffect, useState } from 'react'
import { Container } from 'reactstrap';
import CompareandChoose from './Compare';
import serviceRepair from '../Images/drawable-xxhdpi/Group 37743.png'
import carCare from '../Images/drawable-xxhdpi/Group 37745.png'
import usedNew from '../Images/drawable-xxhdpi/Group 37746.png'
import washDenting from '../Images/drawable-xxhdpi/Group 37744.png'
import fastag from '../Images/drawable-xxxhdpi/Group 35745.png';
import challan from '../Images/drawable-xxhdpi/paychallan.png';
import chauffers from '../Images/drawable-xxhdpi/chuffer.png';
import parking from '../Images/drawable-xxhdpi/parking.png';
import insurance from '../Images/drawable-xxhdpi/insurance.png';
import { Link } from 'react-router-dom';
import axios from 'axios'
import HomeMain1 from './Home_Maintain/HomeMain1'


const Service = () => {
    const [service, setservice] = useState(false)

    function onServiceClick() {
        axios.post(process.env.REACT_APP_Api_Url+"user/getUserDetails", { mobileNumber: localStorage.getItem('mobileNumber') })
        .then((res, err) => {
            if (res.data.status == true) {
                if (res.data.resp.homeAddress || res.data.resp.otherAddress) {
                    setservice(true)
                }
            } else {
                console.log(res.data.err);
            }
        })
    }
    useEffect(()=>{
        onServiceClick()
    },[service])
    return (
        <>
            {service ?
            
             <HomeMain1></HomeMain1>
                : <CompareandChoose />
            }
            {/* <Container fluid>
                <div className="p-3 selectcart">
                    <h3>Select a Category </h3>
                    <div className="cardItem">
                        <div className='item'>
                            <img src={serviceRepair} alt="error" />
                            <p>Service & Repairs</p>
                        </div>
                        <div className='item'>
                            <img src={washDenting} alt="error" />
                            <p>Wash & Denting</p>
                        </div>
                        <div className='item'>
                            <img src={carCare} alt="error" />
                            <p>Car care & accessory</p>
                        </div>
                        <div className='item'>
                            <img src={usedNew} alt="error" />
                            <p>New & Useded Cars</p>
                        </div>
                    </div>
                </div>
                <div className="p-3 selectcart">
                    <div>
                        <h3>Value added Service</h3>
                        <h6>Comming Soon</h6>
                    </div>
                    <div className="cardItem">
                        <div className='valueitem'>
                            <Link to="/HomeFastag" style={{ textDecoration: 'none' }}>
                                <img src={fastag} alt="error" />
                                <p>Fastag Recharge</p>
                            </Link>
                        </div>
                        <div className="valueitem">
                            <Link to="/HomeChallan" style={{ textDecoration: 'none' }}>
                                <img src={challan} alt="error" />
                                <p>Pay Challans</p>
                            </Link>
                        </div>
                        <div className="valueitem">
                            <Link to="/ChaufferHome" style={{ textDecoration: 'none' }}>
                                <img src={chauffers} alt="error" />
                                <p>Chauffer Service</p></Link>
                        </div>
                        <div className="valueitem">
                            <img src={parking} alt="error" />
                            <p>Parking's Nearby</p>
                        </div>
                        <div className="valueitem">
                            <img src={insurance} alt="error" />
                            <p>Insurance Renewal</p>
                        </div>
                    </div>
                </div>
            </Container> */}
        </>
    )
}

export default Service
