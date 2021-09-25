import React from 'react'

function GallCard(props) {
    return (
      <>
        <div className="card">
          <div className="card-img" style={{width:"18rem",borderRadius:"3rem 0 3rem"}}>
            <img src={props.img} className="card-img-top img-fluid" alt="cardimg" />
          </div>
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.type}</p>
            <p className="card-text">{props.price}</p>
          </div>
        </div>
      </>
    );
}

export default GallCard
