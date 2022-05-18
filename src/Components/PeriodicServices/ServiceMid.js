import React,{useState,useEffect} from 'react';
import {CardBody,Input,Label, ButtonGroup, Button,Row,Col, Container} from 'reactstrap';
import { Link } from 'react-router-dom';
import './periodic.css';
import BasicService from '../../Images/BasicService.png';
import StandardService from '../../Images/StandardService.png';
import EngineScanning from '../../Images/EngineScanning.png';
import ComprehensiveService from '../../Images/ComprehensiveService.png';
import CompleteService from '../../Images/CompleteService.png';
import CarInspection from '../../Images/CarInspection.png';
import StarterMotor from '../../Images/StarterMotor.png';
import CarFluid from '../../Images/CarFluid.png';
import systemUpdate from '../../Images/systemUpdate.png';
import check from '../../Images/check.png';
import PS1 from '../../Images/ImagesAll/drawable-xxxhdpi/PS1.png';
import ShowMore from './ServicesShowmore';
import {Periodic,specialservice} from './Periodic';
import {useSelector,useDispatch} from 'react-redux';
import {selectVehical,getCartTotal,add} from '../../redux/action'
import {withRouter } from "react-router-dom";
import BasicShowmore from './BasicShowmore'
const ServiceMid = () => {
    const[show,toggleShow]=useState(false);
    const[toggl,setToggl]=useState("");
    const[toggle2,setToggl2]=useState("");
    const[toggle3,setToggl3]=useState("");
    const[searchTeam,setSeachTeam]=useState("")
    const[per,setper]=useState(Periodic);
    //const[name,setName]=useState()
    const check=useSelector((state)=>state.check)
    const addCartData=useSelector((state)=>state.check.addItem);
    const usedispatch=useDispatch()
 
        useEffect(()=>{
            usedispatch(getCartTotal())
        },[check])


        const handleClick=(item)=>{
        console.log(item)
        let temdata=[...check.selectVehical,item]
        usedispatch(selectVehical(temdata))
    }
    // const handlShow =()=>{
    //     setShow(!isShow);
    // }
    const togglehandle=(item)=>{
        console.log(item)
        let val=per.map((name)=>{
            if(name.id ==item.id){
                name.toggle=!name.toggle
            }
            return name
        })
        console.log(val)
        let temdata=[...val]
        setper(temdata)
    }
  return (
    <div className='px-5 midbar'>
    <form action="/" method="get">
    <div className='searchbox'>
    <i class='fas fa-search'></i>
        <input
          onChange={(e)=>{
            setSeachTeam(e.target.value)
        }}
        className='Searchgarage'
            type="text"
            placeholder="Search for Services"
            name="Location" 
        />
    </div>
        
    </form>
        <div className='py-4'>
        <p  className=' submidtext'>PERIODIC SERVICE</p>
        <h3 className='submidtext2'>Scheduled Service Packages</h3>
        {/* <SubMid></SubMid> */}
        <div>
            {check.Cart1.filter((item)=>{
                if(searchTeam == ""){
                    return item
                }else if(item.title.toLowerCase().includes(searchTeam.toLowerCase())){
                    return item
                }
            }).map((item,key)=>(
                    <div className='SubmidBgBox mb-3'>
           
                <Row>
                <Col sm={9} key='key'>
                <div className="SubmidBgBox1">
                <div className="p-3">
                    <p className='poppins18'>{item.title}</p>
                    <p className='poppins15light py-2'><img src={systemUpdate} style={{width:'12px'}} alt="error"></img>{item.yearmonth}</p>
                    <p className='poppins15light'><img src={item.check} style={{width:'12px'}} alt="error"></img> {item.points}</p>
                 
                  {/* <button onClick={handlShow}>more show
                  
                  {item.amount}
                  <p>count</p>
                  </button> */}
                  <Link className="bgcalling" onClick={()=>togglehandle(item)}>{item.toggle ? 'hide' : 'show more'}</Link>
                     </div>
                    </div>

                    {item.toggle &&
                    <div>
                    <p className='OpenSans22'>&#8377;{item.price}</p>
                    <div>
                         <BasicShowmore/>
                       </div>
                       </div>
                     }
                    </Col>
                    <Col sm={3}>
                <div className="add_Car" style={{width:'120px',height:'165px',marginLeft:'-20px'}}>
                <img src={item.img} style={{width:'127px',height:'120px'}} alt="error"></img>
                <button className='addcar' onClick={(e)=>handleClick(item)}>ADD SERVICE</button>
                </div>
            </Col>
        </Row>
        </div>
        ))}
    
        <div className='py-3'>
            <h3 className='submidtext2'>Other Service Packages</h3>
        </div>
           
        {check.Cart2.filter((data)=>{
            if(searchTeam==""){
                return data
            }else if(data.title.toLowerCase().includes(searchTeam.toLowerCase())){
                return data
            }
        })
        .map((data,key)=>(
             <div className='SubmidBgBox mb-3'>
              <Row>
            <Col sm={9}>
            <div className="SubmidBgBox1">
            <div className="p-3">
            <p className='poppins18'>{data.title}</p>
                <p className='poppins15light'><img src={systemUpdate} style={{width:'12px'}}></img>{data.yearmonth2}</p>
                <p className='poppins15light'><img src={data.check} style={{width:'12px'}}></img>{data.pointservice}</p>
               
               
                  <Link className="bgcalling" onClick={()=>toggleShow(!show)}>{show ? 'hide' : 'show more'}</Link>
                     </div>
                    </div>

                    {show &&
                    <div>
                    <p className='OpenSans22'>&#8377;{data.price}</p>
                    <Link>
                         <BasicShowmore/>
                       </Link>
                       </div>
                     }
            </Col>
            <Col sm={3}>
                <div className="add_Car" style={{width:'120px',height:'165px',marginLeft:'-20px'}}>
                <img src={data.img} style={{width:'127px',height:'120px'}}></img>
                <button className='addcar'>ADD  SERVICE</button>
                </div>
                
            </Col>
            </Row>
             </div>
        ))}
            
            <Row className=' footerbg m-0 mt-3'>
                    
                    <h2>Peace of Mind Guarantee Program</h2>
                    <ol>
                        <li><i class="fas fa-chevron-circle-down"></i> Competitive Pricing</li>
                        <li><i class="fas fa-chevron-circle-down"></i> Secure Payments</li>
                        <li><i class="fas fa-chevron-circle-down"></i> High Quality Service</li>
                        <li><i class="fas fa-chevron-circle-down"></i> &#8377;25000 Warrenty</li>
                    </ol>
                    <span>Know more    <i class="fas fa-arrow-circle-right"></i></span>
                    <img  src={PS1} style={{float:'right',width:'200px',height:'60px'}}></img>
                    
            </Row>
        </div>
        </div>
    </div>
  )
}

export default ServiceMid