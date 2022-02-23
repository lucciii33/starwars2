import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = ({ data }) => {
  const { store, actions } = useContext(Context);
  const [icon, setIcon] = useState(false)
  const params = useParams();
  return (
    <div className=" container">
      <div className="card " style={{ width: "18rem" }}>
        <img
          src="https://cdn.onebauer.media/one/empire-images/features/57e3dfe50c6437272f5f6602/characters.jpg?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg"
          className="card-img-top"
          alt="..."
        />
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

          <div className="row">

            <div className="col-10">
              <Link to={{ pathname: "information/" + data.name, state: data }}>
                <button className="btn btn-primary d-flex justify-content-between m-1">
                  information
                </button>
              </Link>
            </div>
            <div className="col-2">
              <button
                onClick={() => {
                  actions.addFav(data);
                  setIcon(!icon)
                }}

              >
                {icon ? (
                  <i className="fas fa-heart"></i>
                ) : (
                  <i className="far fa-heart"></i>
                )}
              </button>
            </div>
          </div>


          {/*<i class="fas fa-heart"></i>*/}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  match: PropTypes.object,
};
