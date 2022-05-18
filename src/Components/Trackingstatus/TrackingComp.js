import React from 'react'
import {Container,Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardHeader, CardFooter} from 'reactstrap';
    import ReactStars from "react-rating-stars-component"
    import {Link,withRouter} from 'react-router-dom';
    import {useDispatch,useSelector} from 'react-redux';
    import {selectVehical,registerVehicalNo,logingarage,calenderTime} from '../../redux/action';
    import car from '../../Images/CarBrand/Models/1 Maruti Suzuki/A star.jpeg'
    import customerService from '../../Images/customer-service.png';
    import ReviewBeen from '../../Images/drawable-xxxhdpi/ReviewBeen.png'
    import myuser from '../../Images/drawable-xxxhdpi/drawable-xxxhdpi/myuser.png';
    
    import './Track.css'
const TrackingComp = () => {
  const checkveh=useSelector((state)=>state.check.selectVehical); 
  const check=useSelector((state)=>state.check.registerVehicalNo)
        const check1=useSelector((state)=>state.check.logingarage); 
    const cal_data=useSelector((state)=>state.check.calenderTime);
    

    const rating = {
      size: 50,
      count: 10,
      color: "black",
      activeColor: "red",
      value: 7.5,
      a11y: true,
      isHalf: true,
      emptyIcon: <i className="far fa-star" />,
      halfIcon: <i className="fa fa-star-half-alt" />,
      filledIcon: <i className="fa fa-star" />,
      onChange: newValue => {
        console.log(`Example 2: new value is ${newValue}`);
      }
    };
    return (   
      <div className="track_main">
        <div className="trackcard">
             <div className="px-5 my-2 trackcardcont">
              <div className="MainHeader">
                  <div className="card-head">
                     <p><img src={myuser} alt="error" width="70px" height="70px"/></p>
                       <div className="aboutUser">
                      <h5>I'm Aditya, your Service Advisor</h5>
                      <p>I will be helping you through this service</p>
                      <p><Link className='reviewcheck'>Booking ID: MG1234567890 </Link></p>
                      </div>
                      </div>
                   <div className="social">
                   <Link><p className="socila1"><i class="fas fa-phone-alt"></i></p></Link>
                   <Link><p className="socila1"><i class="far fa-comment"></i></p></Link>
                </div>
               </div>
              </div>
            </div>
             <div className="garge_first_track">
                   <div className="cardfirst">
                           <div className="Garage_det">
                           <p className="cardtitle">Garage Details</p>
                           <p className="cardsubtitle">Maruti Suzuki</p>
                           <p className="cardtitle">Kandivali East, Mumbai 400101</p>
                         </div>
                  <div className="share">
                    <i class="fas fa-share-alt"></i>
               </div>
             </div>
             
                               <div>
                                   <div className="displayprop">
                                     {check?.map((item)=>(
                                      <div className="Garage_det">
                                           <p className="cardtitle">Vehicle Details</p>
                                              <p className="cardsubtitle">{item.model}</p>
                                              <p className="cardtitle">{item.Registeration}</p>
                                     </div>
                                     ))}
                                   
                              
                       <div>
                           <img src={car} alt="error"/>
                       </div>
                       </div>
                         </div>
                      <div>
                   </div>       
           </div>
           <div>
             <div className="sub_track_cont">
             <div className="garge_first_track">
               <div className="bookconfimrm">
                 {cal_data?.map((item)=>(
                      <div>
                      <h6>Booking Date & Time</h6>
                      <p>{new Date(item.date).toLocaleDateString()}  at  {item.selectedTimeSlot}</p>
                    </div>
                 ))}
                 {cal_data?.map((item)=>(
                      <div>
                      <h6>Appointment Date & Time</h6>
                      <p>{new Date(item.date).toLocaleDateString()}  at  {item.selectedTimeSlot}</p>
                    </div>
                 ))}
                
                </div>
                <div className="service_select">
                  <h6>Service Details</h6>
                  {checkveh?.map((item)=>(
                      <div class="radio">
                      <input id="radio-2" name="radio" type="radio"/>
                      <label  for="radio-2" class="radio-label">{item.title}</label>
                    </div>
                  ))}
                 
                </div>
             </div>
               <div className="garge_first_track">
                 <div>
                  <CardTitle className="cardtitle">Pick Up & Drop Address</CardTitle>
                  <CardSubtitle className="cardsubtitle">Sachin Tiwari</CardSubtitle>
                  <CardText className="cardtitle">A-1234, CGC Residency, Near Bisleri office,
                          Andheri East, Mumbai - 400001<span style={{color:"red"}}>[Edit]</span>
                  </CardText>
               </div>
               <div className="cardinstruction" style={{color:'#2650D8'}}>
                   <span><i class="far fa-edit"></i></span> <Link>Add service instructions</Link>
                </div>
               </div>
               </div>
               <div className="foottrack">
                               <div className="Foot">
                               <div  className="footer">
                                   <div>
                                   <img src={ReviewBeen} alt="error"/>

                                   </div>
                                  
                                   <div className="footerreview">
                                   <h5>How has your experience been?</h5>
                                   <div className="subFooter">
                                   <p>
                                   <ReactStars
                          count={5}
                          onChange={rating}
                        
                          size={24}
                          activeColor="#ffd700"
                        />,
                                  </p>
                      <Link className="reviewcheck">Write a review</Link>
                      </div>
                      </div>
                      </div>
            <div className="moreService">
                <div  className="customerServices">
                <Link to="/Chat"><p className="custam"><img src={customerService} alt="error"/></p></Link>
                <div className="Needhelp">
                <h5>Need help with your booking?</h5>
                 <p>Contact our Customer Support</p>
                 </div>
                 <Link><p className="comment"><i class="far fa-comments"></i></p></Link>
             </div>
             </div>
             </div>
             </div>
           </div>
      </div>

    )
}

export default withRouter(TrackingComp)
