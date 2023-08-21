import { Reports_FinalReportsFun } from "../../context/DataCollector";
const FinalReports = () => {
  return (
    <section className="form_container">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <form>
            <div className="row tiltle-row">
              <div className="col-md-12">
                <div className="heading-text">
                  <h1>Main Account Report</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group-box">
                  <input
                    onChange={Reports_FinalReportsFun}
                    className="form-control"
                    type="text"
                    id="As_On_Date"
                    name="As_On_Date"
                    aria-required="true"
                    placeholder="As On Date"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group-box">
                  <input
                    onChange={Reports_FinalReportsFun}
                    className="form-control"
                    type="text"
                    id="Silver_Rate"
                    name="Silver_Rate"
                    aria-required="true"
                    placeholder="Silver Rate 10 Gm"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group-box">
                  <input
                    onChange={Reports_FinalReportsFun}
                    className="form-control"
                    type="text"
                    id="Gold_Rate"
                    name="Gold_Rate"
                    aria-required="true"
                    placeholder="Gold  Rate 10 Gm"
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

export default FinalReports;
