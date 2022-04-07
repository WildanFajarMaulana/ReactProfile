import React,{Fragment,Component} from 'react';
import web1 from '../../image/webb1.PNG';
import webb2 from '../../image/webb2.PNG';
import web3 from '../../image/web2.PNG';
import tambahProject from '../tambahProject/tambahProject';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './resume.css';
import Project from '../project/project';

class Resume extends Component {

		state={
			show:false,
         dataProject:[]
         
		}
	
	getDataApi=()=>{
       axios.get('http://localhost:3004/dataProject')
       .then(res=>{
         this.setState({
            dataProject:res.data
         })
       })
   }
	
	
	handleModal(){
		this.setState({
			show:true
		})
	}
   handleClose(){
      this.setState({
         show:false
      })
   }
	componentDidMount(){
      this.getDataApi();
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
			<div>
				<div className="kotak-resume">
					<div className="container">
						<h4>Project Saya</h4>
						<div className="row">
								<div className="col">
									<div className="gambar1">
										 <img src={web1}  />
									</div>
								   
								</div>
						</div>
						<div className="row text-center">
								<div className="col">
									<div className="gambar2">
										<img src={webb2} />
									</div>
								    
								</div>
						</div>
						<div className="row">
								<div className="col">
									<div className="gambar3">
										<img src={web3} />
									</div>
								    
								</div>
						</div>

						<div className="row">
								<div className="col md-4">
									<div className="kotak-tambah-project">
										<button  onClick={()=>this.handleModal()} >tambahProject</button>								
								   </div>
								</div>

						  <Modal show={this.state.show} >
					        <Modal.Header >
					          <Modal.Title>Add Project</Modal.Title>
					        </Modal.Header>
					        <Modal.Body>
                       <label>fotoProject</label><br />
                        <input type="file" placeholder="fotoProject" name="fotoProject" />
                        <br />
                        <label>fotoProject</label><br />
                       <input type="text" placeholder="namaProject" name="namaProject" />
                       <br />
                        <label>fotoProject</label><br />
                        <input type="text" placeholder="linkProject" name="linkProject" />

                       </Modal.Body>
					        <Modal.Footer>
					          <Button variant="secondary" onClick={()=>this.handleClose()} >
					            Close
					          </Button>
					          <Button variant="primary" >
					            Save Changes
					          </Button>
					        </Modal.Footer>
					      </Modal>	
                        
                   {
            this.state.dataProject.map(post=>{
               return  <Project key={post.id} project={post}  />
            })
         }
						</div>

					</div>
				</div>
           
			</div>
			
			</Fragment>
			
			
		)
	}
}

export default Resume;