import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import { Card } from "./card";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container ">
      <div className="scroll">
        <div className="d-flex p-3 m-4">
          {store.characters
            ? store.characters.map((character, index) => (
                <Card 
                  data={{
                    name: character.name,
                    prop1: "mass ",
                    prop2: "gender ",
                    prop3: "eye Colors ",
                    value1: character.mass ,
                    value2: character.gender ,
                    value3: character.eye_color ,
                  }}
                  key={index}
                />
              ))
            : "loading"}
        </div>
      </div>
      <div className="scroll">
        <div className="d-flex p-3 m-4">
          {store.planets
            ? store.planets.map((planet, index) => (
                <Card
                  data={{
                    name: planet.name,
                    prop1: "Gravity ",
                    prop2: "climate ",
                    prop3: "eye Colors ",
                    value1: planet.gravity,
                    value2: planet.climate,
                    value3: planet.pupilation,
                  }}
                  key={index}
                />
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
