import React from 'react'

function ServCard(props) {
    return (
      <div>
        <div className="card">
          <img
            src={props.img}
            className="card-img-top p-4"
            style={{ borderRadius: "50%" }}
            alt="service1"
          />
          <div className="card-body">
          <h4 className="card-header-pills text-center text-dark">{props.head}</h4>
           
          </div>
        </div>
      </div>
    );
}

export default ServCard
