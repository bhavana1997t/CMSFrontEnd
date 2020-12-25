import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Form, Button, InputGroup, FormControl, Jumbotron} from 'react-bootstrap';
import { Navbar, Nav, NavLink } from 'react-bootstrap';
import UpdateCharge from './UpdateCharges.jsx'
import './charge.css'
import AddCharges from './AddCharges.jsx';
function Charges(){
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
    <h5><Nav.Link href="/charges/AddCharges">click here to Add Charges</Nav.Link></h5>
      <Route path="/charges/AddCharges" component= {AddCharges} />
<h5><Nav.Link href="/charges/UpdateCharges">click here to Update Charges</Nav.Link></h5>
      <Route path="/charges/UpdateCharges" component= {UpdateCharge} />
      <br></br><br></br>
</div>
</Router>   )
            }
export default Charges;