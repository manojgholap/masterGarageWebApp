import React, { useState, useEffect } from 'react';
import { CardBody, Input, Label, ButtonGroup, Button, Row, Col, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import './BookGarage.css';
import Audi17 from '../../Images/CarGarage/Manufacturer 200 X 200/Audi17.jpeg';
import Venue from '../../Images/CarBrand/Models/2 Hyundai/Venue.jpeg';
import FirstChoice from '../../Images/ImagesAll/drawable-xxxhdpi/FirstChoice.png';
import Cartisan from '../../Images/ImagesAll/drawable-xxxhdpi/Cartisan.png';
import Castrol from '../../Images/ImagesAll/drawable-xxxhdpi/Castrol.png';
import BKakaako from '../../Images/ImagesAll/drawable-xxxhdpi/BKakaako.png';
import coupan from '../../Images/drawable-xxxhdpi/coupan.png';


import BasicService from '../../Images/BasicService.png';
import StarterMotor from '../../Images/StarterMotor.png';
import CarInspection from '../../Images/CarInspection.png';
import CarFluid from '../../Images/CarFluid.png';
import check from '../../Images/drawable-xxxhdpi/check.png';
import systemupdate from '../../Images/drawable-xxxhdpi/system-update.png';


import EngineScanning from '../../Images/EngineScanning.png';
import PS1 from '../../Images/ImagesAll/drawable-xxxhdpi/PS1.png';
import { useSelector, useDispatch } from 'react-redux';
import { selectVehical, getCartTotal } from '../../redux/action';
import { withRouter } from "react-router-dom";
import SubLast from '../PeriodicServices/SubLast';
import AllGarages from './AllGarages'
import ScheduleBook from './ScheduleBook';


const BookGarage = (props) => {
  const [page, setPage] = useState(0);
  const [isGarageSelected, setGarageSelected] = useState(props.isGarageSelected);
  const [isBooking, setbooking] = useState(false);
  const [amount, setAmout] = useState('')
  const formTitles = ['E', 'Vehical', 'Service', 'Garage', 'Basic', 'F']

  useEffect(() => {
    setGarageSelected(isGarageSelected)
  }, [isGarageSelected])

  return <>
    {isBooking ?
      <ScheduleBook isGarageSelected={isGarageSelected} isServiceSelect={props.isServiceSelect} isCarSelect={props.isCarSelect} amount={amount}></ScheduleBook> :
      <div className='container-fluid px-4'>
        <Row>
          <Col onSubmit={8} className='pt-4'>
            <Link className="bookgarage"><i className='fa fa-arrow-left' onClick={() => props.setGarageSelected('')}></i></Link>

          </Col>
          <Col sm={4} className='mt-3'>
            <div className="progressbar">
              <div className="prog13">
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
          </Col>
        </Row>
        <Row className='p-4'>
          <Col lg={8} sm={12}>
            <SubMid props={props} isGarageSelected={isGarageSelected} setbooking={setbooking} setAmout={setAmout}></SubMid>
          </Col>
          <Col lg={4} sm={12} >
            <AllGarages setGarageSelected={setGarageSelected} ></AllGarages>
          </Col>
        </Row>
      </div>}
  </>
};
const SubMid = (props) => {

  const [cartcount, setCartCount] = useState(0)

  const dataitem = useSelector((state) => state.check.selectVehical);
  const totalAmount = useSelector((state) => state.check.totalAmount)
  const cart = useSelector((state) => state.check.Cart1)
  const dispatch = useDispatch()

  function setGarageBooked() {
    props.setbooking(true)
    props.setAmout(getPaymentValue())
  }
  function getPaymentValue() {
    let payment = 0
    props.props.isServiceSelect.forEach((service) => {
      payment = parseInt(payment) + parseInt(service.costs)
    })
    return payment
  }
  console.log(props)

  return (
    <div className="book_garage">

      <Row >
        <div className='BookGarageRow1BG'>
          <Row className='px-3'>

            <Col sm={2} className='py-2'><img src={FirstChoice} style={{ width: '94px', height: '89px' }}></img></Col>
            <Col sm={10} className='py-2'>
              <Row>
                <Col sm={8}>
                  <p className='poppins22B'>{props.isGarageSelected.garageName || ""}</p>
                  <p className='poppins15L'> <svg xmlns="http://www.w3.org/2000/svg" width="11.645" height="13.775" viewBox="0 0 11.645 13.775">
                    <path id="Path_22578" data-name="Path 22578" d="M116.875,45.369a5.826,5.826,0,0,0-8.24,8.24l3.618,3.625a.69.69,0,0,0,.224.15.683.683,0,0,0,.264.053.686.686,0,0,0,.488-.2l3.646-3.66a5.8,5.8,0,0,0,0-8.205Zm-.982,7.223-3.138,3.152-3.139-3.152a4.436,4.436,0,1,1,6.276,0Zm-5.2-5.212a2.962,2.962,0,1,0,5.053,2.129,2.906,2.906,0,0,0-.865-2.094,2.952,2.952,0,0,0-4.188-.034Zm3.22,3.213a.661.661,0,1,0-.035,0Z" transform="translate(-106.929 -43.662)" fill="#5d6186" />
                  </svg>
                    {props.isGarageSelected.garageAddress[0].city + " " + props.isGarageSelected.garageAddress[0].pincode || ""}
                  </p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="103" height="15" viewBox="0 0 103 15">
                    <g id="Group_28794" data-name="Group 28794" transform="translate(0.005)">
                      <path id="Polygon_59" data-name="Polygon 59" d="M6.6,1.916a1,1,0,0,1,1.809,0L9.6,4.447a1,1,0,0,0,.751.561l2.738.424a1,1,0,0,1,.564,1.685l-2.039,2.1a1,1,0,0,0-.27.856l.468,2.9a1,1,0,0,1-1.469,1.035l-2.359-1.3a1,1,0,0,0-.964,0l-2.359,1.3A1,1,0,0,1,3.19,12.978l.468-2.9a1,1,0,0,0-.27-.856l-2.039-2.1a1,1,0,0,1,.564-1.685L4.65,5.008A1,1,0,0,0,5.4,4.447Z" transform="translate(-0.005)" fill="#f90" />
                      <path id="Polygon_60" data-name="Polygon 60" d="M6.6,1.916a1,1,0,0,1,1.809,0L9.6,4.447a1,1,0,0,0,.751.561l2.738.424a1,1,0,0,1,.564,1.685l-2.039,2.1a1,1,0,0,0-.27.856l.468,2.9a1,1,0,0,1-1.469,1.035l-2.359-1.3a1,1,0,0,0-.964,0l-2.359,1.3A1,1,0,0,1,3.19,12.978l.468-2.9a1,1,0,0,0-.27-.856l-2.039-2.1a1,1,0,0,1,.564-1.685L4.65,5.008A1,1,0,0,0,5.4,4.447Z" transform="translate(21.995)" fill="#f90" />
                      <path id="Polygon_61" data-name="Polygon 61" d="M6.6,1.916a1,1,0,0,1,1.809,0L9.6,4.447a1,1,0,0,0,.751.561l2.738.424a1,1,0,0,1,.564,1.685l-2.039,2.1a1,1,0,0,0-.27.856l.468,2.9a1,1,0,0,1-1.469,1.035l-2.359-1.3a1,1,0,0,0-.964,0l-2.359,1.3A1,1,0,0,1,3.19,12.978l.468-2.9a1,1,0,0,0-.27-.856l-2.039-2.1a1,1,0,0,1,.564-1.685L4.65,5.008A1,1,0,0,0,5.4,4.447Z" transform="translate(65.995)" fill="#f90" />
                      <path id="Polygon_63" data-name="Polygon 63" d="M6.6,1.916a1,1,0,0,1,1.809,0L9.6,4.447a1,1,0,0,0,.751.561l2.738.424a1,1,0,0,1,.564,1.685l-2.039,2.1a1,1,0,0,0-.27.856l.468,2.9a1,1,0,0,1-1.469,1.035l-2.359-1.3a1,1,0,0,0-.964,0l-2.359,1.3A1,1,0,0,1,3.19,12.978l.468-2.9a1,1,0,0,0-.27-.856l-2.039-2.1a1,1,0,0,1,.564-1.685L4.65,5.008A1,1,0,0,0,5.4,4.447Z" transform="translate(87.995)" fill="#f90" />
                      <path id="Polygon_62" data-name="Polygon 62" d="M6.6,1.916a1,1,0,0,1,1.809,0L9.6,4.447a1,1,0,0,0,.751.561l2.738.424a1,1,0,0,1,.564,1.685l-2.039,2.1a1,1,0,0,0-.27.856l.468,2.9a1,1,0,0,1-1.469,1.035l-2.359-1.3a1,1,0,0,0-.964,0l-2.359,1.3A1,1,0,0,1,3.19,12.978l.468-2.9a1,1,0,0,0-.27-.856l-2.039-2.1a1,1,0,0,1,.564-1.685L4.65,5.008A1,1,0,0,0,5.4,4.447Z" transform="translate(43.995)" fill="#f90" />
                    </g>
                  </svg>

                </Col>
                <Col sm={4} style={{ float: 'right' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68">
                    <defs>
                      <filter id="Ellipse_1542" x="0" y="0" width="68" height="68" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha" />
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feFlood flood-opacity="0.161" />
                        <feComposite operator="in" in2="blur" />
                        <feComposite in="SourceGraphic" />
                      </filter>
                    </defs>
                    <g id="Group_26144" data-name="Group 26144" transform="translate(-1314 -503)">
                      <g transform="matrix(1, 0, 0, 1, 1314, 503)" filter="url(#Ellipse_1542)">
                        <circle id="Ellipse_1542-2" data-name="Ellipse 1542" cx="25" cy="25" r="25" transform="translate(9 6)" fill="#53bd8c" />
                      </g>
                      <g id="telephone-2" transform="translate(1336.96 522.919)">
                        <path id="Path_1428" data-name="Path 1428" d="M5.386,14.733a23.514,23.514,0,0,0,7.821,6.127,12.173,12.173,0,0,0,4.377,1.3c.106,0,.207.009.312.009a3.624,3.624,0,0,0,2.811-1.208.1.1,0,0,0,.018-.023,11.832,11.832,0,0,1,.886-.919c.216-.207.436-.423.648-.643a2.218,2.218,0,0,0-.009-3.3l-2.76-2.76a2.234,2.234,0,0,0-1.617-.744,2.309,2.309,0,0,0-1.635.739l-1.644,1.644c-.152-.087-.308-.165-.455-.239a5.679,5.679,0,0,1-.505-.276A17.4,17.4,0,0,1,9.478,10.65,10.02,10.02,0,0,1,8.073,8.409c.432-.39.836-.8,1.226-1.2.138-.142.28-.285.423-.427a2.354,2.354,0,0,0,.762-1.653,2.336,2.336,0,0,0-.762-1.653L8.353,2.108c-.161-.161-.312-.317-.468-.478-.3-.312-.62-.634-.932-.923A2.29,2.29,0,0,0,5.336,0,2.357,2.357,0,0,0,3.7.712L1.983,2.429A3.529,3.529,0,0,0,.931,4.689,8.5,8.5,0,0,0,1.57,8.363,21.375,21.375,0,0,0,5.386,14.733ZM2.052,4.786a2.429,2.429,0,0,1,.73-1.561L4.49,1.516a1.237,1.237,0,0,1,.845-.39,1.173,1.173,0,0,1,.827.4c.308.285.6.583.909.9.156.161.317.321.478.487L8.918,4.28a1.247,1.247,0,0,1,.432.859A1.247,1.247,0,0,1,8.918,6c-.142.142-.285.289-.427.432-.427.432-.827.84-1.268,1.231L7.2,7.683A.9.9,0,0,0,6.97,8.7c0,.014.009.023.014.037A10.809,10.809,0,0,0,8.6,11.362a18.365,18.365,0,0,0,4.427,4.032,6.574,6.574,0,0,0,.606.331,5.681,5.681,0,0,1,.505.276l.051.028a.96.96,0,0,0,.445.115.974.974,0,0,0,.684-.312l1.718-1.718a1.215,1.215,0,0,1,.84-.409,1.153,1.153,0,0,1,.813.409l2.769,2.765a1.108,1.108,0,0,1-.014,1.731c-.193.207-.395.4-.611.611a13.226,13.226,0,0,0-.96,1,2.521,2.521,0,0,1-1.97.836c-.078,0-.161,0-.239-.009A11.059,11.059,0,0,1,13.7,19.859a22.338,22.338,0,0,1-7.445-5.833A20.459,20.459,0,0,1,2.63,7.987,7.407,7.407,0,0,1,2.052,4.786Z" transform="translate(-0.912 0)" fill="#fff" stroke="#fff" stroke-width="1" />
                      </g>
                    </g>
                  </svg>

                  <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68">
                    <defs>
                      <filter id="Ellipse_1931" x="0" y="0" width="68" height="68" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha" />
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feFlood flood-opacity="0.161" />
                        <feComposite operator="in" in2="blur" />
                        <feComposite in="SourceGraphic" />
                      </filter>
                    </defs>
                    <g id="Group_26145" data-name="Group 26145" transform="translate(-728.973 -111)">
                      <g transform="matrix(1, 0, 0, 1, 728.97, 111)" filter="url(#Ellipse_1931)">
                        <circle id="Ellipse_1931-2" data-name="Ellipse 1931" cx="25" cy="25" r="25" transform="translate(9 6)" fill="#53bd8c" />
                      </g>
                      <path id="Path_22984" data-name="Path 22984" d="M56.129,36.978a9.837,9.837,0,0,1-1.056,4.461,9.978,9.978,0,0,1-8.921,5.517A9.835,9.835,0,0,1,41.691,45.9L35,48.129l2.23-6.691a9.837,9.837,0,0,1-1.056-4.461,9.978,9.978,0,0,1,5.517-8.921A9.838,9.838,0,0,1,46.151,27h.587a9.954,9.954,0,0,1,9.391,9.391Z" transform="translate(717.408 104.436)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    </g>
                  </svg>

                </Col>
              </Row>
            </Col>
            <Row className='py-2 serviceestimate'>
              {props.isGarageSelected.garageAmenities?.map((service) => {
                return (
                  <>
                    <Col sm={4}>
                      <p className='poppins15R'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18.722" className='mx-2' height="22.081" viewBox="0 0 18.722 22.081">
                          <g id="Group_29619" data-name="Group 29619" transform="translate(0.5 0.5)">
                            <path id="Path_12817" data-name="Path 12817" d="M180.46,67.276l0-1.221L180,65.847a19.345,19.345,0,0,0-16.792,0l-.458.208-.006,2.347c0,3.818.165,7.785,2.128,10.66a19.3,19.3,0,0,0,6.355,5.668l.377.209.378-.209a19.3,19.3,0,0,0,6.353-5.668c1.965-2.876,2.131-6.842,2.131-10.659Z" transform="translate(-162.741 -63.93)" fill="none" stroke="#00155a" stroke-width="1" />
                            <g id="Group_16589" data-name="Group 16589" transform="translate(4.461 5.79)">
                              <g id="Group_16588" data-name="Group 16588">
                                <path id="Path_12819" data-name="Path 12819" d="M178.99,75l-3.754,4.775c-.713-.747-1.49-1.558-1.49-1.558a1.237,1.237,0,0,0-1.783,1.715l2.471,2.584a1.232,1.232,0,0,0,1.861-.089l4.633-5.888A1.237,1.237,0,0,0,178.99,75Z" transform="translate(-171.62 -74.534)" fill="#00155a" />
                              </g>
                            </g>
                          </g>
                        </svg>
                        {service || ""}
                      </p>
                      <br></br>
                      <br></br>
                      <br></br>
                    </Col>
                  </>
                )
              })}
            </Row>
          </Row>
        </div>
        <Row className='py-3'>
          <Col sm={6}><p style={{ fontSize: '20px', fontWeight: 'bolder', color: '#00155A' }}>Itemizied Estimate ({props.props.isServiceSelect.length || 0})</p></Col>
          <Col sm={6}><p style={{ float: 'right', color: 'grey' }}>{props.props.isCarSelect.make + " " + props.props.isCarSelect.car}</p></Col>
        </Row>
        <div className=''>

          <Row className='px-4 pt-2 SecondBoxBorder'>
            {props.props.isServiceSelect && props.props.isServiceSelect.map((service) => {
              return (
                <><img src={service.imageUri} style={{ width: '120px', borderRadius: '30%', float: 'Left', height: '100px' }}></img>
                  <Col sm={8} className='p-0'><p className='poppins18M'>{service.package_name}</p>
                    <p className='poppins12light'>{service.months_or_kms}</p>
                    {/* <p  className='poppins12light'>Sercurity Warrenty</p>  */}
                  </Col>
                  <Col sm={2} className='py-2'>
                    <i class="far fa-times-circle" style={{ color: 'red', float: 'right', fontSize: '18px' }}></i><br></br>
                    <p className='OpenSans20B py-2'>&#8377; {service.costs}</p>
                  </Col></>
              )
            })
            }

          </Row>


          <Row className='px-4 py-2 SecondBoxBorder'>

            <Col sm={6}><h5 className='poppins22B1 p-0'>Itemizied Total</h5>
              <p className='poppins12light'>Taxes will be calculated at the time of checkout</p> </Col>
            <Col sm={6}>
              <h5 className='OpenSans221' style={{ float: 'right' }}>&#8377;{getPaymentValue()}</h5>
            </Col>
            <Row className='pt-4'><button style={{ backgroundColor: '#2650D8', border: 'none', height: '50px', borderRadius: '10px', width: '100%', color: '#fff', fontSize: '20px' }} onClick={() => setGarageBooked(props.isGarageSelected)}>BOOK GARAGE</button></Row>
            <Row style={{ fontSize: '12px', color: 'grey', paddingBottom: '30px' }}>
              *The estimates are based on the information submitted. Quotes are subject to change upon further inspection. Any additional services incurred will be charged extra.
            </Row>
          </Row>
        </div>
        <div className="allmain_cont">
          <h5>Services you may like to add</h5>
          <div className="service_main_cont">
            <div className="allside">
              <div className="sevice_instruction">
                <div className="carname"><img src={CarFluid} alt="error" /></div>
                <div className="moreservice">
                  <h6>Car Fluid Check</h6>
                  <p><img src={systemupdate} alt="error" />On Leakage or Check Lights</p>
                  <p><img src={check} alt="error" /> 5 Points Checklist</p>
                </div>
              </div>
              <div className="sevice_instruction">
                <Link>Show More</Link>
                <button>Add Service</button>
              </div>
            </div>
            <div className="allside">
              <div className="sevice_instruction">
                <div className="carname"><img src={CarInspection} alt="error" /></div>
                <div className="moreservice">
                  <h6>Car Diagnostics</h6>
                  <p><img src={systemupdate} alt="error" />On Leakage or Check Lights</p>
                  <p><img src={check} alt="error" /> 5 Points Checklist</p>
                </div>
              </div>
              <div className="sevice_instruction">
                <Link>Show More</Link>
                <button>Add Service</button>
              </div>
            </div>
            <div className="allside">
              <div className="sevice_instruction">
                <div className="carname"><img src={StarterMotor} alt="error" /></div>
                <div className="moreservice">
                  <h6>Starter Motor Repair</h6>
                  <p><img src={systemupdate} alt="error" />On Leakage or Check Lights</p>
                  <p><img src={check} alt="error" /> 5 Points Checklist</p>
                </div>
              </div>
              <div className="sevice_instruction">
                <Link>Show More</Link>
                <button>Add Service</button>
              </div>
            </div>
          </div>
        </div>

        <Row className='py-3'>
          <p style={{ fontSize: '20px', fontWeight: 'bolder', color: '#00155A' }}>Offers Applicable</p>
          <div class="row gx-3">
            <div class="col">
              <div class=" py-3 offerbox"><p className='poppins15B'> <img src={coupan} alt="error" />
                Code : HAPPY 100</p>
                <p className='poppins12light px-3'>Get Flat 100 off on first booking</p>
                <p className='poppins8 px-3'><Link to="" style={{ color: '#999999' }}>View Details</Link></p></div>
            </div>
            <div class="col">
              <div class=" py-3 offerbox"><p className='poppins15B'> <img src={coupan} alt="error" />
                Code : MG500</p>
                <p className='poppins12light px-3'>Get Flat 100 off on first booking</p>
                <p className='poppins8 px-3'><Link to="" style={{ color: '#999999' }}>View Details</Link></p></div>
            </div>
            <div class="col">
              <div class=" py-3 offerbox"><p className='poppins15B'> <img src={coupan} alt="error" />
                Code : HAPPY 100</p>
                <p className='poppins12light px-3'>Get Flat 100 off on first booking</p>
                <p className='poppins8 px-3'><Link to="" style={{ color: '#999999' }}>View Details</Link></p></div>
            </div>
          </div>






        </Row>
        <Row className='py-3 book_garage1'>
          <p style={{ fontSize: '20px', fontWeight: 'bolder', color: '#00155A' }}>Service Instructions for Garage</p>
          <div style={{ backgroundColor: '#F8F9FA', border: '1px solid #EAEAEA', borderRadius: '10px', height: '127px' }}>
            <p className='poppins15R p-3'>Brake aren't functioning properly, problem with the engine (heats up very quickly).  The warning
              light is continuously blinking.
            </p>
          </div>
        </Row>
      </Row>
      <div className=' footerbg m-0 mt-3'>
        <p className='poppins35B' style={{ color: '#10055A', fontWeight: 'bolder' }}>Peace of Mind Guarantee Program</p>
        <Row>
          <Col sm={5}>
            <ul className='timepasslist'>
              <li className='timepassli'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" className='mx-2' viewBox="0 0 25 25">
                <path id="Path_30204" data-name="Path 30204" d="M96.5,207A12.5,12.5,0,1,0,109,219.5,12.514,12.514,0,0,0,96.5,207Zm5.765,10.574L95.7,224.137a.392.392,0,0,1-.539,0l-4.4-4.4a.385.385,0,0,1,0-.54l.563-.562a.384.384,0,0,1,.539,0l3.433,3.432a.193.193,0,0,0,.276,0l5.593-5.593a.392.392,0,0,1,.539,0l.563.564a.381.381,0,0,1,0,.539Z" transform="translate(-84 -207)" fill="#53bd8c" />
              </svg>
                Competitive Pricing</li>
              <li className='timepassli'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" className='mx-2' viewBox="0 0 25 25">
                <path id="Path_30204" data-name="Path 30204" d="M96.5,207A12.5,12.5,0,1,0,109,219.5,12.514,12.514,0,0,0,96.5,207Zm5.765,10.574L95.7,224.137a.392.392,0,0,1-.539,0l-4.4-4.4a.385.385,0,0,1,0-.54l.563-.562a.384.384,0,0,1,.539,0l3.433,3.432a.193.193,0,0,0,.276,0l5.593-5.593a.392.392,0,0,1,.539,0l.563.564a.381.381,0,0,1,0,.539Z" transform="translate(-84 -207)" fill="#53bd8c" />
              </svg>
                Secure Payments</li>
              <li className='timepassli'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" className='mx-2' viewBox="0 0 25 25">
                <path id="Path_30204" data-name="Path 30204" d="M96.5,207A12.5,12.5,0,1,0,109,219.5,12.514,12.514,0,0,0,96.5,207Zm5.765,10.574L95.7,224.137a.392.392,0,0,1-.539,0l-4.4-4.4a.385.385,0,0,1,0-.54l.563-.562a.384.384,0,0,1,.539,0l3.433,3.432a.193.193,0,0,0,.276,0l5.593-5.593a.392.392,0,0,1,.539,0l.563.564a.381.381,0,0,1,0,.539Z" transform="translate(-84 -207)" fill="#53bd8c" />
              </svg>
                High Quality Service</li>
              <li className='timepassli'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" className='mx-2' viewBox="0 0 25 25">
                <path id="Path_30204" data-name="Path 30204" d="M96.5,207A12.5,12.5,0,1,0,109,219.5,12.514,12.514,0,0,0,96.5,207Zm5.765,10.574L95.7,224.137a.392.392,0,0,1-.539,0l-4.4-4.4a.385.385,0,0,1,0-.54l.563-.562a.384.384,0,0,1,.539,0l3.433,3.432a.193.193,0,0,0,.276,0l5.593-5.593a.392.392,0,0,1,.539,0l.563.564a.381.381,0,0,1,0,.539Z" transform="translate(-84 -207)" fill="#53bd8c" />
              </svg>
                &#8377;25000 Warrenty</li>
            </ul>
            <span style={{ color: '#2650D8', fontSize: '18px' }}>Know more    <svg id="Group_20505" data-name="Group 20505" xmlns="http://www.w3.org/2000/svg" width="21.194" height="21.194" className='mx-2' viewBox="0 0 21.194 21.194">
              <circle id="Ellipse_23" data-name="Ellipse 23" cx="10.597" cy="10.597" r="10.597" transform="translate(0)" fill="#2650d8" />
              <path id="icon-arrow-left" d="M4.236,11.714l.494.494a.532.532,0,0,0,.754,0L9.81,7.884a.532.532,0,0,0,0-.754L5.484,2.8a.532.532,0,0,0-.754,0L4.236,3.3a.535.535,0,0,0,.009.763L6.926,6.616H.531A.533.533,0,0,0,0,7.15v.712A.533.533,0,0,0,.531,8.4h6.4L4.245,10.951A.531.531,0,0,0,4.236,11.714Z" transform="translate(5.615 3.091)" fill="#fff" />
            </svg>
            </span></Col>
          <Col sm={7} ><img src={PS1} style={{ width: '357px', height: '252px' }} alt="error" /></Col>
        </Row>

      </div>
    </div>
  )
};


export default withRouter(BookGarage);
