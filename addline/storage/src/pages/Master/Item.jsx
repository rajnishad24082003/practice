import { Master_ItemFun } from "../../context/DataCollector";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useItemMaster } from "../../context/ItemMaster";
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
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
export default function Itam_master() {
  let [Master_Item, setMaster_Item] = useState({});
  let Master_ItemFun = (e, ch) => {
    if (ch) {
      setMaster_Item(e);
    } else {
      setMaster_Item({
        ...Master_Item,
        [e.target.name]: e.target.value.toUpperCase(),
      });
    }
  };
  let [itCodeData, setitCodeData] = useState([]);
  let [GroupCode, setGroupCode] = useState([]);


  let getItem = async () => {
    let getItemresponse = await axios.get("http://www.example.com/productData");
    let modifiedData = [];
    console.log(getItemresponse.data.Data);
    for (let i = 0; i < getItemresponse.data.Data.length; i++) {
      if (getItemresponse.data.Data[i].productData.PRODUCT_CODE) {
        modifiedData.push(getItemresponse.data.Data[i].productData.PRODUCT_CODE);
      }
    }
    setitCodeData(modifiedData.slice());
    console.log(getItemresponse.data.Data);
  };
  useEffect(() => {
    getItem();
  }, []);



  let getItemGroupCode = async () => {
    let getItemGroupCoderesponse = await axios.get("http://www.example.com/groupData");
    let modifiedData = [];
    console.log(getItemGroupCoderesponse.data.Data);
    for (let i = 0; i < getItemGroupCoderesponse.data.Data.length; i++) {
      if (getItemGroupCoderesponse.data.Data[i].groupData.Group_Code) {
        modifiedData.push(getItemGroupCoderesponse.data.Data[i].groupData.Group_Code);
      }
    }
    setGroupCode(modifiedData.slice());
    console.log(getItemGroupCoderesponse.data.Data);
  };
  useEffect(() => {
    getItemGroupCode();
  }, []);

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
    Master_ItemFun(data, true);
  };
  let [filterText, setfilterText] = useState("");
  let filterFun = (e) => {
    setfilterText(e.target.value);
    console.log(filterText);
  };
  let apiData = useItemMaster();
  let data = apiData.ItemMaster ? apiData.ItemMaster : [];
  let [addedData, setaddedData] = useState([]);
  let DataSaveFun = (e) => {
    e.preventDefault();
    axios
      .post("http://www.example.com/itemData", {
        itemData: Master_Item,
      })
      .then(async () => {
        let response = await axios.get("http://www.example.com/itemData");
        let modifiedData = [];
        for (let i = 0; i < response.data.Data.length; i++) {
          modifiedData.push({
            id: response.data.Data[i].itemData.Item_Code,
            name: response.data.Data[i].itemData.Item_Name,
            ...response.data.Data[i].itemData,
            mainId: response.data.Data[i]._id,
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



  // const Master_ItemFun = (event) => {
  //   const { name, value } = event.target;
  //   // Update your state or do something with the input value
  // };



  let deleteData = (e) => {
    e.preventDefault();
    axios
      .delete(`http://www.example.com/itemData/${Master_Item.mainId}`, {
        PartyData: Master_Item,
      })
      .then(async (response) => {
        let dataFromDataBase = await axios.get("http://www.example.com/itemData");
        let modifiedData = [];
        for (let i = 0; i < dataFromDataBase.data.Data.length; i++) {
          modifiedData.push({
            id: dataFromDataBase.data.Data[i]?.itemData?.Item_Code,
            name: dataFromDataBase.data.Data[i]?.itemData?.Item_Name,
            mainId: dataFromDataBase.data.Data[i]?._id,
            ...dataFromDataBase.data.Data[i].itemData,
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
      .patch(`http://www.example.com/itemData/${Master_Item.mainId}`, {
        itemData: Master_Item,
      })
      .then(async (response) => {
        let dataFromDataBase = await axios.get("http://www.example.com/itemData");
        let modifiedData = [];
        for (let i = 0; i < dataFromDataBase.data.Data.length; i++) {
          modifiedData.push({
            id: dataFromDataBase.data.Data[i].itemData.Item_Code,
            name: dataFromDataBase.data.Data[i].itemData.Item_Name,
            mainId: dataFromDataBase.data.Data[i]._id,
            ...dataFromDataBase.data.Data[i].itemData,
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
  let findQuery = async (Product_Code, Group_Code, Item_Type) => {
    let dataFromDataBase = await axios.post(
      "http://www.example.com/itemData/HsnCode",
      {
        findHsnCode: {
          Product_Code: Product_Code,
          Group_Code: Group_Code,
          Item_Type: Item_Type,
        },
      }
    );
    console.log(dataFromDataBase);
    let { HSN_Code, Item_Code, Item_Name } = dataFromDataBase.data.findHsnCode;
    setMaster_Item({
      ...Master_Item,
      HSN_Code,
      Item_Code,
      Item_Name,
    });
  };
  useEffect(() => {
    let { Product_Code, Group_Code, Item_Type } = Master_Item;
    if (Product_Code && Group_Code && Item_Type) {
      let debounce = setTimeout(() => {
        findQuery(Product_Code, Group_Code, Item_Type);
      }, 500);
      return () => {
        clearTimeout(debounce);
      };
    }
  }, [Master_Item.Product_Code, Master_Item.Group_Code, Master_Item.Item_Type]);
  console.log(Master_Item);

  console.log(itCodeData)
  const options = itCodeData;
  const optionsgroupcode = GroupCode;
  return (
    <section className="form_container">
      <ToastContainer />
      <div className="container">
        <div className="row tiltle-row">
          <div className="col-md-12">
            <div className="heading-text">
              <h1>Item Master</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="search-table-filter-sec">
              {apiData.isLoading ? (
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

                  
                <Autocomplete
                    sx={{ width: '45%' }}
                    onChange={(event, newValue) => {
                      Master_ItemFun({
                        target: {
                          name: 'Product_Code',
                          value: newValue ? newValue : '',
                        },
                      });
                    }}
                    id="Product_Code"
                    name="Product_Code"
                    variant="standard"
                    color="warning"
                    focused
                    options={options}
                    getOptionLabel={(option) => option} // Make sure this line is correct
                    renderInput={(params) => (
                      <TextField {...params} placeholder="PR CODE" />
                    )}
                  />
           
                  {/* <div className="form-group-box">
                    <input
                      onChange={Master_ItemFun}
                      className="form-control"
                      type="text"
                      id="Product_Code"
                      name="Product_Code"
                      aria-required="true"
                      placeholder="Pr code"
                      value={
                        Master_Item.Product_Code ? Master_Item.Product_Code : ""
                      }
                    />
                  </div> */}
                  {/* <Autocomplete
                   onChange={Master_ItemFun}
                      id="Product_Code"
                      name="Product_Code"
                      variant="standard"
                      color="warning"
                      focused
                      options={options}
                      sx={{ width: 300 }}
                      // renderInput={(params) => (
                      //   <TextField {...params} label="Movie" />
                      // )}
                      renderInput={Master_ItemFun}
                    /> */}




                  {/* In this example, when the user selects an option from the Autocomplete dropdown, the onChange event is triggered. Inside the onChange handler, we construct an event object similar to what the Master_ItemFun function expects for an input element. We then call Master_ItemFun with this constructed event object, effectively updating the state or performing an action based on the selected option.

                  Please adapt this code according to your actual implementation and requirements. */}






                </div>
              <div className="col-md-6"> 
                       <Autocomplete
                    onChange={(event, newValue) => {
                      Master_ItemFun({
                        target: {
                          name: 'Group_Code',
                          value: newValue ? newValue : '',
                        },
                      });
                    }}
                    id="Group_Code"
                    name="Group_Code"
                    variant="standard"
                    color="warning"
                    focused
                    options={optionsgroupcode}
                    sx={{ width: 300 }}
                    getOptionLabel={(option) => option}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="GR code" />
                    )}
                  />
                </div> 
                <div className="col-md-4">
                  <div className="form-group-box">
                    <select
                      className="custom-select"
                      name="Item_Type"
                      onChange={Master_ItemFun}
                      id="Item_Type"
                      value={Master_Item.Item_Type ? Master_Item.Item_Type : ""}
                    >
                      <option selected>SELECT TYPE</option>
                      <option value="GOLD">GOLD</option>
                      <option value="SILVER">SILVER</option>
                      <option value="DIAMOND">DIAMOND</option>
                      <option value="PLATINUM">PLATINUM</option>
                      <option value="IMITATION">IMITATION</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group-box">
                    <input
                      disabled
                      className="form-control"
                      type="text"
                      id="Item_Code"
                      name="Item_Code"
                      aria-required="true"
                      placeholder="Item Code"
                      value={Master_Item.Item_Code ? Master_Item.Item_Code : ""}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group-box">
                    <input
                      onChange={Master_ItemFun}
                      className="form-control"
                      type="text"
                      id="Item_Name"
                      name="Item_Name"
                      aria-required="true"
                      placeholder="Item Name"
                      value={Master_Item.Item_Name ? Master_Item.Item_Name : ""}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group-box">
                    <input
                      onChange={Master_ItemFun}
                      className="form-control"
                      type="text"
                      id="Counter_Code"
                      name="Counter_Code"
                      aria-required="true"
                      placeholder="Counter Code"
                      value={
                        Master_Item.Counter_Code ? Master_Item.Counter_Code : ""
                      }
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group-box">
                    <input
                      onChange={Master_ItemFun}
                      className="form-control"
                      type="text"
                      id="HSN_Code"
                      name="HSN_Code"
                      aria-required="true"
                      placeholder="HSN Code"
                      value={Master_Item.HSN_Code ? Master_Item.HSN_Code : ""}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <div className="form-group-box">
                    <input
                      onChange={Master_ItemFun}
                      className="form-control"
                      type="text"
                      id="Unit_Name"
                      name="Unit_Name"
                      aria-required="true"
                      placeholder="Unit Name"
                      value={Master_Item.Unit_Name ? Master_Item.Unit_Name : ""}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group-box">
                    <select
                      className="custom-select"
                      id="inputGroupSelect02"
                      onChange={Master_ItemFun}
                      name="Rate_Per"
                      value={Master_Item.Rate_Per ? Master_Item.Rate_Per : ""}
                    >
                      <option selected>RATE PER</option>
                      <option value="1">GRAM WISE</option>
                      <option value="2">BANK DTL</option>
                      <option value="3">BANK DTL</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group-box">
                    <input
                      onChange={Master_ItemFun}
                      className="form-control"
                      type="text"
                      id="Labour_Percentage"
                      name="Labour_Percentage"
                      aria-required="true"
                      placeholder="Labour (%)"
                      value={
                        Master_Item.Labour_Percentage
                          ? Master_Item.Labour_Percentage
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
                      onChange={Master_ItemFun}
                      className="form-control"
                      type="text"
                      id="Labour_Per_Gram"
                      name="Labour_Per_Gram"
                      aria-required="true"
                      placeholder="Lbr per Gm"
                      value={
                        Master_Item.Labour_Per_Gram
                          ? Master_Item.Labour_Per_Gram
                          : ""
                      }
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group-box">
                    <input
                      onChange={Master_ItemFun}
                      className="form-control"
                      type="text"
                      id="Con_Percentage"
                      name="Con_Percentage"
                      aria-required="true"
                      placeholder="Con (%)"
                      value={
                        Master_Item.Con_Percentage
                          ? Master_Item.Con_Percentage
                          : ""
                      }
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group-box">
                    <input
                      onChange={Master_ItemFun}
                      className="form-control"
                      type="text"
                      id="Discount_Percentage"
                      name="Discount_Percentage"
                      aria-required="true"
                      placeholder="Dise  (%)"
                      value={
                        Master_Item.Discount_Percentage
                          ? Master_Item.Discount_Percentage
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
                      onChange={Master_ItemFun}
                      className="form-control"
                      type="text"
                      id="Item"
                      name="Item_Rate"
                      aria-required="true"
                      placeholder="Item Rate"
                      value={Master_Item.Item_Rate ? Master_Item.Item_Rate : ""}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group-box">
                    <input
                      onChange={Master_ItemFun}
                      className="form-control"
                      type="text"
                      id="Pcs_Rate"
                      name="Pcs_Rate"
                      aria-required="true"
                      placeholder="Pcs Rate"
                      value={Master_Item.Pcs_Rate ? Master_Item.Pcs_Rate : ""}
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
                    >
                      Save
                    </button>
                    <button
                      className="modify-btn  clear-modify"
                      onClick={(e) => {
                        e.preventDefault();
                        Master_ItemFun({}, true);
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
                      delete
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
