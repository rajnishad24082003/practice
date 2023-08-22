import { Reports_ImageDetailFun } from "../../context/DataCollector";
const ImageDetail = () => {
  return (
    <section className="form_container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <form>
              <div className="row tiltle-row">
                <div className="col-md-12">
                  <div className="heading-text">
                    <h1>Image With Detall Report </h1>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      onChange={Reports_ImageDetailFun}
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
                    <select className="custom-select" id="inputGroupSelect02">
                      <option selected>Size</option>
                      <option value="1">Gold</option>
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
                      onChange={Reports_ImageDetailFun}
                      className="form-control"
                      type="text"
                      id="Group"
                      name="Group"
                      aria-required="true"
                      placeholder="Group"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      onChange={Reports_ImageDetailFun}
                      className="form-control"
                      type="text"
                      id="Counter"
                      name="Counter"
                      aria-required="true"
                      placeholder="Counter"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      onChange={Reports_ImageDetailFun}
                      className="form-control"
                      type="text"
                      id="To_Date"
                      name="To_Date"
                      aria-required="true"
                      placeholder="To Date"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group-box">
                    <select className="custom-select" id="inputGroupSelect02">
                      <option selected>Design</option>
                      <option value="1">Gold</option>
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
                      onChange={Reports_ImageDetailFun}
                      className="form-control"
                      type="text"
                      id="Product"
                      name="Product"
                      aria-required="true"
                      placeholder="Product"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      onChange={Reports_ImageDetailFun}
                      className="form-control"
                      type="text"
                      id="It_Code"
                      name="It_Code"
                      aria-required="true"
                      placeholder="It Code"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      onChange={Reports_ImageDetailFun}
                      className="form-control"
                      type="text"
                      id="Ac_Code"
                      name="Ac_Code"
                      aria-required="true"
                      placeholder="Ac Code"
                    />

                    {/* <select className="custom-select" id="inputGroupSelect02">
                                <option selected>Stk Type</option>
                                <option value="1">Gold</option>
                                <option value="2">Bank dtl</option>
                                <option value="3">Bank dtl</option>
                            </select> */}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group-box">
                    <select className="custom-select" id="inputGroupSelect02">
                      <option selected>It Typee</option>
                      <option value="1">Gold</option>
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
                      onChange={Reports_ImageDetailFun}
                      className="form-control"
                      type="text"
                      id="Weight"
                      name="Weight"
                      aria-required="true"
                      placeholder="Weight"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      onChange={Reports_ImageDetailFun}
                      className="form-control"
                      type="text"
                      id="Weight"
                      name="Weight"
                      aria-required="true"
                      placeholder="Weight"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
              <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      onChange={Reports_ImageDetailFun}
                      className="form-control"
                      type="text"
                      id="Tag_No"
                      name="Tag_No"
                      aria-required="true"
                      placeholder="Tag No"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group-box">
                    <select className="custom-select" id="inputGroupSelect02">
                      <option selected>Kr Name</option>
                      <option value="1">Gold</option>
                      <option value="2">Bank dtl</option>
                      <option value="3">Bank dtl</option>
                    </select>
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

export default ImageDetail;
