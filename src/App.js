import React, { Component } from 'react';
import './App.css';
import ToDoListItem from './ToDoListItem.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <ToDoListItem
           title="Create Homepage!"
           description="サークルホームページを今日中に作成する。"
          />
        </div>
      </div>
    );
  }
}

export default App;
