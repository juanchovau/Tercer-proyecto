import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Productos from "../Productos/Productos"
import Historia from "../Historia/Historia"
import Navegation from "../Navegation/Nevegation"


export default function Layout() {


  return (
   
    <div >
      <Router>
		<div>
			<Navegation />

		<Switch>
			<Route path="/Tercer-proyecto/" exact component={Productos} />
			<Route path="/Tercer-proyecto/historia"  component={Historia} />
		</Switch>

		</div>
		</Router>
    </div>


  );
}



