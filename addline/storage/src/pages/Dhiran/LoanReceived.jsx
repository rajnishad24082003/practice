import { Dhiran_LoanReceivedFun } from "../../context/DataCollector";
const LoanReceived = () => {
  return (
    <section className="form_container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <form>
              <div className="row tiltle-row">
                <div className="col-md-12">
                  <div className="heading-text">
                    <h1>Lone Received</h1>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      onChange={Dhiran_LoanReceivedFun}
                      className="form-control"
                      type="text"
                      id="Slmn"
                      name="Slmn"
                      aria-required="true"
                      placeholder="Vch No"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      onChange={Dhiran_LoanReceivedFun}
                      className="form-control"
                      type="text"
                      id="Slmn Name"
                      name="Slmn Name"
                      aria-required="true"
                      placeholder="Vch Date"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      onChange={Dhiran_LoanReceivedFun}
                      className="form-control"
                      type="text"
                      id="Ac Code"
                      name="Ac Code"
                      aria-required="true"
                      placeholder="Ref No"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group-box">
                    <select className="custom-select" id="inputGroupSelect02">
                      <option selected>Loan Type</option>
                      <option value="1">Gram Wise</option>
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
                      onChange={Dhiran_LoanReceivedFun}
                      className="form-control"
                      type="text"
                      id="Slmn"
                      name="Slmn"
                      aria-required="true"
                      placeholder="Ac Code"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      onChange={Dhiran_LoanReceivedFun}
                      className="form-control"
                      type="text"
                      id="Slmn Name"
                      name="Slmn Name"
                      aria-required="true"
                      placeholder="Dhiran Amt"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      onChange={Dhiran_LoanReceivedFun}
                      className="form-control"
                      type="text"
                      id="Slmn"
                      name="Slmn"
                      aria-required="true"
                      placeholder="Monthil int %"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      onChange={Dhiran_LoanReceivedFun}
                      className="form-control"
                      type="text"
                      id="Slmn Name"
                      name="Slmn Name"
                      aria-required="true"
                      placeholder="Monthil int Amt"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      onChange={Dhiran_LoanReceivedFun}
                      className="form-control"
                      type="text"
                      id="Slmn"
                      name="Slmn"
                      aria-required="true"
                      placeholder="Interest % "
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      onChange={Dhiran_LoanReceivedFun}
                      className="form-control"
                      type="text"
                      id="Slmn Name"
                      name="Slmn Name"
                      aria-required="true"
                      placeholder="Dhiran Month"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group-box">
                    <select className="custom-select" id="inputGroupSelect02">
                      <option selected>Int Month</option>
                      <option value="1">Gram Wise</option>
                      <option value="2">Bank dtl</option>
                      <option value="3">Bank dtl</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      onChange={Dhiran_LoanReceivedFun}
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
                      onChange={Dhiran_LoanReceivedFun}
                      className="form-control"
                      type="text"
                      id="Slmn Name"
                      name="Slmn Name"
                      aria-required="true"
                      placeholder="Int Amount"
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

export default LoanReceived;
