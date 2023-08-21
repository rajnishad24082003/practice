import { Dhiran_LoanInterestFun } from "../../context/DataCollector";
const LoanInterest = () => {
  return (
    <section className="form_container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <form>
              <div className="row tiltle-row">
                <div className="col-md-12">
                  <div className="heading-text">
                    <h1>Loan Intrest</h1>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      onChange={Dhiran_LoanInterestFun}
                      className="form-control"
                      type="text"
                      id="Slmn"
                      name="Slmn"
                      aria-required="true"
                      placeholder="Form Date"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      onChange={Dhiran_LoanInterestFun}
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
                      onChange={Dhiran_LoanInterestFun}
                      className="form-control"
                      type="text"
                      id="Ac Code"
                      name="Ac Code"
                      aria-required="true"
                      placeholder="AC Code"
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

export default LoanInterest;
