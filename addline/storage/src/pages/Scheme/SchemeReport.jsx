import { Scheme_SchemeReportFun } from "../../context/DataCollector";
const SchemeReport = () => {
  return (
    <>
      <section className="form_container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <form>
                <div className="row tiltle-row">
                  <div className="col-md-12">
                    <div className="heading-text">
                      <h1>Member Advance Adjut</h1>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group-box">
                      <input
                        onChange={Scheme_SchemeReportFun}
                        className="form-control"
                        type="text"
                        id="Slmn"
                        name="Slmn"
                        aria-required="true"
                        placeholder="From Date"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group-box">
                      <input
                        onChange={Scheme_SchemeReportFun}
                        className="form-control"
                        type="text"
                        id="Slmn Name"
                        name="Slmn Name"
                        aria-required="true"
                        placeholder="To Date"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group-box">
                      <input
                        onChange={Scheme_SchemeReportFun}
                        className="form-control"
                        type="text"
                        id="Slmn"
                        name="Slmn"
                        aria-required="true"
                        placeholder="Area"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group-box">
                      <input
                        onChange={Scheme_SchemeReportFun}
                        className="form-control"
                        type="text"
                        id="Slmn Name"
                        name="Slmn Name"
                        aria-required="true"
                        placeholder="Scheme Code"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group-box">
                      <input
                        onChange={Scheme_SchemeReportFun}
                        className="form-control"
                        type="text"
                        id="Slmn"
                        name="Slmn"
                        aria-required="true"
                        placeholder="Member Code"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group-box">
                      <input
                        onChange={Scheme_SchemeReportFun}
                        className="form-control"
                        type="text"
                        id="Slmn Name"
                        name="Slmn Name"
                        aria-required="true"
                        placeholder="Member Code"
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
      <section className="issue-sec">
        <div className="container-fluid">
          {/* <div className="row">
                <div className="col-md-12">
                    <div className="heading-text">
                    <h1>Issue Receipt</h1>
                    </div>
                </div>
            </div> */}
          <div className="row all-btn">
            <div className="col-md-2 ">
              <div className="btn-box">
                <a href="#">Detail Report</a>
              </div>
            </div>
            <div className="col-md-2">
              <div className="btn-box">
                <a href="#">Detail With Add</a>
              </div>
            </div>
            <div className="col-md-2 ">
              <div className="btn-box">
                <a href="#">Summ Report</a>
              </div>
            </div>
            <div className="col-md-2 ">
              <div className="btn-box">
                <a href="#">Monthly Rec</a>
              </div>
            </div>
            <div className="col-md-2 ">
              <div className="btn-box">
                <a href="#">Scheme Bonus</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SchemeReport;
