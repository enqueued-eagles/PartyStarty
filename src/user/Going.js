import React from 'react';

class Going extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      
    }
  }
  render () {
    return (
      <div>
        <div className='userEvents'>Going To Following Events</div>
        {
          this.props.mapOut(`going`)
        }
      </div>
    )

  }
}

export default Going;