import { Reports_CashBookFun } from "../../context/DataCollector";
const CashBook = () => {
  return (
    <section className="form_container">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <form>
            <div className="row tiltle-row">
              <div className="col-md-12">
                <div className="heading-text">
                  <h1>Cash Book </h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group-box">
                  <input
                    onChange={Reports_CashBookFun}
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
                    onChange={Reports_CashBookFun}
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

export default CashBook;
