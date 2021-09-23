import React, { Component } from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

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
        <div className="App">
          <main className="App-header">
            <img
              src={logo}
              style={{ height: 250, width: 317 }}
              ClassName="App-logo"
              alt="logo"
            />
            <i>being first in line has never been so easy.</i>
            <div class="card">
              <header class="card-header">
                <p class="card-header-title">Selecione a Imagem</p>
              </header>
              <div class="card-content">
                <div class="content">
                  <div className="bruh">
                  </div>
                </div>
              </div>
              <footer class="card-footer">
                <a href="#" class="card-footer-item">
                  <input
                    className="button"
                    style={{ display: "none" }}
                    type="file"
                    onChange={this.fileSelectedHandler}
                    ref={(fileInput) => (this.fileInput = fileInput)}
                  />
                  <button
                    class="button is-link is-outlined is-rounded"
                    onClick={() => this.fileInput.click()}
                  >
                    Escolher Imagem
                  </button>
                </a>
                <a href="#" class="card-footer-item">
                <button class="button is-link is-outlined is-rounded" onClick={this.uploadHandler}>Upload</button>

<<<<<<< HEAD
                </a>
              </footer>
=======
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
>>>>>>> origin/master
            </div>
          </main>
        </div>
      </>
    );
  }
}
export default App;
