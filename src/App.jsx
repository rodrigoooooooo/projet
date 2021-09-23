import React, { Component } from 'react';
import './App.css';

class App extends Component {
  fileSelectedHandler = event => {
    console.log(event.target.files[0]);
  }

  render () {
    return (
    <div className="app">
      <input type="file" onChange={this.fileSelectedHandler}/>
      <button onClick={this.uploadHandler}>Upload</button>
    </div>
      );
  }
}
export default App;
