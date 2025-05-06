import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';


const InsertProduct = ()=>{

    const [input, setInput] = useState("");
    const [image, setImages] = useState("");

  const handelInput = (e)=>{
    const name= e.target.name;
    const value = e.target.value;
    setInput(values=>({...values, [name]:value}));
    console.log(input)
  }

  const handelImages = (e)=>{
      setImages(e.target.files);
      console.log(image);
  }

   const handelSubmit = async(e)=>{
    e.preventDefault();
    const api = "http://localhost:8000/data/InsertProduct";
    const formData = new FormData();
    for(let key in input){
        formData.append(key, input[key]);
    }

    for(var i=0;i<image.length;i++){
        formData.append("image", image[i]);
    }
   

   try {
    const response = await axios.post(api, formData);
    console.log(response.data);
    // alert(response.data.msg)
    toast.success(response.data.msg)
   } catch (error) {
    console.log(error);
   }
}


    return(
        <>
        <div id="from">
        <h1>Product Insert Page</h1>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Product name</Form.Label>
        <Form.Control type="text"  name='name' value={input.name} onChange={handelInput}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmaila">
        <Form.Label>Enter Product brand</Form.Label>
        <Form.Control type="text"  name='brand' value={input.brand} onChange={handelInput}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmails">
        <Form.Label>Enter Product Price</Form.Label>
        <Form.Control type="text"  name='price' value={input.price} onChange={handelInput}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Upload Images</Form.Label>
        <Form.Control type="file" multiple onChange={handelImages} />
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={handelSubmit}>
        Submit
      </Button>
    </Form>
    </div>
    <ToastContainer />
        </>
    )
}

export default InsertProduct;