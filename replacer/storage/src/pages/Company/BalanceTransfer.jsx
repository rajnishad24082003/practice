import { Company_BalanceTransferFun } from "../../context/DataCollector";
const BalanceTransfer = () => {
  return (
    <div>
      <section className="form_container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <form>
                <div className="row tiltle-row">
                  <div className="col-md-12">
                    <div className="heading-text">
                      <h1>Balance Transfer To New Year</h1>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group-box">
                      <input
                        onChange={Company_BalanceTransferFun}
                        className="form-control"
                        type="text"
                        id="Transfer"
                        name="Transfer_Year"
                        aria-required="true"
                        placeholder="Transfer Year"
                      />
                    </div>
                  </div>
                </div>

                {/* <div className="row">
                <div className="col-md-12">
                    <div className="btn-box">
                        <a href="#">Save</a>
                    </div>
                </div>
                </div> */}
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
            <div className="col-md-3 ">
              <div className="btn-box">
                <a href="#">Balance Trfr</a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="btn-box">
                <a href="#">Item Stock Trfr</a>
              </div>
            </div>
            <div className="col-md-3 ">
              <div className="btn-box">
                <a href="#">Item Stock Trfr</a>
              </div>
            </div>
            <div className="col-md-3 ">
              <div className="btn-box">
                <a href="#">Tag Stock Trfr</a>
              </div>
            </div>

            <div className="col-md-3 ">
              <div className="btn-box">
                <a href="#">Scheme Trfr</a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="btn-box">
                <a href="#">Order Trfr</a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="btn-box">
                <a href="#">Dhiran Trfr</a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="btn-box">
                <a href="#">Approval Trfr</a>
              </div>
            </div>

            <div className="col-md-3">
              <div className="btn-box">
                <a href="#">Loans Trfr</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BalanceTransfer;
