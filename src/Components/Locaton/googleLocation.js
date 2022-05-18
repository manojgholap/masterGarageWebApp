import React, { Component, useEffect, useState } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import axios from "axios";
import { Col, Container, Row } from "reactstrap";
import '../Login.css';




export class MapContainer extends Component {
  render() {
    const latitude = this.props.latlang.latitude
    const longitude = this.props.latlang.longitude
    let address = "pune"
    function getAdress(a, b, c) {
      console.log(c.jb.x)
      // axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=false&key=AIzaSyDKpf7ZJCJzhlxC6KPrQkN0LColQbTmI8Q`)
      //   .then((res, err) => {
      //     console.log(res.data);
      //   })
    }
    function marker(a, b, c) {
      console.log(a);
      console.log(b);
      console.log(c);
    }
    function onCenterChanged(a, b, c) {
      console.log(c);
    }
    function onChange(e){
      console.log(e.target.value);
      address="mumbai"

    }
    function addAddress(){
      console.log(address);
    }
    return (
      <>
        <Container>
          <Row>
            <Col lg={3}>
            </Col>
            <Col lg={9}>

              <Map google={this.props.google}
                style={{ height: "60%", width: "40%", top: "60px" }}
                initialCenter={{
                  lat: latitude,
                  lng: longitude
                }}
                zoom={14}
                onClick={(a, b, c) => getAdress(a, b, c)}
                onRecenter={(a, b, c) => onCenterChanged(a, b, c)}
              >

                <Marker
                  name={'Current location'}
                  onClick={marker}
                />

                <InfoWindow onClose={this.onInfoWindowClose}>
                  {/* <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div> */}
                </InfoWindow>
                <div className="inputser_garage1">
                  <i class="fas fa-map-marker-alt"></i>
                  <input
                    className='Searchinput1'
                    value={address}
                    type="text"
                    onChange={(event) => onChange(event)}
                  />
                  <button className="btn btn-primary btn-lg" onClick={addAddress}>Add Address</button>
                </div>
              </Map>
            </Col>
          </Row>
        </Container>
      </>

    );
  }
}

export default GoogleApiWrapper({
  apiKey:process.env.REACT_APP_Google_Api_Key 
})(MapContainer)