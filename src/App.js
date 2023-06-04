import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>FEEDUITEN APPS</h1>
            <hr />
            <h4>Rp.1.500.00,-</h4>
            <span>Sisa uang kamu tersisa 75% lagi</span>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="icon-wrapper">
              <i className="fa fa-user-circle-o" aria-hidden="true"></i>
            </div>
          </div>
          <div className="col-6"></div>
        </div>
      </div>
    );
  }
}
export default App;
