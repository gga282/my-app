import React, { Component } from 'react'
import { Container,Row,Table,Input } from 'reactstrap'
import CarDetails from './CarDetails'

export default class CarLists extends Component {
  render() {
    return (
        <>
        <Container>
            <Row>
                <h2>Araba Listesi</h2>
            </Row>
            <Table bordered hover striped>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Araba Markasi</th>
                    <th>Modeli</th>
                    <th>Plaka</th>
                    <th>KM</th>
                    <th>Uygunluk</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>BMW</td>
                        <td>1</td>
                        <td>111-111-111</td>
                        <td>123144</td>
                        <td><Input type="checkbox"></Input></td>
                    </tr>
                    {
                        this.props.carInfo?.map(c=>(
                            <tr key={c.carID}>
                            <td>{c.carID}</td>
                            <td>{c.carBrand}</td>
                            <td>{c.carModel}</td>
                            <td>{c.carPlate}</td>
                            <td>{c.carKM}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        
      </Container>
        </>
    )
  }
}
