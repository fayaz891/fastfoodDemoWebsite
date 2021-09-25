import React from 'react'
import ServCard from '../icl/ServCard';
import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import img4 from "../images/vegans.jpg";
import {Button} from "@material-ui/core"
import { NavLink } from 'react-router-dom';

function Service() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6 col-lg-3">
              <ServCard img={img1} head="Fresh Salad" />
            </div>
            <div className="col-md-4 col-sm-6 col-lg-3">
              <ServCard img={img2} head="Party platters" />
            </div>
            <div className="col-md-4 col-sm-6 col-lg-3">
              <ServCard img={img1} head="Sea food" />
            </div>
            <div className="col-md-4 col-sm-6 col-lg-3">
              <ServCard img={img4} head="Vegan deserts" />
            </div>

            <Button variant="outlined" color="primary" className="my-5 mx-auto w-auto">
              <NavLink to="/" className="text-decoration-none">Browse more</NavLink>
            </Button>
          </div>
        </div>
      </div>
    );
}

export default Service
