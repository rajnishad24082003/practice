import { Reports_BankBookFun } from "../../context/DataCollector";
const BankBook = () => {
  return (
    <section className="form_container">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <form>
            <div className="row tiltle-row">
              <div className="col-md-12">
                <div className="heading-text">
                  <h1>Bank Report</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group-box">
                  <input
                    onChange={Reports_BankBookFun}
                    className="form-control"
                    type="text"
                    id="From_Dt"
                    name="From_Dt"
                    aria-required="true"
                    placeholder="From Dt"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group-box">
                  <input
                    onChange={Reports_BankBookFun}
                    className="form-control"
                    type="text"
                    id="Ac_Code"
                    name="Ac_Code"
                    aria-required="true"
                    placeholder="Ac Code"
                  />

                  {/* <select className="custom-select" id="inputGroupSelect02">
                          <option selected>Size</option>
                          <option value="1">Gold</option>
                          <option value="2">Bank dtl</option>
                          <option value="3">Bank dtl</option>
                      </select>  */}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group-box">
                  <input
                    onChange={Reports_BankBookFun}
                    className="form-control"
                    type="text"
                    id="To_Dtate"
                    name="To_Dtate"
                    aria-required="true"
                    placeholder="To Dtate"
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

export default BankBook;
