import React from 'react'
import Track from '../Trackingstatus/TrackingComp'
import { Container,Row,Col,Card,Button,ButtonGroup, CardBody, CardTitle, CardText,CardSubtitle, CardFooter } from 'reactstrap'
import { Link,withRouter } from 'react-router-dom';
import './vehical.css'
import vehical from '../../Images/balano.jpg';

const AddVehical_his = () => {
  return (
    <div className="add_Top">
        <div className="nav_mob"> 
        <div className="arrow_marge"><i class="fa-solid fa-arrow-left"></i> <p>Add Vehical</p></div>
              <div className="px-2">
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
        <div class="addvechiclebox1">
            <h6>Add or choose a vehicle you need to service</h6>
        <form>
            <input className='vechicleInput' type="text" placeholder="Example - MH 01 AB 1234" name="add vechicle" />
            <Link to ="/Vehical_Add"><button className='vechiclebtn'>Add Vechicle</button></Link>
        </form>
        </div>

        <div>
            <div className="vehical_card">
                <div>
                    <img src={vehical} alt="error"/>
                </div>
                <div className="detail_veh">
                    <p>Alcazar</p>
                    <small>MH 01 AB 3827</small>
                </div>

            </div>
            <div className="vehical_card">
                <div>
                    <img src={vehical} alt="error"/>
                </div>
                <div className="detail_veh">
                    <p>Alcazar</p>
                    <small>MH 01 AB 3827</small>
                </div>

            </div>
            <div className="vehical_card">
                <div>
                    <img src={vehical} alt="error"/>
                </div>
                <div className="detail_veh">
                    <p>Alcazar</p>
                    <small>MH 01 AB 3827</small>
                </div>

            </div>
        </div>
    </div>
  )
}

export default AddVehical_his