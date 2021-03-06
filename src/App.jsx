import React, { Component } from "react";
import "./App.css";
import axios from 'axios';


class App extends Component {
  state = {
    selectedFile: null
  }

  fileSelectedHandler = (event) => {
    console.log(event.target.files[0]);
  };

  uploadHandler = () => {
    const formData = new FormData()
    formData.append(
      'myFile',
      this.state.selectedFile,
      this.state.selectedFile.name
    )
    axios.post('my-domain.com/file-upload', formData)
  }

  render() {
    return (
      <>
        <div className="app">
          <input
            className="button"
            type="file"
            onChange={this.fileSelectedHandler}
          />
          <button className="button is-success" onClick={this.uploadHandler}>
            Upload
          </button>
        </div>

        <div class="card m-4">
          <header class="card-header">
            <p class="card-header-title">Component</p>
            <button class="card-header-icon" aria-label="more options">
              <span class="icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </header>
          <div class="card-content">
            <div class="content">
              <div className="app">
                <input
                  className="button"
                  type="file"
                  onChange={this.fileSelectedHandler}
                />
                <button
                  className="button is-success"
                  onClick={this.uploadHandler}
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
          <footer class="card-footer">
            <a href="#" class="card-footer-item">
              Save
            </a>
            <a href="#" class="card-footer-item">
              Edit
            </a>
            <a href="#" class="card-footer-item">
              Delete
            </a>
          </footer>
        </div>
      </>
    );
  }
}
export default App;
