import React from 'react'
import { useState } from 'react';
import { Form, Button, Table } from 'react-bootstrap'
function Addproduct() {
  const [input, setInput] = useState('');
  let initial = []
  const [products, setProducts] = useState([])

  const add = (event) => {
    event.preventDefault();
    // console.log(event.target.product_name.value);
    const formData = event.target;
    const newProduct = {
      product_code: formData.product_code.value,
      product_name: formData.product_name.value,
      quantity: formData.quantity.value
    }
    // console.log(newProduct);
    setProducts([...products, newProduct])
    console.log(products);
  }

  return (
    <div className="Product">
      <label>No of products:</label>
      <input value={input} onInput={e => setInput(e.target.value)} />

      <Form onSubmit={add}>
        <input
          name="product_code"
          placeholder="Enter Product_Code" />
        <input
          name="product_name"
          placeholder="Enter Product_name" />
        <input
          name="quantity"
          placeholder="Enter quantity" />
        <Button variant="primary" type="submit">
          Add Product
        </Button>
      </Form>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Index</th>
            <th>Product Code</th>
            <th>Product name</th>
            <th>quantity</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{item.product_code}</td>
                  <td>{item.product_name}</td>
                  <td>{item.quantity}</td>

                </tr>
              )

            })
          }

        </tbody>
      </Table>
    </div>
  );

}

export default Addproduct
