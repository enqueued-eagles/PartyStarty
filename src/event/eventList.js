import React from 'react';
import ReactDOM from 'react-dom';
// import {Link} from 'react-router-dom';
import EventListEntry from './eventListEntry'

const EventList = (props) => (
  <div>
    <ul className ="video-list list-group">
      {props.publicEvents.map((event,i) => {
        event.eventDate = event.eventDate.slice(0, 11) + "12:00:00.000Z";
        event.eventDate = new Date(event.eventDate).toString();
        return (
          <EventListEntry 
          event={event} 
          key={i} 
          setLookingAtEvent={props.setLookingAtEvent}
          />
        ) 
      })}
      
    </ul>
</div>
)


export default EventList;
