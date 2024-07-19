import { Component } from "react";
import React from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h4>This is the profile Component</h4>
        <p>This is the practice session of Class Based Component</p>
        <h3>Name: {this.props.name}</h3>
        <h4>Grade: {this.props.grade}</h4>
      </div>
    );
  }
}
export default Profile;
