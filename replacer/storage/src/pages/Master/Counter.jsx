import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Counter = () => {
  let [Master_Counter, setMaster_Counter] = useState({});
  const [isRowSelected, setIsRowSelected] = useState(false);

  let Master_CounterFun = (edit, change) => {
    if (change) {
      setMaster_Counter(edit);
    } else {
      setMaster_Counter({
        ...Master_Counter,
        [edit.target.name]: edit.target.value.toUpperCase(),
      });
    }
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  let rowClickFun = (data) => {
    Master_CounterFun(data, true);
    setIsRowSelected(true);
  };

  // Update the clear and updateData functions to reset isRowSelected
  let clearAndReset = () => {
    Master_CounterFun({}, true);
    setIsRowSelected(false);
  };
  let [filterText, setfilterText] = useState("");
  let filterFun = (e) => {
    setfilterText(e.target.value);
    console.log(filterText);
  };

  let [apiData, setApiData] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const loadingData = async () => {
      let response = await axios.get("http://www.example.com/counterData");
      //console.log(response);
      let modifiedData = [];
      for (let i = 0; i < response.data.Data.length; i++) {
        modifiedData.push({
          id: response.data.Data[i].counterData?.Counter_Code,
          name: response.data.Data[i].counterData?.Counter_Name,
          ...response.data.Data[i].counterData,
          mainId: response.data.Data[i]._id,
        });
      }
      setIsLoading(false);
      setApiData(modifiedData);
    }
    loadingData();
  }, []);

  let data = apiData ? apiData : [];
  console.log(data);
  let [addedData, setaddedData] = useState([]);
  let DataSaveFun = (e) => {
    e.preventDefault();

    const updatedMasterData = Master_Counter;

    console.log(updatedMasterData);
    // Iterate through properties
    for (let i in updatedMasterData) {
      if (typeof updatedMasterData[i] === 'string') {
        updatedMasterData[i] = updatedMasterData[i].toUpperCase();
      }
    }
    console.log(updatedMasterData);

    setMaster_Counter(updatedMasterData);

    // console.log(Master_Counter);
    // let newMasterC = Master_Counter
    // newMasterC.name = newMasterC.name.toUpperCase();
    // newMasterC.Counter_Name = newMasterC.Counter_Name.toUpperCase();
    // console.log(newMasterC);
    // setMaster_Counter(newMasterC);
    axios
      .post("http://www.example.com/counterData", {
        counterData: Master_Counter,
      })
      .then(async () => {
        let response = await axios.get("http://www.example.com/counterData");
        let modifiedData = [];
        for (let i = 0; i < response.data.Data.length; i++) {
          modifiedData.push({
            id: response.data.Data[i].counterData.Counter_Code,
            name: response.data.Data[i].counterData.Counter_Name,
            ...response.data.Data[i].counterData,
            mainId: response.data.Data[i]._id,
          });
        }
        setIsLoading(false);
        setaddedData(modifiedData);
        toast.success("record added", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch(function (error) {
        setIsLoading(false);
        console.log(error);
        toast.error("Add Both Fields", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };
  let deleteData = (e) => {
    e.preventDefault();
    axios
      .delete(`http://www.example.com/counterData/${Master_Counter.mainId}`, {
        PartyData: Master_Counter,
      })
      .then(async (response) => {
        let dataFromDataBase = await axios.get(
          "http://www.example.com/counterData"
        );
        let modifiedData = [];
        for (let i = 0; i < dataFromDataBase.data.Data.length; i++) {
          modifiedData.push({
            id: dataFromDataBase.data.Data[i].counterData?.Counter_Code,
            name: dataFromDataBase.data.Data[i].counterData?.Counter_Name,
            mainId: dataFromDataBase.data.Data[i]._id,
            ...dataFromDataBase.data.Data[i].counterData,
          });
        }
        setIsLoading(false);
        setaddedData(modifiedData);
        toast.info("record deleted", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch(function (error) {
        setIsLoading(false);
        console.log(error);
        toast.error("error", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };
  let updateData = (e) => {
    e.preventDefault();
    if (!isRowSelected) {
      return; // Do nothing if no row is selected
    }
    axios
      .patch(`http://www.example.com/counterData/${Master_Counter.mainId}`, {
        counterData: Master_Counter,
      })
      .then(async (response) => {
        let dataFromDataBase = await axios.get(
          "http://www.example.com/counterData"
        );
        let modifiedData = [];
        for (let i = 0; i < dataFromDataBase.data.Data.length; i++) {
          modifiedData.push({
            id: dataFromDataBase.data.Data[i].counterData.Counter_Code,
            name: dataFromDataBase.data.Data[i].counterData.Counter_Name,
            mainId: dataFromDataBase.data.Data[i]._id,
            ...dataFromDataBase.data.Data[i].counterData,
          });
        }
        setIsLoading(false);
        setaddedData(modifiedData);
        toast.success("record updated", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch(function (error) {
        setIsLoading(false);
        console.log(error);
        toast.error("error", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
    clearAndReset();
  };

  return (
    <div>
      <section className="form_container">
        <div className="container">
          <div className="row tiltle-row">
            <div className="col-md-12">
              <div className="heading-text">
                <h1>Counter Master</h1>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 table-left">
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
                        {isLoading ? (
                          <div class="loading"></div>
                        ) : (
                          <>
                            {addedData.length > 0 ? (
                              <>
                                {" "}
                                {addedData.map((val, index) => {
                                  return (
                                    <tr
                                      onClick={() => {
                                        rowClickFun(val);
                                      }}
                                    >
                                      <th scope="col">{val.id}</th>
                                      <th scope="col">{val.name}</th>
                                    </tr>
                                  );
                                })}
                              </>
                            ) : (
                              <>
                                {" "}
                                {data.map((val, index) => {
                                  return (
                                    <tr
                                      onClick={() => {
                                        rowClickFun(val);
                                      }}
                                    >
                                      <th scope="col">{val.id}</th>
                                      <th scope="col">{val.name}</th>
                                    </tr>
                                  );
                                })}
                              </>
                            )}
                          </>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <form className="selectformsec">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group-box">
                      <input
                        onChange={Master_CounterFun}
                        className="form-control"
                        value={
                          Master_Counter.Counter_Code
                            ? Master_Counter.Counter_Code
                            : ""
                        }
                        type="text"
                        id="Countercode"
                        name="Counter_Code"
                        aria-required="true"
                        placeholder="Counter Code"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group-box">
                      <input
                        onChange={Master_CounterFun}
                        value={
                          Master_Counter.Counter_Name
                            ? Master_Counter.Counter_Name
                            : ""
                        }
                        className="form-control"
                        type="text"
                        id="Counter Name"
                        name="Counter_Name"
                        aria-required="true"
                        placeholder="Counter Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="btn-box">
                      <button
                        className="modify-btn save-modify"
                        onClick={DataSaveFun}
                        disabled={isRowSelected}
                      >
                        Save
                      </button>
                      <button
                        className="modify-btn  clear-modify"
                        onClick={(e) => {
                          e.preventDefault();
                          Master_CounterFun({}, true);
                        clearAndReset
                        }}
                     
                      >
                        clear
                      </button>
                      {/* <button
                        className="modify-btn update-modify"
                        onClick={updateData}
                      >
                        update
                      </button> */}

                      <button
                        className="modify-btn update-modify"
                        onClick={updateData}
                        disabled={!isRowSelected} // Disable Update button if no row is selected
                      >
                        update
                      </button>

                      <button
                        className="modify-btn delete-modify"
                        onClick={deleteData}
                        disabled={!isRowSelected} // Disable Delete button if no row is selected
                      >
                        delete
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    </div>
  );
};

export default Counter;
