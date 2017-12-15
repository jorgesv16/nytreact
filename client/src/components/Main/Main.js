import React from "react";
import { Query, Results } from "../Search"
import Saved from "../Saved"

const Main = props => (
  <div className="container">
    {console.log(prop)}

    <div className="jumbotron" style="background-color: #20315A ; color: white;">
      <h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
    </div>

    <Query />
    <Results />

    <Saved />

  </div>
);

export default Main;