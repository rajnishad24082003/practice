import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function Party() {
  const [Master_Party, setMaster_Party] = useState({});
  const [isRowClicked, setIsRowClicked] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false); // New state to track button clicks
  const Master_PartyFun = (e, ch) => {
    if (ch) {
      setMaster_Party(e);
    } else {
      setMaster_Party({
        ...Master_Party,
        [e.target.name]: e.target.value.toUpperCase(),
      });
    }
  };

  const handleChangeSelectedOption = (e) => {
    setSelectedOption(e.target.value.toUpperCase());
    setMaster_Party({});
    setIsRowClicked(false);
    setIsButtonClicked(false); // Reset the button click state
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

  const rowClickFun = (data) => {
    Master_PartyFun(data, true);
    setIsRowClicked(true); // Set the state variable to true when the row is clicked
  };

  const [filterText, setFilterText] = useState("");
  const filterFun = (e) => {
    setFilterText(e.target.value);
  };

  const [PartyMaster, setPartyMaster] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState("CUSTOMER"); // Default selection is customer

  const statesAndUTsInIndia = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
    'Andaman and Nicobar Islands',
    'Chandigarh',
    'Dadra and Nagar Haveli and Daman and Diu',
    'Lakshadweep',
    'Delhi',
    'Puducherry',
  ];


  const fetchData = async () => {
    try {
      const apiUrl =
        selectedOption === "CUSTOMER"
          ? `http://www.example.com/partyData/`
          : `http://www.example.com/vendorData`;
      const response = await axios.get(apiUrl);
      const dataFromDataBase = response.data.Data;
      console.log(dataFromDataBase);

      // If the data is not available, set an empty array
      const modifiedData = dataFromDataBase
        ? dataFromDataBase.map((item) => ({
          id: item.partyData.Ac_Code,
          name: item.partyData.Ac_Name,
          mainId: item._id,
          ...item.partyData,
        }))
        : [];

      setPartyMaster(modifiedData);
      Master_PartyFun({}, true);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
      toast.error("Error fetching data. Please try again later.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      Master_PartyFun({});
    }
  };

  // Update data whenever the selectedOption changes
  useEffect(() => {
    setIsLoading(true); // Set isLoading to true before fetching new data
    fetchData();
  }, [selectedOption]);

  useEffect(() => {
    setMaster_Party({}); // Reset Master_Party to an empty object
    fetchData();
  }, [selectedOption]);

  const DataSaveFun = (e) => {
    e.preventDefault();

    // Check if required fields are filled
    if (
      !Master_Party.Ac_Name ||
      !Master_Party.Ac_Group ||
      !Master_Party.Area
    ) {
      toast.error("Please fill in all required fields.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    setIsButtonClicked(true);
    const updatedMasterData = Master_Party;

    console.log(updatedMasterData);
    // Iterate through properties
    for (let i in updatedMasterData) {
      if (typeof updatedMasterData[i] === 'string') {
        updatedMasterData[i] = updatedMasterData[i].toUpperCase();
      }
    }
    console.log(updatedMasterData);

    setMaster_Party(updatedMasterData);




    axios
      .post(
        selectedOption === "CUSTOMER"
          ? `http://www.example.com/partyData`
          : `http://www.example.com/vendorData`,
        {
          partyData: Master_Party,
        }
      )
      .then(async (response) => {
        // Fetch data again based on the selected option (customer or vendor)
        fetchData();
        // Reusing the fetchData function to refetch the data
        toast.success("Record added", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setIsButtonClicked(false);
        Master_PartyFun({}, true);
      })
      .catch(function (error) {
        console.error("Error saving data:", error);
        toast.error("Error saving data. Please try again later.", {
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
  const deleteData = (e) => {
    e.preventDefault();
    axios
      .delete(
        selectedOption === "CUSTOMER"
          ? `http://www.example.com/partyData/${Master_Party.mainId}`
          : `http://www.example.com/vendorData/${Master_Party.mainId}`,
        {
          partyData: Master_Party,
        }
      )
      .then(async (response) => {
        // Fetch data again to refresh the table after deletion
        fetchData();
        Master_PartyFun({}, true); // Reusing the fetchData function to refetch the data
        toast.info("Record deleted", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setIsButtonClicked(true);
        Master_PartyFun({}, true);
      })
      .catch(function (error) {
        console.log(error);
        console.error("Error deleting data:", error);
        toast.error("Error deleting data. Please try again later.", {
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
  const updateData = (e) => {
    console.log(Master_Party);
    e.preventDefault();
    axios
      .patch(
        selectedOption === "customer"
          ? `http://www.example.com/partyData/${Master_Party.mainId}`
          : `http://www.example.com/vendorData/${Master_Party.mainId}`,
        {
          partyData: Master_Party,
        }
      )
      .then(async (response) => {
        // Fetch data again to refresh the table after updating
        fetchData();
        // Reusing the fetchData function to refetch the data
        toast.success("Record updated", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setIsButtonClicked(true);
        Master_PartyFun({}, true);
      })
      .catch(function (error) {
        console.error("Error updating data:", error);
        toast.error("Error updating data. Please try again later.", {
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
            {isLoading ? (
              <div className="loading"></div>
            ) : (
              <div className="search-table-filter-sec">
                <div>
                  <select
                    value={selectedOption}
                    onChange={handleChangeSelectedOption}
                    className="custom-select"
                  >
                    <option value="CUSTOMER">CUSTOMER</option>
                    <option value="VENDOR">VENDOR</option>
                  </select>
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
                                key={column?.id}
                                align={column.align}
                                style={{ minWidth: column.minWidth }}
                              >
                                {column?.label}
                              </TableCell>
                            ))}
                          </TableRow>
                        </TableHead>
                        <TableBody>

                          {PartyMaster?.filter((row) =>
                            `${row.name}`
                              .toLowerCase()
                              .includes(filterText.toLowerCase())
                          )
                            .slice(
                              page * rowsPerPage,
                              page * rowsPerPage + rowsPerPage
                            )
                            .map((row) => (
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={row?.id}
                                onClick={() => rowClickFun(row)}
                              >
                                {columns.map((column) => {
                                  const value = row[column?.id];
                                  return (
                                    <TableCell key={column?.id} align="left">
                                      {value}
                                    </TableCell>
                                  );
                                })}
                              </TableRow>
                            ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    <TablePagination
                      rowsPerPageOptions={[5, 10, 25, 100]}
                      component="div"
                      count={PartyMaster?.length}
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
                      disabled
                      onChange={Master_PartyFun}
                      className="form-control"
                      value={Master_Party.Ac_Code ? Master_Party.Ac_Code : ""}
                      type="text"
                      id="Accode"
                      name="Ac_Code"
                      aria-required="true"
                      placeholder={PartyMaster.length}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group-box">
                    <input
                      onChange={Master_PartyFun}
                      value={Master_Party.Ac_Name ? Master_Party.Ac_Name : ""}
                      className="form-control"
                      type="text"
                      id="code"
                      name="Ac_Name"
                      aria-required="true"
                      required="true"
                      placeholder="Ac Name"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group-box">
                    <input
                      onChange={Master_PartyFun}
                      value={Master_Party.Ac_Group ? Master_Party.Ac_Group : ""}
                      className="form-control"
                      type="text"
                      id="Address1"
                      name="Ac_Group"
                      aria-required="true"
                      placeholder="Ac Group"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group-box">
                    <input
                      onChange={Master_PartyFun}
                      value={Master_Party.Area ? Master_Party.Area : ""}
                      className="form-control"
                      type="text"
                      id="Area"
                      name="Area"
                      aria-required="true"
                      placeholder="Area"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group-box">
                    <input
                      onChange={Master_PartyFun}
                      value={
                        Master_Party.Book_Page_No
                          ? Master_Party.Book_Page_No
                          : ""
                      }
                      className="form-control"
                      type="text"
                      id="Book"
                      name="Book_Page_No"
                      aria-required="true"
                      placeholder="Book page No"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group-box">
                    <input
                      onChange={Master_PartyFun}
                      value={
                        Master_Party.Ac_Short_Name
                          ? Master_Party.Ac_Short_Name
                          : ""
                      }
                      className="form-control"
                      type="text"
                      id="short"
                      name="Ac_Short_Name"
                      aria-required="true"
                      placeholder="Ac short Name"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <div className="form-group-box">
                    <textarea
                      class="form-control"
                      rows="3"
                      placeholder="Address"
                      name="Address"
                      value={Master_Party.Address ? Master_Party.Address : ""}
                      onChange={Master_PartyFun}
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group-box">
                    <input
                      value={Master_Party.Anv_Date ? Master_Party.Anv_Date : ""}
                      onChange={Master_PartyFun}
                      className="form-control"
                      type="text"
                      id="Adher"
                      name="Anv_Date"
                      aria-required="true"
                      placeholder="ANV date"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group-box">
                    <input
                      onChange={Master_PartyFun}
                      value={Master_Party.Pin_Code ? Master_Party.Pin_Code : ""}
                      className="form-control"
                      type="number"
                      id="pin"
                      name="Pin_Code"
                      aria-required="true"
                      placeholder="Pin Code"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group-box">
                    <input
                      value={Master_Party.City ? Master_Party.City : ""}
                      onChange={Master_PartyFun}
                      className="form-control"
                      type="text"
                      id="city"
                      name="City"
                      aria-required="true"
                      placeholder="city"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group-box">
                    <input
                      value={
                        Master_Party.Mobile_No ? Master_Party.Mobile_No : ""
                      }
                      onChange={Master_PartyFun}
                      className="form-control"
                      type="number"
                      id="Mobile"
                      name="Mobile_No"
                      aria-required="true"
                      placeholder="Mobile No"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <div className="form-group-box">
                    <input
                      value={
                        Master_Party.Mobile_No_2 ? Master_Party.Mobile_No_2 : ""
                      }
                      onChange={Master_PartyFun}
                      className="form-control"
                      type="number"
                      id="Mobile No"
                      name="Mobile_No_2"
                      aria-required="true"
                      placeholder="Mobile No2"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group-box">
                    <input
                      value={Master_Party.Email ? Master_Party.Email : ""}
                      onChange={Master_PartyFun}
                      className="form-control"
                      type="email"
                      id="Email"
                      name="Email"
                      aria-required="true"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group-box">
                    <input
                      value={
                        Master_Party.Pan_Card_No ? Master_Party.Pan_Card_No : ""
                      }
                      onChange={Master_PartyFun}
                      className="form-control"
                      type="text"
                      id="Pancard"
                      name="Pan_Card_No"
                      aria-required="true"
                      placeholder="Pancard No"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <div className="form-group-box">
                    <input
                      value={
                        Master_Party.Aadhar_No ? Master_Party.Aadhar_No : ""
                      }
                      onChange={Master_PartyFun}
                      className="form-control"
                      type="text"
                      id="Aadhar1"
                      name="Aadhar_No"
                      aria-required="true"
                      placeholder="Aadhar no"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group-box">
                    <input
                      value={Master_Party.Ref_By ? Master_Party.Ref_By : ""}
                      onChange={Master_PartyFun}
                      className="form-control"
                      type="text"
                      id="Ref"
                      name="Ref_By"
                      aria-required="true"
                      placeholder="Ref  By"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group-box">
                    <input
                      value={Master_Party.Gst_No ? Master_Party.Gst_No : ""}
                      onChange={Master_PartyFun}
                      className="form-control"
                      type="text"
                      id="Gst_No"
                      name="Gst_No"
                      aria-required="true"
                      placeholder="GST NO"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                {/* <div className="col-md-4"> */}
                  {/* <div className="form-group-box"> */}
                    {/* <input
                      value={Master_Party.State ? Master_Party.State : ""}
                      onChange={Master_PartyFun}
                      className="form-control"
                      type="text"
                      id="STATE"
                      name="State"
                      aria-required="true"
                      placeholder="STATE"
                    /> */}

                    <Autocomplete
                      onClick={Master_PartyFun}
                      id="STATE"
                      name="STATE"
                      variant="standard"
                      color="warning"
                      focused
                      options={statesAndUTsInIndia}
                      sx={{ width: 300 }}
                      getOptionLabel={(option) => option}
                      renderInput={(params) => (
                        <TextField {...params} placeholder="State" />
                      )}
                    />
                  {/* </div> */}
                {/* </div> */}

                <div className="col-md-4">
                  <div className="form-group-box">
                    <select
                      value={Master_Party.Gst_Type ? Master_Party.Gst_Type : ""}
                      className="custom-select"
                      id="inputGroupSelect02"
                      name="Gst_Type"
                      onClick={Master_PartyFun}
                    >
                      <option selected>GST TYPE</option>
                      <option value="1">LOCAL</option>
                      <option value="2">BANK DTL</option>
                      <option value="3">BANK DTL</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group-box">
                    <input
                      value={
                        Master_Party.Birth_Date ? Master_Party.Birth_Date : ""
                      }
                      onChange={Master_PartyFun}
                      className="form-control"
                      type="date"
                      id="Birth"
                      name="Birth_Date"
                      aria-required="true"
                      placeholder="Birth Date"
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
                      disabled={isRowClicked || isButtonClicked} // Disable the button when isRowClicked or isButtonClicked is true
                    >
                      Save
                    </button>
                    <button
                      className="modify-btn clear-modify"
                      onClick={(e) => {
                        e.preventDefault();
                        setMaster_Party({}); // Clear fields
                        setIsRowClicked(false);
                        setIsButtonClicked(false);
                      }}
                    >
                      Clear
                    </button>
                    <button
                      className="modify-btn update-modify"
                      onClick={updateData}
                      disabled={isButtonClicked} // Disable the button when isButtonClicked is true
                    >
                      Update
                    </button>
                    <button
                      className="modify-btn delete-modify"
                      onClick={deleteData}
                      disabled={isButtonClicked} // Disable the button when isButtonClicked is true
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
}
