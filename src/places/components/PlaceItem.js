import React, { useState } from "react";
import Card from "../../shared/components/UIElements/Card";
import "./PlaceItem.css";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import Map from "../../shared/components/UIElements/Map";

export default function PlaceItem(props) {
  const [showMap, setShowMap] = useState(false);

  function toggleMapHandler() {
    setShowMap(showMap ? false : true);
  }

  return (
    <>
    <Modal show={showMap} toggleModal={toggleMapHandler}
    header={props.adress}
    contentClass="place-item__modal-content" 
    footerClass="place-item__modal-actions" 
    footer={<Button onClick={toggleMapHandler}>CLOSE</Button>}
    >
<div className="map-container">
  <h2>Map</h2>
</div>

    </Modal>
    <li className="place-item">
      <Card className="place-item__content">
        <div className="place-item">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
        </div>
        
        <div className="place-item__info">
          <h2>{props.title}</h2>
          <h3>{props.address}</h3>
          <p>{props.description}</p>
        </div>
        <div className="place-item__actions">
          <Button onClick={toggleMapHandler} inverse>VIEW ON MAP</Button>
          <Button to={`/places/${props.id}`}>EDIT</Button>
          <Button danger>DELETE</Button>
        </div>
      </Card>
    </li>
    </>
  );
}
