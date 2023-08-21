import React, { useEffect, useState } from "react";
import axios from "axios";
//import { useProduct } from "../../context/Product";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Button } from "react-bootstrap";
// import { Master_AddressFun } from "../../context/DataCollector";
export default function Address() {
  const [isFormDataModified, setIsFormDataModified] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  let [Master_Address, setMaster_Address] = useState({});

  let Master_AddressFun = (edit, change) => {
    if (change) {
      setMaster_Address(edit);
      setIsFormDataModified(true); // Form data has been modified
    } else {
      setMaster_Address({
        ...Master_Address,
        [edit.target.name]: edit.target.value.toUpperCase(),
      });
      setIsFormDataModified(true); // Form data has been modified
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
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  let rowClickFun = (data) => {
    Master_AddressFun(data, true);
    setIsRowClicked(true);
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

      let response = await axios.get("http://www.example.com/addressBook");
      //console.log(response);
      let modifiedData = [];
      for (let i = 0; i < response.data.Data.length; i++) {
        modifiedData.push({
          id: response.data.Data[i].addressBook?.Cust_Code,
          name: response.data.Data[i].addressBook?.Cust_Name,
          ...response.data.Data[i].addressBook,
          mainId: response.data.Data[i]._id,
        });
      }
      setIsLoading(false);
      setApiData(modifiedData);

    }

    loadingData();
  }, []);

  let data = apiData ? apiData : [];
  console.log(apiData);
  let [addedData, setaddedData] = useState([]);
  const DataSaveFun = (e) => {
    e.preventDefault();

    if (isSaving || !Master_Address.Cust_Group || !Master_Address.Cust_Name || !Master_Address.Area) {
      // If saving is already in progress or required fields are not filled
      return;
    }

    setIsSaving(true);
    const updatedMasterData = Master_Address;

    console.log(updatedMasterData);
    // Iterate through properties
    for (let i in updatedMasterData) {
      if (typeof updatedMasterData[i] === 'string') {
        updatedMasterData[i] = updatedMasterData[i].toUpperCase();
      }
    }
    console.log(updatedMasterData);

    setMaster_Address(updatedMasterData);

    axios
      .post("http://www.example.com/addressBook", {
        addressBook: Master_Address,
      })
      .then(async () => {
        let response = await axios.get("http://www.example.com/addressBook");
        console.log(response);
        let modifiedData = [];
        for (let i = 0; i < response.data.Data.length; i++) {
          modifiedData.push({
            id: response.data.Data[i].addressBook?.Cust_Code,
            name: response.data.Data[i].addressBook?.Cust_Name,
            ...response.data.Data[i].addressBook,
            mainId: response.data.Data[i]._id,
          });
        }
        setIsLoading(false);
        setaddedData(modifiedData);
        setMaster_Address({});
        setIsFormDataModified(false);
        setIsSaving(false); // Mark saving as complete
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
        setIsSaving(false);
      });
  };
  let deleteData = (e) => {
    e.preventDefault();
    axios
      .delete(`http://www.example.com/addressBook/${Master_Address.mainId}`, {
        PartyData: Master_Address,
      })
      .then(async (response) => {
        let dataFromDataBase = await axios.get(
          "http://www.example.com/addressBook"
        );
        let modifiedData = [];
        for (let i = 0; i < dataFromDataBase.data.Data?.length; i++) {
          modifiedData.push({
            id: dataFromDataBase.data.Data[i].addressBook?.Cust_Code,
            name: dataFromDataBase.data.Data[i].addressBook?.Cust_Name,
            mainId: dataFromDataBase.data.Data[i]._id,
            ...dataFromDataBase.data.Data[i].addressBook,
          });
        }
        setIsLoading(false);
        setaddedData(modifiedData);
        setMaster_Address({});
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
    axios
      .patch(`http://www.example.com/addressBook/${Master_Address.mainId}`, {
        addressBook: Master_Address,
      })
      .then(async (response) => {
        let dataFromDataBase = await axios.get(
          "http://www.example.com/addressBook"
        );
        let modifiedData = [];
        for (let i = 0; i < dataFromDataBase.data.Data.length; i++) {
          modifiedData.push({
            id: dataFromDataBase.data.Data[i].addressBook.Cust_Code,
            name: dataFromDataBase.data.Data[i].addressBook.Cust_Name,
            mainId: dataFromDataBase.data.Data[i]._id,
            ...dataFromDataBase.data.Data[i].addressBook,
          });
        }
        setIsLoading(false);
        setaddedData(modifiedData);
        setMaster_Address({});
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
  };

  return (
    <section className="form_container">
      <div className="container">
        <div className="row tiltle-row">
          <div className="col-md-12">
            <div className="heading-text">
              <h1>Address Book</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="search-table-filter-sec">
              {isLoading ? (
                <div class="loading"></div>
              ) : (
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
              )}
            </div>
          </div>
          <div className="col-md-8">
            <form className="selectformsec">
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group-box">
                    <input
                      onChange={Master_AddressFun}
                      className="form-control"
                      type="text"
                      id="code"
                      name="Cust_Code"
                      aria-required="true"
                      placeholder="Customer Code"
                      value={
                        Master_Address.Cust_Code ? Master_Address.Cust_Code : ""
                      }
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group-box">
                    <input
                      onChange={Master_AddressFun}
                      className="form-control"
                      type="text"
                      id="code"
                      name="Cust_Name"
                      aria-required="true"
                      placeholder="Customer Name"
                      value={
                        Master_Address.Cust_Name ? Master_Address.Cust_Name : ""
                      }
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group-box">
                    <input
                      onChange={Master_AddressFun}
                      className="form-control"
                      type="text"
                      id="Cust Group"
                      name="Cust_Group"
                      aria-required="true"
                      placeholder="Customer Group"
                      value={
                        Master_Address.Cust_Group
                          ? Master_Address.Cust_Group
                          : ""
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group-box">
                    <input
                      onChange={Master_AddressFun}
                      className="form-control"
                      type="text"
                      id="Area"
                      name="Area"
                      required
                      aria-required="true"
                      placeholder="Area"
                      value={Master_Address.Area ? Master_Address.Area : ""}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group-box">
                    <input
                      onChange={Master_AddressFun}
                      className="form-control"
                      type="text"
                      id="Address"
                      name="Address"
                      aria-required="true"
                      placeholder="Address"
                      value={
                        Master_Address.Address ? Master_Address.Address : ""
                      }
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group-box">
                    <input
                      onChange={Master_AddressFun}
                      className="form-control"
                      type="text"
                      id="city"
                      name="City"
                      aria-required="true"
                      placeholder="City"
                      value={Master_Address.City ? Master_Address.City : ""}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <div className="form-group-box">
                    <input
                      onChange={Master_AddressFun}
                      className="form-control"
                      type="number"
                      id="Pin NO"
                      name="Pin_Code"
                      aria-required="true"
                      placeholder="Pin Code"
                      value={
                        Master_Address.Pin_Code ? Master_Address.Pin_Code : ""
                      }
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group-box">
                    <input
                      onChange={Master_AddressFun}
                      className="form-control"
                      type="number"
                      id="Phone_No"
                      name="Phone_No"
                      aria-required="true"
                      placeholder="Phone NO"
                      value={
                        Master_Address.Phone_No ? Master_Address.Phone_No : ""
                      }
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group-box">
                    <input
                      onChange={Master_AddressFun}
                      className="form-control"
                      type="number"
                      id="Mobile_No"
                      name="Mobile_No"
                      aria-required="true"
                      placeholder="Mobile No"
                      value={
                        Master_Address.Mobile_No ? Master_Address.Mobile_No : ""
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <div className="form-group-box">
                    <input
                      onChange={Master_AddressFun}
                      className="form-control"
                      type="number"
                      id="Mobile_No_2"
                      name="Mobile_No_2"
                      aria-required="true"
                      placeholder="Mobile NO 2"
                      value={
                        Master_Address.Mobile_No_2
                          ? Master_Address.Mobile_No_2
                          : ""
                      }
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group-box">
                    <input
                      onChange={Master_AddressFun}
                      className="form-control"
                      type="email"
                      id="Email"
                      name="Email"
                      aria-required="true"
                      placeholder="Email"
                      value={Master_Address.Email ? Master_Address.Email : ""}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group-box">
                    <input
                      onChange={Master_AddressFun}
                      className="form-control"
                      type="text"
                      id="Ref_By"
                      name="Ref_By"
                      aria-required="true"
                      placeholder="Ref By"
                      value={Master_Address.Ref_By ? Master_Address.Ref_By : ""}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <div className="form-group-box">
                    <input
                      onChange={Master_AddressFun}
                      className="form-control"
                      type="date"
                      id="Birth_Date"
                      name="Birth_Date"
                      aria-required="true"
                      placeholder="Birth Date"
                      value={
                        Master_Address.Birth_Date
                          ? Master_Address.Birth_Date
                          : ""
                      }
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group-box">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      name="Office_Detl"
                      id="Office_Detl"
                      onChange={Master_AddressFun}
                      value={
                        Master_Address.Office_Detl
                          ? Master_Address.Office_Detl
                          : ""
                      }
                    >
                      <option selected>OFFICE DETL</option>
                      <option value="NO">NO</option>
                      <option value="TWO">TWO</option>
                      <option value="THREE">THREE</option>
                    </select>
                  </div>
                </div>
                {/* <div className="col-md-4">
                  <div className="form-group-box">
                    <input
                      onChange={Master_AddressFun}
                      className="form-control"
                      type="date"
                      id="ANV__Date"
                      name="ANV__Date"
                      aria-required="true"
                      placeholder="Anv Date"
                      value={
                        Master_Address.ANV__Date ? Master_Address.ANV__Date : ""
                      }
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group-box">
                    <input
                      onChange={Master_AddressFun}
                      className="form-control"
                      type="date"
                      id="L_Birth_Date"
                      name="L_Birth_Date"
                      aria-required="true"
                      placeholder="L Birth Date"
                      value={
                        Master_Address.L_Birth_Date
                          ? Master_Address.L_Birth_Date
                          : ""
                      }
                    />
                  </div>
                </div> */}
              </div>
              <div className="row"></div>

              <div className="row">
                <div className="col-md-12">
                  <div className="btn-box">
                    <button
                      className="modify-btn save-modify"
                      onClick={DataSaveFun}
                      disabled={!isFormDataModified} // Disable the Save button when data is not modified
                    >
                      Save
                    </button>
                    <button
                      className="modify-btn clear-modify"
                      onClick={(e) => {
                        e.preventDefault();
                        setMaster_Address({});
                        setIsFormDataModified(false); // Form data has been cleared
                      }}
                    >
                      Clear
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
  );
}
