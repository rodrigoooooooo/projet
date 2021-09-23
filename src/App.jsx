import React, { Component } from 'react';
import './App.css';

class App extends Component {
  fileSelectedHandler = event => {
    console.log(event.target.files[0]);
  }

  render () {
    return (
    <div className="app">
      <input className="button" type="file" onChange={this.fileSelectedHandler}/>
      <button className="button is-success" onClick={this.uploadHandler}>Upload</button>
    </div>
      );
  }
}
export default App;
