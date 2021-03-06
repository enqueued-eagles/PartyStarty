import React from 'react';
import ReactDOM from 'react-dom';
import {Link, Redirect} from 'react-router-dom';
import Search from './search';
import SignIn from './signin';
import SignUp from './signup';
import Create from './eventCreator/create';
import Navbar from './navbar';
import EventList from './event/eventList.js';
import Event from './event/event.js';
import SearchFood from './food/SearchFood';
var axios = require('axios');

class Home extends React.Component {
	constructor(props){
		super(props)
		this.state = {
      publicEvents: [],
    }
    this.grabPublicEvents = this.grabPublicEvents.bind(this);
	}

  componentWillMount() {
    this.grabPublicEvents();
  }

  grabPublicEvents() {
    axios.get('/publicEvents')
    .then((response) => {
      if (response.data !== 'error') {
        response.data.sort((one, two) => {
          if (one.eventDate > two.eventDate) return 1;
          if (one.eventDate < two.eventDate) return -1;
          return 0;
        })
        this.setState({publicEvents: response.data});
      }
    })
    .catch((err) => {
      console.log('Error grabbing public events', err);
    })
  }
      
  


	render(){
		return (
			<div>
				<div className="container">
          <div className="EventList"> 
            <EventList 
            publicEvents={this.state.publicEvents} 
            setLookingAtEvent={this.props.setLookingAtEvent}
            />
					</div>
				</div>
			</div>
		)
	}

}

export default Home;


// OLD HOME STUFF
		// this.componentWillMount = this.componentWillMount.bind(this);
		// this.handleClick = this.handleClick.bind(this);
// componentWillMount(){
// 	axios.get('/getEvents')
// 	.then(data => {
// 		console.log('have data',data.data[0])
// 		this.setState({
// 			events: data.data
// 		})
// 		console.log(this.state.events)
// 	})
// 	.catch(error => {
// 		console.log('ERROR retrieving events')
// 	})
// }

// handleClick(event) {
// 		console.log('home', event);
// 		axios.post('/getEventDetail', {event: event})
// 			.then(data => {
// 				this.setState({
// 					currentEvent: data.data
// 				});
// 			})
// 			.catch(error => {
// 				console.log('ERROR retrieving Current Event')
// 			})
// 		}


//________________-
