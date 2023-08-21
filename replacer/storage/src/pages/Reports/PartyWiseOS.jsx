import { Reports_PartyWiseOSFun } from "../../context/DataCollector";
const PartyWiseOS = () => {
  return (
    <section className="form_container">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <form>
            <div className="row tiltle-row">
              <div className="col-md-12">
                <div className="heading-text">
                  <h1>Party Account Report</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group-box">
                  <input
                    onChange={Reports_PartyWiseOSFun}
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
                    onChange={Reports_PartyWiseOSFun}
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
                  <input
                    onChange={Reports_PartyWiseOSFun}
                    className="form-control"
                    type="text"
                    id="Ac_Group"
                    name="Ac_Group"
                    aria-required="true"
                    placeholder="Ac Group"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group-box">
                  <input
                    onChange={Reports_PartyWiseOSFun}
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
                    onChange={Reports_PartyWiseOSFun}
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
                    onChange={Reports_PartyWiseOSFun}
                    className="form-control"
                    type="text"
                    id="City"
                    name="City"
                    aria-required="true"
                    placeholder="City"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group-box">
                  <input
                    onChange={Reports_PartyWiseOSFun}
                    className="form-control"
                    type="text"
                    id="Ref_By"
                    name="Ref_By"
                    aria-required="true"
                    placeholder="Ref By"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group-box">
                  <input
                    onChange={Reports_PartyWiseOSFun}
                    className="form-control"
                    type="text"
                    id="Amount"
                    name="Amount"
                    aria-required="true"
                    placeholder="Amount"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group-box">
                  <input
                    onChange={Reports_PartyWiseOSFun}
                    className="form-control"
                    type="text"
                    id="Amount"
                    name="Amount"
                    aria-required="true"
                    placeholder="Amount"
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

export default PartyWiseOS;
