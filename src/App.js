import React from "react";
import "./App.css";

class App extends React.Component {
  // constructor() {
  //   super();
  // }
  render() {
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="fw-bold">FEEDUITEN APPS</h1>
            <hr className="w-75 mx-auto" />
            <h2 className="fw-bold">Rp.1.500.00,-</h2>
            <span className="title-sm">Sisa uang kamu tersisa 75% lagi</span>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-6">
            <div className="card-wrapper p-4">
              <div className="icon-wrapper">
                <i className="bi bi-wallet2" aria-hidden="true"></i>
              </div>
              <span className="title-sm">Pemasukan</span>
              <h3 className="fw-bold">Rp. 2.000.000,-</h3>
              <div>
                <span className="title-sm text-ungu fw-bold">50</span>
                <span className="title-sm"> Transaksi</span>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="card-wrapper p-4">
              <div className="icon-wrapper">
                <i className="bi bi-cash-stack"></i>
              </div>
              <span className="title-sm">Pemakaian</span>
              <h3 className="fw-bold">Rp. 500.000,-</h3>
              <div>
                <span className="title-sm text-ungu fw-bold">50</span>
                <span className="title-sm"> Transaksi</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12 d-flex align-items-center justify-content-between">
            <h4>Ringkasan Transaksi</h4>
            <div className="wrapper-button d-flex">
              <button className="button btn-ungu px-3 py-2 me-2">
                Pemasukan <i className="bi bi-patch-plus-fill"></i>
              </button>
              <button className="button btn-pink px-3 py-2">
                Pengeluaran <i className="bi bi-patch-minus-fill"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <div className="icon-wrapper ">
                <i className="bi bi-wallet2" aria-hidden="true"></i>
              </div>
              <div className="transaction ms-3 d-flex flex-column">
                <h6>Menerima Kiriman</h6>
                <span className="title-sm">1 Juli 2023</span>
              </div>
            </div>
            <h5 className="money">Rp.1.000.000</h5>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
