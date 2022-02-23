import React, { useState, useEffect} from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";


export const Information = () => {
	
	var data = useLocation().state;
	return (
		<div className="cointainer d-flex aligns-items-center justify-content-center">
			<div className="card mb-3" style={{maxWidth: "1000px"}}>
       <div className="row g-0">
        <div className="col-6">
          <img className="w-100" src="https://cdn.onebauer.media/one/empire-images/features/57e3dfe50c6437272f5f6602/characters.jpg?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg" className="card-img-top" className="img-fluid rounded-start" alt="..."/>
        </div>
      <div className="col-6 card-body">
      <div className="card-body">
        <h5 className="card-title">{data.name}</h5>
        <p className="card-text">
			{data.prop1}: {data.value1}
		  </p>
      <p className="card-text">
			{data.prop2}: {data.value2}
		  </p>
      <p className="card-text">
			{data.prop3}: {data.value3}
		  </p>
		 
        <p className="card-text"><small className="text-muted">keep Learning</small></p>
      <Link to="/">
		<button className="btn btn-primary">Back home</button>
		</Link>

      </div>
    </div>
  </div>
</div>
		</div>
	);
};

Information.propTypes = {
	match: PropTypes.object
};
