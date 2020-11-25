import React, { Component } from 'react';

import NavbarContainer from './navbar-container';







export default class App extends Component {
  render() {
    return (
      <div className='app'>
         <NavbarContainer />
        
        <h1>GET IT DONE NAO</h1>
        <h2>THE APP TO HELP YOU ORGANIZE YOUR LIFE, GET STUFF DONE, AND ACHIEVE YOUR GOALS!!!!</h2>
      </div>
    );
  }
}
