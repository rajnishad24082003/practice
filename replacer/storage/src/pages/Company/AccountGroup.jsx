import { Company_AccountGroupFun } from "../../context/DataCollector";
import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Paper from "@mui/material/Paper";
import { usePartyMaster } from "../../context/PartyMaster";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
const AccountGroup = () => {

  const inputFields = document.querySelectorAll('input[type="text"]');

  function convertToUppercase(event) {
    const input = event.target;
    input.value = input.value.toUpperCase();
  }

  // Add event listeners to input fields
  inputFields.forEach(input => {
      input.addEventListener('input', convertToUppercase);
  });

  let [Master_Party, setMaster_Party] = useState({});
  let Company_AccountGroupFun = (e, ch) => {
    if (ch) {
      setMaster_Party(e);
    } else {
      setMaster_Party({
        ...Master_Party,
        [e.target.name]: e.target.value,
      });
    }
  };

  const columns = [
    { id: "id", label: "id", minWidth: 100 },
    { id: "name", label: "name", minWidth: 150 },
  ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  let rowClickFun = (data) => {
    Company_AccountGroupFun(data, true);
  };
  let [filterText, setfilterText] = useState("");
  let filterFun = (e) => {
    setfilterText(e.target.value);
    console.log(filterText);
  };
  // let apiData = usePartyMaster();

  // let data = apiData.PartyMaster ? apiData.PartyMaster : [];
  let data = [];
  let [addedData, setaddedData] = useState([]);
  let DataSaveFun = (e) => {
    e.preventDefault();
    axios
      .post("http://www.example.com/partyData", {
        partyData: Master_Party,
      })
      .then(async (response) => {
        let dataFromDataBase = await axios.get("http://www.example.com/partyData");
        let modifiedData = [];
        for (let i = 0; i < dataFromDataBase.data.Data.length; i++) {
          modifiedData.push({
            id: dataFromDataBase.data.Data[i].partyData.Ac_Code,
            name: dataFromDataBase.data.Data[i].partyData.Ac_Name,
            mainId: dataFromDataBase.data.Data[i]._id,
            ...dataFromDataBase.data.Data[i].partyData,
          });
        }
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
  let deleteData = (e) => {
    console.log(Master_Party);
    e.preventDefault();
    axios
      .delete(`http://www.example.com/partyData/${Master_Party.mainId}`, {
        partyData: Master_Party,
      })
      .then(async (response) => {
        let dataFromDataBase = await axios.get("http://www.example.com/partyData");
        let modifiedData = [];
        for (let i = 0; i < dataFromDataBase.data.Data.length; i++) {
          modifiedData.push({
            id: dataFromDataBase.data.Data[i].partyData.Ac_Code,
            name: dataFromDataBase.data.Data[i].partyData.Ac_Name,
            mainId: dataFromDataBase.data.Data[i]._id,
            ...dataFromDataBase.data.Data[i].partyData,
          });
        }
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
    axios
      .patch(`http://www.example.com/partyData/${Master_Party.mainId}`, {
        partyData: Master_Party,
      })
      .then(async (response) => {
        let dataFromDataBase = await axios.get("http://www.example.com/partyData");
        let modifiedData = [];
        for (let i = 0; i < dataFromDataBase.data.Data.length; i++) {
          modifiedData.push({
            id: dataFromDataBase.data.Data[i].partyData.Ac_Code,
            name: dataFromDataBase.data.Data[i].partyData.Ac_Name,
            mainId: dataFromDataBase.data.Data[i]._id,
            ...dataFromDataBase.data.Data[i].partyData,
          });
        }
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
  return (
    <section className="form_container">
      <ToastContainer />
      <div className="container">
        <div className="row tiltle-row">
          <div className="col-md-12">
            <div className="heading-text">
              <h1>Party Master</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            {/* {apiData.isLoading ? ( */}
            {data.isLoading ? (
              <div class="loading"></div>
            ) : (
              <div className="search-table-filter-sec">
                <div>
                  <input
                    className="search-input-btn"
                    name="filter"
                    onChange={filterFun}
                    placeholder="Search...."
                    value={filterText}
                  ></input>
                  <Paper sx={{ width: "100%", overflow: "hidden" }}>
                    <TableContainer sx={{ maxHeight: 440 }}>
                      <Table
                        stickyHeader
                        aria-label="sticky table"
                        className="table table-striped table-bordered table-hover"
                      >
                        <TableHead>
                          <TableRow>
                            {columns.map((column) => (
                              <TableCell
                                key={column.id}
                                align={column.align}
                                style={{ minWidth: column.minWidth }}
                              >
                                {column.label}
                              </TableCell>
                            ))}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {addedData.length > 0
                            ? addedData
                                .slice(
                                  page * rowsPerPage,
                                  page * rowsPerPage + rowsPerPage
                                )
                                .map((row) => {
                                  return (
                                    <TableRow
                                      hover
                                      role="checkbox"
                                      tabIndex={-1}
                                      key={row.id}
                                      onClick={() => {
                                        rowClickFun(row);
                                      }}
                                    >
                                      {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                          <TableCell
                                            key={column.id}
                                            align={"left"}
                                          >
                                            {value}
                                          </TableCell>
                                        );
                                      })}
                                    </TableRow>
                                  );
                                })
                            : data
                                .slice(
                                  page * rowsPerPage,
                                  page * rowsPerPage + rowsPerPage
                                )
                                .map((row) => {
                                  return (
                                    <TableRow
                                      hover
                                      role="checkbox"
                                      tabIndex={-1}
                                      key={row.id}
                                      onClick={() => {
                                        rowClickFun(row);
                                      }}
                                    >
                                      {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                          <TableCell
                                            key={column.id}
                                            align={"left"}
                                          >
                                            {value}
                                          </TableCell>
                                        );
                                      })}
                                    </TableRow>
                                  );
                                })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    <TablePagination
                      rowsPerPageOptions={[5, 10, 25, 100]}
                      component="div"
                      count={
                        addedData.length > 0 ? addedData.length : data.length
                      }
                      rowsPerPage={rowsPerPage}
                      page={page}
                      onPageChange={handleChangePage}
                      onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                  </Paper>
                </div>
              </div>
            )}
          </div>
          <div className="col-md-8">
            <form className="selectformsec">
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group-box">
                    <input
                      onChange={Company_AccountGroupFun}
                      className="form-control"
                      value={
                        Master_Party.Ac_Gr_Code ? Master_Party.Ac_Gr_Code : ""
                      }
                      type="number"
                      id="Ac_Gr_Code"
                      name="Ac_Gr_Code"
                      aria-required="true"
                      placeholder="Ac Gr Code"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group-box">
                    <input
                      onChange={Company_AccountGroupFun}
                      value={
                        Master_Party.Ac_Gr_Name ? Master_Party.Ac_Gr_Name : ""
                      }
                      className="form-control"
                      type="text"
                      id="Ac_Gr_Name"
                      name="Ac_Gr_Name"
                      aria-required="true"
                      placeholder="Ac Gr Name"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group-box">
                    <select className="custom-select" id="inputGroupSelect02">
                      <option selected>AC MAIN GROUP</option>
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
                    <button
                      className="modify-btn save-modify"
                      onClick={DataSaveFun}
                    >
                      Save
                    </button>
                    <button
                      className="modify-btn  clear-modify"
                      onClick={(e) => {
                        e.preventDefault();
                        Company_AccountGroupFun({}, true);
                      }}
                    >
                      clear
                    </button>
                    <button
                      className="modify-btn update-modify"
                      onClick={updateData}
                    >
                      update
                    </button>
                    <button
                      className="modify-btn delete-modify"
                      onClick={deleteData}
                    >
                      Delete
                    </button>
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

export default AccountGroup;
