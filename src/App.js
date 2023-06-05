import React from "react";
import "./App.css";

class App extends React.Component {
  // constructor() {
  //   super();
  // }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>FEEDUITEN APPS</h1>
            <hr />
            <h4>Rp.1.500.00,-</h4>
            <span className="title">Sisa uang kamu tersisa 75% lagi</span>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div class="card-wrapper">
              <div className="icon-wrapper">
                <i className="bi bi-wallet2" aria-hidden="true"></i>
              </div>
              <span className="title">Pemasukan-</span>
              <h3>Rp. 2.000.000,-</h3>
            </div>
            <div>
              <span className="title text-ungu">50</span>
              <span className="title"> Transaksi</span>
            </div>
          </div>
          <div className="col-6"></div>
        </div>
      </div>
    );
  }
}
export default App;
