import React from 'react';
import { Link } from 'react-router-dom';
 
export default function() {
  return (
    <div className='no-match'>
        <h2>Sorry the page you are looking for does not exist</h2>
        <Link to='/' className='no-match__link'>Return to Homepage</Link>
    </div>
  );
}