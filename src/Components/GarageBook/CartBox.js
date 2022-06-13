import React, { useState, useEffect } from 'react';
import { Button, Row, Col, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../PeriodicServices/periodic.css';
//import './LoginBook.css';
import FirstChoice from '../../Images/ImagesAll/drawable-xxxhdpi/FirstChoice.png';
import { useSelector, useDispatch } from 'react-redux';
import { selectVehical, getCartTotal, addItem, bannerClose, isInCart } from '../../redux/action';
import { withRouter } from "react-router-dom";



const CartBox = (props) => {
  const check = useSelector((state) => state.check)
  const dataitem = useSelector((state) => state.check.selectVehical);
  const addCartData = useSelector((state) => state.check.addItem);
  const bannerdata = useSelector((state) => state.check.bannerClose)
  const usedisatch = useDispatch()


  const [totalamount, setTotalAmount] = useState("")

  console.log(addCartData);
  //add to cart 
  const AddToCart = (id) => {
    addCartData(id);
    setTimeout(() => {
      bannerdata();
    }, 2000)
  }
  return (
    <div class="boxlast">
      <Row className=' m-0 p-1' style={{ backgroundColor: '#F8F9FA', borderRadius: '10px 10px 0px 0px ' }}>

        <Col sm={2} className='p-2'><img src={FirstChoice} style={{ width: '77px', height: '77px', borderRadius: '10px' }} alt="error" /></Col>
        <Col sm={10} className='py-2'>
          <Row className="p-2">
            <Col sm={8}>
              <p className='poppins18B22'>{props.isGarageSelected.garageName}</p>
              <p className='poppins15light '>
                <svg xmlns="http://www.w3.org/2000/svg" width="8.279" height="12.766" className='mx-2' viewBox="0 0 8.279 12.766">
                  <path id="Icon_metro-location" data-name="Icon metro-location" d="M12.494,1.928a4.067,4.067,0,0,0-4.14,3.989c0,3.989,4.14,8.777,4.14,8.777s4.14-4.787,4.14-8.777a4.067,4.067,0,0,0-4.14-3.989Zm0,6.433A2.491,2.491,0,0,1,9.959,5.918a2.537,2.537,0,0,1,5.071,0A2.491,2.491,0,0,1,12.494,8.361Zm-1.6-2.444a1.605,1.605,0,0,1,3.208,0,1.605,1.605,0,0,1-3.208,0Z" transform="translate(-8.355 -1.928)" fill="#5d6186" />
                </svg>
                {props.isGarageSelected.garageAddress[0].city + " " + props.isGarageSelected.garageAddress[0].pincode || ""}
              </p>
            </Col>
            <Col sm={4} className='py-2'>
              <svg id="Group_26144" data-name="Group 26144" xmlns="http://www.w3.org/2000/svg" width="30" height="30" className='mx-2' viewBox="0 0 30 30">
                <circle id="Ellipse_1542" data-name="Ellipse 1542" cx="15" cy="15" r="15" fill="#53bd8c" />
                <g id="telephone-2" transform="translate(6.85 6.621)">
                  <path id="Path_1428" data-name="Path 1428" d="M4.215,11.139a17.426,17.426,0,0,0,5.774,4.632,8.831,8.831,0,0,0,3.231.979c.078,0,.153.007.231.007a2.647,2.647,0,0,0,2.075-.913.076.076,0,0,0,.014-.017,8.855,8.855,0,0,1,.654-.694c.159-.156.322-.319.478-.486a1.7,1.7,0,0,0-.007-2.5l-2.038-2.087A1.633,1.633,0,0,0,13.433,9.5a1.687,1.687,0,0,0-1.207.559L11.013,11.3c-.112-.066-.227-.125-.336-.181a4.163,4.163,0,0,1-.373-.208A12.96,12.96,0,0,1,7.236,8.052,7.608,7.608,0,0,1,6.2,6.358c.319-.3.617-.6.905-.906.1-.108.207-.215.312-.323a1.8,1.8,0,0,0,.563-1.25,1.785,1.785,0,0,0-.563-1.25L6.4,1.594c-.119-.122-.231-.24-.346-.361C5.835,1,5.6.753,5.371.535A1.672,1.672,0,0,0,4.177,0,1.721,1.721,0,0,0,2.97.538L1.7,1.837A2.7,2.7,0,0,0,.926,3.545,6.566,6.566,0,0,0,1.4,6.323,16.247,16.247,0,0,0,4.215,11.139ZM1.753,3.618a1.856,1.856,0,0,1,.539-1.181L3.554,1.146a.9.9,0,0,1,.624-.3.858.858,0,0,1,.61.3c.227.215.441.441.671.681.115.122.234.243.353.368l1.01,1.035a.952.952,0,0,1,.319.649.952.952,0,0,1-.319.649c-.105.108-.21.219-.315.326-.315.326-.61.635-.936.931l-.017.017a.691.691,0,0,0-.17.771c0,.01.007.017.01.028a8.211,8.211,0,0,0,1.19,1.983,13.679,13.679,0,0,0,3.268,3.049,4.819,4.819,0,0,0,.448.25,4.164,4.164,0,0,1,.373.208l.037.021a.7.7,0,0,0,.329.087.713.713,0,0,0,.505-.236l1.268-1.3a.889.889,0,0,1,.62-.309.845.845,0,0,1,.6.309l2.044,2.09a.85.85,0,0,1-.01,1.309c-.142.156-.292.306-.451.462a9.9,9.9,0,0,0-.709.754,1.841,1.841,0,0,1-1.454.632c-.058,0-.119,0-.176-.007a8.023,8.023,0,0,1-2.923-.9,16.554,16.554,0,0,1-5.5-4.41A15.55,15.55,0,0,1,2.181,6.038,5.721,5.721,0,0,1,1.753,3.618Z" transform="translate(-0.912 0)" fill="#fff" stroke="#fff" stroke-width="1" />
                </g>
              </svg>

              <svg id="Group_26145" data-name="Group 26145" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                <circle id="Ellipse_1931" data-name="Ellipse 1931" cx="15" cy="15" r="15" fill="#53bd8c" />
                <path id="Path_22984" data-name="Path 22984" d="M50.074,34.118A7.018,7.018,0,0,1,49.32,37.3a7.118,7.118,0,0,1-6.364,3.936,7.016,7.016,0,0,1-3.182-.754L35,42.074,36.591,37.3a7.018,7.018,0,0,1-.754-3.182,7.118,7.118,0,0,1,3.936-6.364A7.019,7.019,0,0,1,42.956,27h.419a7.1,7.1,0,0,1,6.7,6.7Z" transform="translate(-27.537 -19.538)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
              </svg>

            </Col>
          </Row>
        </Col>
      </Row>
      <div className='p-0 m-0 cart_top' style={{ backgroundColor: '#4EE59D' }}>
        <h6>Cart</h6>
        <p>({props.isServiceSelect.length || 0}) Items</p>
      </div>
      <div className='scrollboxservices'>
            {props.isServiceSelect && props.isServiceSelect.map((service) => {
                return (
                        <div className='px-3 mt-3  cartcol'>
                            <div className='titlemnt'>
                                <h6 className=''>{service.package_name}</h6>
                                <p className=''>{service.months_or_kms}</p>
                            </div>
                            <div>
                                <div className="btnquntity">
                                    <button>-</button>
                                    <span>10</span>
                                    <button>+</button>
                                </div>
                            </div>
                            <div>
                                <div className="amountcart">
                                    <div className=''>
                                        <small>₹999</small>
                                        <p>&#8377;{service.costs}</p>
                                    </div>
                                    <div className='cross'><i class="far fa-times-circle"></i></div>
                                </div>
                            </div>
                            <hr></hr>
                        </div>
                )
            })

            }
                    </div>

      <Row className='py-2 m-0 cartfoot'>
        <Col sm={6}>
          <p className='poppins18W'>To Pay</p>
          <p className='poppins10W'>Inclusive of all Charges</p>
        </Col>
        <Col sm={6} className='OpenSans22W'><Link  className='submitpayment'>&#8377;{props.amount}</Link></Col>
      </Row>
    </div>
  );
};


export default withRouter(CartBox); 