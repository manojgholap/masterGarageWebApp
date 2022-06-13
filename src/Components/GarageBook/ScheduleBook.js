import React, { useEffect, useState } from 'react';
import { Button, Row, Col, Modal, ModalHeader, ModalBody, Container, Card, CardBody } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import PhoneInput from "react-phone-input-2";
import { useSelector, useDispatch } from 'react-redux';
import '../PeriodicServices/periodic.css';
import './Schedule.css';
import FirstChoice from '../../Images/ImagesAll/drawable-xxxhdpi/FirstChoice.png';
import CartBox from './CartBox';
import DateTimePicker from 'react-datetime-picker';
import Calendar from 'react-calendar';
import { calenderTime } from '../../redux/action';
import checkright from '../../Images/drawable-xxxhdpi/Path 22613.png';
import account from '../../Images/drawable-xxxhdpi/Group 26337.png';
import timer from '../../Images/drawable-xxxhdpi/Group 26338.png';
import locat from '../../Images/drawable-xxxhdpi/Group 26339.png';
import payment from '../../Images/drawable-xxxhdpi/Group 26340.png';
import Login3 from './../../Components/Login3'
import { showMessage } from '../../Healper';
import axios from 'axios';
import Otp2 from './../Otp2'
import { times } from './times'
import AwaitConfirm from '../GarageVerification/AwaitConfirm';


const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
function ScheduleBook(props) {
  const [orderId, setOrderId] = useState('')

  return <>

    {orderId ? <AwaitConfirm orderId={orderId}></AwaitConfirm>
      : <div className='container-fluid'>
        <Row>
          <Col sm={8} className='linkhead pt-4'>
            <Link to="/PeriodicService" className="bookgarage"><i className='fa fa-arrow-left'></i></Link>
            <Link to="/PeriodicService" className="bookgarage1">Confirm Booking</Link>
          </Col>
          <Col sm={4} className='mt-3'>
            <div className="progressbar">
              <div className="prog14">
              </div>
              <div className="pagesize1"><li></li><li>|</li><li>|</li><li>|</li><li>|</li><li></li></div>
              <div className="pagesize">
                <li>E</li>
                <li>Vehical</li>
                <li>Service</li>
                <li>Garage</li>
                <li>Basic</li>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="py-2">
          <Col sm={8} ><SubMid isGarageSelected={props.isGarageSelected} isServiceSelect={props.isServiceSelect} isCarSelect={props.isCarSelect} setOrderId={setOrderId} amount={props.amount}></SubMid></Col>
          <Col sm={4}  ><CartBox isGarageSelected={props.isGarageSelected} amount={props.amount} isServiceSelect={props.isServiceSelect} isCarSelect={props.isCarSelect}></CartBox></Col>
        </Row>

      </div>}

  </>
}



const SubMid = (props) => {
  const [date, setDate] = useState(new Date());
  const [value, onChange] = useState(new Date());
  const [bookingDate, setBookingDate] = useState(null);
  const [time, setTime] = useState(times)
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [bookingTimes, setBookingTimes] = useState([]);
  const [phone, setPhone] = useState(localStorage.getItem("mobileNumber"));
  const [isOtp, setOtp] = useState(false);
  const [isRegister, setRegister] = useState(false);
  const [isTimeDate, setTimeDate] = useState(false);
  const [address, setAddress] = useState('');
  const [isAddressSelect, setAddressSelected] = useState(false);
  const [homeAddress, getHomeAddress] = useState('')
  const [officeAddress, getOfficeAddress] = useState('')
  const [otherAddress, getOtherAddress] = useState('')
  const [updatehomeAddress, setHomeAddress] = useState('')
  const [updateofficeAddress, setOfficeAddress] = useState('')
  const [updateotherAddress, setOtherAddress] = useState('')
  const [addNewAddress, setNewAddress] = useState(false)
  const [isPayment, setPayment] = useState(false);
  const [payNow, setPayNow] = useState(false);
  const [payLater, setPayLater] = useState(false)
  const isLogin = localStorage.getItem("isLogin");

  useEffect(() => {
    axios.post(process.env.REACT_APP_Api_Url + "user/getUserDetails", { mobileNumber: localStorage.getItem('mobileNumber') })
      .then((res, err) => {
        if (res.data.status == true) {
          if (res.data.resp.homeAddress || res.data.resp.otherAddress) {
            getHomeAddress(res.data.resp.homeAddress || '')
            getOfficeAddress(res.data.resp.officeAddress || '')
            getOtherAddress(res.data.resp.otherAddress || '')
            setHomeAddress(res.data.resp.homeAddress || '')
            setOfficeAddress(res.data.resp.officeAddress || '')
            setOtherAddress(res.data.resp.otherAddress || '')
          }
        } else {
          console.log(res.data.err);
        }
      })
  }, [homeAddress,
    officeAddress,
    otherAddress,
    isRegister,
    isOtp,
    addNewAddress
  ])
  function booking() {
    if (isLogin == "false") {
      showMessage("info", "you need login to continue")
      return
    }
    if (!selectedTimeSlot) {
      showMessage("info", "select slot for servicing your vehicle")
      return
    }
    if (!address) {
      showMessage("info", "select your address to proceed")
      return
    }
    if (!isPayment) {
      showMessage("info", "select payment method to proceed")
      return
    }
    axios.post(process.env.REACT_APP_Api_Url + "order/addOrder",
      {
        mobileNumber: localStorage.getItem('mobileNumber'),
        isServiceSelect: props.isServiceSelect,
        isCarSelect: props.isCarSelect,
        isGarageSelected: props.isGarageSelected,
        address: address,
        date: date,
        time: selectedTimeSlot,
        payment:props.amount,
        paymentStatus: payNow ? "paid" : payLater
      }).then((res) => {
        if (res.data.status == true) {
          props.setOrderId(res.data.resp.orderId);
        } else {
          showMessage('err', res.data.err);
        }
      })
  }
  function paymentDetail(type) {
    if (type == 1) {
      setPayNow(true)
      setPayment(true)
      return
    }
    setPayLater("pay after service");
    setPayment(true);
  }
  function updateAddress() {
    if (!localStorage.getItem('mobileNumber')) {
      showMessage('err', "you need to login for updating password");
      return
    }
    axios.post(process.env.REACT_APP_Api_Url + "user/updateAddress",
      {
        mobileNumber: localStorage.getItem('mobileNumber'),
        homeAddress: updatehomeAddress,
        officeAddress: updateofficeAddress,
        otherAddress: updateotherAddress
      })
      .then((res, err) => {
        if (res.data.status == true) {
          setNewAddress(false)
        }
      })
  }

  const handleCalTime = () => {
    if (!selectedTimeSlot) {
      showMessage('info', " select time slot for service");
      return
    }
    if (!date) {
      showMessage('info', "select date for service");
      return
    }

    setTimeDate(true)
  }
  const handleMobileclick = () => {
    if (!phone || phone.length < 12) {
      return showMessage('info', "please enter valid phone number")
    }
    else {
      axios.post(process.env.REACT_APP_Api_Url + "login/generateOtp", { mobileNumber: phone.substring(2, 12) }).then((res, err) => {
        if (res.data.status == true) {
          setOtp(true)
        }
        else {
          showMessage('error', res.data.err)
          setRegister(true)
        }
      })
    }
  }
  function onMobileChange(value) {
    const re = /^[0-9\b]+$/;
    if (value === '' || re.test(value)) {
      setPhone(value)
    }
  }
  function handleToggle(item) {
    let val = time.map((name) => {
      if (name.time == item.time) {
        name.toggle = !name.toggle
      }
      return name
    })
    let val1 = val.map((name) => {
      if (name.time == selectedTimeSlot) {
        name.toggle = !name.toggle
      }
      return name
    })
    setSelectedTimeSlot(item.time)
    let temdata = [...val1]
    setTime(temdata)
  }
  return (
    <>
      <Row className='allpageac'>
        {/* user login */}
        {isLogin == "true" ?
          <div style={{ display: 'flex' }} className='mb-2 aligmrnt'>
            <img src={account} alt="error" />
            <Row className='px-5 py-4 accountbg'>
              <Row>
                <Col sm={10}>
                  <p className='bookinghead1'>Logged in</p>
                  <p className='poppins22M'>{localStorage.getItem('mobileNumber') || phone.substring(2, 12)}</p>
                </Col>
                <Col sm={1} className="tickcorrect">
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35.001" viewBox="0 0 35 35.001">
                    <path id="Path_20808" data-name="Path 20808" d="M101.5,207A17.5,17.5,0,1,0,119,224.5,17.52,17.52,0,0,0,101.5,207Zm8.071,14.8-9.188,9.189a.549.549,0,0,1-.755,0l-6.164-6.164a.538.538,0,0,1,0-.756l.788-.788a.537.537,0,0,1,.755,0l4.805,4.805a.271.271,0,0,0,.386,0l7.83-7.83a.549.549,0,0,1,.755,0l.788.789a.533.533,0,0,1,0,.755Z" transform="translate(-84 -207)" fill="#53bd8c" />
                  </svg>
                </Col>
                <Col sm={1}>
                </Col>
              </Row>
            </Row>
          </div> :
          <div style={{ display: 'flex' }} className='mb-2'>
            <img src={account} alt="error" />
            <Row className='px-5 py-3 accountbg'>
              <p className='bookinghead1'>Account</p>
              <p className='bookingpara'>Please login to your existing account or sign-up to confirm booking</p>
              <div className="phonecard">
                <PhoneInput
                  country={'in'}
                  value={phone}
                  onChange={(value) => onMobileChange(value)}
                  className="width_Input"
                />
                <Link><button className='submitphone' onClick={() => handleMobileclick()}>Submit</button></Link>
              </div>
            </Row>
          </div>
        }
        {/* schedule time */}
        {isTimeDate ?
          <div style={{ display: 'flex' }} className='my-2'>
            <img src={timer} alt="error" />
            <Row className='px-5 py-3 accountbg'>
              <Col sm={10}>
                <p className='bookinghead1'>Service Schedule</p>
                <p className='poppins22M'>{`Date: ${monthNames[date.getMonth()]} ${date.getDate()}  ${date.getFullYear()} | Time:${selectedTimeSlot}`}</p>
              </Col>
              <Col sm={1} className="tickcorrect">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35.001" viewBox="0 0 35 35.001">
                  <path id="Path_20808" data-name="Path 20808" d="M101.5,207A17.5,17.5,0,1,0,119,224.5,17.52,17.52,0,0,0,101.5,207Zm8.071,14.8-9.188,9.189a.549.549,0,0,1-.755,0l-6.164-6.164a.538.538,0,0,1,0-.756l.788-.788a.537.537,0,0,1,.755,0l4.805,4.805a.271.271,0,0,0,.386,0l7.83-7.83a.549.549,0,0,1,.755,0l.788.789a.533.533,0,0,1,0,.755Z" transform="translate(-84 -207)" fill="#53bd8c" />
                </svg>

              </Col>
              <Col sm={1}>
                <Link className='btn btn-danger' onClick={() => setTimeDate(false)}>change</Link>
              </Col>
            </Row>
          </div>
          :
          <div style={{ display: 'flex' }} className='my-2'>
            <img src={timer} alt="error" />
            <Row className='px-5 py-3 accountbg'>
              <Col sm={8}>
                <p className='bookinghead1'>Service Schedule</p>
                <p className='bookingpara'>Select your preferred Date & Time for the service</p>
              </Col>
              <Col sm={4} style={{ textAlign: 'right' }}>
                <form action="/" method="get">
                  <Link style={{ textDecoration: 'none' }}>
                    <button className='submitphone' onClick={() => isLogin == "true" ? handleCalTime() : showMessage('info', 'you need login to continue')}>
                      Submit</button>
                  </Link>
                </form>
              </Col>
              <Row className='m-3 schedulebox'>
                <Col sm={6}>
                  <div className='app'>

                    <div className='calendar-container'>
                      <Calendar
                        onChange={setDate}
                        value={date}
                      />
                    </div>
                  </div>
                </Col>
                <Col lg={6}><p className='bookingpara' style={{ fontSize: '14px' }}>Click on any of the slots from below available windows</p>
                  <div class="row gx-2">
                    <div className="flex2 d-flex mb-3">
                      {time.map(time => {
                        return (
                          <div className="flex1">
                            <button
                              key={time.time}
                              className={time.toggle ? "btn23" : "btn22"}
                              onClick={() => handleToggle(time)
                              }
                            >
                              {time.toggle ? time.time : time.time}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </Col>
              </Row>
              <span className='bookingpara'>Note: Post placing the order, we will connect you with the garage to take care of your car problems & services</span>
            </Row>
          </div>}

        {/* Address */}

        {isAddressSelect ?
          <div style={{ display: 'flex' }} className='my-2'>
            <img src={locat} alt="error" />
            <Row className='px-5 py-3 accountbg'>
              <Col sm={10}>
                <p className='bookinghead1'>Pick up & Drop Address</p>
                <p className='poppins22M'>{address}</p>
              </Col>
              <Col sm={1} className="tickcorrect">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35.001" viewBox="0 0 35 35.001">
                  <path id="Path_20808" data-name="Path 20808" d="M101.5,207A17.5,17.5,0,1,0,119,224.5,17.52,17.52,0,0,0,101.5,207Zm8.071,14.8-9.188,9.189a.549.549,0,0,1-.755,0l-6.164-6.164a.538.538,0,0,1,0-.756l.788-.788a.537.537,0,0,1,.755,0l4.805,4.805a.271.271,0,0,0,.386,0l7.83-7.83a.549.549,0,0,1,.755,0l.788.789a.533.533,0,0,1,0,.755Z" transform="translate(-84 -207)" fill="#53bd8c" />
                </svg>
              </Col>
              <Col sm={1}>
                <Link className='btn btn-danger' onClick={() => setAddressSelected(false)}>change</Link>
              </Col>
            </Row>
          </div>
          :
          <div style={{ display: 'flex' }} className='my-2'>
            <img src={locat} alt="error" />
            <Row className='px-5 py-3 accountbg'>
              <p className='bookinghead1'>Pick up & Drop Address</p>
              <p className='bookingpara'>Add or choose your preferred address for pick up & drop</p>
              <Container>
                <div className="locationaddress p-4">
                  <p>Save Addresses</p>
                </div>
                <Row>
                  <Col sm={6}>
                    <div className="cardMain mb-4">
                      <p><i class="fas fa-home"></i>&nbsp;Home</p>
                      <div className="getgps1">
                        <small>{homeAddress}</small>
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <Link className='btn btn-primary' onClick={() => { setAddress(homeAddress); homeAddress ? setAddressSelected(true) : showMessage('info', "login or add your address") }}>Select</Link>
                      </div>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="cardMain mb-4">
                      <p> <i class="fas fa-suitcase"></i>&nbsp;Office</p>
                      <div className="getgps1">
                        <small>{officeAddress}</small>
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <Link className='btn btn-primary' onClick={() => { setAddress(officeAddress); officeAddress ? setAddressSelected(true) : showMessage('info', "login or add your address") }}>Select</Link>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={6}>
                    <div className="cardMain mb-4">
                      <p><i class="fas fa-crosshairs"></i>&nbsp;Other</p>
                      <div className="getgps1">
                        <small>{otherAddress}</small>
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <Link className='btn btn-primary' onClick={() => { setAddress(otherAddress); otherAddress ? setAddressSelected(true) : showMessage('info', "login or add your address") }}>Select</Link>
                      </div>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="cardMain mb-4">
                      <p><i class="fas fa-crosshairs"></i>&nbsp;Add New Address</p>
                      <div className="getgps1">
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <Link className='btn btn-primary' onClick={() => isLogin == "true" ? setNewAddress(true) : showMessage('info', 'you need to login first to continue')}>Add</Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Row>
          </div>
        }
        {/* payments */}
        {isPayment ?
          <div style={{ display: 'flex' }} className='my-2'>
            <img src={payment} alt="error" />
            <Row className='px-5 py-3 accountbg'>
              <Col sm={10}>
                <p className='bookinghead1'>Payments</p>
                <p className='poppins22M'>{payLater}</p>
              </Col>
              <Col sm={1} className="tickcorrect">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35.001" viewBox="0 0 35 35.001">
                  <path id="Path_20808" data-name="Path 20808" d="M101.5,207A17.5,17.5,0,1,0,119,224.5,17.52,17.52,0,0,0,101.5,207Zm8.071,14.8-9.188,9.189a.549.549,0,0,1-.755,0l-6.164-6.164a.538.538,0,0,1,0-.756l.788-.788a.537.537,0,0,1,.755,0l4.805,4.805a.271.271,0,0,0,.386,0l7.83-7.83a.549.549,0,0,1,.755,0l.788.789a.533.533,0,0,1,0,.755Z" transform="translate(-84 -207)" fill="#53bd8c" />
                </svg>
              </Col>
              <Col sm={1}>
                <Link className='btn btn-danger' onClick={() => setPayment(false)}>change</Link>
              </Col>
            </Row>
          </div>
          : <div style={{ display: 'flex' }} className='my-2'>
            <img src={payment} alt="error" />
            <Row className='px-5 py-3 accountbg'>
              <p className='bookinghead1'>Payments</p>
              <p className='bookingpara'>Select your preferred payment method</p>
              <Container>
                <div className="locationaddress p-4">
                  <p>Payment</p>
                </div>
                <Row>
                  <Col sm={6}>
                    <div className="cardMain mb-4">
                      <p>Pay Now</p>
                      <div className="getgps1">
                        <small>Pay now and earn exciting rewards and earn more MG coins on this booking</small>
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <Link to='/payment' className='btn btn-primary' onClick={() => { isLogin ? paymentDetail(1) : showMessage('info', "login or add your address") }}>Select</Link>
                      </div>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="cardMain mb-4">
                      <p>Pay after service completion</p>
                      <div className="getgps1">
                        <small>By opting this method you agree to pay after service completion and before vehicle delivery</small>
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <Link className='btn btn-primary' onClick={() => { isLogin ? paymentDetail(0) : showMessage('info', "login or add your address") }}>Select</Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Row>
          </div>}
        <br />
        <div style={{ display: 'flex' }} className='my-2'>
          <button className='btn btn-primary form-control' onClick={() => booking()} >Proceed</button>
        </div>
      </Row>
      <Modal isOpen={isRegister}>
        <div className="midBar-comp-body">
          <ModalHeader closeButton>
            <h4>Login</h4>
            <Button className='btn btn-danger' onClick={() => setRegister(false)}>
              Close
            </Button>
          </ModalHeader>
          <ModalBody>
            <Login3 phone={phone} setRegister={setRegister}></Login3>
          </ModalBody>
        </div>
      </Modal>
      <Modal isOpen={isOtp}>
        <div className="midBar-comp-body">
          <ModalHeader closeButton>
            <h4>Register</h4>
            <Button className='btn btn-danger' onClick={() => setOtp(false)}>
              Close
            </Button>
          </ModalHeader>
          <ModalBody>
            <Otp2 phone={phone} setOtp={setOtp} ></Otp2>
          </ModalBody>
        </div>
      </Modal>
      <Modal isOpen={addNewAddress}>
        <div className="midBar-comp-body">
          <ModalHeader closeButton>
            <h4>Add Address</h4>
            <Button className='btn btn-danger' onClick={() => setNewAddress(false)}>
              Close
            </Button>
          </ModalHeader>
          <ModalBody>
            <Card>
              <CardBody>
                <div className="form">
                  <label for="hadd" class="form-label">Home Address</label>
                  <input class="form-control" id="hadd" type="text" value={updatehomeAddress} onChange={(event) => setHomeAddress(event.target.value)} />
                  <label for="oadd" className="form-label">Office Address</label>
                  <input class="form-control" type="text" id="oadd" value={updateofficeAddress} onChange={(event) => setOfficeAddress(event.target.value)} />
                  <label for="oadd" className="form-label">Other Address</label>
                  <input class="form-control" type="text" id="oadd" value={updateotherAddress} onChange={(event) => setOtherAddress(event.target.value)} />
                </div>
                <br />
                <button className="btn btn-primary" onClick={() => updateAddress()}>Update</button>
              </CardBody>
            </Card>
          </ModalBody>
        </div>
      </Modal>
    </>)
};

export default withRouter(ScheduleBook);

