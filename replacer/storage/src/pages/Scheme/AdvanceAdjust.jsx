import { Scheme_AdvanceAdjustFun } from "../../context/DataCollector";
const AdvanceAdjust = () => {
  return (
    <section className="form_container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <form>
              <div className="row tiltle-row">
                <div className="col-md-12">
                  <div className="heading-text">
                    <h1>Member Advance Adjut</h1>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      onChange={Scheme_AdvanceAdjustFun}
                      className="form-control"
                      type="text"
                      id="Slmn"
                      name="Slmn"
                      aria-required="true"
                      placeholder="Vch No"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group-box">
                    <input
                      onChange={Scheme_AdvanceAdjustFun}
                      className="form-control"
                      type="text"
                      id="Slmn Name"
                      name="Slmn Name"
                      aria-required="true"
                      placeholder="Vch Date"
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

export default AdvanceAdjust;
