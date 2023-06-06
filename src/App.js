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
          deskripsi: "Menerima Gaji",
          tanggal: "1 July 2023",
          nominal: 1000000,
          category: "IN",
        },
        {
          deskripsi: "Makan Nasi Padang",
          tanggal: "2 July 2023",
          nominal: 20000,
          category: "OUT",
        },
      ],
    };
  }
  render() {
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="fw-bold">FEEDUITEN APPS</h1>
            <hr className="w-75 mx-auto" />
            <h2 className="fw-bold">Rp. {this.state.sisaUang} ,-</h2>
            <span className="title-sm">Sisa uang kamu tersisa 75% lagi</span>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-6">
            <div className="card-wrapper p-4">
              <div className="icon-wrapper-in">
                <i className="bi bi-wallet2" aria-hidden="true"></i>
              </div>
              <span className="title-sm">Pemasukan</span>
              <h3 className="fw-bold">Rp. {this.state.pemasukanUang} ,-</h3>
              <div>
                <span className="title-sm text-ungu fw-bold">50</span>
                <span className="title-sm"> Transaksi</span>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="card-wrapper p-4">
              <div className="icon-wrapper-out">
                <i className="bi bi-cash-stack"></i>
              </div>
              <span className="title-sm">Pemakaian</span>
              <h3 className="fw-bold">Rp. {this.state.pengeluaranUang} ,-</h3>
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
          {this.state.summary.map((sum) => {
            return (
              <div className="col-12 d-flex mb-3 justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <div className={sum.category === 'IN' ? 'icon-wrapper-in' : 'icon-wrapper-out'}>
                    <i className={sum.category === 'IN' ? 'bi bi-wallet2' : 'bi bi-bag-dash'} aria-hidden="true"></i>
                  </div>
                  <div className="transaction ms-3 d-flex flex-column">
                    <h5>{sum.deskripsi} </h5>
                    <span className="title-sm">{sum.tanggal} </span>
                  </div>
                </div>
                {/* Conditional Rendering  untuk mengendalikan tampilan elemen di halaman berdasarkan kondisi tertentu.  */}
                <h6 className={sum.category === 'IN' ? 'money-in' : 'money-out'} >Rp. {sum.nominal} </h6>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default App;
