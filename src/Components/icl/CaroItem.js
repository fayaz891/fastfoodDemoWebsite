import React from 'react'

function CaroItem(props) {
    return (
      <div>
      
          <img src={props.img} className="d-block w-100" alt="img1" />
          <div className="carousel-caption d-none d-md-block">
            <h3>{props.heading}</h3>
            <p>{props.para}</p>
          </div>
        </div>
    );
}

export default CaroItem;
