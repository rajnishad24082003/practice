import { Dhiran_DhiranReportFun } from "../../context/DataCollector";
const DhiranReport = () => {
  return (
    <section className="form_container">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <form>
            <div className="row tiltle-row">
              <div className="col-md-12">
                <div className="heading-text">
                  <h1>Dhiran Report </h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group-box">
                  <input
                    onChange={Dhiran_DhiranReportFun}
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
                    onChange={Dhiran_DhiranReportFun}
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
                    onChange={Dhiran_DhiranReportFun}
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
                    onChange={Dhiran_DhiranReportFun}
                    className="form-control"
                    type="text"
                    id="Slmn Name"
                    name="Slmn Name"
                    aria-required="true"
                    placeholder="Party Code"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group-box">
                  <input
                    onChange={Dhiran_DhiranReportFun}
                    className="form-control"
                    type="text"
                    id="Slmn"
                    name="Slmn"
                    aria-required="true"
                    placeholder="Packet No"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group-box">
                  <input
                    onChange={Dhiran_DhiranReportFun}
                    className="form-control"
                    type="text"
                    id="Slmn Name"
                    name="Slmn Name"
                    aria-required="true"
                    placeholder="City"
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

export default DhiranReport;
