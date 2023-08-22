import { Reports_TimeWiseFun } from "../../context/DataCollector";
const TimeWise = () => {
  return (
    <section className="form_container">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <form>
            <div className="row tiltle-row">
              <div className="col-md-12">
                <div className="heading-text">
                  <h1>Time Wise</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group-box">
                  <input
                    onChange={Reports_TimeWiseFun}
                    className="form-control"
                    type="text"
                    id="Area"
                    name="Area"
                    aria-required="true"
                    placeholder="Area"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group-box">
                  <input
                    onChange={Reports_TimeWiseFun}
                    className="form-control"
                    type="text"
                    id="City"
                    name="City"
                    aria-required="true"
                    placeholder="City"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group-box">
                  {/* <input onChange={Reports_TimeWiseFun } className="form-control" type="text" id="Slmn" name="Slmn" aria-required="true" placeholder="Fine Type"/> */}
                  <select className="custom-select" id="inputGroupSelect02">
                    <option selected>Fine Type</option>
                    <option value="1">Gold</option>
                    <option value="2">Bank dtl</option>
                    <option value="3">Bank dtl</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group-box">
                  {/* <input onChange={Reports_TimeWiseFun } className="form-control" type="text" id="Slmn Name" name="Slmn Name" aria-required="true" placeholder="Balance Type"/> */}
                  <select className="custom-select" id="inputGroupSelect02">
                    <option selected>Balance Type</option>
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
                    onChange={Reports_TimeWiseFun}
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
                    onChange={Reports_TimeWiseFun}
                    className="form-control"
                    type="text"
                    id="Ac_Code"
                    name="Ac_Code"
                    aria-required="true"
                    placeholder="Ac Code"
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

export default TimeWise;
