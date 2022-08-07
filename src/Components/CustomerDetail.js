import React, { Component } from 'react'

export default class CustomerDetail extends Component {
  render() {
    return (
      <>
      <div>CustomerDetail</div>
      <p>{this.props.currentCustomer}</p>
      </>
    )
  }
}
