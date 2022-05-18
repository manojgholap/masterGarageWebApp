import React from 'react'
import Track from '../Trackingstatus/TrackingComp'
import { Container,Row,Col,Card,Button,ButtonGroup, CardBody, CardTitle, CardText,CardSubtitle, CardFooter } from 'reactstrap'
import { Link,withRouter } from 'react-router-dom';
import Car from '../../Images/drawable-xxxhdpi/Car.png';
import man from '../../Images/drawable-xxxhdpi/Group 32085.png';

import './vehical.css'

const AddVehical = () => {
  return (
    <div className="add_Top">
    <div className="nav_mob "> 
    <div className="arrow_marge"><i class="fa-solid fa-arrow-left"></i> <p>Add Vehical</p></div>
          <div className='px-2'>
              <i class="fa-solid fa-magnifying-glass"></i>
              <i class="fa-solid fa-bell"></i>
          </div>
    </div>

      <div className="progressbar">
            <div className="prog">   
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
        <div className="vehical_add_cont">
            <div className="suv_addvehical">
                <img src={Car} alt="alt"/>
                 <h5>Enter Vehicle Registration Number</h5>
                 <p>So we can show you the best prices for your </p>
                <p>vehicle service in nearby garages</p>
            </div>
        </div>
    <div class="addvechiclebox1">
    <form>
        <input className='vechicleInput' type="text" placeholder="Example - MH 01 AB 1234" name="add vechicle" />
        <Link to ="/Service_Mob"><button className='vechiclebtn'>Submit</button></Link>
    </form>
    </div>
    <div className="suv_addvehical1">
   <p> Don't worry your information is safe with us, we will use your number </p>
<p>to fetch your car make & model so we can show prices accordingly</p>
    </div>
    <div className='addVehical_foot'>
         <div>
             <img src={man} alt="error"/>
         </div>
         <div className="sub_details">
             <h6>Trouble with Booking, Reach us!</h6>
             <p>we will help you complete the booking</p>
             <button>Speak Now</button>
         </div>
    </div>
</div>
  )
}

export default AddVehical