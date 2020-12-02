import React, { Component } from 'react';

import NavbarContainer from './navbar-container';
import TaskCounter from './task-counter';







export default class ToDo extends Component {
  render() {
    return (
      <div className='todo'>
         <NavbarContainer />
        
        <h1>GET IT DONE NAO</h1>

        <TaskCounter />

        <h2>THE APP TO HELP YOU ORGANIZE YOUR LIFE, GET STUFF DONE, AND ACHIEVE YOUR GOALS!!!!</h2>
      </div>
    );
  }
}
