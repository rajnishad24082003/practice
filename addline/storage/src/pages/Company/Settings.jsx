import { Company_SettingsFun } from "../../context/DataCollector";
const Settings = () => {
  return (
    <div>
      <section className="form_container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <form>
                <div className="row tiltle-row">
                  <div className="col-md-12">
                    <div className="heading-text">
                      <h1>Company Setting</h1>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group-box">
                      <label className="labname">Main Image</label>

                      <select className="custom-select" id="inputGroupSelect02">
                        <option selected>ALL IMAGE</option>
                        <option value="1">GOLD</option>
                        <option value="2">BANK DTL</option>
                        <option value="3">BANK DTL</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group-box">
                      <label className="labname">Sales Bill Format</label>

                      <select className="custom-select" id="inputGroupSelect02">
                        <option selected>2 - A4 HALH VR</option>
                        <option value="1">GOLD</option>
                        <option value="2">BANK DTL</option>
                        <option value="3">BANK DTL</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group-box">
                      <label className="labname">Tag Pirnt Fill</label>
                      <select className="custom-select" id="inputGroupSelect02">
                        <option selected>BARPRINT10GN</option>
                        <option value="1">GOLD</option>
                        <option value="2">BANK DTL</option>
                        <option value="3">BANK DTL</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group-box">
                      <label className="labname">Sales Card Comm %</label>
                      <select className="custom-select" id="inputGroupSelect02">
                        <option selected>NO</option>
                        <option value="1">GOLD</option>
                        <option value="2">BANK DTL</option>
                        <option value="3">BANK DTL</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group-box">
                      <label className="labname">Rate Wise Labour %</label>

                      <select className="custom-select" id="inputGroupSelect02">
                        <option selected>NO</option>
                        <option value="1">GOLD</option>
                        <option value="2">BANK DTL</option>
                        <option value="3">BANK DTL</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group-box">
                      <label className="labname">Reminder show %</label>

                      <select className="custom-select" id="inputGroupSelect02">
                        <option selected>YES</option>
                        <option value="1">GOLD</option>
                        <option value="2">BANK DTL</option>
                        <option value="3">BANK DTL</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group-box">
                      <label className="labname">Dailly Rate show %</label>

                      <select className="custom-select" id="inputGroupSelect02">
                        <option selected>YES</option>
                        <option value="1">GOLD</option>
                        <option value="2">BANK DTL</option>
                        <option value="3">BANK DTL</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group-box">
                      <label className="labname">OPENING RATE SHOW %</label>

                      <select className="custom-select" id="inputGroupSelect02">
                        <option selected>OPENING RATE SHOW %</option>
                        <option value="1">GOLD</option>
                        <option value="2">BANK DTL</option>
                        <option value="3">BANK DTL</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group-box">
                      <label className="labname">Physical Stock</label>

                      <select className="custom-select" id="inputGroupSelect02">
                        <option selected>TAG WISE</option>
                        <option value="1">GOLD</option>
                        <option value="2">BANK DTL</option>
                        <option value="3">BANK DTL</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group-box">
                      <label className="labname">Printing Zoom</label>

                      <select className="custom-select" id="inputGroupSelect02">
                        <option selected>110</option>
                        <option value="1">GOLD</option>
                        <option value="2">BANK DTL</option>
                        <option value="3">BANK DTL</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group-box">
                      <label className="labname">Tag Row Change</label>

                      <select className="custom-select" id="inputGroupSelect02">
                        <option selected>NO</option>
                        <option value="1">GOLD</option>
                        <option value="2">BANK DTL</option>
                        <option value="3">BANK DTL</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group-box">
                      <label className="labname">Colsing Stock Auto Gen</label>

                      <select className="custom-select" id="inputGroupSelect02">
                        <option selected>AMOUNT WISE</option>
                        <option value="1">GOLD</option>
                        <option value="2">BANK DTL</option>
                        <option value="3">BANK DTL</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group-box">
                      <label className="labname">Stock Touch Type </label>

                      <select className="custom-select" id="inputGroupSelect02">
                        <option selected>GROUP WISE</option>
                        <option value="1">GOLD</option>
                        <option value="2">BANK DTL</option>
                        <option value="3">BANK DTL</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group-box">
                      <label className="labname">Sales Labour Rate Gen </label>

                      <select className="custom-select" id="inputGroupSelect02">
                        <option selected>YES</option>
                        <option value="1">GOLD</option>
                        <option value="2">BANK DTL</option>
                        <option value="3">BANK DTL</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group-box">
                      <label className="labname">Weight Port</label>

                      <select className="custom-select" id="inputGroupSelect02">
                        <option selected>0</option>
                        <option value="1">GOLD</option>
                        <option value="2">BANK DTL</option>
                        <option value="3">BANK DTL</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group-box">
                      <label className="labname">Cust bill sms send</label>

                      <select className="custom-select" id="inputGroupSelect02">
                        <option selected>NO</option>
                        <option value="1">GOLD</option>
                        <option value="2">BANK DTL</option>
                        <option value="3">BANK DTL</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group-box">
                      <label className="labname">Admin sms send</label>

                      <select className="custom-select" id="inputGroupSelect02">
                        <option selected>NO</option>
                        <option value="1">GOLD</option>
                        <option value="2">BANK DTL</option>
                        <option value="3">BANK DTL</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group-box">
                      <label className="labname">Dupllct Print</label>

                      <select className="custom-select" id="inputGroupSelect02">
                        <option selected>NO</option>
                        <option value="1">GOLD</option>
                        <option value="2">BANK DTL</option>
                        <option value="3">BANK DTL</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group-box">
                      <label className="labname">Labour Type</label>

                      <select className="custom-select" id="inputGroupSelect02">
                        <option selected>GROSSWT</option>
                        <option value="1">GOLD</option>
                        <option value="2">BANK DTL</option>
                        <option value="3">BANK DTL</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group-box">
                      <label className="labname">Ghat Type</label>

                      <select className="custom-select" id="inputGroupSelect02">
                        <option selected>NETWT</option>
                        <option value="1">GOLD</option>
                        <option value="2">BANK DTL</option>
                        <option value="3">BANK DTL</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group-box">
                      <label className="labname">Dhrn Days Type</label>

                      <select className="custom-select" id="inputGroupSelect02">
                        <option selected>MONTH WISE</option>
                        <option value="1">GOLD</option>
                        <option value="2">BANK DTL</option>
                        <option value="3">BANK DTL</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group-box">
                      <label className="labname">Kr isu Rec Fine Type</label>

                      <select className="custom-select" id="inputGroupSelect02">
                        <option selected>FINE WISE</option>
                        <option value="1">GOLD</option>
                        <option value="2">BANK DTL</option>
                        <option value="3">BANK DTL</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group-box">
                      <label className="labname">Dhiran Compund int</label>

                      <select className="custom-select" id="inputGroupSelect02">
                        <option selected>YES</option>
                        <option value="1">GOLD</option>
                        <option value="2">BANK DTL</option>
                        <option value="3">BANK DTL</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group-box">
                      <label className="labname">Total Fine Rpt Type</label>

                      <select className="custom-select" id="inputGroupSelect02">
                        <option selected>NET WISE</option>
                        <option value="1">GOLD</option>
                        <option value="2">BANK DTL</option>
                        <option value="3">BANK DTL</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group-box">
                      <label className="labname">Bill Labour Print</label>

                      <select className="custom-select" id="inputGroupSelect02">
                        <option selected>NO</option>
                        <option value="1">GOLD</option>
                        <option value="2">BANK DTL</option>
                        <option value="3">BANK DTL</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group-box">
                      <label className="labname">Set Bill Gst Format</label>

                      <select className="custom-select" id="inputGroupSelect02">
                        <option selected>YES</option>
                        <option value="1">GOLD</option>
                        <option value="2">BANK DTL</option>
                        <option value="3">BANK DTL</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group-box">
                      <label className="labname">Reverce Tax In URD</label>

                      <select className="custom-select" id="inputGroupSelect02">
                        <option selected>NO</option>
                        <option value="1">GOLD</option>
                        <option value="2">BANK DTL</option>
                        <option value="3">BANK DTL</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group-box">
                      <label className="labname">Reverce Tax In Ordr</label>

                      <select className="custom-select" id="inputGroupSelect02">
                        <option selected>ADD</option>
                        <option value="1">GOLD</option>
                        <option value="2">BANK DTL</option>
                        <option value="3">BANK DTL</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group-box">
                      <label className="labname">Sales With Hm Tax</label>

                      <select className="custom-select" id="inputGroupSelect02">
                        <option selected>NO</option>
                        <option value="1">GOLD</option>
                        <option value="2">BANK DTL</option>
                        <option value="3">BANK DTL</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="btn-box">
                      <a href="#">Save</a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Settings;
