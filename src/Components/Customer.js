import React, { Component } from 'react';
import CustomerList from './CustomerList';
import {Row,Col} from 'reactstrap';
import CustomerDetail from './CustomerDetail';

export default class Customer extends Component {
  state={
    selectedCustomer:{},
    customers: [
      {
          customerId: 1,
          name: "Ahmet",
          surname: "Bircan",
          phone: "532 532 32 32",
          email: "abircan@coder.com.tr",
          comments: [
              {
                  commentId: 1,
                  comment: "Telefon ile arayarak fiyat teklifi istedi. Bir kaç gün içerisinde talebi doğrulsunda tekliflendirme yapılacağı bildirildi. Müşteri haber bekliyor.",
                  date: new Date(2022, 1, 14)
              },
              {
                  commentId: 2,
                  comment: "Email adresine teklif gönderildi.",
                  date: new Date(2022, 1, 16)
              },
              {
                  commentId: 3,
                  comment: "Teklifin revize edilmesi istendi.",
                  date: new Date(2022, 1, 18)
              },
              {
                  commentId: 4,
                  comment: "Teklif revize edildi.",
                  date: new Date(2022, 1, 24)
              }
          ]
      },
      {
          customerId: 2,
          name: "Süleyman",
          surname: "Öztürk",
          phone: "542 542 42 42",
          email: "simon@fastline.au",
          comments: [
              {
                  commentId: 5,
                  comment: "Telefon ile arayarak fiyat teklifi istedi.",
                  date: new Date(2022, 1, 15)
              },
              {
                  commentId: 6,
                  comment: "Email adresine teklif gönderildi.",
                  date: new Date(2022, 1, 16)
              },
              {
                  commentId: 7,
                  comment: "Teklifin revize edilmesi istendi.",
                  date: new Date(2022, 1, 18)
              },
              {
                  commentId: 8,
                  comment: "Teklif revize edildi.",
                  date: new Date(2022, 1, 24)
              }
          ]
      },
      {
          customerId: 3,
          name: "Mert",
          surname: "Günal",
          phone: "555 525 15 35",
          email: "mert@gunaltour.com",
          comments: [
              {
                  commentId: 9,
                  comment: "Telefon ile arayarak fiyat teklifi istedi.",
                  date: new Date(2022, 1, 11)
              },
              {
                  commentId: 10,
                  comment: "Email adresine teklif gönderildi.",
                  date: new Date(2022, 1, 16)
              },
              {
                  commentId: 11,
                  comment: "Teklifin revize edilmesi istendi.",
                  date: new Date(2022, 1, 18)
              },
              {
                  commentId: 12,
                  comment: "Teklif revize edildi.",
                  date: new Date(2022, 1, 24)
              }
          ]
      },
      {
          customerId: 4,
          name: "Deniz",
          surname: "Okur",
          phone: "531 211 32 21",
          email: "deniz@uzmankimya.com",
          comments: [
              {
                  commentId: 13,
                  comment: "Telefon ile arayarak fiyat teklifi istedi.",
                  date: new Date(2022, 1, 12)
              },
              {
                  commentId: 14,
                  comment: "Email adresine teklif gönderildi.",
                  date: new Date(2022, 1, 16)
              },
              {
                  commentId: 15,
                  comment: "Teklifin revize edilmesi istendi.",
                  date: new Date(2022, 1, 18)
              },
              {
                  commentId: 16,
                  comment: "Teklif revize edildi.",
                  date: new Date(2022, 1, 24)
              }
          ]
      }
  ]
}
  render() {  
    return (
      <>
      <Row>
          <Col md="6">
              <h4>Musteri Listesi</h4>
              <CustomerList customerInfo={this.state.customers}/>
          </Col>
          <Col md="6">
              <h4>Musteri Detay</h4>
              <CustomerDetail currentCustomer="Ahmet Bircan"></CustomerDetail>
          </Col>
      </Row>
      </>
    )
  }
}
