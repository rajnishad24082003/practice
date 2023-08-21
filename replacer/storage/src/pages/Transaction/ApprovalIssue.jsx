import { Transaction_ApprovalIssueFun } from "../../context/DataCollector";

const ApprovalIssue = () => {
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
                        <h1>Approval Issue</h1>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group-box">
                        <input
                          className="form-control"
                          type="text"
                          id="Vch No"
                          name="Countercode"
                          aria-required="true"
                          placeholder="Vch No"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group-box">
                        <input
                          className="form-control"
                          type="text"
                          id="Vch Date"
                          name="Vch Date"
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
                          className="form-control"
                          type="text"
                          id="Ac Code"
                          name="accode"
                          aria-required="true"
                          placeholder="Ac Ac Code"
                        />
                      </div>
                    </div>
                  
                  </div>
                
                </form>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
};

export default ApprovalIssue;
