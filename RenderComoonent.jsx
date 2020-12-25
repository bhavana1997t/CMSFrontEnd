import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Navbar, Nav, NavLink } from 'react-bootstrap';
import CompanyHome from './Company/Companies';
import products from './Products/Products'
import plan from './Plans/Plans'
import bundel from './Bundel/Bundel'
import charges from './Charges/Charges'
import HomePage from './HomePage';
class  RenderComponent extends Component{
   
    
    render() {

        return (
            <div>
            <Router>
              <Route exact path="/" component={HomePage}/>
                <Route path="/company" component={CompanyHome} />
                <Route path="/products" component={products} />
                <Route path="/Plans" component={plan} />
                <Route path='/charges' component={charges}/>
                <Route path='/bundel' component={bundel}></Route>
                
            </Router>
            </div>
        );
    }
 }

 export default RenderComponent;