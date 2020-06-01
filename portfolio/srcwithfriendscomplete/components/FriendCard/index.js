import React from "react";
import "./style.css";



function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <a href={props.site}><strong>Deployed Site</strong></a>
          </li>
          <li>
            <a href={props.github}>Visit Repo:</a>
            </li>
        </ul>
      </div>
      {/* <span onClick={() => props.removeFriend(props.id)} className="remove">𝘅</span> */}
    </div>
  );
}

export default FriendCard;
