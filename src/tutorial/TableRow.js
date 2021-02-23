import React, { Component } from "react";

export default class TableRow extends Component {
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
