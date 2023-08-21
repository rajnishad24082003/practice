import { Reports_ItemStockFun } from "../../context/DataCollector";

const ItemStock = () => {
  return (
    <section className="form_container">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <form>
            <div className="row tiltle-row">
              <div className="col-md-12">
                <div className="heading-text">
                  <h1>Item Wise Stock Report</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group-box">
                  <input
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
                    <option value="1">Size</option>
                    <option value="2">Bank dtl</option>
                    <option value="3">Bank dtl</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group-box">
                 <input className="form-control" type="text" id="Group" name="Group" aria-required="true" placeholder="Group"/>
                  
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group-box">
                  <input className="form-control" type="text" id="Slmn Name" name="Ac_Code" aria-required="true" placeholder="Ac Code"/> 
               
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group-box">
                  <input
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
                    <option value="1">Size</option>
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
                <select className="custom-select" id="inputGroupSelect02">
                    <option selected>Stk Type</option>
                    <option value="1">Size</option>
                    <option value="2">Bank dtl</option>
                    <option value="3">Bank dtl</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group-box">
                <select className="custom-select" id="inputGroupSelect02">
                    <option selected>It Type</option>
                    <option value="1">Size</option>
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
                    className="form-control"
                    type="text"
                    id="Counter"
                    name="Counter"
                    aria-required="true"
                    placeholder="Counter"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group-box">
                <input
                    className="form-control"
                    type="text"
                    id="Emp"
                    name="Emp"
                    aria-required="true"
                    placeholder="Emp"
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

export default ItemStock;
