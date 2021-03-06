import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

//// bootstrap and custom css 
import 'bootstrap/dist/css/bootstrap.css';
import "react-datepicker/dist/react-datepicker.css";

import './App.css';

//// import of cutom components
import AdminPanel from './components/adminPanel';
import Users from './components/users';
import User from './components/user';
import Vendors from './components/vendors';
import Vendor from './components/vendor';
import Items from './components/items';
import WorkOrder from './components/workOrder';
import Jobs from './components/jobs';


function App() {
  return (
    <div className="App">
       <Switch>
        
         <Route path="/admin/workorder/:id" component={WorkOrder} />
         <Route path="/admin/users/:id"  component={User} />
         <Route path="/admin/users"  component={Users} />
         <Route path="/admin/vendor/:id"  component={Vendor} />
         <Route path="/admin/vendors"  component={Vendors} />
         <Route path= "/admin/items"  component={Items} />
         <Route path ="/admin/jobs" component={Jobs} />
          <Route path="/admin"  component={AdminPanel} />
        
         {/* <Redirect to="/admin" /> */}
       </Switch>
        
      
    </div>
  );
}

export default App;
