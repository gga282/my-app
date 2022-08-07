import React, { Component } from 'react';
import { Alert, Card, CardBody, CardHeader, Col, Row } from 'reactstrap'


export default class CarDetails extends Component {
  render() {
    return (
      <>
      <h3>Car Details</h3>
      <div>CarDetails</div>
      <Card className='mb-3'></Card>
        <CardHeader>
          {this.props.currentCar.carBrand} {this.props.currentCar.carModel}
        </CardHeader>
        <CardBody>
          <Row>
            <Col md="6">

            </Col>
          </Row>
        </CardBody>
      </>
    )
  }
}
