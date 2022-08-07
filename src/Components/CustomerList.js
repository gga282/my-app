import React, { Component } from 'react';
import {Row,Table} from 'reactstrap';
import CustomerDetail from './CustomerDetail';

export default class CustomerList extends Component {
  render() {
    return (
        <>
        <Row>
            <h2>Musteri Listesi</h2>
        </Row>
        <Row>
            <Table bordered hover striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Ad</th>
                        <th>Soyad</th>
                        <th>Telefon</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Ali Veli</td>
                        <td>Kose</td>
                        <td>123-949-211</td>
                        <td>aaaa@gmail.com</td>
                    </tr>
                    {
                        this.props.customerInfo?.map(c=>(
                        <tr key={c.customerId}>
                        <td>{c.customerId}</td>
                        <td>{c.name}</td>
                        <td>{c.surname}</td>
                        <td>{c.phone}</td>
                        <td>{c.email}</td>
                        </tr>
                        ))
                    }
                </tbody>
            </Table>
            <hr></hr>
            <CustomerDetail></CustomerDetail>
        </Row>
        </>
    )
  }
}
