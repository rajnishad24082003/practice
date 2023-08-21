import { Reports_OtherReportsFun } from "../../context/DataCollector";
const OtherReports = () => {
  return (
    <section className="form_container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <form>
              <div className="row tiltle-row">
                <div className="col-md-12">
                  <div className="heading-text">
                    <h1>Other Report</h1>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      onChange={Reports_OtherReportsFun}
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
                      onChange={Reports_OtherReportsFun}
                      className="form-control"
                      type="text"
                      id="To Date"
                      name="To Date"
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
                      onChange={Reports_OtherReportsFun}
                      className="form-control"
                      type="text"
                      id="Book_Code"
                      name="Book_Code"
                      aria-required="true"
                      placeholder="Book Code"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      onChange={Reports_OtherReportsFun}
                      className="form-control"
                      type="text"
                      id="Area"
                      name="Area"
                      aria-required="true"
                      placeholder="Area"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      onChange={Reports_OtherReportsFun}
                      className="form-control"
                      type="text"
                      id="Ac_Code"
                      name="Ac_Code"
                      aria-required="true"
                      placeholder="Ac Code"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      onChange={Reports_OtherReportsFun}
                      className="form-control"
                      type="text"
                      id="Product_Code"
                      name="Product_Code"
                      aria-required="true"
                      placeholder="Product Code"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      onChange={Reports_OtherReportsFun}
                      className="form-control"
                      type="text"
                      id="Group"
                      name="Group"
                      aria-required="true"
                      placeholder="Group"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      onChange={Reports_OtherReportsFun}
                      className="form-control"
                      type="text"
                      id="It_Code"
                      name="It_Code"
                      aria-required="true"
                      placeholder="It Code"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      onChange={Reports_OtherReportsFun}
                      className="form-control"
                      type="text"
                      id="Emp_Code"
                      name="Emp_Code"
                      aria-required="true"
                      placeholder="Emp Code"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group-box">
                    <select className="custom-select" id="inputGroupSelect02">
                      <option selected>It Type</option>
                      <option value="1">Cur in Use</option>
                      <option value="2">Cur in Use</option>
                      <option value="3">Bank dtl</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      onChange={Reports_OtherReportsFun}
                      className="form-control"
                      type="text"
                      id="Apr_Issue_No"
                      name="Apr_Issue_No"
                      aria-required="true"
                      placeholder="Apr Issue No:"
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

export default OtherReports;
