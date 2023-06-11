import React from 'react';

const Card = (props) => {
  return (
      <div class="container">
        <div class="card">
          <div class="image_container">
            <img src={props.image} alt="image" />
          </div>
          <div class="detail_container">
            <div class="location">
              <img
                src="https://img.icons8.com/?size=512&id=13800&format=png"
                alt="location_icon"
              />
              <p>{props.country}</p>
              <a href={props.map} target="”_blank”">
                View on google map
              </a>
            </div>
            <div class="location_name">
              <h2>{props.location}</h2>
            </div>
            <div class="description">
              <p>
                <strong> {props.date}</strong>
              </p>
              <p>{props.description}</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Card;
