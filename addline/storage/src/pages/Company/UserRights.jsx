import { Company_UserRightsFun } from "../../context/DataCollector";
const UserRights = () => {
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
                      <h1>User Rights</h1>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group-box">
                      <input
                        onChange={Company_UserRightsFun}
                        className="form-control"
                        type="text"
                        id="User Name"
                        name="User_Name"
                        aria-required="true"
                        placeholder="User Name"
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
    </div>
  );
};

export default UserRights;
