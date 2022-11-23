import React from "react";
import Avatar from "../../shared/components/UIElements/Avatar";
import "./UserItem.css";
import { Link } from "react-router-dom";

export default function UserItem({ id, image, name, placeCount }) {
  return (
    <li className="user-item">
      <Link to={`/${id}/places`}>
        <div className="user-item__content">
          <div className="user-item__image">
            <Avatar image={image} width={"100px"} />
          </div>
          <div className="user-item__info">
            <h2>{name}</h2>
            <p>
              {placeCount} {placeCount === 1 ? "Place" : "Places"}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
}
