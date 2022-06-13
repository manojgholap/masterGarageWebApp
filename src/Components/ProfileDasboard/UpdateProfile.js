import react, { useRef, useState } from "react"
import { Card, CardBody } from "reactstrap"
import { Link, withRouter, useHistory } from 'react-router-dom';
import profile from '../../Images/profile.png';
import axios from "axios";
import Login from "../Login";
import { showMessage } from "../../Healper";
const UpdateProfile = (user) => {
    const profilePhoto = user.user.imageUri
    const [firstName,setFirstName]=useState(user.user.first_name||'')
    const [lastName,setLastName]=useState(user.user.last_name||'')
    const [email,setEmail]=useState(user.user.email||'')
    const [mobileNumber,setMobileNumber]=useState(user.user.phone_no||'')
    const [alternateMobileNumber,setAlternateMobile]=useState(user.user.alternate_phone||'')
    const [dob,setDob]=useState(user.user.dob)
    const [gender,setGender]=useState(user.user.gender||'')
    const [homeAddress,setHomeAddress]=useState(user.user.homeAddress||'')
    const [otherAddress,setOtherAddress]=useState(user.user.otherAddress||'')
    const [officeAddress,setOfficeAddress]=useState(user.user.officeAddress||'')
    const [isProfileUpdated,setProfileUpdated]=useState(false)
    const hiddenFileInput = useRef(null);
    const [file,setFile]=useState();
    const [fileName,setFileName]=useState('')
    const history = useHistory()
    
function handleClick(){
    hiddenFileInput.current.click()
}
function handleBeforeUpload(e){
    const fileType=e.target.files[0]?.type
    if(!fileType) return
    console.log(fileType);
    if(fileType=="image/jpeg"||fileType=="image/png"){
        setFile(e.target.files[0])
        setFileName(e.target.files[0].name)
        return
    }
    return showMessage("info","only images are allowed")
}
    function update(){
        const formData = new FormData()
        formData.append("firstName",firstName)
        formData.append( "lastName",lastName)
        formData.append( "alternateMobileNumber",alternateMobileNumber)
        formData.append( "mobileNumber",mobileNumber)
        formData.append('email',email)
        formData.append( "dob",dob)
        formData.append( "gender",gender)
        formData.append( "homeAddress",homeAddress)
        formData.append( "officeAddress",officeAddress)
        formData.append( "otherAddress",otherAddress)
        formData.append( "profile",file)
        axios.post(process.env.REACT_APP_Api_Url+"user/uploads", 
            formData,{headers:{"Content-Type":"multipart/form-data"}}
         ).then((res, err) => {
            if (res.data.status == true) {
                setProfileUpdated(true)
                showMessage("success",res.data.message)
            }
            else {
                showMessage("error",res.data.err)
            }
        })
    }
    return (
        <>
        {isProfileUpdated?history.push('/home'):
            <Card className="card1 active">
                <div className="headerProfile1">
                    <div>
                    {profilePhoto?<img src={`${process.env.REACT_APP_Api_Url+user.user.profilePhoto}`} alt={profile} />:
                    <img src={profile} alt={profile} />}
                    <input
                    type="file"
                    onChange={handleBeforeUpload}
                    name="profile_picture"
                    accept="image/png,image/jpeg"
                    ref={hiddenFileInput}
                    style={{display:"none"}}
                    />
                    <buttton onClick={handleClick} className="btn btn-primary"><i class="bi bi-upload" ></i>Choose File</buttton>
                    <p>{fileName?fileName:''}</p>
                    </div>
                </div>
                <CardBody>
                    <div className="form">
                        <label for="fname" class="form-label">First Name</label>
                            <input  class="form-control" id="fname" type="text" value={firstName} onChange={(event)=>setFirstName(event.target.value)}  />
                            <label for="lname" class="form-label">Last Name</label>
                            <input class="form-control" id="lname" type="text" value={lastName}  onChange={(event)=>setLastName(event.target.value)}  />
                            <label for="mno" class="form-label">Mobile Number</label>
                            <input class="form-control" type="text" id="mno"  value={mobileNumber} disabled  />
                            <label for="amno" class="form-label">Alternate Mobile Number</label>
                            <input class="form-control" id="amno" type="text"value={alternateMobileNumber}  onChange={(event)=>setAlternateMobile(event.target.value)}/>
                            <label for="email" class="form-label">Email</label>
                            <input class="form-control" id="email" type="text" value={email} onChange={(event)=>setEmail(event.target.value)}  />
                            <label class="form-label">Gender</label>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="gender" id="male" value="Male" onChange={(event)=>setGender(event.target.value)} />
                            <label for="male" className="form-check-label">Male</label>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="gender" id="female" value="Female" onChange={(event)=>setGender(event.target.value)}/>
                            <label for="female" className="form-check-label">Female</label>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="gender" id="other" value="Other" onChange={(event)=>setGender(event.target.value)}/>
                            <label for="female" className="form-check-label">Other</label>
                            </div>
                            <label for="dob" class="form-label">DOB</label>
                            <input class="form-control" id="dob" type="date" value={dob} onChange={(event)=>setDob(event.target.value)} />
                            <label for="hadd" class="form-label">Home Address</label>
                            <input class="form-control" id="hadd" type="text" value={homeAddress} onChange={(event)=>setHomeAddress(event.target.value)}  />
                            <label for="oadd" className="form-label">Office Address</label>
                            <input class="form-control" type="text" id="oadd" value={officeAddress} onChange={(event)=>setOfficeAddress(event.target.value)}/>
                            <label for="oadd" className="form-label">Other Address</label>
                            <input class="form-control" type="text" id="oadd" value={otherAddress} onChange={(event)=>setOtherAddress(event.target.value)}/>
                    </div>
                    <br/>
                    <button className="btn btn-primary" onClick={update}>Update Profile</button>
                </CardBody>
            </Card>
}
        </>
    )
}

export default UpdateProfile