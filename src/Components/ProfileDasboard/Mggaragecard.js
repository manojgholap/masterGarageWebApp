import React from 'react';
import './dashboard.css';
import {Link} from 'react-router-dom';
import {Container} from 'reactstrap';




const Mggaragecard = ({images,carName,model}) => {
  return (
           <Container className="vehicalcard1">
           <div  className="vehicalcard">
           <div className="vehicalheader">
                <p className="vehiscan"><i class="fas fa-qrcode"></i></p>
                <p className="imgvehical"><img src={images} alt="error" width="120px"/></p>
            </div>
            <div className="modelvehicalname">
              <div className="moedl">
                 <p>{carName}</p>
                 <small>{model}</small>
              </div>
              <p><Link className="editlink"><i class="fas fa-edit"></i>edit</Link></p>
            </div>
            </div> 
           </Container>
       )
};

export default Mggaragecard;
