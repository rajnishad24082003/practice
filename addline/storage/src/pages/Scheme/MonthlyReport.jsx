import { Scheme_MonthlyReportFun } from "../../context/DataCollector";
const MonthlyReport = () => {
  return (
    <section className="form_container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <form>
              <div className="row tiltle-row">
                <div className="col-md-12">
                  <div className="heading-text">
                    <h1>Scheme Wise Oustinding Report</h1>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      onChange={Scheme_MonthlyReportFun}
                      className="form-control"
                      type="text"
                      id="Slmn"
                      name="Slmn"
                      aria-required="true"
                      placeholder="Scheme Code"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      onChange={Scheme_MonthlyReportFun}
                      className="form-control"
                      type="text"
                      id="Slmn Name"
                      name="Slmn Name"
                      aria-required="true"
                      placeholder="Member Amount"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group-box">
                    <select className="custom-select" id="inputGroupSelect02">
                      <option selected="">Monthly</option>
                      <option value="1">Gold</option>
                      <option value="2">Bank dtl</option>
                      <option value="3">Bank dtl</option>
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
  );
};

export default MonthlyReport;
