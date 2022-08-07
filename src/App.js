import {Container, Row, Col } from 'reactstrap';
import CustomerList from './Components/CustomerList';
import Dashboard from './Components/Dashboard';
import NotFound404 from './Components/NotFound404';
import TopNavBar from './Components/TopNavBar';
import {Routes, Route} from "react-router-dom";
import Customer from './Components/Customer';
import CarLists from './Components/CarLists';
import Cars from './Components/Cars';


function App() {
  return (
    <>
    <Container>
      <Row>
        <TopNavBar/>
      </Row>
      <Row>
      <Col md="12">
        <Routes>
          <Route path="/" element={<Dashboard/>}></Route>
          <Route path="/customers" element={<CustomerList/>}></Route>
          <Route path="/new-customer" element={<Customer/>}></Route>
          <Route path="/*" element={<NotFound404/>}></Route>
          <Route path="/car-lists" element={<CarLists/>}></Route>
          <Route path="/cars" element={<Cars/>}></Route>
        </Routes>
      </Col>
      </Row>
    </Container>
    </>

  );
}

export default App;
