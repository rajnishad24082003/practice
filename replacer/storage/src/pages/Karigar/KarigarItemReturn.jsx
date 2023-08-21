import { Karigar_KarigarItemReturnFun } from "../../context/DataCollector";

const KarigarItemReturn = () => {
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
                      <h1>Approval Return</h1>
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
                        id="Issue Vch No"
                        name="Issue Vch No"
                        aria-required="true"
                        placeholder="Issue Vch No"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group-box">
                      <input
                        className="form-control"
                        type="text"
                        id="Cust Code"
                        name="Cust Code"
                        aria-required="true"
                        placeholder="Cust Code"
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

export default KarigarItemReturn;
