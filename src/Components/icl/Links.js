import React from 'react'
import { NavLink } from 'react-router-dom';

function Links(props) {
    return (
      <div>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <div
            className="links"
            style={{ backgroundImage: `url(${props.bgimg})` }}>
            <div className="d-flex flex-column h-100 justify-content-end ms-3">
              <h1>{props.heading}</h1>
              <p>{props.para}</p>
            </div>
          </div>
        </NavLink>
      </div>
    );
}

export default Links
