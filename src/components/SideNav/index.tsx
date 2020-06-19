import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

import Logo from "../../assets/logo.svg";

import "./styles.scss";

interface Props {
  routes: Array<any>;
}

const SideNav: React.FC<Props> = ({ routes }) => {
  const history = useHistory();
  const location = useLocation();

  const goHome = () => history.push("/dashboard");

  return (
    <div className="side-nav">
      <div className="logo">
        <img src={Logo} alt="logo" onClick={goHome} />
        <h3 onClick={goHome}>Gooso</h3>
      </div>

      <ul>
        {routes.map((route) => {
          if (route.isNavItem) {
            return (
              <Link to={route.path}>
                <div
                  className={`${
                    route.path === location.pathname
                      ? "link-wrapper active"
                      : "link-wrapper"
                  }`}
                >
                  <li key={route}>{route.name}</li>
                  {route.icon}
                </div>
              </Link>
            );
          }

          return <></>;
        })}
      </ul>
    </div>
  );
};

export default SideNav;
