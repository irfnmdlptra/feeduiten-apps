import React from "react";
import "./App.css";
import ModalCreate from "./components/ModalCreate";
import Alert from "./components/Alert";
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
      summary: [],
    };
    this.tambahItem = this.tambahItem.bind(this);
    this.fnHitung = this.fnHitung.bind(this);
  }

  tambahItem(objek) {
    let newData = [...this.state.summary, objek];
    let dataUangIN = newData.filter((item) => item.category === "IN");
    let nominalUangIN = dataUangIN.map((item) => item.nominal);
    let jumlahUangIN = nominalUangIN.reduce((total, num) => total + num, 0);

    let dataUangOUT = newData.filter((item) => item.category === "OUT");
    let nominalUangOUT = dataUangOUT.map((item) => item.nominal);
    let jumlahUangOUT = nominalUangOUT.reduce((total, num) => total + num, 0);
    let persenUang = ((jumlahUangIN - jumlahUangOUT) / jumlahUangIN) * 100;

    this.setState({
      pemasukanUang: jumlahUangIN,
      transaksiIN: nominalUangIN.length,
      pengeluaranUang: jumlahUangOUT,
      transaksiOUT: nominalUangOUT.length,
      sisaUang: jumlahUangIN - jumlahUangOUT,
      persentaseUang: Math.round(persenUang),
      summary: newData,
    });
  }

  fnHitung() {
    let dataUangIN = this.state.summary.filter((item) => item.category === "IN");
    let nominalUangIN = dataUangIN.map((item) => item.nominal);
    let jumlahUangIN = nominalUangIN.reduce((total, num) => total + num);

    let dataUangOUT = this.state.summary.filter((item) => item.category === "OUT");
    let nominalUangOUT = dataUangOUT.map((item) => item.nominal);
    let jumlahUangOUT = nominalUangOUT.reduce((total, num) => total + num);
    let persenUang = ((jumlahUangIN - jumlahUangOUT) / jumlahUangIN) * 100;
    this.setState({
      pemasukanUang: jumlahUangIN,
      transaksiIN: nominalUangIN.length,
      pengeluaranUang: jumlahUangOUT,
      transaksiOUT: nominalUangOUT.length,
      sisaUang: jumlahUangIN - jumlahUangOUT,
      persentaseUang: Math.round(persenUang),
    });
  }

  componentDidMount() {
    if (this.state.summary.length < 1) {
    } else {
      this.fnHitung();
    }

    const storedSummary = localStorage.getItem("summary");

    if (storedSummary) {
      this.setState(JSON.parse(storedSummary) );
  }else {
    this.fnHitung()
  }
  }

  componentDidUpdate() {
    const { sisaUang, persentaseUang, pemasukanUang, pengeluaranUang, transaksiIN, transaksiOUT, summary } = this.state;
  const stateToStore = { sisaUang, persentaseUang, pemasukanUang, pengeluaranUang, transaksiIN, transaksiOUT, summary };
  localStorage.setItem("appState", JSON.stringify(stateToStore));
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
                <span className="title-sm text-ungu fw-bold">{this.state.transaksiIN} </span>
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
                <span className="title-sm text-ungu fw-bold">{this.state.transaksiOUT} </span>
                <span className="title-sm"> Transaksi</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12 d-flex align-items-center justify-content-between">
            <h4>Ringkasan Transaksi</h4>
            <div className="wrapper-button d-flex">
              <ModalCreate action={this.tambahItem} category="IN" variant="button btn-ungu px-3 py-2 me-2 box-sh" text="Pemasukan" icon="bi bi-plus-circle ms-1" modalheading="Tambahkan Pemasukan" />
              <ModalCreate action={this.tambahItem} category="OUT" variant="button btn-pink px-3 py-2 box-sh" text="Pengeluaran" icon="bi bi-dash-circle-dotted ms-1" modalheading="Tambahkan Pengeluaran" />
            </div>
          </div>
        </div>

        <div className="row mt-4">
          { this.state.summary.length < 1 &&  <Alert />}
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



export default App;
