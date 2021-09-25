import React from 'react'
import order from "../images/order.jpg";

function AboutUs() {
    return (
      <>
        <div className="container h-100" >
          <div className="row">
            <h2 className="text-center fw-bold my-5 about">About us</h2>
            <div className="col-md-6">
              <p className="w-75 fw-bold my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                maiores labore ad, iste quos corporis consequuntur architecto
                excepturi deserunt, itaque pariatur reprehenderit tenetur,
                repellendus provident suscipit quasi dolore? Quis, eaque? itaque
                pariatur reprehenderit tenetur, repellendus provident suscipit
                quasi dolore? Quis, eaque?
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={order}
                className="my-4"
                alt="about us img"
                width="100%"
              />
            </div>
          </div>
        </div>
      </>
    );
}

export default AboutUs
