

import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/esm/Button';
import { HiDocumentCurrencyRupee } from 'react-icons/hi2';
import { useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import BASE_URL from '../config'; // Your image base URL

const stripePromise = loadStripe('pk_test_51RKGV8I6Nv23y5n8CnPSGkkDTdti3DAKy5CKr9blkVJaYN3U0NZ5YAQSrPSMsSSn8yHWdeGx0LNhGWOwOSIbcpEz00lPNnsd4y'); // Replace with your Stripe Publishable Key

function CheckOut() {
  const Product = useSelector((state) => state.mycart.cart);
  console.log(Product);
  const totalAmount = Product.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handlePay = async () => {
    const stripe = await stripePromise;

    const cartItems = Product.map((item) => ({
  name: item.name,
  price: item.price,
  qty: item.qty,
  image: `${BASE_URL}/${item.defaultImage}`,
}));

console.log(cartItems);
    const response = await axios.post(`${BASE_URL}/create-checkout-session`, {
      cartItems,
    });

    const session = response.data;

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error(result.error.message);
    }
  };

  if (Product.length === 0) return <h4 align="center">Your cart is empty!</h4>;

  return (
    <>
      <h1 align="center">Your Checkout Page</h1>
      <div id="cartone">
        <Table striped bordered hover id="table">
          <thead>
            <tr>
              <th>Product Pic</th>
              <th>Product Name</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {Product.map((item, idx) => (
              <tr key={idx}>
                <td>
                  <img src={`${BASE_URL}/${item.defaultImage}`} width="80" height="60" alt={item.name} />
                </td>
                <td>{item.name}</td>
                <td>{item.brand}</td>
                <td>{item.price}</td>
                <td>{item.qty}</td>
                <td>{item.price * item.qty}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <h4 align="center" style={{ color: 'green', fontWeight: 'bold' }}>
        Your Total Payable Amount <HiDocumentCurrencyRupee />: {totalAmount}
      </h4>
      <div style={{ textAlign: 'center' }}>
        <Button onClick={handlePay}>Pay Now!</Button>
      </div>
    </>
  );
}

export default CheckOut;