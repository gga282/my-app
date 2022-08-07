import React, { Component } from 'react'
import { Navbar,NavLink, NavbarBrand, Nav } from 'reactstrap'
import Logo from '../carrental.jpeg'
import './logo.css';

export default class TopNavBar extends Component {
  render() {
    return (
        <>
        <Navbar>
            <NavbarBrand>
            <img src={Logo} className="CarLogo"></img>
            </NavbarBrand>
            <NavLink href="/">Dashboard</NavLink>
            <NavLink href="/customers">CustomerList</NavLink>
            <NavLink href="/new-customer">New Customers</NavLink>
            <NavLink href="/car-lists">Car lists</NavLink>
            <NavLink href="/cars">Cars</NavLink>
        </Navbar>
        <hr></hr>
        </>
    )
  }
}
