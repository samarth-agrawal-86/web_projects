import React from "react";
import "./Users.css";
import Avatar from "../components/Avatar";
import Card from "../components/Card";

function Users() {
  // create a JS object User with the following properties: id, name, image, places
  const USER = {
    id: 1,
    name: "John Doe",
    image: "https://picsum.photos/200/300",
    places: 3,
  };

  return (
    <div className="users-list">
      <h1>Users Page</h1>
      <div className="user-item">
        <Card className="user-item__content">
          <div className="user-item__image">
            <Avatar image={USER.image} alt="user" />
          </div>
          <div className="user-item__info">
            <h2>{USER.name}</h2>
            <h3>{USER.places} places</h3>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Users;
