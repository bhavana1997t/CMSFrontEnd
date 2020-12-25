import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Form, Button, InputGroup, FormControl, Jumbotron} from 'react-bootstrap';
import { Navbar, Nav, NavLink } from 'react-bootstrap';
import UpdateCompany from './UpdateCompany';
import './company.css'
import AddCompany from './AddCompany';
function Company(){
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
    <h5><Nav.Link href="/company/AddCompany">click here to Add Company</Nav.Link></h5>
      <Route path="/company/AddCompany" component= {AddCompany} />
<h5><Nav.Link href="/company/UpdateCompany">click here to Update Company</Nav.Link></h5>
      <Route path="/company/UpdateCompany" component= {UpdateCompany} />
      <br></br><br></br>
</div>
</Router>   )
            }
export default Company;