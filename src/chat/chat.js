import React, { Component } from 'react';
import openSocket from 'socket.io-client';
import MessageCreator from './MessageCreator';
import MessagesDisplay from './MessagesDisplay';

const socket = openSocket('http://localhost:3000');

const listenToMessages = (event, cb) => {
  socket.on(event, cb);
};

const emitMessage = (event, msg) => {
  socket.emit(event, msg);
};

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [ß]
    };
    listenToMessages(this.props.eventId, (msg) => {
      console.log('recieved message: ', msg);
      this.setState({
        messages: [msg, ...this.state.messages]
      });
    });
    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage(text, from='John Snow') {
    // emit socket event with the message data
    // handle saving that message to the database on
    // the server side
    console.log(this.props);
    emitMessage('chat', {
      text,
      from,
      eventId: this.props.eventId
    });
  }

  render() {
    return (
      <div id='chat'>
        <MessageCreator sendMessage={ this.sendMessage }/>
        <MessagesDisplay messages={ this.state.messages } />
      </div>
    );
  }
}

export default Chat;