import React, { Component } from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, name: "AAA", age: 22 },
        {
          id: 2,
          name: "BBB",
          age: 33
        },
        {
          id: 3,
          name: "CCC",
          age: 444
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <Header name={this.props.name} />
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
  name: "World2"
};
class TableRow extends Component {
  render() {
    return (
      <tr id={this.props.key}>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
      </tr>
    );
  }
}
class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}

class Content extends Component {
  render() {
    return (
      <div>
        <h1>Content</h1>
        <p>Content</p>
      </div>
    );
  }
}

export default App;
