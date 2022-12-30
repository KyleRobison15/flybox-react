import React, { Component } from "react";
class Profile extends Component {
  state = {};
  render() {
    const { user } = this.props;
    if (user) {
      return (
        <div className="container">
          <h1 className="display-1">Profile for: {user.username}</h1>
          {/* <FlyBase /> */}
        </div>
      );
    }
  }
}

export default Profile;
