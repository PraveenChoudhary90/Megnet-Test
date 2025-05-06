

import axios from "axios";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BASE_URL from "../config";
import { useDispatch } from "react-redux";
import { addtocart } from "../CartSlice";


const ProductData  = ()=>{
  const [mydata, setMydata]  = useState([]);

  const dispatch = useDispatch();


  const loadData = async()=>{
    const api = "http://localhost:8000/data/ProductDistplay";
    try {
        const response = await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    } catch (error) {
        console.lg(error);
    }
  }

  useEffect(()=>{
  loadData();
  },[])


  const ans = mydata.map((key)=>{
    return(
        <>
        <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={`${BASE_URL}/${key.defaultImage}`} height="250" />
    <Card.Body>
      <Card.Title>{key.name}</Card.Title>
      <Card.Text>
        <h4>Brand:{key.brand}</h4>
        <h4>Price:{key.price}</h4>
      </Card.Text>
      <Button variant="warning" onClick={()=>{dispatch(addtocart({id:key._id, name:key.name, brand:key.brand, price:key.price,
         defaultImage:key.defaultImage, images:key.images, qty:1}))}}>Add To Cart</Button>
    </Card.Body>
  </Card>

        
        </>
    )
  })





    return(
        <>
        <h1 style={{textAlign:"center"}}>Welcome to our Product Page </h1>
        <div id="card">
            {ans}
        </div>
        </>
    )
}

export default ProductData;