import React, { Component } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

class FrontSpinner extends Component {
  render() {
    return (
      <div style={{margin: "50% 50%"}}>
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      </div>
    );
  }
}

export default FrontSpinner;
