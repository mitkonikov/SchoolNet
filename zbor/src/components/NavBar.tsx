import React from "react";

import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Link } from "react-router-dom";

import InfoIcon from "@material-ui/icons/Info";
import TranslateIcon from "@material-ui/icons/Translate";
import SchoolIcon from "@material-ui/icons/School";

let NavBar = (props) => {
    return (
        <div className="navbar-container">
            <BottomNavigation
                value={props.page}
                onChange={(event, newValue) => {
                    props.setPage(newValue);
                }}
                showLabels
            >
                <BottomNavigationAction
                    label="Почетна"
                    icon={<TranslateIcon />}
                    component={Link}
                    to="/"
                />
                <BottomNavigationAction
                    label="SchoolNet"
                    icon={<SchoolIcon />}
                    href="https://schoolnet.mk/"
                />
                <BottomNavigationAction
                    label="За нас"
                    icon={<InfoIcon />}
                    component={Link}
                    to="/contact"
                />
            </BottomNavigation>
        </div>
    );
};

export default NavBar;