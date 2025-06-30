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
    let data = await fetch("https://api.github.com/users/devketan-ikhankar");
    let json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, bio, avatar_url,username,email } = this.state.userInfo;
    return (
        <div id="imguser">
        <img src={avatar_url} alt="img" />
      <div id="user">
        <h1>{username}</h1>
        <h2>{bio}</h2>
        <h3>{name}</h3>
      
      
        </div>
      </div>
    );
  }
}
