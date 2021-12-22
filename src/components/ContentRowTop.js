import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import ContentRowMovies from './ContentRowMovies';
import Chart from './Chart';
import Error404 from './Error404'
import {useParams} from 'react-router-dom'

function ContentRowTop(){
	const {component} = useParams();
	let contenido;
	if(component){
		contenido=getComponent(component)
	}else{
		contenido=AllComponent()
	}	
	function getComponent(component){
		switch (component) {
			case "pages":
				return(
					<ContentRowMovies />)
			case "charts":
				return(
					<ContentRowCenter />)
			case "tables":
				return(
					<Chart />)			
			default:
				return(
					<Error404/>
				)
		}
	}
	function AllComponent(){		
		return(
			<>
				<ContentRowMovies />			
				<ContentRowCenter />	
				<Chart />
			</>
		)	
		
	}
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					{
						contenido
					}
	
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;