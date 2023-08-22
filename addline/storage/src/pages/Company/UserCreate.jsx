import { Company_UserCreateFun } from "../../context/DataCollector";

const UserCreate = () => {
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
                      <h1>User Create</h1>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group-box">
                      <input
                        onChange={Company_UserCreateFun}
                        className="form-control"
                        type="text"
                        id="User Name"
                        name="User_Name"
                        aria-required="true"
                        placeholder="User Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group-box">
                      <input
                        onChange={Company_UserCreateFun}
                        className="form-control"
                        type="text"
                        id="Old Password"
                        name="Old_Password"
                        aria-required="true"
                        placeholder="Old Password"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group-box">
                      <input
                        onChange={Company_UserCreateFun}
                        className="form-control"
                        type="text"
                        id="New Password"
                        name="New_Password"
                        aria-required="true"
                        placeholder="New Password"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group-box">
                      <input
                        onChange={Company_UserCreateFun}
                        className="form-control"
                        type="text"
                        id="Re Type Password"
                        name="Re_Type_Password"
                        aria-required="true"
                        placeholder="Re Type Password"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group-box">
                      <select className="custom-select" id="inputGroupSelect02">
                        <option selected>USER TYPE</option>
                        <option value="1">CUR IN USE</option>
                        <option value="2">CUR IN USE</option>
                        <option value="3">BANK DTL</option>
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
    </div>
  );
};

export default UserCreate;
