import React, { Component } from 'react';

import NavbarContainer from './navbar-container';
import TaskCounter from './task-counter';







export default class ToDo extends Component {


  componentDidMount() {
    fetch("https://quiz-app-mkj.herokuapp.com")
    .then(response => response.json())
    .then(data => {
        this.setState({
            data: data,
            isLoading: false

        })
    })
    .catch(error => {
        console.log(error)
        this.setState({
            error: true,
            isLoading: false
        })

    })
}

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
