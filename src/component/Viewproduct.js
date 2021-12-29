import React from 'react'
import {Table} from'react-bootstrap'

function Viewproduct({item}) {
    return (
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
           <>
            {/* <td>{item.product_code}</td>
                  <td>{item.product_name}</td>
                  <td>{item.quantity}</td> */}
                  console.log({item.product_code});
           
           </>
                 
                
              

           
          }

        </tbody>
      </Table>
    );
}

export default Viewproduct
