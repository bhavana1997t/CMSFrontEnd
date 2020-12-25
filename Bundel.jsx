import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Form, Button, InputGroup, FormControl, Jumbotron} from 'react-bootstrap';
import { Navbar, Nav, NavLink } from 'react-bootstrap';
import UpdateBundel from './UpdateBundel.jsx';
import './bundel.css'
import AddBundel from './AddBundel';
function Products(){
    return(
      <Router>
                 <div className="middle">
      <div className="text-center middle  bg-primary pb-2">
        <h1 className="text-light user"> Welcome to Customizer</h1>
      </div> 
      </div>  
      <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
       <div>
    <h5><Nav.Link href="/bundel/AddBundel">click here to Add Bundel</Nav.Link></h5>
      <Route path="/bundel/AddBundel" component= {AddBundel} />
<h5><Nav.Link href="/bundel/UpdateBundel">click here to Update Bundel</Nav.Link></h5>
      <Route path="/bundel/UpdateBundel" component= {UpdateBundel} />
      <br></br><br></br>
</div>
</Router>   )
            }
export default Products;