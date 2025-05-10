import React from "react";
import "./UserClass.css";

export class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        // name: "Pankaj Gaikwad",
        // bio: "Software Engineer",
      },

    };
  }

  async componentDidMount() {
    let data = await fetch("https://api.github.com/users/ketan-0702");
    let json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, bio, avatar_url,username } = this.state.userInfo;
    return (
        <div id="imguser">
        <img src={avatar_url} alt="img" />
      <div id="user">
        <h1>{username}</h1>
        <h2>{bio}</h2>
        </div>
      </div>
    );
  }
}
