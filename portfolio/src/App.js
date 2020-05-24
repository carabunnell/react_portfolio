import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
// import "./App.css";

class App extends Component {
  state = {
    friends
  };

removeFriend = id => {
  const friends = this.state.friends.filter(friend => friend.id !== id);
  this.setState({ friends });
}
render() {
  return (
    <Wrapper>
      <Title>My Portfolio</Title>
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
    </Wrapper>
  )
  }
}

export default App;