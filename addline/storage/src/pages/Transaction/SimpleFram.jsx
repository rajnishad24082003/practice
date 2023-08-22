import { useState, useEffect, useRef } from "react";
import axios from "axios";
const SimpleFram = ({ Heading, inputs, selectors, onchangeFun, tableData }) => {
  const [variableData, setvariableData] = useState({});
  onchangeFun = (e) => {
    setvariableData({
      ...variableData,
      [e.target.name]: e.target.value,
    });
  };
  const [tableCollector, settableCollector] = useState({});
  let [savedData, setsavedData] = useState([]);
  const tableRefs = Array.from({ length: tableData.tr.length }, () =>
    useRef(null)
  );
  let [rowSel, setrowSel] = useState(null);
  let [smallTableVar, setsmallTableVar] = useState({});
  console.log(smallTableVar);
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
                style={{ overflowY: "scroll", height: "200px" }}
              >
                <table className="table table-bordered">
                  <thead className="TAG-SEC-TABLE">
                    <tr>
                      {tableData.tr.map((val, index) => {
                        return <th scope="col">{val}</th>;
                      })}
                    </tr>
                    <tr>
                      {tableData.tr.map((val, index) => {
                        return (
                          <th scope="row" style={{ padding: "0px" }}>
                            <input
                              style={{ padding: "5px" }}
                              onChange={(e) => {
                                e.preventDefault();
                                settableCollector({
                                  ...tableCollector,
                                  [e.target.name]: e.target.value.toUpperCase(),
                                });
                              }}
                              ref={tableRefs[index]}
                              className="form-control"
                              type="text"
                              id={val}
                              name={val}
                              aria-required="true"
                              placeholder={val}
                            />
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {savedData.map((mainVal, mainIndex) => {
                      return (
                        <tr>
                          {tableData.tr.map((val, index) => {
                            if (val !== "Sr") {
                              return (
                                <td>
                                  <input
                                    key={index}
                                    style={{ padding: "5px" }}
                                    className="form-control"
                                    type="text"
                                    id={val}
                                    name={val}
                                    value={mainVal[val] ? mainVal[val] : ""}
                                    aria-required="true"
                                    onChange={(e) => {
                                      e.preventDefault();
                                      console.log(savedData[mainIndex][val]);
                                      setsavedData((prev) => {
                                        let temp = [...prev];
                                        temp[mainIndex][val] =
                                          e.target.value.toUpperCase();
                                        return temp;
                                      });
                                    }}
                                  />
                                </td>
                              );
                            } else {
                              return (
                                <td>
                                  <input
                                    key={index}
                                    style={{ padding: "5px" }}
                                    className="form-control"
                                    type="text"
                                    id={val}
                                    name={val}
                                    value={mainIndex + 1}
                                    aria-required="true"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      setrowSel(mainIndex);
                                    }}
                                  />
                                </td>
                              );
                            }
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <button
                    className="modify-btn save-modify"
                    onClick={(e) => {
                      e.preventDefault();
                      setsavedData([...savedData, tableCollector]);
                      settableCollector({});
                      for (let i = 0; i < tableData.tr.length; i++) {
                        tableRefs[i].current.value = "";
                      }
                    }}
                  >
                    Save
                  </button>
                  <button
                    className="modify-btn  clear-modify"
                    onClick={(e) => {
                      e.preventDefault();
                      settableCollector({});
                      for (let i = 0; i < tableData.tr.length; i++) {
                        tableRefs[i].current.value = "";
                      }
                    }}
                  >
                    clear
                  </button>
                  <button
                    className="modify-btn delete-modify"
                    onClick={(e) => {
                      e.preventDefault();
                      if (rowSel >= 0) {
                        setsavedData((prev) => {
                          let temp = [...prev];
                          temp.splice(rowSel, 1);
                          return temp;
                        });
                        setrowSel(null);
                      }
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SimpleFram;
