import { Master_TaxFun } from "../../context/DataCollector";
export default function Tax() {
  return (
    <>
      <section className="form_container">
        <div className="container">
          <div className="row tiltle-row">
            <div className="col-md-12">
              <div className="heading-text">
                <h1>Tax Master</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4  table-left">
              <div className="left-box">
                <div className="table-row">
                  <div className="table-box">
                    <table className="table table-bordered">
                      <thead className="thead-dark">
                        <tr>
                          <th scope="col">Code</th>
                          <th scope="col">Name</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">01</th>
                          <td>Tax Free</td>
                        </tr>
                        <tr>
                          <th scope="row">02</th>
                          <td>GST 3% </td>
                        </tr>
                        <tr>
                          <th scope="row">03</th>
                          <td>GST 18% </td>
                        </tr>

                        <tr>
                          <th scope="row">04</th>
                          <td>VAT 1 %</td>
                        </tr>
                        <tr>
                          <th scope="row">05</th>
                          <td>CST 1 %</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <form className="selectformsec">
                <div className="row">
                  <div className="col-md-3">
                    <div className="form-group-box">
                      <input
                        onChange={Master_TaxFun}
                        className="form-control"
                        type="text"
                        id="Type"
                        name="Type"
                        aria-required="true"
                        placeholder="Tax Type"
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group-box">
                      <input
                        onChange={Master_TaxFun}
                        className="form-control"
                        type="text"
                        id="Desc"
                        name="co Tax"
                        aria-required="true"
                        placeholder="Tax Desc"
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group-box">
                      <input
                        onChange={Master_TaxFun}
                        className="form-control"
                        type="text"
                        id="Cust Tax"
                        name="Cust Tax"
                        aria-required="true"
                        placeholder="Tax %"
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group-box">
                      <input
                        onChange={Master_TaxFun}
                        className="form-control"
                        type="text"
                        id="Add"
                        name="Add"
                        aria-required="true"
                        placeholder="Add Tax %"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <div className="form-group-box">
                      <input
                        onChange={Master_TaxFun}
                        className="form-control"
                        type="text"
                        id="Code"
                        name="Code"
                        aria-required="true"
                        placeholder="AC Code"
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group-box">
                      <input
                        onChange={Master_TaxFun}
                        className="form-control"
                        type="text"
                        id="Sr."
                        name="Sr."
                        aria-required="true"
                        placeholder="Sr."
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group-box">
                      <input
                        onChange={Master_TaxFun}
                        className="form-control"
                        type="text"
                        id="Tax_Type"
                        name="Tax_Type"
                        aria-required="true"
                        placeholder="Tax Type"
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group-box">
                      <input
                        onChange={Master_TaxFun}
                        className="form-control"
                        type="text"
                        id="Tax_Name"
                        name="Tax_Name"
                        aria-required="true"
                        placeholder="Tax Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <div className="form-group-box">
                      <input
                        onChange={Master_TaxFun}
                        className="form-control"
                        type="text"
                        id="Ac_Code"
                        name="Ac_Code"
                        aria-required="true"
                        placeholder="Ac Code"
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group-box">
                      <input
                        onChange={Master_TaxFun}
                        className="form-control"
                        type="text"
                        id="Tax%"
                        name="Tax"
                        aria-required="true"
                        placeholder="Tax%"
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
      <section className="newtable-sec">
        <div className="container">
          <div className="row"></div>
        </div>
      </section>
    </>
  );
}
