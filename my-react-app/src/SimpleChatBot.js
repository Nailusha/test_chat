import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import './SimpleChatBot.css';
import ChatSteps from './ChatSteps';

class SimpleChatbot extends Component {
  render() {
    
    return (
      <div className="custom-chatbot"> 
        <ChatBot 
        steps={ChatSteps}
        handleEnd={this.handleEnd}
        />
      </div>
    );
  }
}

export default SimpleChatbot;
