import { Reports_GSTReportFun } from "../../context/DataCollector";
const GSTReport = () => {
  return (
    <section className="form_container">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <form>
            <div className="row tiltle-row">
              <div className="col-md-12">
                <div className="heading-text">
                  <h1>GST Report</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group-box">
                  <input
                    onChange={Reports_GSTReportFun}
                    className="form-control"
                    type="text"
                    id="From_Date"
                    name="From_Date"
                    aria-required="true"
                    placeholder="From Date"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group-box">
                  <input
                    onChange={Reports_GSTReportFun}
                    className="form-control"
                    type="text"
                    id="To_Date"
                    name="To_Date"
                    aria-required="true"
                    placeholder="To Date"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group-box">
                  <select className="custom-select" id="inputGroupSelect02">
                    <option selected>Transection Type</option>
                    <option value="1">Gold</option>
                    <option value="2">Bank dtl</option>
                    <option value="3">Bank dtl</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group-box">
                  <select className="custom-select" id="inputGroupSelect02">
                    <option selected> Section Type</option>
                    <option value="1">Gold</option>
                    <option value="2">Bank dtl</option>
                    <option value="3">Bank dtl</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group-box">
                  <input
                    onChange={Reports_GSTReportFun}
                    className="form-control"
                    type="text"
                    id="Tax_Code"
                    name="Tax_Code"
                    aria-required="true"
                    placeholder="Tax Code"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group-box">
                  <input
                    onChange={Reports_GSTReportFun}
                    className="form-control"
                    type="text"
                    id="Ac_Code"
                    name="Ac_Code"
                    aria-required="true"
                    placeholder="Ac Code"
                  />
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
  );
};

export default GSTReport;
