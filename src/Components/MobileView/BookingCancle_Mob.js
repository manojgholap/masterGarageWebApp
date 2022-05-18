import React from 'react';
import {Link} from 'react-router-dom'
import cancelBook from '../../Images/drawable-xxxhdpi/Path 32396.png';
import cross from '../../Images/drawable-xxxhdpi/Path 1626.png';

const BookingCancle_Mob = () => {
  return (
    <div class="add_Top">
      <div className="maintopplace1">
          <div className="bookcancel p-3">
          <p>Booking Cancelled</p>
          <div><img src={cross} alt="error"/></div>
          </div>
    

     <div className="maincancel">
         <img src={cancelBook} alt="error"/>
     </div>
 <div className="get_data">
     <h6>It seems like you have cancelled the booking!</h6>
     <p>If any money was deducted, it will be credited to the 
      original payment method within 5-7 business days</p>
      </div>
<div className="get_data1">
    <Link to="/ConfirmBook_Mob"><button>Try again</button></Link>
</div>
</div>
      </div>
  )
}

export default BookingCancle_Mob