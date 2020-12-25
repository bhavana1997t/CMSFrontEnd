import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Form, Button, FormControl} from 'react-bootstrap';
import {  Nav } from 'react-bootstrap';
import UpdateProduct from './UpdateProduct.jsx';
import './product.css'
import AddProducts from './AddProduct';


function Products(){
    return(
      <Router>
          <div className="middle">
      <div className="text-center middle  bg-primary pb-2">
        <h1 className="text-light user"> Welcome to Customizer</h1>
      </div> 
    </div>  
       <div>
       <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
       
      <h5><Nav.Link href="/products/AddProduct">click here to Add Products</Nav.Link></h5>
      <Route path="/products/AddProduct" component= {AddProducts} />
      <h5><Nav.Link href="/products/UpdateProduct">click here to Update Products</Nav.Link></h5>
      <Route path="/products/UpdateProduct" component= {UpdateProduct} />
      <br></br><br></br>
</div>
</Router> )
            }
export default Products;