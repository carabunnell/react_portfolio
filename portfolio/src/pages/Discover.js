import React, { Component } from "react";
import FriendCard from "../components/FriendCard";
import friends from "../friends.json";

// import API from "../utils/API";
// import Card from "../components/Card";
// import Alert from "../components/Alert";

class Discover extends Component {
  state = {
    friends
  };

  render() {
    return (
      <div>
        <h1 className="text-center">My Portfolio</h1>
        <h3 className="text-center">
          It's so great, isn't it?!
        </h3>
        {this.state.friends.map(friend => (
        <FriendCard
        removeFriend={this.removeFriend}
        id={friend.id}
        key={friend.id}
        name={friend.name}
        image={friend.image}
        github={friend.github}
        site={friend.site}
        />
      ))}
      </div>
    );
  }
}

export default Discover;
