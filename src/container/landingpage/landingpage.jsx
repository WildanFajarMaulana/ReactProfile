import React,{Component,Fragment} from 'react';
import './landingpage.css';
import logo1s from './../../image/logo1s.svg';
import logo2s from './../../image/logo2s.svg';
import landing from './../../image/landing.PNG';
import Jumbotron from 'react-bootstrap/Jumbotron';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";

class LandingPage extends Component{
	componentDidMount(){
		
	}
	render(){
		return(
			<Fragment>
		
			<div className="">

			
				<nav className="navbar navbar-expand-lg ">
				        <div className="container">
				            <Link to="/" className="navbar-brand" href="#">WIL-<span >DEV</span></Link>
				              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				                <span className="navbar-toggler-icon"></span>
				              </button>
				              <div className="collapse navbar-collapse" id="navbarNav">
				                <ul className="navbar-nav ml-auto">
				                  <li className="nav-item active">
				                    <Link to="/" className="nav-link" href="#">ABOUT ME<span className="sr-only">(current)</span></Link>
				                  </li>
				                  <li className="nav-item">
				                    <Link to="/resumenih" className="nav-link" href="">RESUME</Link>
				                  </li>
				                  <li className="nav-item">
				                    <Link to="/tambahProject" className="nav-link" href="#">PROJECT</Link>
				                  </li>
				                  <li className="nav-item">
				                    <Link className="nav-link nav-button-link" href="#">CONTACT</Link>
				                  </li>
				                </ul>
				              </div>
				        </div>
				</nav>
			</div>
			<div className="kotak-jumbo">
 				 <div className="container">
			    <div className="row">
			        <div className="col">
			            <div className="garis-atas">Hi...,Im Wildan Fajar M</div>
			            <h1 className="h1-profesi">WEB</h1>
			            <h1 className="h1-profesi profesi-back">DEVELOPER</h1>
			            <h3 className="h3-profesidepan">WEB <br /><span className="span-back">DEVELOPER</span></h3>
			            <hr className="garisbawah1" /><hr className="garisbawah2" /><hr className="garisbawah3" />
			        </div>
			        <div className="col">
			            <div className="kotak-name">
			                <img src="  " />
			            </div>
			            <div className="sosmed">
			                <i className="fab fa-instagram logo-sosmed1"></i>
			                <i className="fab fa-facebook-square logo-sosmed"></i>
			                <i className="fab fa-whatsapp logo-sosmed"></i>
			                <i className="fab fa-invision logo-sosmed"></i>
			                <i className="fab fa-github logo-sosmed"></i>

			            </div>

			        </div>
			        </div>
			         <center>
				        <i className="fas fa-toggle-on"></i>
				    </center>
			    
			        </div>
			</div>

			    
				   
			
			<div className="kotak-bawah1">
				<div className="container">
					<div className="row">
						<div className="col">
						 <img src={logo1s} className="logo" />
						</div>
						<div className="col ">
							<h3 className="h3-about"><span>HI,</span>..Im Wildan Fajar Maulana</h3>
							<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  </p>
						</div>
					</div>
				</div>
			</div>
			<div className="kotak-bawah2">
				<div className="container">
					<div className="row">
						<div className="col">
							<h3 className="h3-prog"><span>PROGRAM,</span>..me</h3>
							
						 	<i class="fab fa-html5 logoawesome"></i>
						 	<i class="fab fa-css3-alt logoawesome"></i>
						 	<i class="fab fa-js logoawesome"></i>
						 	<i class="fab fa-react logoawesome"></i>
						 	<i class="fab fa-vuejs logoawesome"></i>
						 	<i class="fab fa-bootstrap logoawesome"></i>
						 	<i class="fab fa-github logoawesome"></i>
						 	 <i class="fab fa-html5 logoawesome"></i>
						 	<i class="fab fa-css3-alt logoawesome"></i>
						 	<i class="fab fa-js logoawesome"></i>
						 	<i class="fab fa-react logoawesome"></i>
						 	<i class="fab fa-vuejs logoawesome"></i>
						 	<i class="fab fa-bootstrap logoawesome"></i>
						 	<i class="fab fa-github logoawesome"></i>
						 		 <i class="fab fa-html5 logoawesome"></i>
						 	<i class="fab fa-css3-alt logoawesome"></i>
						 	<i class="fab fa-js logoawesome"></i>
						 	<i class="fab fa-react logoawesome"></i>	 <i class="fab fa-html5 logoawesome"></i>
						 	<i class="fab fa-css3-alt logoawesome"></i>
						 	<i class="fab fa-js logoawesome"></i>
						 	<i class="fab fa-react logoawesome"></i>
						 	<i class="fab fa-vuejs logoawesome"></i>
						 	<i class="fab fa-bootstrap logoawesome"></i>
						 	<i class="fab fa-github logoawesome"></i>
						 	<i class="fab fa-vuejs logoawesome"></i>
						 	<i class="fab fa-bootstrap logoawesome"></i>
						 	<i class="fab fa-github logoawesome"></i>
						 		 <i class="fab fa-html5 logoawesome"></i>
						 	<i class="fab fa-css3-alt logoawesome"></i>
						 	<i class="fab fa-js logoawesome"></i>
						 	<i class="fab fa-react logoawesome"></i>
						 	<i class="fab fa-vuejs logoawesome"></i>
						 	<i class="fab fa-bootstrap logoawesome"></i>
						 	<i class="fab fa-github logoawesome"></i>
						</div>
						<div className="col ">
							 <img src={logo2s} className="logo" />
						</div>
					</div>
				</div>
			</div>
			<div className="kotak-bawah3">
				<div className="container">
					<div className="row">
						<div className="col">
							<h3 className="h3-web text-center"><span>PROJECT,</span>..gw yang gg gaming</h3>
						</div>
						
					</div>
					<div className="row text-center justify-content-center">
						<div className="col  ">
								<div className="wadah-logolanding1">
									<img src={landing} className="logolanding" />
								</div>
						</div>
						<div className="col">
								<div className="wadah-logolanding2">
									<img src={landing}  className="logolanding" />
								</div>
						</div>
						<div className="col">
								<div className="wadah-logolanding3" >
									<img src={landing}  className="logolanding" />
								</div>
						</div>
						
					</div>
					<div className="row">
						<div className="col ">
								<div className=" kotak-button">
								Kunjungi Web Saya 
								<a><button className="btn btn-warning">Kunjungi</button></a>
						</div>
						</div>
					</div>

				</div>
			</div>
			<div className="kotak-footer">
				<div className="container">
					<div className="row text-center">
						<div className="col">
							  <div className="kotak-name-footer">
			                <img src="  " />

			            </div>
			            <p className="p-footer">copyright 2020 by wildan</p>
						</div>
					
					</div>
				</div>
			</div>
			</Fragment>

		)
	}
}

export default LandingPage;