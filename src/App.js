import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      sisaUang: 0,
      persentaseUang: 0,
      pemasukanUang: 0,
      pengeluaranUang: 0,
      transaksiIN: 0,
      transaksiOUT: 0,
      summary: [
        {
          deskripsi : 'Menerima Gaji',
          tanggal : '1 July 2023',
          nominal : 1000000,
          category : 'IN'
        },
        {
          deskripsi : 'Makan Nasi Padang',
          tanggal : '1 July 2023',
          nominal : 1000000,
          category : 'IN'
        },
      ]

    };
  }
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

        <div className="row mt-4">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <div className="icon-wrapper ">
                <i className="bi bi-wallet2" aria-hidden="true"></i>
              </div>
              <div className="transaction ms-3 d-flex flex-column">
                <h5>Menerima Kiriman</h5>
                <span className="title-sm">1 Juli 2023</span>
              </div>
            </div>
            <h6 className="money-in">Rp.1.000.000</h6>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
