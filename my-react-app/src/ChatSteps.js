import React from 'react';
import DisplayWeather from './DisplayWeather';

const ChatSteps = [
  {
    id: '0',
    message: 'Привет! Я ваш виртуальный помощник. Как я могу вам помочь сегодня?',
    trigger: '1',
  },
  {
    id: '1',
    options: [
      { value: 'order', label: 'Заказать пиццу', trigger: 'order' },
      { value: 'weather', label: 'Узнать погоду', trigger: 'inputWeather' },
      { value: 'trip', label: 'Вызвать такси', trigger: 'trip' },
    ],
  },
  {
    id: 'order',
    message: 'Где бы вы хотели заказать пиццу?',
    end: true,
  },
  {
    id: 'inputWeather',
    message: 'В каком городе вы хотите узнать погоду?',
    trigger: 'getWeather',
  },
  {
    id: 'getWeather',
    user: true,
    trigger: 'displayWeather',
  },
  {
    id: 'displayWeather',
    component: <DisplayWeather city="Moscow" apiKey="dc20a418d2f2c96c8633a9dd33fb2cdd" />, // Замените на свой город и API-ключ
    end: true,
  },
  {
    id: 'trip',
    message: 'Куда едем?',
    end: true,
  },
];

export default ChatSteps;
