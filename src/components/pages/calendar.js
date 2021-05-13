import React, { Component } from 'react';
 
import NavBar from '../heardernavbar/navbar';

export default class Calendar extends Component {
  render() {
    return (
      <div className='calendar-wrapper'>
        <NavBar/>
      </div>
    );
  }
}