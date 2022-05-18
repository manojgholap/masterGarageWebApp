import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import back from '../../../Images/drawable-xxxhdpi/Group 36369.png';
import rig from '../../../Images/drawable-xxxhdpi/Group 36370.png';
import gpbtn from '../../../Images/drawable-xxxhdpi/Group 36381.png';
import obj from '../../../Images/drawable-xxxhdpi/OBJECTS.png';
import log from '../../../Images/drawable-xxxhdpi/Group 26594.png';
import google from '../../../Images/drawable-xxxhdpi/Group 30821.png';
import play from '../../../Images/drawable-xxxhdpi/Group 30822.png';
const Register_Mob = () => {
    const[name,setName]=useState("")
    const[registerveh,setRegisterveh]=useState("")
    const[phoneno,setPhoneno]=useState("")
    const[alterphone,setAlterphone]=useState("")
    const[items,setItem]=useState([])
     console.log(setName)


    const handleSubmit=(e)=>{
      e.preventDefault();
      let item={
          name,
          registerveh,
          phoneno,
          alterphone
      }
      setItem([...items,item]);
      setName('')
      setRegisterveh('')
      setPhoneno('')
      setAlterphone('')
    }
    useEffect(()=>{
       localStorage.setItem('items',JSON.stringify(items))
    },[items])
  return (
    <div className='walletgetdata'>
     <div className="transtop">
         <ul>
         <li className="mastergeg"><img src={log} alt="error"/> <p>Master Garage</p></li>
             <li className='paygog'><img src={google} alt="error"/></li>
             <li className='paygog'><img src={play} alt="error"/></li>
         </ul>
   </div>
         <div className="mainlogtag">
          
             <div className="reginput_12">

                 <div className="activelog">
             <h5>Active Tag !</h5>
             <p>No need to leave your phone number on the dashboard anymore</p>
             </div>
             <form>
             <div className="bakkdeg">
             <div className="allinput_filed1">
           
            <div className="p-3">
            <h5>Tag Owner Information</h5>
         
            <div className="input_field">
                <p>Vehical Register Number</p>
                <input placeholder='' 
                value={registerveh} 
                onChange={(e)=>setRegisterveh(e.target.value)}
                />
            </div>
            <div className="input_field1">
                <p>Your Name</p>
                <input placeholder=''
                 value={name}
                  onChange={(e)=>setName(e.target.value)}/>
            </div>

            <div className="input_field1">
                <p>Mobile Number*</p>
                <input placeholder='9867906754' type="number"
                 value={phoneno}
                  onChange={(e)=>setPhoneno(e.target.value)}/>
            </div>

            <div className="input_field1">
                <p>Alternate Mobile Number</p>
                <input placeholder='' type="number"
                 value={alterphone}
                  onChange={(e)=>setAlterphone(e.target.value)}/>
            </div>
            </div>
            </div>
      
                <div className="upadte_profile">
              <Link to="/ContactOwnerVeh_Mob">  <button onSubmit={handleSubmit}>Submit</button></Link>
                </div>
        </div></form>
        <img src={back} alt="error"/>
             </div>
         </div>
  
    </div>
  )
}

export default Register_Mob