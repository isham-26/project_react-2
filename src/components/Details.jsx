import React from "react";
import "../styles/Details.css";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
// import { showdata } from "./Contect";
const Details = ({ data, Delete }) => {
  
  return (
    <>
      <div className="details">
        {data.map((element, index) => {
          return (
          
              <div className="contant" key={index}>
                <span>{index+1}</span>
                <span>{element.Name}</span>
                <span>{element.email}</span>
                <span>{element.feedback}</span>
                <div className="text">
                  <p>{element.text}</p>
                </div>
                <HighlightOffIcon onClick={() => Delete(index)} />
              </div>
          );
        })}
      </div>
    </>
  );
};

export default Details;