import React, { Component } from "react";
import Header from "./Header";
import Left from "./Left";
import Right from "./Right";
import Content from "./Content";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div Class="container">
        <Header />
        <div Class="row content">
          <div Class="col-sm-2 sidenav">
            <Left />
          </div>
          <div Class="col-sm-8 text-left">
            <Content />
          </div>
          <div Class="col-sm-2 sidenav">
            <Right />
          </div>
        </div>
        <div Class="container-fluid text-center">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
