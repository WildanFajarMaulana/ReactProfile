import React from 'react';
import  './project.css';

const Project=(props)=>{
	return (
							<div className="container">
								<div className="row">
									<div className=" data">
									
										<p>{props.project.title}</p>
										<p>{props.project.author}</p>
									
									</div>
								</div>	

							
										
							</div>
								
	)

}

export default Project;