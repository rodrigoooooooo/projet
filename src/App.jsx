import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    selectedFile: null,
  };

  fileSelectedHandler = (event) => {
    console.log(event.target.files[0]);
  };

  uploadHandler = () => {
    const formData = new FormData();
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    axios.post("my-domain.com/file-upload", formData);
  };

  render() {
    return (
      <>
<<<<<<< HEAD
        <main class="app">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title is-centered">3two1</p>
              <button class="card-header-icon" aria-label="more options">
                <span class="icon">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </header>
            <div class="card-content">
              <div class="content">
                <div className="app">
                </div>
=======
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
>>>>>>> master
              </div>
            </div>
            <footer class="card-footer">
              <a href="#" class="card-footer-item">
              <input
                    className="button"
                    style={{display: 'none'}}
                    type="file"
                    onChange={this.fileSelectedHandler}
                    ref={fileInput => this.fileInput = fileInput}/>
                <button 
                className="button"
                onClick={() => this.fileInput.click()}>Escolher Foto</button>
              </a>
              <a href="#" class="card-footer-item">
                <button
                  className="button is-success"
                  onClick={this.uploadHandler}>Upload</button>
              </a>
            </footer>
          </div>
        </main>
      </>
    );
  }
}
export default App;
