import React from 'react'
import vegans from "../images/vegans.jpg";
import order from "../images/order.jpg";
import cake from "../images/cake.jpg";
import Links from "../icl/Links";

function Container2() {
    return (
      <div>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-4 mt-3">
              <Links
                bgimg={vegans}
                heading="For Vegans"
                para="Burgers,Chickenfry,Drinks"
              />
            </div>
            <div className="col-md-4 mt-3">
              <Links
                bgimg={order}
                heading="Order Online"
                para="Avaliable Everyday 2pm to 9pm"
              />
            </div>
            <div className="col-md-4 mt-3">
              <Links
                bgimg={cake}
                heading="Special cakes"
                para="Every friday free cake avaliable"
              />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Container2
