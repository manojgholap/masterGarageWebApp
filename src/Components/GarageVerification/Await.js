import React, { useState, useEffect } from 'react';
import { CardBody, Input, Label, ButtonGroup, Button, Row, Col, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../PeriodicServices/periodic.css';
import { Line } from 'rc-progress';
import '../GarageBook/Schedule.css';
import '../GarageBook/address.css';
import '../Booking/Payment.css';
import '../GarageVerification/Await.css';
import './Await.css'
import { useDispatch, useSelector } from 'react-redux'
import avtarlogo from '../../Images/avtarlogo.png';
import XL6 from '../../Images/CarGarage/Models/1 Maruti Suzuki/WBG/XL6.png';
import Venue from '../../Images/CarBrand/Models/2 Hyundai/Venue.jpeg';
import timepass from '../../Images/Images/drawable-xxxhdpi/timepass.png';
import { selectVehical, registerVehicalNo, logingarage, calenderTime } from '../../redux/action';
import { withRouter } from "react-router-dom";
import axios from 'axios';

const Await = (props) => {

  const [page, setPage] = useState(0);
  const formTitles = ['E', 'Vehical', 'Service', 'Garage', 'Basic', 'F']
  return <>
    <div className='container-fluid'>
      <Row>
        <Col sm={8} className='linkhead pt-4'>
          <Link className="bookawait"><i className='fa fa-arrow-left'></i></Link>
          <Link className="bookawait1">Booking Confirmation</Link>
        </Col>
        <Col sm={4} className='mt-3'>
          <div className="progressbar112">
            <div className="prog131">
            </div>
            <div className="pagesize111"><li></li><li>|</li><li>|</li><li>|</li><li>|</li><li></li></div>
            <div className="pagesize12">
              <li>E</li>
              <li>Vehical</li>
              <li>Service</li>
              <li>Garage</li>
              <li>Basic</li>
              <li>F</li>
            </div>
          </div>
        </Col>
      </Row>
      <Row className='px-5'>
        <Col lg={8} sm={12} className="mb-2"><SubMid orderId={props.orderId} orderDetail={props.orderDetail}></SubMid></Col>
        <Col lg={4} sm={4}><SubLast></SubLast></Col>
      </Row>
    </div>
  </>
}

const SubMid = (props) => {
  const checkveh = useSelector((state) => state.check.selectVehical);
  const check = useSelector((state) => state.check.registerVehicalNo)
  const check1 = useSelector((state) => state.check.logingarage);
  const cal_data = useSelector((state) => state.check.calenderTime)

  const [orderDetail, setOrderDetails] = useState(props.orderDetail)

  function getDisplayDate(date) {
    let d = new Date(date);
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`
  }
  return (
    <div className="await_cont">
      <div>
        <Row className='m-0 AwaitConfirmbox'>
          <Row className='px-5 my-2'>
            <Col sm={10}>
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
                <g id="Group_30211" data-name="Group 30211" transform="translate(-97 -193)">
                  <circle id="Ellipse_1797" data-name="Ellipse 1797" cx="32" cy="32" r="32" transform="translate(97 193)" fill="#ed7d2b" />
                  <g id="Group_30210" data-name="Group 30210">
                    <g id="Group_30208" data-name="Group 30208">
                      <path id="Path_20957" data-name="Path 20957" d="M128.875,249.75A10.125,10.125,0,1,0,139,259.875,10.138,10.138,0,0,0,128.875,249.75Zm4.172,14.3a1.132,1.132,0,0,1-1.594,0l-3.375-3.375a1.136,1.136,0,0,1-.328-.8v-4.5a1.125,1.125,0,0,1,2.25,0v4.034l3.047,3.047A1.127,1.127,0,0,1,133.047,264.047Z" transform="translate(13 -25)" fill="#fff" />
                    </g>
                    <g id="Group_30209" data-name="Group 30209">
                      <path id="Path_20958" data-name="Path 20958" d="M117.344,255.418c-.084-.1-.151-.2-.241-.293l-2.853-2.851-2.853,2.853a5.578,5.578,0,0,0-1.647,3.976V261h6.806c-.033-.371-.056-.747-.056-1.127A12.278,12.278,0,0,1,117.344,255.418Z" transform="translate(13 -25)" fill="#fff" />
                      <path id="Path_20959" data-name="Path 20959" d="M109.75,238.5v1.9a5.6,5.6,0,0,0,1.647,3.978l2.853,2.853,2.853-2.853a5.589,5.589,0,0,0,1.647-3.978v-1.9Z" transform="translate(13 -25)" fill="#fff" />
                      <path id="Path_20960" data-name="Path 20960" d="M124.375,234h-20.25a1.125,1.125,0,0,0,0,2.25h1.125V240.4a10.056,10.056,0,0,0,2.966,7.159l2.193,2.194-2.193,2.194a10.059,10.059,0,0,0-2.966,7.159v4.147h-1.125a1.125,1.125,0,0,0,0,2.25l13.741,0a12.216,12.216,0,0,1-.887-2.25l-9.479,0V259.1a7.825,7.825,0,0,1,2.306-5.568l2.991-2.988a1.132,1.132,0,0,0,0-1.594l-2.991-2.988A7.824,7.824,0,0,1,107.5,240.4V236.25H121V240.4a7.827,7.827,0,0,1-2.306,5.568l-2.991,2.991a1.129,1.129,0,0,0,0,1.591l2.725,2.722a12.509,12.509,0,0,1,1.386-1.8l-1.723-1.723,2.194-2.2a10.051,10.051,0,0,0,2.965-7.157V236.25h1.125a1.125,1.125,0,0,0,0-2.25Z" transform="translate(13 -25)" fill="#fff" />
                    </g>
                  </g>
                </g>
              </svg>
              Awaiting Confirmation</Col>
            <Col sm={2} className=' py-2' >	<p style={{ textAlign: 'right', color: '#132337', fontSize: '20px', fontWeight: 'bold', marginBottom: '0px' }}>&#8377;{orderDetail.payment}</p>
              <p style={{ paddingLeft: '30px', color: 'red', fontSize: '12px', marginBottom: '0px' }} className="paylater">{orderDetail.paymentStatus}</p></Col>
          </Row>
          <Row className='px-4'>
            <p style={{ color: '#10055A', fontSize: '25px' }}>Appointment Details</p>
          </Row>

          <Row className=' m-0'>
            <Col sm={6} ><p style={{ fontSize: '14px', color: '#2650D8', fontWeight: 'bold', marginBottom: '0px' }}>{orderDetail.mobileNumber}</p>
            </Col>
            <Col sm={6}>
              <Row>
                <Col sm={8}>
                  <p style={{ color: '#10055A', fontSize: '14px', fontWeight: 'bold', marginBottom: '0px' }}>{orderDetail ? orderDetail.isCarSelect.make + ' ' + orderDetail.isCarSelect.car : ''}</p>
                  <p style={{ color: '#10055A', fontSize: '14px', marginBottom: '0px' }}>{orderDetail ? orderDetail.isCarSelect.fueltype : ""}</p>
                </Col>
                <Col sm={4}><img src={`${process.env.REACT_APP_Api_Url}models/${orderDetail ? orderDetail.isCarSelect.make : ""}/${orderDetail ? orderDetail.isCarSelect.car : ""}.jpeg`} style={{ height: '99px', width: '140px' }} alt="error" /></Col>
              </Row>
            </Col>
          </Row> <Row className=' m-0'>
            <Col sm={6}><p style={{ fontSize: '12px', color: '#999999', marginBottom: '0px' }}>Service Scheduled For:</p>
              <p style={{ fontSize: '14px', color: '#5D6186', marginBottom: '0px' }}>{getDisplayDate(orderDetail.date)}</p>
              <p style={{ fontSize: '14px', color: '#5D6186', marginBottom: '0px' }}>{orderDetail.time}</p>
            </Col>
            <Col sm={6}>
              <p style={{ fontSize: '12px', color: '#999999', marginBottom: '0px' }}>Garage Details</p>
              <p style={{ fontSize: '14px', color: '#5D6186', marginBottom: '0px' }}>{orderDetail ? orderDetail.isGarageSelected.garageName : ""}</p>
              <p style={{ fontSize: '14px', color: '#5D6186', marginBottom: '0px' }}>{orderDetail ? orderDetail.isGarageSelected.garageType + " " + orderDetail.isGarageSelected.garageMobileNumber : ""}</p>

            </Col>
          </Row>
          <Row className='py-3  m-0'>
            <Col sm={6}><p style={{ fontSize: '12px', color: '#999999', marginBottom: '0px' }}>Pick Up & Drop Address</p>
              <p style={{ fontSize: '14px', color: '#5D6186', marginBottom: '0px' }}>{orderDetail.address}</p>
            </Col>
            <Col sm={6}>
              <p style={{ fontSize: '12px', color: '#999999', marginBottom: '0px' }}>Garage Address</p>
              {orderDetail && orderDetail.isGarageSelected.garageAddress.map((add) => {
                return (<>
                  <p style={{ fontSize: '14px', color: '#5D6186', marginBottom: '0px' }}>{add.city}</p>
                  <p style={{ fontSize: '14px', color: '#5D6186', marginBottom: '0px' }}>{add.pincode}</p>
                </>)
              })}
            </Col>
          </Row>
          <Row className='px-5'>
            <p style={{ textAlign: 'center', width: '70%', margin: '0px 100px ' }} className='px-5'><hr></hr></p></Row>
          <Row>
            <Col sm={6}>
              <Row>
                <Col sm={2}><div style={{ width: '50px', height: '50px', backgroundColor: '#CBE2FF', borderRadius: '50%', textAlign: 'center' }}><img src={avtarlogo} style={{ width: '30px', height: '30px', margin: '5px' }}></img>
                </div></Col>
                <Col sm={10}><Row>
                  <Col sm={9} className='px-3'><p style={{ color: '#10055A', fontSize: '15px', marginBottom: '0px' }}>Need Help with your Booking?</p>
                    <p style={{ color: '#5D6186', fontSize: '12px' }}>Contact our Customer Support</p></Col>
                  <Col sm={3} >
                    <div><i class=" avtarvthr far fa-comment "> </i></div>
                  </Col>
                  <Row><Col sm={5} style={{ fontSize: '12px', fontWeight: 'bold', color: '#999999' }}>1800-000-0000</Col>
                    <Col sm={7} style={{ fontSize: '12px', color: '#999999' }}>customercare@mastergarage.in</Col>
                  </Row>
                </Row></Col>
              </Row>



            </Col>
            <Col sm={6}>
              <Row>
                <Col sm={9} className='px-3'>
                  <p style={{ color: '#10055A', fontSize: '15px', marginBottom: '0px' }}>We will be happy to hear you !</p>
                  <p style={{ fontSize: '10px', color: '#999999', marginBottom: '0px' }}>Do rate us on App Store and also write us a review,</p>
                  <p style={{ fontSize: '10px', color: '#999999', marginBottom: '0px' }}>If you had already rated us, you can rate us again.</p>
                  <p style={{ fontSize: '10px', color: '#999999', marginBottom: '0px' }}><Link to="#">Write a feedback!</Link></p>
                </Col>
                <Col sm={3}><p style={{ marginBottom: '0px', float: 'right' }}> <svg xmlns="http://www.w3.org/2000/svg" width="107.77" height="100.328" viewBox="0 0 107.77 121.328">
                  <defs>
                    <filter id="Path_12738" x="40.353" y="28.937" width="66.165" height="70.349" filterUnits="userSpaceOnUse">
                      <feOffset dy="3" input="SourceAlpha" />
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feFlood flood-opacity="0.161" />
                      <feComposite operator="in" in2="blur" />
                      <feComposite in="SourceGraphic" />
                    </filter>
                    <filter id="Rectangle_6482" x="0" y="88.249" width="45.268" height="33.08" filterUnits="userSpaceOnUse">
                      <feOffset dy="3" input="SourceAlpha" />
                      <feGaussianBlur stdDeviation="3" result="blur-2" />
                      <feFlood flood-opacity="0.161" />
                      <feComposite operator="in" in2="blur-2" />
                      <feComposite in="SourceGraphic" />
                    </filter>
                  </defs>
                  <g id="Group_30195" data-name="Group 30195" transform="translate(-751.602 -592.826)">
                    <path id="Path_12729" data-name="Path 12729" d="M2447.827,1172.672s-5.125,6.908-8.2,7.349-13.472-1.47-13.472-1.47l-1.025,3.087s12.354,6.136,19.219,3.674,8.6-7.79,8.6-7.79Z" transform="translate(-1637.661 -543.967)" fill="#ff9391" />
                    <g id="Group_16552" data-name="Group 16552" transform="translate(797.92 682.494)">
                      <path id="Path_12730" data-name="Path 12730" d="M2554.949,1569.086l-1.323-8.193h6.221l.286,8.643S2556.313,1570.3,2554.949,1569.086Z" transform="translate(-2546.34 -1560.893)" fill="#f8f9fa" />
                      <path id="Path_12731" data-name="Path 12731" d="M2514.628,1616.185a9.6,9.6,0,0,1-5.173.532s-8.948,4.052-8.6,6.784c0,0-.391.824,3.753.564s10.582-.575,10.753-.675S2517.088,1622.184,2514.628,1616.185Z" transform="translate(-2500.844 -1608.524)" fill="#00155a" />
                      <path id="Path_12732" data-name="Path 12732" d="M2515.363,1657.2c-.171.1-6.611.415-10.755.675s-3.751-.564-3.751-.564a1.431,1.431,0,0,1,.049-.557l15.1-1.32C2515.978,1656.777,2515.458,1657.146,2515.363,1657.2Z" transform="translate(-2500.847 -1642.336)" fill="#fff" />
                    </g>
                    <g id="Group_16553" data-name="Group 16553" transform="translate(844.166 681.391)">
                      <path id="Path_12733" data-name="Path 12733" d="M2842.856,1558.144l-6.99,1.437.6-5.979,8.352-.575S2844.445,1557.248,2842.856,1558.144Z" transform="translate(-2835.866 -1553.014)" fill="#f8f9fa" />
                      <path id="Path_12734" data-name="Path 12734" d="M2887.695,1552.974a9.7,9.7,0,0,1-1.193,5.082s.886,9.812,3.572,10.377c0,0,.647.64,1.759-3.374s2.923-10.226,2.885-10.421S2894.147,1552.605,2887.695,1552.974Z" transform="translate(-2879.512 -1552.925)" fill="#00155a" />
                      <path id="Path_12735" data-name="Path 12735" d="M2913.849,1557.915c.037.195-1.774,6.406-2.885,10.421s-1.759,3.374-1.759,3.374a1.406,1.406,0,0,1-.509-.23l3.7-14.749C2913.649,1557.193,2913.827,1557.807,2913.849,1557.915Z" transform="translate(-2898.643 -1556.203)" fill="#fff" />
                    </g>
                    <path id="Path_12736" data-name="Path 12736" d="M2748.282,1131.916s4.614,9.48,4.321,23.885l-7.761-9.153s-5.858-9.808-5.858-10.69-.438-7.472,0-8.219,2.2-2.8,2.2-2.8Z" transform="translate(-1908.022 -502.844)" fill="#ff7367" />
                    <path id="Path_12737" data-name="Path 12737" d="M2578.095,1062.525s-6.59,4.63-8.237,7.055-4.5,7.827-5.491,8.709l6.865,7.717,3.57-3.858,22.734-4.741,4.393,3.748s8.347-6.725,8.127-6.89-11.578-12.577-14.827-13.615C2590.4,1059.107,2578.095,1062.525,2578.095,1062.525Z" transform="translate(-1757.678 -447.121)" fill="#ff7367" />
                    <g transform="matrix(1, 0, 0, 1, 751.6, 592.83)" filter="url(#Path_12738)">
                      <path id="Path_12738-2" data-name="Path 12738" d="M2538.553,1169.609l4.027,20.431s-17.572,2.058-19.33,7.349,2.489,29.4,2.489,29.4h8.933l-1.734-21.612,15.5-2.641s-6.589,21.019-4.686,24.253,27.237,0,27.237,0v-7.5l-13.179-1.029s10.25-18.226,9.519-26.751-11.044-25.635-11.044-25.635Z" transform="translate(-2473.47 -1130.94)" fill="#2650d8" />
                    </g>
                    <path id="Path_12739" data-name="Path 12739" d="M2653.692,1180.151l13.931-3.924,3.078,11.006-6.061,5.2-7.87-1.274Z" transform="translate(-1834.672 -547.029)" fill="#1737e9" />
                    <path id="Path_12740" data-name="Path 12740" d="M2791.335,1173s3.6,4.444,3.6,5.877-7.907,8.342-12.3,9.224l.879,2.94s18.451-3.16,19.036-12.163c0,0,.866-3.813-5.278-10.818Z" transform="translate(-1945.817 -539.994)" fill="#ff9391" />
                    <g id="Group_16554" data-name="Group 16554" transform="translate(825.007 643.805)">
                      <path id="Path_15088" data-name="Path 15088" d="M.217.041l2.169,0L2.362,12.566l-2.169,0Z" transform="matrix(-0.687, 0.727, -0.727, -0.687, 14.24, 11.858)" fill="#9cc0e9" />
                      <path id="Path_12741" data-name="Path 12741" d="M2697.357,1283.09l2.47,2.343,1.081-1.149-2.447-2.321a2.634,2.634,0,1,1-1.1,1.127Z" transform="translate(-2697.071 -1281.655)" fill="#9cc0e9" />
                      <path id="Path_12742" data-name="Path 12742" d="M2784.251,1365.219l-2.471-2.343,1.081-1.149,2.448,2.322a2.615,2.615,0,1,0-1.058,1.17Z" transform="translate(-2768.82 -1349.42)" fill="#9cc0e9" />
                    </g>
                    <g id="Group_16556" data-name="Group 16556" transform="translate(808.975 592.826)">
                      <g id="Group_16555" data-name="Group 16555" transform="translate(3.619 1.063)">
                        <path id="Path_12743" data-name="Path 12743" d="M2608.522,1000.982s-.7-.711-1.066-.292c-.92,1.07.387,1.945,1.163,2.043Z" transform="translate(-2607.141 -989.588)" fill="#ff6868" />
                        <path id="Path_12744" data-name="Path 12744" d="M2609.874,929.8h.007c-.021-.085-.041-.171-.059-.258a6.8,6.8,0,1,1,13.291.164c-.305,1.688-.582,3.136-.935,4.364a9.776,9.776,0,0,0,.286,6.176l.591,1.553c-3.658,3.01-5.931,1.35-5.931,1.35l-.664-2.935a.755.755,0,0,0-.839-.58h-.007C2610.47,940.325,2610.332,932.1,2609.874,929.8Z" transform="translate(-2609.338 -921.386)" fill="#ff9391" />
                        <path id="Path_12745" data-name="Path 12745" d="M2665.745,992.8a.633.633,0,1,1,.744.5A.635.635,0,0,1,2665.745,992.8Z" transform="translate(-2657.645 -982.249)" fill="#01011c" />
                        <path id="Path_12746" data-name="Path 12746" d="M2624.217,992.8a.633.633,0,1,1,.744.5A.634.634,0,0,1,2624.217,992.8Z" transform="translate(-2621.849 -982.247)" fill="#01011c" />
                        <path id="Path_12747" data-name="Path 12747" d="M2663.523,979.657a.368.368,0,0,0,.176-.089.373.373,0,0,0,.024-.525,1.982,1.982,0,0,0-2.78-.092.372.372,0,0,0,.456.587,1.249,1.249,0,0,1,1.776.005A.368.368,0,0,0,2663.523,979.657Z" transform="translate(-2653.394 -970.526)" fill="#01011c" />
                        <path id="Path_12748" data-name="Path 12748" d="M2619.995,981.064a.366.366,0,0,0,.175-.089.373.373,0,0,0,.025-.526,1.981,1.981,0,0,0-2.779-.092.373.373,0,0,0-.064.522.369.369,0,0,0,.52.065,1.248,1.248,0,0,1,1.776.005A.371.371,0,0,0,2619.995,981.064Z" transform="translate(-2615.875 -971.737)" fill="#01011c" />
                        <path id="Path_12749" data-name="Path 12749" d="M2686.847,958.432l-.906,4.888h-1.26l-1.89-5.69Z" transform="translate(-2672.349 -952.607)" fill="#040156" />
                        <path id="Path_12750" data-name="Path 12750" d="M2694.222,991.82a1.013,1.013,0,0,1,.425-.576,1.7,1.7,0,0,1,1.864-.2c.982.657-.231,3.166-2.073,2.41C2694.437,993.457,2693.879,993.084,2694.222,991.82Z" transform="translate(-2682.105 -981.214)" fill="#ff9391" />
                        <path id="Path_12751" data-name="Path 12751" d="M2641.74,998.927a1.263,1.263,0,0,0,1.125-.261.11.11,0,0,0-.151-.161,1.029,1.029,0,0,1-1.241.069c-.113-.069-.177-.13-.191-.182-.018-.074.052-.187.147-.345a3.253,3.253,0,0,0,.509-2.152.11.11,0,1,0-.219.016,3.027,3.027,0,0,1-.476,2.021c-.12.2-.214.349-.174.512a.546.546,0,0,0,.291.319A1.449,1.449,0,0,0,2641.74,998.927Z" transform="translate(-2636.378 -985.484)" fill="#ff6868" />
                        <path id="Path_12752" data-name="Path 12752" d="M2639.4,1022.978a9.386,9.386,0,0,1-4.22.393s.788,1.873,2.289,1.733S2639.4,1022.978,2639.4,1022.978Z" transform="translate(-2631.313 -1008.902)" fill="#fff" />
                        <path id="Path_12753" data-name="Path 12753" d="M2609.611,959.6s-.822.868-.249,4.974c0,0-.92-4.5-.518-5.1S2609.611,959.6,2609.611,959.6Z" transform="translate(-2608.521 -953.998)" fill="#040156" />
                      </g>
                      <path id="Path_12754" data-name="Path 12754" d="M2610.107,919.473s.646-5.842,7.65-5.755,6.438,6.886,6.438,6.886-4.933-.959-5.926-1.028S2610.107,919.473,2610.107,919.473Z" transform="translate(-2606.079 -913.717)" fill="#ff564f" />
                      <path id="Path_12755" data-name="Path 12755" d="M2595.617,946.739s-8.35-3.393-13.057-1.1,2.247,2.7,2.247,2.7S2585.133,946.21,2595.617,946.739Z" transform="translate(-2580.925 -940.53)" fill="#ff7367" />
                    </g>
                    <path id="Path_12756" data-name="Path 12756" d="M2742.481,1306.532s-4.216.233-5.482.422-2.633-.572-2.777.159,2.237,1.364,2.237,1.364-2.119,1.519-2.841,1.887-.6.809-.077.809a12.976,12.976,0,0,0,2.029-.362s-1.5.577-1.4,1.13,2.691-.062,2.691-.062-1.631.674-1.727,1.03-.025,1.1,1.181.661,1.4-.528,1.4-.528a4.965,4.965,0,0,0-.972.778c-.171.266,0,1.009,1.713.165a14.474,14.474,0,0,0,5.314-4.528Z" transform="translate(-1903.13 -659.279)" fill="#ff9391" />
                    <path id="Path_12757" data-name="Path 12757" d="M2629.67,1107.249s-1.34-8.884-1.193-12.665l1.8-1.443s.653,9.387,2.12,13.554Z" transform="translate(-1812.929 -475.455)" fill="#2650d8" />
                    <path id="Path_12758" data-name="Path 12758" d="M2738.242,1075.15s-2.53-9.658-1.591-14.592l-2.725.261s-.18,10.129,1.852,15.971Z" transform="translate(-1903.828 -447.387)" fill="#2650d8" />
                    <g id="Group_16557" data-name="Group 16557" transform="translate(759.625 679.715)">
                      <path id="Path_12759" data-name="Path 12759" d="M2274.211,1550.181a.61.61,0,0,0,.61-.612v-7.513h12.98v7.065a.61.61,0,1,0,1.221,0v-7.678a.611.611,0,0,0-.61-.612h-14.2a.612.612,0,0,0-.611.612v8.125A.611.611,0,0,0,2274.211,1550.181Z" transform="translate(-2266.672 -1540.831)" fill="#5d6186" />
                      <g transform="matrix(1, 0, 0, 1, -8.02, -86.89)" filter="url(#Rectangle_6482)">
                        <path id="Rectangle_6482-2" data-name="Rectangle 6482" d="M1.714,0H25.555a1.713,1.713,0,0,1,1.713,1.713V15.08a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V1.714A1.714,1.714,0,0,1,1.714,0Z" transform="translate(36.27 109.33) rotate(180)" fill="#2650d8" />
                      </g>
                      <rect id="Rectangle_6483" data-name="Rectangle 6483" width="29.223" height="3.099" transform="translate(29.223 9.839) rotate(180)" fill="#3700b3" />
                      <rect id="Rectangle_6484" data-name="Rectangle 6484" width="9.947" height="1.922" transform="translate(19.611 10.934) rotate(180)" fill="#3700b3" />
                    </g>
                    <path id="Path_12760" data-name="Path 12760" d="M2367.438,1182.634a35.117,35.117,0,0,0-3.169-3.491c-1-.8-1.377-2.317-2.006-1.925s.532,2.566.532,2.566-2.547-.517-3.306-.8-2.24-.43-2.486.112,3.49,1.622,3.49,1.622-3.235-.6-3.569-.149,3.672,1.822,3.672,1.822a21.489,21.489,0,0,0-3.744-.638c-.324.172-.118.594,1.024,1.175a12.157,12.157,0,0,0,2.456.88,27.443,27.443,0,0,0-2.754-.332c-.31.057-.7.36,1.086,1.043s5.874,1.526,8.089,1.115Z" transform="translate(-1578.689 -547.828)" fill="#ff9391" />
                  </g>
                </svg></p></Col>
              </Row>


            </Col>
          </Row>


        </Row>
      </div>
    </div>
  )
};

const SubLast = ({ done }) => {

  const [style, setStyle] = React.useState({});

  setInterval(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`
    }

    setStyle(newStyle);
  }, 3000);

  return (
    <div className="await_cont1">

      <div class="boxlast" style={{ textAlign: 'center' }}>

        <Row className='m-0 p-3' >
          <h6>Don't worry you are doing good</h6>
          <img src={timepass} style={{ float: 'center', width: '440px', height: '280px', padding: '30px' }}></img>
          <p>Garage will soon accept</p>
          <p>your booking</p>
          <div className="await_main">
            <div className="await_sub">
            </div>
          </div>
          <small>Awaiting Garage Confirmation</small>
        </Row>
      </div>
    </div>
  )
};

export default withRouter(Await);
