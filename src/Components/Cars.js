import React, { Component } from 'react';
import {Row,Col,Input} from 'reactstrap';
import CarLists from './CarLists';
import CarDetails from './CarDetails';


export default class Cars extends Component {
  state={
    selectedCar: {},
    cars:[{
      carID:1,
      carBrand:"BMW",
      carModel:"1.18",
      carPlate:"BB2313",
      carKM:87213,
      booked:true
    },
    {
      carID:2,
      carBrand:"Skoda",
      carModel:"Fabia",
      carPlate:"BC2131",
      carKM:1111,
      booked:false
    },
    {
      carID:3,
      carBrand:"Volvo",
      carModel:"TBA",
      carPlate:"SEK222",
      carKM:34222,
      booked:true
    }
    ]
  }
  carSelect = (car) => {
        
    this.setState({ selectedCar: car });
}
  //carStatus=(cars)=>{
  //  if(this.cars.booked==1){
  //    return <Input type="checkbox" checked></Input>
  //  }
  //  else
  //    return <Input type="checkbox"></Input>

  //}
  render() {
    return (
      <>
      <Row>
        <Col md="6">
            <h4>Araba Listesi</h4>
            <CarLists carInfo={this.state.cars} carSelect={this.carSelect}/>
        </Col>
        <Col md="6">
          <CarDetails currentCar={this.state.selectedCar}></CarDetails>
        </Col>
      </Row>
      </>
    )
  }
}
