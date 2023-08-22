import { Reports_AddressPrintFun } from "../../context/DataCollector";
const AddressPrint = () => {
  return (
    <section className="form_container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <form>
              <div className="row tiltle-row">
                <div className="col-md-12">
                  <div className="heading-text">
                    <h1>Address Print Report</h1>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group-box">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Address Type</option>
                      <option value="1">No</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      onChange={Reports_AddressPrintFun}
                      className="form-control"
                      type="text"
                      id="code"
                      name="Party_Code"
                      aria-required="true"
                      placeholder="Party Code"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      onChange={Reports_AddressPrintFun}
                      className="form-control"
                      type="text"
                      id="Cust Group"
                      name="Ac_Group"
                      aria-required="true"
                      placeholder="Ac Group"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      onChange={Reports_AddressPrintFun}
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
                      onChange={Reports_AddressPrintFun}
                      className="form-control"
                      type="text"
                      id="Con_person"
                      name="Con_person"
                      aria-required="true"
                      placeholder="Con person"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      onChange={Reports_AddressPrintFun}
                      className="form-control"
                      type="text"
                      id="Birth_Date"
                      name="Birth_Date"
                      aria-required="true"
                      placeholder="Birth Date"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      onChange={Reports_AddressPrintFun}
                      className="form-control"
                      type="text"
                      id="Anu_Date"
                      name="Anu_Date"
                      aria-required="true"
                      placeholder="Anu Date"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group-box">
                  <select className="custom-select" id="inputGroupSelect02">
                                <option selected>Cust Group</option>
                                <option value="1">Cur in Use</option>
                                <option value="2">Cur in Use</option>
                                <option value="3">Bank dtl</option>
                              </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group-box">
                  <select className="custom-select" id="inputGroupSelect02">
                                <option selected>City</option>
                                <option value="1">Cur in Use</option>
                                <option value="2">Cur in Use</option>
                                <option value="3">Bank dtl</option>
                              </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      onChange={Reports_AddressPrintFun}
                      className="form-control"
                      type="text"
                      id="Address"
                      name="Address"
                      aria-required="true"
                      placeholder="Address"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      onChange={Reports_AddressPrintFun}
                      className="form-control"
                      type="number"
                      id="Mobile_No"
                      name="Mobile_No"
                      aria-required="true"
                      placeholder="Mobile No"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      onChange={Reports_AddressPrintFun}
                      className="form-control"
                      type="number"
                      id="Phone"
                      name="Phone"
                      aria-required="true"
                      placeholder="Phone"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      onChange={Reports_AddressPrintFun}
                      className="form-control"
                      type="text"
                      id="Ref_By"
                      name="Ref By"
                      aria-required="true"
                      placeholder="Ref By"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      onChange={Reports_AddressPrintFun}
                      className="form-control"
                      type="text"
                      id="Skip_Label"
                      name="Skip_Label"
                      aria-required="true"
                      placeholder="Skip Label"
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

export default AddressPrint;
