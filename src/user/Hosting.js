import React from 'react';
import Navbar from '../navbar.js';

class Hosting extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      
    }
  }
  render () {
    return (
      <div>
        <div className='userEvents'>Hosting Following Events</div>
        {
          this.props.mapOut(`hosting`)
        }
      </div>
    )
  }
}

export default Hosting;