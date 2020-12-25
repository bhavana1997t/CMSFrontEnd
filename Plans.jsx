import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Form, Button, InputGroup, FormControl, Jumbotron} from 'react-bootstrap';
import { Navbar, Nav, NavLink } from 'react-bootstrap';
import UpdatePlans from './UpdatePlans.jsx';
import './plan.css'
import AddPlans from './AddPlans';
function Plans(){
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
    <h5><Nav.Link href="/Plans/AddPlans">click here to Add Plans</Nav.Link></h5>
      <Route path="/Plans/AddPlans" component= {AddPlans} />
<h5><Nav.Link href="/Plans/UpdatePlans">click here to Update Plans</Nav.Link></h5>
      <Route path="/Plans/UpdatePlans" component= {UpdatePlans} />
      <br></br><br></br>
</div>
</Router>   )
            }
export default Plans;