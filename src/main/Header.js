import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var i = 0;
    var style = {
      color: "red"
    };
    return (
      <div>
        <nav Class="navbar navbar-inverse">
          <div Class="container-fluid">
            <div Class="navbar-header">
              <button
                type="button"
                Class="navbar-toggle"
                data-toggle="collapse"
                data-target="#myNavbar"
              >
                <span Class="icon-bar" />
                <span Class="icon-bar" />
                <span Class="icon-bar" />
              </button>
              <a style={style} Class="navbar-brand" href="#">
                {this.props.title} {i == 1 ? 1 : 2}
              </a>
            </div>
            <div Class="collapse navbar-collapse" id="myNavbar">
              <ul Class="nav navbar-nav">
                <li Class="active">
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Projects</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
              <ul Class="nav navbar-nav navbar-right">
                <li>
                  <a href="#">
                    <span Class="glyphicon glyphicon-log-in" /> Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
