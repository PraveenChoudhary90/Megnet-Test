import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, useNavigate} from "react-router-dom";
import { MdLocalGroceryStore } from "react-icons/md";
import { useSelector } from 'react-redux';
const TopNav = ()=>{

    const navigate = useNavigate();
const Product = useSelector(state=>state.mycart.cart);
const Prolength = Product.length; 

  return(
    <>
    
    <div id="nav">
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link}  to="home">E-Commerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link}   to="home">Home</Nav.Link>
            <Nav.Link as={Link}  to="insert">Insert Product</Nav.Link>
            <Nav.Link as={Link}  to="product">Products</Nav.Link>
          </Nav>
          <MdLocalGroceryStore style={{fontSize:"30px", color:"white"}} onClick={()=>{navigate("/cartdata")}}  />
          {Prolength}
        </Container>
      </Navbar>
      </div>
    </>
  )
}

export default TopNav;