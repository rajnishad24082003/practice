import { Transaction_SalesFun } from "../../context/DataCollector";

const Sales = () => {
  return (
    <section className="form_container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <form>
              <div className="row tiltle-row">
                <div className="col-md-12">
                  <div className="heading-text">
                    <h1>Sales</h1>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      className="form-control"
                      type="text"
                      id="Vch_Name"
                      name="Vch_Name"
                      aria-required="true"
                      placeholder="Vch Name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      className="form-control"
                      type="text"
                      id="Vch_Date"
                      name="Vch_Date"
                      aria-required="true"
                      placeholder="Vch Date"
                    />
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

export default Sales;
