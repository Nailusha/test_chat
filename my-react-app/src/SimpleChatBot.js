import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import './SimpleChatBot.css';

class SimpleChatbot extends Component {
  render() {
    const steps = [
      {
        id: '0',
        message: 'Привет! Я ваш виртуальный помощник. Как я могу вам помочь сегодня?',
        trigger: '1',
      },
      {
        id: '1',
        options: [
          { value: 'help', label: 'Помощь', trigger: 'help' },
          { value: 'feedback', label: 'Обратная связь', trigger: 'feedback' },
        ],
      },
      {
        id: 'help',
        message: 'Чем я могу вам помочь?',
        end: true,
      },
      {
        id: 'feedback',
        message: 'Спасибо за ваш отзыв!',
        end: true,
      },
    ];

    return (
      <div className="custom-chatbot"> 
        <ChatBot 
        steps={steps} 
        />
      </div>
    );
  }
}

export default SimpleChatbot;
