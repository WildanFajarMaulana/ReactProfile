import React,{Component,Fragment} from 'react';
import Landingpage from '../landingpage/landingpage';
import Resume from '../resume/resume';
import TambahProject from '../tambahProject/tambahProject';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";

class Beranda extends Component{
	componentDidMount(){

	}
	render(){
		return (
			<Router>
			<Fragment>
			
			<Route path="/" exact component={Landingpage} />
			<Route path="/r" 		 component={Resume} />
			<Route path="/tambahProject" component={TambahProject} />
		
			</Fragment>
			</Router>
		)
	}
}

export default Beranda;