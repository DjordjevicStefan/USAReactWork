import React from 'react';
import {Link} from "react-router-dom"

const AdminNavbar = (props) => {
  return ( 
    <div>
    <nav className="my-nav navbar navbar-expand-lg ">
       <Link to="/" className="logo-color">BenLeeds</Link>
  
 
    <ul className="navbar-nav ml-auto">
      <li className="ml-2 nav-item">
        <Link className="nav-link my-nav-link" to="/users" >Users </Link>
      </li>
      <li className="ml-2 nav-item">
        <Link className="nav-link my-nav-link" to="/vendors" >Vendors</Link>
      </li>
      <li className="ml-2 nav-item">
        <Link className="nav-link my-nav-link" to="/items" >Items</Link>
      </li>
      <li className="ml-2 nav-item">
        <Link className="nav-link my-nav-link" to="/jobs" >Jobs</Link>
      </li>
      <li className="ml-2 nav-item">
        <Link className="nav-link my-nav-link" to="/workorders" >Work orders</Link>
      </li>
      
    </ul>
  
</nav>

<div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">{props.pageName}</h1>
   
  </div>
</div>
</div>
   );
}
 
export default AdminNavbar;