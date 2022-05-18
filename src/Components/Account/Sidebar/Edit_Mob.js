import React from 'react'
import editmore from '../../../Images/drawable-xxxhdpi/Group 34921.png';

const Edit_Mob = () => {
  return (
    <div className="add_Top">
 <div className="nav_mob"> 
<div className="arrow_marge"><i class="fa-solid fa-arrow-left"></i> <h6 className="arrow_non"> Edit Profile</h6></div>
      <div className="px-2">
          <i class="fa-solid fa-bell"></i>
      </div>
</div>

    <div className="edit_moree">
        <img src={editmore} alt="error"/>
    </div>


        <div className="allinput_filed">
            <div>
            <div className="input_field">
                <p>Name</p>
                <input placeholder=''/>
            </div>
            <div className="input_field1">
                <p>First Name</p>
                <input placeholder=''/>
            </div>

            <div className="input_field1">
                <p>Last Name</p>
                <input placeholder=''/>
            </div>

            <div className="input_field1">
                <p>Mobile Number*</p>
                <input placeholder='9867906754' type="number"/>
            </div>

            <div className="input_field1">
                <p>Alternate Mobile Number</p>
                <input placeholder='' type="number"/>
            </div>
            <div className="input_field1">
                <p> Email ID</p>
                <input placeholder='' type="email"/>
            </div>
           
            <div className="radioSelection">
                <h6>Gender</h6>
                <div className="inputredi">
                <div className="inputredi"> <input type="radio" name="gender" value="M" className='mr-3'/><p>Male</p></div>
                <input type="radio" name="gender" value="F" /><p>Female</p>
                <input type="radio" name="gender" value="F" /><p>Other</p>
                </div>
            </div>
            <div className="input_field1">
                <p>Enter your DOB</p>
                <input placeholder='DD-MM-YY' type="date"/>
            </div>
            <div className="input_field1">
                <p>Home Address</p>
                <input placeholder='Enter home address'/>
            </div>
            <div className="input_field1">
                <p>Other Address</p>
                <input placeholder='Add other address'/>
            </div>
            </div>
        </div>
        <div className="upadte_profile">
        <button>Update profile</button>
        </div>
</div>
  )
}

export default Edit_Mob