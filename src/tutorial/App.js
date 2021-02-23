import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import TableRow from "./TableRow";
import Content from "./Content";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, name: "AAA", age: 22 },
        { id: 2, name: "BBB", age: 33 },
        { id: 3, name: "CCC", age: 444 }
      ]
    };
    //this.AddRow = this.AddRow.bind(this);
  }
  AddRow() {
    ReactDOM.findDOMNode(document.getElementById("addRow")).style.color = "red";
    var olddata = this.state.data;
    var data = {
      id: olddata.length + 1,
      name: "DDD",
      age: 55
    };

    olddata.push(data);
    console.log(olddata);
    this.setState({ data: olddata });
  }

  render() {
    return (
      <div>
        <Header name={this.props.name} />
        <button id="addRow" onClick={this.AddRow.bind(this)}>
          Add Row
        </button>
        <table border="2">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((d, i) => (
              <TableRow key={i} data={d} />
            ))}
          </tbody>
        </table>
        <Content />
      </div>
    );
  }
}

App.defaultProps = {
  name: 123
};

export default App;
