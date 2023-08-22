import { useState } from "react";

const ReportsFram = ({
  Heading,
  inputs,
  selectors,
  onchangeFun,
  tableData,
}) => {
  const [variableData, setvariableData] = useState({});
  onchangeFun = (e) => {
    setvariableData({
      ...variableData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <section className="form_container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <form className="selectformsec">
                <div className="row tiltle-row" style={{ margin: "0px" }}>
                  <div className="col-md-12">
                    <div className="heading-text">
                      <h1 style={{ margin: "0px" }}>{Heading}</h1>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {inputs.map((val, index) => {
                    return (
                      <div className="col-md-3" key={index}>
                        <div className="form-group-box">
                          <input
                            onChange={onchangeFun}
                            className="form-control"
                            type={val.type}
                            id={val.name}
                            name={val.name}
                            aria-required="true"
                            placeholder={val.placeholder}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="row">
                  {selectors.map((val, index) => {
                    return (
                      <div className="col-md-3" key={index}>
                        <div className="form-group-box">
                          <select
                            className="custom-select"
                            id={val.name}
                            name={val.name}
                            onChange={onchangeFun}
                          >
                            <option selected>{val.name}</option>
                            {val.options.map((opVal, opIndex) => {
                              return (
                                <option value={opVal.value} key={opIndex}>
                                  {opVal.value}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div
                className="table-box-tagtable_box"
                style={{ overflowY: "scroll", height: "300px" }}
              >
                <table className="table table-bordered">
                  <thead className="TAG-SEC-TABLE">
                    <tr>
                      {tableData.tr.map((val, index) => {
                        return <th scope="col">{val}</th>;
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.td.map((val, index) => {
                      return (
                        <tr>
                          <th scope="row" style={{ padding: "0px" }}>
                            <input
                              style={{ padding: "5px" }}
                              className="form-control"
                              type="text"
                              id="Sr"
                              name="Sr"
                              aria-required="true"
                              placeholder={index + 1}
                              disabled={!tableData.editable}
                            />
                          </th>
                          {val.map((tdVal, tdIndex) => {
                            return (
                              <td>
                                <input
                                  key={tdIndex}
                                  className="form-control"
                                  type="text"
                                  id={tdVal.key}
                                  name={tdVal.key}
                                  aria-required="true"
                                  placeholder={tdVal.key}
                                  value={tdVal.value}
                                  disabled={!tableData.editable}
                                />
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReportsFram;
