import React from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

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
            <span className="title-sm">Sisa uang kamu tersisa {this.state.persentaseUang}% lagi</span>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-6">
            <div className="card-wrapper p-4">
              <div className="icon-wrapper-in box-sh">
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
            <div className="card-wrapper p-4 ">
              <div className="icon-wrapper-out box-sh">
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
              <ModalCreate variant="button btn-ungu px-3 py-2 me-2 box-sh" text="Pemasukan" icon="bi bi-plus-circle ms-1" modalheading="Tambahkan Pemasukan" />
              <ModalCreate variant="button btn-pink px-3 py-2 box-sh" text="Pengeluaran" icon="bi bi-dash-circle-dotted ms-1" modalheading="Tambahkan Pengeluaran" />
            </div>
          </div>
        </div>

        <div className="row mt-4">
          {this.state.summary.map((sum, index) => {
            return (
              <div key={index} className="col-12 d-flex mb-3 justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <div className={sum.category === "IN" ? "icon-wrapper-in box-sh" : "icon-wrapper-out box-sh"}>
                    <i className={sum.category === "IN" ? "bi bi-wallet2" : "bi bi-bag-dash"} aria-hidden="true"></i>
                  </div>
                  <div className="transaction ms-3 d-flex flex-column">
                    <h5>{sum.deskripsi} </h5>
                    <span className="title-sm">{sum.tanggal} </span>
                  </div>
                </div>
                {/* Conditional Rendering  untuk mengendalikan tampilan elemen di halaman berdasarkan kondisi tertentu.  */}
                <h6 className={sum.category === "IN" ? "money-in" : "money-out"}>Rp. {sum.nominal} </h6>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

class ModalCreate extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      deskripsi: ''
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({
      show: false,
    });
  }

  handleShow() {
    this.setState({
      show: true,
    });
  }
  render() {
    return (
      <>
        <button onClick={this.handleShow} className={this.props.variant}>
          {this.props.text} <i className={this.props.icon}></i>
        </button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.modalheading} </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-3">
              <label  className="form-label">
                Email address
              </label>
              <input 
              type="text" 
              className="form-control"  
              placeholder="Masukan Deskripsi" 
              name="Deskripsi" 
              value={
                this.state.deskripsi

                } />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default App;
