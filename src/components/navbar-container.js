import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
    constructor() {
        super();
    }


    render() {
        return (
            <div className="navbar-wrapper">
                <NavLink exact to="/" activeClassName="nav-link-active">
                    TO DO LIST
                </NavLink>

                <NavLink exact to="goals" activeClassName="nav-link-active">
                    GOALS
                </NavLink>

                <NavLink exact to="gratitude-journal" activeClassName="nav-link-active">
                    GRATITUDE JORNAL
                </NavLink>

            </div>
        )
    }
}