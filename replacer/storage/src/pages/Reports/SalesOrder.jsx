import { Reports_SalesOrderFun } from "../../context/DataCollector";
const SalesOrder = () => {
  return (
    <section className="form_container">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <form>
            <div className="row tiltle-row">
              <div className="col-md-12">
                <div className="heading-text">
                  <h1>Sales Order</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group-box">
                  <input
                    onChange={Reports_SalesOrderFun}
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
                    onChange={Reports_SalesOrderFun}
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
                    onChange={Reports_SalesOrderFun}
                    className="form-control"
                    type="text"
                    id="Book_Code"
                    name="Book_Code"
                    aria-required="true"
                    placeholder="Book Code"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group-box">
                  <input
                    onChange={Reports_SalesOrderFun}
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
                    onChange={Reports_SalesOrderFun}
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
                    onChange={Reports_SalesOrderFun}
                    className="form-control"
                    type="text"
                    id="Cust_Name"
                    name="Cust_Name"
                    aria-required="true"
                    placeholder="Cust Name"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group-box">
                  <input
                    onChange={Reports_SalesOrderFun}
                    className="form-control"
                    type="text"
                    id="Slmn"
                    name="From_Amt"
                    aria-required="true"
                    placeholder="From < Amt"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group-box">
                  <input
                    onChange={Reports_SalesOrderFun}
                    className="form-control"
                    type="text"
                    id="To_Amt"
                    name="To_Amt"
                    aria-required="true"
                    placeholder="To Amt"
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

export default SalesOrder;
