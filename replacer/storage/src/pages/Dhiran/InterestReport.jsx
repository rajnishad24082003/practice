import { Dhiran_InterestReportFun } from "../../context/DataCollector";

const InterestReport = () => {
  return (
    <section className="form_container">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <form>
            <div className="row tiltle-row">
              <div className="col-md-12">
                <div className="heading-text">
                  <h1>Dhiran Interest </h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group-box">
                  <input
                    onChange={Dhiran_InterestReportFun}
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
                    onChange={Dhiran_InterestReportFun}
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
                    onChange={Dhiran_InterestReportFun}
                    className="form-control"
                    type="text"
                    id="Slmn"
                    name="Slmn"
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

export default InterestReport;
