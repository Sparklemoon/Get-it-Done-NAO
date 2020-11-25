import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavbarContainer extends Component {
    render() {
        return (
            <div className="navbar">
                <NavLink exact to="/" activeClassName="nav-link-active">
                    TO DO LIST
                </NavLink>

                <NavLink to="goals" activeClassName="nav-link-active">
                    GOALS
                </NavLink>

                <NavLink to="gratitude-journal" activeClassName="nav-link-active">
                    GRATITUDE JOURNAL
                </NavLink>

            </div>
        );
    }
}