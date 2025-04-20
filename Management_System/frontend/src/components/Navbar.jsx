import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-sm "
        style={{
          background: "rgba(62, 133, 233, 0.88)",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.22)",
          padding: "0.75rem 0.75rem",
        }}
      >
        <div className="container">
          <NavLink
            className="navbar-brand"
            to=""
            style={{
              display: "flex",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: "1.50rem",
              color: "#212529",
              textDecoration: "none",
            }}
          >
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpng.pngtree.com%2Fpng-clipart%2F20230419%2Foriginal%2Fpngtree-logo-design-circle-frame-black-and-white-png-image_9069011.png&f=1&nofb=1&ipt=bda86334d52ac9e7960ff281338d0953fcaf5959506396ddc174c9e95f085c2b"
              alt=""
              style={{
                width: "50px",
                marginRight: "0.75rem",
                filter: "drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.2))",
              }}
            />
          </NavLink>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul
              className="navbar-nav me-auto mt-2 mt-lg-0"
              style={{ marginLeft: "auto" }}
            >
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to=""
                  style={{
                    color: "white",
                    fontFamily: "monospace",
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="products"
                  style={{
                    color: "white",
                    fontFamily: "monospace",
                  }}
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="users"
                  style={{
                    color: "white",
                    fontFamily: "monospace",
                  }}
                >
                  Users
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
