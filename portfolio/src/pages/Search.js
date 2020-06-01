import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";

class Search extends Component {
  
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1 className="text-center">Contact Me!</h1>
          <h4 className="text-center"><strong>Email: </strong>carabunnell@gmail.com</h4>
          <h4 className="text-center"><strong>Phone: </strong>619.840.9345</h4>

          
        </Container>
      </div>
    );
  }
}

export default Search;
