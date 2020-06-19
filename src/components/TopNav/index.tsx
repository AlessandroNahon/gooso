import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  TypedUseSelectorHook,
  useSelector as useSelectorGeneric,
} from "react-redux";

import { Avatar, Button, Menu, MenuItem } from "@material-ui/core";

import { AppState } from "../../types";
import { selectAuthedUser } from "../../store/selectors/user";
import { getInitials } from "../../utils/string";

import "./styles.scss";

const useSelector: TypedUseSelectorHook<AppState> = useSelectorGeneric;

interface Props {
  routes: Array<any>;
}

const TopNav: React.FC<Props> = ({ routes }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const currentUser = useSelector(selectAuthedUser);
  const history = useHistory();
  const location = useLocation();

  const handleClick = (e: any) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const signOut = () => {
    localStorage.removeItem("auth_session");
    localStorage.removeItem("state");
    history.push("/login");
  };

  const goToProfile = () => history.push("/dashboard/profile");

  return (
    <div className="top-nav">
      <div className="top-nav__left">
        <h2>
          {routes.map((route) =>
            route.path === location.pathname ? route.name : ""
          )}
        </h2>
      </div>
      <div className="top-nav__right">
        <Avatar onClick={handleClick}>{getInitials(currentUser.name)}</Avatar>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <Button
              className="button"
              variant="contained"
              onClick={goToProfile}
              type="submit"
            >
              Profile
            </Button>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Button
              className="button"
              variant="contained"
              onClick={signOut}
              type="submit"
            >
              Sign out
            </Button>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default TopNav;
