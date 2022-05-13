import React from "react";

const Spinner = () => {
  return (
    <div className="spinner-div">
      <img className="spinner" src={require("./Do.gif")} alt="Loading" />
    </div>
  );
};
export default Spinner;
