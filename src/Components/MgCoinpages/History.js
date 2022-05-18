import React from 'react';
import { Table,Container,Row,Col } from 'reactstrap';
import './Deals.css';
import {Link} from 'react-router-dom';

const data = [
  { name: "Anom", age: 19, gender: "Male" },
  { name: "Megha", age: 19, gender: "Female" },
  { name: "Subham", age: 25, gender: "Male"},
]

const History = () => {
  return (
   <div className="history mb-4">
      <table className="borderchange">
         <tr  className="bghead">
            <div className="bgheadpass">
               <h5>MG PASSBOOK</h5>
               <p><Link className="linkpass">Clear Passbook</Link></p>
            </div>
         </tr>
        <tr className="bgchange1">
          <th>Date</th>
          <th>Coins Expenditure</th>
          <th>Coins Remaining</th>
          <th>Booking ID</th>
        </tr>
        
            <tr className="bgchange11">
              <td>08/01/2021</td>
              <td>1000 Coins</td>
              <td>5000 Coins</td>
              <td>MG123456</td>
            </tr>
            <tr className="bgchange11">
              <td>08/01/2021</td>
              <td>1000 Coins</td>
              <td>5000 Coins</td>
              <td>MG123456</td>
            </tr>
            <tr className="bgchange11">
              <td>08/01/2021</td>
              <td>1000 Coins</td>
              <td>5000 Coins</td>
              <td>MG123456</td>
            </tr>
            <tr className="bgchange11">
              <td>08/01/2021</td>
              <td>1000 Coins</td>
              <td>5000 Coins</td>
              <td>MG123456</td>
            </tr>
       
      </table>
    </div>
  );
};

export default History;
