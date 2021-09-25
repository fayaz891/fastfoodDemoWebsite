import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '@material-ui/core';
import HomeIcon from "@material-ui/icons/Home";
import LocalLaundryServiceIcon from "@material-ui/icons/LocalLaundryService";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import InfoIcon from "@material-ui/icons/Info";
import SearchIcon from "@material-ui/icons/Search";



function Navbar() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav
                className="navbar navbar-expand-lg navbar-light container"
                style={{ backgroundColor: "#ff9b9b33", borderRadius: "1.5rem" }}
              >
                <div className="container-fluid">
                  <NavLink className="navbar-brand fw-bold" exact to="/">
                    Quick Food
                  </NavLink>

                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/">
                          <Button
                            variant="outlined"
                            color="primary"
                            startIcon={<HomeIcon />}
                          >
                            Home
                          </Button>
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" exact to="/service">
                          <Button
                            variant="outlined"
                            color="primary"
                            startIcon={<LocalLaundryServiceIcon />}
                          >
                            Services
                          </Button>
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" exact to="/gallery">
                          <Button
                            variant="outlined"
                            color="primary"
                            startIcon={<PhotoLibraryIcon />}
                          >
                            Gallery
                          </Button>
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" exact to="/contact">
                          <Button
                            variant="outlined"
                            color="primary"
                            startIcon={<PermContactCalendarIcon />}
                          >
                            Contact
                          </Button>
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" exact to="/about">
                          <Button
                            variant="outlined"
                            color="primary"
                            startIcon={<InfoIcon />}
                          >
                            About
                          </Button>
                        </NavLink>
                      </li>
                      <li className="ms-2 my-auto">
                        <NavLink to="/Search">
                          <SearchIcon color="primary" />
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </>
    );
}

export default Navbar
