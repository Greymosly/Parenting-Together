import React, { Component } from 'react';


import Auth from '../auth/auth';

import loginImage from "../../../static/assets/Images/Imogene/login.png";
 
export default class Login extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleUnsuccessfulAuth = this.handleUnsuccessfulAuth.bind(this);
  }

  handleSuccessfulAuth() {
    this.props.handleSuccessfulLogin();
    this.props.history.push("/");
  }

  handleUnsuccessfulAuth() {
    this.props.handleUnsuccessfulLogin();
  }

  render() {
    return (
      <div className='login-page-wrapper'>
          <div className='login-page-wrapper__left'>
            <Auth 
              handleSuccessfulAuth={this.handleSuccessfulAuth}
              handleUnsuccessfulAuth={this.handleUnsuccessfulAuth}
            />
          </div>

          <div 
            className='login-page-wrapper__right'
            style={{
                backgroundImage: `url(${loginImage})`
            }} 
          />
      </div>
    );
  }
}