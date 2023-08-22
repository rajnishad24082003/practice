import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import QRCode from "qrcode.react";
import { ToastContainer, toast } from "react-toastify";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import {
  Document,
  Page,
  Text,
  View,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";
import acc from "../../assets/images/Accounts.png";
import Button from "@mui/material/Button";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ReactSearchBox from "react-search-box";

export default function TagOpening() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const ref = React.useRef();
  const firstInputRef = useRef(null);
  let [counter, setCounter] = useState([]);
  const [todos, setTodos] = useState([]);
  const [Vchseq, setVchseq] = useState(0);
  const [Vchshow, setVchshow] = useState("");
  const [initial, setInitial] = useState();
  const [flag,setflag]=useState(false)
  const [saved, SetSaved] = useState([]);

  useEffect(() => {
    const getCounter = async () => {
      try {
        const response = await axios.get("http://www.example.com/counterData");
        let modifiedData = [];
        for (let i = 0; i < response?.data?.Data.length; i++) {
          if (response?.data.Data[i].counterData) {
            console.log(response?.data.Data[i].counterData.Counter_Code  )
            modifiedData?.push(response?.data.Data[i].counterData.Counter_Code);
          }
        }
        setCounter(modifiedData?.slice());
      } catch (error) {
        console.log(error);
      }
    };
    getCounter();
  }, []);

  const [formData, setFormData] = useState({
    sr: "",
    Item_Code: "",
    Tag_No: "",
    Design_No: "",
    Size: "",
    Center: "",
    Pcs: "",
    Gross_Weight: "",
    Net_Weight: "",
    Labour_Rate: "",
    Labour_Amount: "",
    Other_Amount: "",
    Net_Amount: "",
    MRP: "",
    Product_Cost: "",
    Image: "",
  });
  let [itCodeData, setitCodeData] = useState([]);
  let [qrData, setQrData] = useState("");
  const [editIndex, setEditIndex] = useState(-1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value.toUpperCase(),
    }));
  };
  //for autofocus
  useEffect(() => {
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, [formData?.Image?.length > 5]);

  const handleSave = () => {
    if (editIndex !== -1) {
      const updatedTodos = todos.map((todo, index) =>
        index === editIndex ? formData : todo
      );
      setTodos(updatedTodos);
      setEditIndex(-1);
    } else {
      setTodos([...todos, formData]);
    }
    setFormData({
      sr: "",
      Item_Code: "",
      Tag_No: "",
      Design_No: "",
      Size: "",
      Center: "",
      Pcs: "",
      Gross_Weight: "",
      Net_Weight: "",
      Labour_Rate: "",
      Labour_Amount: "",
      Other_Amount: "",
      Net_Amount: "",
      MRP: "",
      Product_Cost: "",
      Image: "",
    });
    handleclear(null);
  };

  const handleEdit = (index) => {
    setFormData(todos[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };
  function handleclear(ev) {
    if (ev) {
      ev.preventDefault();
    }
    ref.current.reset();
  }

  //whenever key is pressed
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSave();
    }
  };
  const downloadQRCode = (i) => {
    const qrCodeURL = document
      .getElementById(`qrCodeEl${i}`)
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    setqrimgblob([...qrimgblob, qrCodeURL]);
  };
  let [qrCodeArr, setqrCodeArr] = useState([]);
  const postAll = async () => {
    try {
      setqrCodeArr([]);
      for (const todo of todos) {
        const postData = {
          tagOpening: {
            Vch_No: Vchshow,
            Vch_Date: new Date().toISOString(), // Use ISO format for date
            Data: {
              Item_Type: todo.Item_Type, // Replace with the correct field name
              Item_Code: todo.Item_Code,
              Design_No: todo.Design_No,
              Size: todo.Size,
              Center: todo.Center,
              Pcs: todo.Pcs,
              Gross_Weight: todo.Gross_Weight,
              Net_Weight: todo.Net_Weight,
              Labour_Rate: todo.Labour_Rate,
              Labour_Amount: todo.Labour_Amount,
              Other_Amount: todo.Other_Amount,
              Net_Amount: todo.Net_Amount,
              MRP: todo.MRP,
              Product_Cost: todo.Product_Cost,
              Image: todo.Image,
              Karigar_Name: todo.Karigar_Name, // Add any missing fields
              Tag_No: todo.Tag_No,
            },
            isPatch: false,
            // Vch_No: Vchseq, // Use the appropriate Vch_No here
          },
        };

        const response = await axios.post(
          "http://www.example.com/tagData",
          postData
        );
        console.log(response.data);
        SetSaved([]);
        // Handle success for each todo item
        setflag(!flag)
        toast.success(`Record for ${todo.Item_Code} inserted`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setqrCodeArr((prev)=>([...prev, response.data.tagOpening.Data]));
      }
      setTodos([]);
      
    } catch (error) {
      // Handle error, show an error message or take other actions
      console.error("Error posting data:", error);
    }

    // Reset the formData fields
    setFormData({
      sr: "",
      Item_Type: "",
      Item_Code: "",
      Design_No: "",
      Size: "",
      Center: "",
      Pcs: "",
      Gross_Weight: "",
      Net_Weight: "",
      Labour_Rate: "",
      Labour_Amount: "",
      Other_Amount: "",
      Net_Amount: "",
      MRP: "",
      Product_Cost: "",
      Image: "",
      Karigar_Name: "",
      Tag_No: "",
    });
  };

  const options = itCodeData;
  

  useEffect(() => {
    const getVchNO = async () => {
      try {
        const vchNo = await axios.get("http://www.example.com/vchno");
        // console.log();
        // setVchseq(vchNo?.Vch_no);
        setVchseq(vchNo.data[0]?.Vch_no);
      } catch (error) {
        console.log(error);
      }
    };
    getVchNO();
  }, [handleSave]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    for (let i = 0; i < qrCodeArr.length; i++) {
      downloadQRCode(i);
    }
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  let [initialData, setinitialData] = useState([]);
  useEffect(() => {
    getItem();
  }, []);
  let getItem = async () => {
    let response = await axios.get("http://www.example.com/itemData");
    let modifiedData = [];
    for (let i = 0; i < response.data.Data.length; i++) {
      if (response.data.Data[i].itemData.Item_Code) {
        modifiedData.push(response.data.Data[i].itemData.Item_Code);
      }
    }
    setitCodeData(modifiedData.slice());
    setinitialData(modifiedData.slice());
  };
  const PageSize = {
    width: 161,
    height: 36,
  };
  // 5 cm in points (1 cm = 28.35 points)
  const stylespdf = {
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",

      ...PageSize,
    },
    textCont: {
      display: "inline",
      textAlign: "left",
    },

    section: {
      // margin: 1,
      // padding: 1,
      display: "flex",
      justifyContent: "space-between",

      flexDirection: "row",
      width: "100%",

      height: "100%",
    },

    text: {
      // border: "2px solid red",
      fontSize: 4,
      lineHeight: 1,
      paddingLeft: "5",
      paddingTop: "3",
    },
    tinyLogo: {
      width: 20,
      height: 20,
      package: "10",
    },
    pagetwo: {
      width: "50%",
      display: "flex",
      flexDirection: "row",
      textAlign: "left",
      paddingRight: "10px",

      paddingTop: "5",
    },

    onebox: {
      width: "50%",
      display: "flex",
      textAlign: "left",
      flexDirection: "row",
    },
    textContone: {
      transform: "rotate(-90deg)",
    },
  };
  const [qrimgblob, setqrimgblob] = useState([]);

  // console.log("qrimgblob", qrimgblob);
  // console.log("qrCodeArr", qrCodeArr);
  // const [tagSugg, settagSug] = useState();

  // useEffect(() => {
  //   const getData = () => {
  //     console.log(formData?.Item_Code);
  //     axios
  //       .get(`http://www.example.com/ItemCode/${formData?.Item_Code}`)
  //       .then((res) => {
  //         console.log(res.data);
  //         settagSug(res.data?.itemTagg);

  //         setFormData((prev) => ({
  //           ...prev,
  //           Tag_No: res.data?.itemTagg,
  //         }));
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };

  //   getData();
  // }, [formData?.Item_Code?.length > 5]);

  const [value, setValue] = useState(0);

  // const handleIncrement = () => {
  //   setValue(value + 1);
  // };

  // const handleDecrement = () => {
  //   if (value > 0) {
  //     setValue(value - 1);
  //   }
  // };
  // ... (your existing state definitions and other code)

  const handleIncrement = () => {
    setVchseq((prevVchseq) => prevVchseq + 1);
  };

  const handleDecrement = () => {
    if (Vchseq > 0) {
      setVchseq((prevVchseq) => prevVchseq - 1);
    }
  };

  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
  const formattedToday = `${year}-${month}-${day}`;
  let [Vch_Date, setVch_Date] = useState(formattedToday);

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  let [typeFilter, settypeFilter] = useState("");
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  useEffect(() => {
    let temp = [];
    for (let i = 0; i < initialData.length; i++) {
      console.log(initialData[i][2], typeFilter);
      if (initialData[i][2] == typeFilter) {
        temp.push(initialData[i]);
      }
    }
    setitCodeData(temp.slice());
    console.log(temp);
  }, [typeFilter]);

  //for showing saved data in db
  

  useEffect(() => {
    const getData = async () => {
      try {
        // console.log(initial);
        // console.log(Vchshow)
        if(Vchshow===(initial+1)){
          SetSaved([])
        }
        if (Vchshow >= 1) {
          const res = await axios.get(
            `http://www.example.com/tagData/vchData/${Vchshow}`
          );
          // console.log(res.data);
          
          // Extract Data from the nested structure
          SetSaved([]);
          setqrCodeArr([]);
          for (let i = 0; i < res?.data?.length; i++) {
            const tagOpeningData = res?.data[i]?.tagOpening?.Data;
            // console.log(tagOpeningData);
            SetSaved((prev) => [...prev, tagOpeningData]);
            setqrCodeArr((prev)=>([...prev, tagOpeningData]));
          }
          // console.log(saved);
        } 


        // Set the extracted Data to the saved state
      } catch (error) {
        // Handle error
      }
    };
    getData();
  }, [Vchshow]);

  useEffect(() => {
    const GetbyVchNo = async () => {
      try {
        const res = await axios.get("http://www.example.com/vchno");
        setVchshow(parseInt(res.data) + 1);
         
        

        const response = await axios.get("http://www.example.com/vchno");
        setInitial(response.data);


        
        // console.log(typeof res.data);
      } catch (error) {}
    };
    GetbyVchNo();
  }, [flag]);

  return (
    <>
      <section className="tagop-sec" >
        <div style={{display:"none"}}>
          {qrCodeArr.map((val, ind) => {
            return (
              <QRCode
                key={ind}
                id={`qrCodeEl${ind}`}
                size={30}
                value={val.Tag_No}
              />
            )
          })}
        </div>

        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <PDFViewer width="100%" height="600px">
                <Document>
                  {qrCodeArr.map((val, index) => (
                    <Page key={index} size={PageSize} style={stylespdf.page}>
                      <View style={stylespdf.section}>
                        <View style={stylespdf.onebox}>
                          <View style={stylespdf.textCont}>
                            <Text style={stylespdf.text}>
                              G:{val.Gross_Weight}
                            </Text>

                            <Text style={stylespdf.text}>
                              L:{val.Gross_Weight - val.Net_Weight}
                            </Text>
                            <Text style={stylespdf.text}>
                              N:{val.Net_Weight}
                            </Text>
                          </View>
                          <View style={stylespdf.textCont}>
                            <Text style={stylespdf.text}>{val.Item_Code}</Text>
                            <Text style={stylespdf.text}>{val.Tag_No}</Text>
                            <Text style={stylespdf.text}>pices:{val.Pcs}</Text>
                          </View>
                        </View>
                        <View style={stylespdf.pagetwo}>
                          <View style={stylespdf.textContone}>
                            {val.Labour_Rate ? (
                              <Text style={stylespdf.text}>
                                Lab %:{val.Labour_Rate}
                              </Text>
                            ) : (
                              ""
                            )}
                          </View>

                          <Image src={acc} style={stylespdf.tinyLogo} />

                          <Image
                            src={qrimgblob[index]}
                            style={stylespdf.tinyLogo}
                          />
                        </View>
                      </View>
                    </Page>
                  ))}
                </Document>
              </PDFViewer>
            </Box>
          </Modal>
        </div>
        <ToastContainer />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="vach_no-sec">
                <div className="vach_no-box">
                  <label htmlFor="">Vch No:</label>
                  <input
                    type="text"
                    className="vach_no"
                    value={Vchshow || ""}
                    onChange={(e) => setVchshow(e.target.value)}
                  />
                </div>
                <div className="arrowupdon-sec">
                  <div className="arrow">
                    {Vchshow >= 2 && (
                      <span onClick={() => setVchshow(Vchshow - 1)}>
                        <i
                          className="fas fa-chevron-circle-left"
                          title="Prev Voucher Data"
                        ></i>
                      </span>
                    )}

                    {(Vchshow  && (Vchshow<=initial))&& (
                      <span onClick={() => setVchshow(Vchshow + 1)}>
                        <i
                          className="fas fa-chevron-circle-right"
                          title="Next Voucher data"
                        ></i>
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group-box">
                  <input
                    onChange={(e) => {
                      e.preventDefault();
                      setVch_Date(e.target.value);
                    }}
                    value={Vch_Date}
                    className="form-control"
                    type="date"
                    defaultValue={formattedToday}
                    id="Vch_Date"
                    name="Vch_Date"
                    aria-required="true"
                    placeholder="date"
                  />
                </div>
              </div>
              <div>
                <h1>Running Clock</h1>
                <p>
                  {hours.toString().padStart(2, "0")}:
                  {minutes.toString().padStart(2, "0")}:
                  {seconds.toString().padStart(2, "0")}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group-box">
              <select
                className="custom-select"
                name="Item_Type"
                onChange={(e) => {
                  e.preventDefault();
                  settypeFilter(e.target.value);
                }}
                id="Item_Type"
                value={typeFilter}
              >
                <option selected>SELECT TYPE</option>
                <option value="G">GOLD</option>
                <option value="S">SILVER</option>
                <option value="D">DIAMOND</option>
                <option value="P">PLATINUM</option>
                <option value="I">IMITATION</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div
                className="box-list"
                style={{ height: "320px", overflowY: scroll }}
              >
                <form ref={ref}>
                  <table className="table table-bordered">
                    <thead
                      className="thead-dark"
                      title="Press Enter to get Data saved"
                    >
                      <tr>
                        <th scope="col">Sr.</th>
                        <th scope="col">ItCode</th>
                        <th scope="col">TagNo</th>
                        <th scope="col">DesignNo</th>
                        <th scope="col">Size</th>
                        <th scope="col">counter</th>
                        <th scope="col">PCS</th>
                        <th scope="col">Gross Weight</th>
                        <th scope="col">NetWt</th>
                        <th scope="col">Labour %</th>
                        <th scope="col">Labour_Amt</th>
                        <th scope="col">OthAmt</th>
                        <th scope="col">NetAmt</th>
                        <th scope="col">MRP</th>
                        <th scope="col">PR Cost</th>
                        <th scope="col">image</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th
                          scope="row"
                          style={{ padding: "0px", border: "none" }}
                        >
                          <div className="form-group-box">
                            <input
                              className="form-control"
                              type="text"
                              id="sr"
                              name="sr"
                              disabled
                              aria-required="true"
                              placeholder="sr."
                              onChange={handleChange}
                            />
                          </div>
                        </th>
                        <td>
                          <div className="form-group-box">
                            <Autocomplete
                              disablePortal
                              id="combo-box-demo"
                              options={options}
                              value={formData.Item_Code}
                              sx={{ width: 300 }}
                              onChange={(event, newValue) => {
                                setFormData((prevData) => ({
                                  ...prevData,
                                  Item_Code: newValue,
                                }));
                              }}
                              renderInput={(params) => (
                                <TextField {...params} ref={firstInputRef} />
                              )}
                            />
                            {/* <ReactSearchBox
                              placeholder={formData.Item_Code}
                              value={formData.Item_Code}
                              data={itCodeData}
                              ref
                              onChange={(e) => {
                                setFormData((prevData) => ({
                                  ...prevData,
                                  Item_Code: e,
                                }));
                              }}
                            /> */}
                          </div>
                        </td>
                        <td>
                          <div className="form-group-box">
                            <input
                              className="form-control"
                              type="text"
                              id="Tag_No"
                              name="Tag_No"
                              disabled
                              value={formData.Tag_No || ""}
                              aria-required="true"
                              placeholder="Tag No"
                              onChange={handleChange}
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-group-box">
                            <input
                              className="form-control"
                              type="text"
                              id="Design_No"
                              name="Design_No"
                              aria-required="true"
                              placeholder="Design No"
                              onChange={handleChange}
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-group-box">
                            <input
                              className="form-control"
                              type="text"
                              id="Size"
                              name="Size"
                              aria-required="true"
                              placeholder="Size"
                              onChange={handleChange}
                            />
                          </div>
                        </td>
                        <td>
                        <Autocomplete
                              disablePortal
                              id="combo-box-demo"
                              options={counter}
                              value={counter.counterData}
                              sx={{ width: 300 }}
                              onChange={(event, newValue) => {
                                setFormData((prevData) => ({
                                  ...prevData,
                                  Center: newValue,
                                }));
                              }}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                        </td>
                        <td>
                          <div className="form-group-box">
                            <input
                              className="form-control"
                              type="text"
                              id="Pcs"
                              required
                              name="Pcs"
                              aria-required="true"
                              placeholder="Pcs"
                              onChange={handleChange}
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-group-box">
                            <input
                              className="form-control"
                              type="text"
                              id="Gross_Weight"
                              name="Gross_Weight"
                              aria-required="true"
                              placeholder="Gr Wt"
                              required
                              onChange={handleChange}
                              onKeyDown={handleKeyPress}
                            />
                          </div>
                        </td>
                        <td>
                          {" "}
                          <div className="form-group-box">
                            <input
                              className="form-control"
                              type="text"
                              id="Net_Wt"
                              name="Net_Weight"
                              aria-required="true"
                              placeholder="Net Wt"
                              onChange={handleChange}
                              onKeyDown={handleKeyPress}
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-group-box">
                            <input
                              className="form-control"
                              type="text"
                              id="Lbr_Rate"
                              name="Labour_Rate"
                              aria-required="true"
                              placeholder="Lbr Rate"
                              onChange={handleChange}
                              onKeyDown={handleKeyPress}
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-group-box">
                            <input
                              className="form-control"
                              type="text"
                              id="Lbr_Amt"
                              name="Labour_Amount"
                              aria-required="true"
                              placeholder="Lbr_Amt"
                              onChange={handleChange}
                              onKeyDown={handleKeyPress}
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-group-box">
                            <input
                              className="form-control"
                              type="text"
                              id="Oth_Amt"
                              name="Other_Amount"
                              aria-required="true"
                              placeholder="Oth_Amt"
                              onChange={handleChange}
                              onKeyDown={handleKeyPress}
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-group-box">
                            <input
                              className="form-control"
                              type="text"
                              id="Net_Amt"
                              name="Net_Amount"
                              aria-required="true"
                              placeholder="Net Amt"
                              onChange={handleChange}
                              onKeyDown={handleKeyPress}
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-group-box">
                            <input
                              className="form-control"
                              type="text"
                              id="MRP"
                              name="MRP"
                              aria-required="true"
                              placeholder="MRP"
                              onChange={handleChange}
                              onKeyDown={handleKeyPress}
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-group-box">
                            <input
                              className="form-control"
                              type="text"
                              id="Pr_Cost"
                              name="Product_Cost"
                              aria-required="true"
                              placeholder="Pr Cost"
                              onChange={handleChange}
                              onKeyDown={handleKeyPress}
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-group-box">
                            <input
                              className="form-control"
                              type="text"
                              id="Image"
                              name="Image"
                              aria-required="true"
                              placeholder="Image"
                              onChange={handleChange}
                              onKeyDown={handleKeyPress}
                            />
                          </div>
                        </td>
                      </tr>
                      {saved?.length !== 0 && todos?.length === 0
                        ? saved?.map((save, index) => (
                            <tr key={index}>
                              <td>
                                <div className="form-group-box">
                                  <input
                                    className="form-control"
                                    type="text"
                                    id="sr"
                                    disabled
                                    aria-required="true"
                                    value={index + 1}
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="form-group-box">
                                  <input
                                    className="form-control"
                                    type="text"
                                    id="Image"
                                    name="Image"
                                    value={save?.Item_Code}
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="form-group-box">
                                  <input
                                    className="form-control"
                                    type="text"
                                    id="Image"
                                    name="Image"
                                    value={save?.Tag_No}
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="form-group-box">
                                  <input
                                    className="form-control"
                                    type="text"
                                    id="Image"
                                    name="Image"
                                    value={save?.Design_No}
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="form-group-box">
                                  <input
                                    className="form-control"
                                    type="text"
                                    id="Image"
                                    name="Image"
                                    value={save?.size}
                                  />
                                </div>
                              </td>

                              <td>
                                <div className="form-group-box">
                                  <input
                                    className="form-control"
                                    type="text"
                                    id="Image"
                                    name="Image"
                                    value={save?.Pcs}
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="form-group-box">
                                  <input
                                    className="form-control"
                                    type="text"
                                    id="Image"
                                    name="Image"
                                    value={save?.Gross_Weight}
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="form-group-box">
                                  <input
                                    className="form-control"
                                    type="text"
                                    id="Image"
                                    name="Image"
                                    value={save?.Net_Weight}
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="form-group-box">
                                  <input
                                    className="form-control"
                                    type="text"
                                    id="Image"
                                    name="Image"
                                    value={save?.Labour_Rate}
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="form-group-box">
                                  <input
                                    className="form-control"
                                    type="text"
                                    id="Image"
                                    name="Image"
                                    value={save?.Labour_Amount}
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="form-group-box">
                                  <input
                                    className="form-control"
                                    type="text"
                                    id="Image"
                                    name="Image"
                                    value={save?.Other_Amount}
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="form-group-box">
                                  <input
                                    className="form-control"
                                    type="text"
                                    id="Image"
                                    name="Image"
                                    value={save?.Net_Amount}
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="form-group-box">
                                  <input
                                    className="form-control"
                                    type="text"
                                    id="Image"
                                    name="Image"
                                    value={save?.MRP}
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="form-group-box">
                                  <input
                                    className="form-control"
                                    type="text"
                                    id="Image"
                                    name="Image"
                                    value={save?.Product_Cost}
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="form-group-box">
                                  <input
                                    className="form-control"
                                    type="text"
                                    id="Image"
                                    name="Image"
                                    value={save?.Image}
                                  />
                                </div>
                              </td>
                            </tr>
                          ))
                        : todos.map((todo, index) => (
                            <tr
                              key={index}
                              onDoubleClick={() => handleEdit(index)}
                            >
                              <td>{index + 1}</td>
                              <td>
                                {editIndex === index ? (
                                  <div className="form-group-box">
                                    <input
                                      type="text"
                                      name="Item_Code"
                                      value={formData.Item_Code}
                                      onChange={handleChange}
                                    />
                                  </div>
                                ) : (
                                  todo.Item_Code
                                )}
                              </td>
                              <td>
                                {editIndex === index ? (
                                  <input
                                    type="text"
                                    name="Tag_No"
                                    value={formData.Tag_No}
                                    onChange={handleChange}
                                  />
                                ) : (
                                  todo.Tag_No
                                )}
                              </td>
                              <td>
                                {editIndex === index ? (
                                  <input
                                    type="text"
                                    name="Design_No"
                                    value={formData.Design_No}
                                    onChange={handleChange}
                                  />
                                ) : (
                                  todo.Design_No
                                )}
                              </td>
                              <td>
                                {editIndex === index ? (
                                  <input
                                    type="text"
                                    name="Size"
                                    value={formData.Size}
                                    onChange={handleChange}
                                  />
                                ) : (
                                  todo.Size
                                )}
                              </td>
                              <td>
                                {editIndex === index ? (
                                  <input
                                    type="text"
                                    name="Center"
                                    value={formData.Center}
                                    onChange={handleChange}
                                  />
                                ) : (
                                  todo.Center
                                )}
                              </td>
                              <td>
                                {editIndex === index ? (
                                  <input
                                    type="text"
                                    name="Pcs"
                                    value={formData.Pcs}
                                    onChange={handleChange}
                                  />
                                ) : (
                                  todo.Pcs
                                )}
                              </td>
                              <td>
                                {editIndex === index ? (
                                  <input
                                    type="text"
                                    name="Gross_Weight"
                                    value={formData.Gross_Weight}
                                    onChange={handleChange}
                                  />
                                ) : (
                                  todo.Gross_Weight
                                )}
                              </td>
                              <td>
                                {editIndex === index ? (
                                  <input
                                    type="text"
                                    name="Net_Weight"
                                    value={formData.Net_Weight}
                                    onChange={handleChange}
                                  />
                                ) : (
                                  todo.Net_Weight
                                )}
                              </td>
                              <td>
                                {editIndex === index ? (
                                  <input
                                    type="text"
                                    name="Labour_Rate"
                                    value={formData.Labour_Rate}
                                    onChange={handleChange}
                                  />
                                ) : (
                                  todo.Labour_Rate
                                )}
                              </td>
                              <td>
                                {editIndex === index ? (
                                  <input
                                    type="text"
                                    name="Other_Amount"
                                    value={formData.Other_Amount}
                                    onChange={handleChange}
                                  />
                                ) : (
                                  todo.Other_Amount
                                )}
                              </td>
                              <td>
                                {editIndex === index ? (
                                  <input
                                    type="text"
                                    name="Net_Amount"
                                    value={formData.Net_Amount}
                                    onChange={handleChange}
                                  />
                                ) : (
                                  todo.Net_Amount
                                )}
                              </td>
                              <td>
                                {editIndex === index ? (
                                  <input
                                    type="text"
                                    name="MRP"
                                    value={formData.MRP}
                                    onChange={handleChange}
                                  />
                                ) : (
                                  todo.MRP
                                )}
                              </td>
                              <td>
                                {editIndex === index ? (
                                  <input
                                    type="text"
                                    name="Product_Cost"
                                    value={formData.Product_Cost}
                                    onChange={handleChange}
                                  />
                                ) : (
                                  todo.Product_Cost
                                )}
                              </td>
                              <td>
                                {editIndex === index ? (
                                  <input
                                    type="text"
                                    name="Image"
                                    value={formData.Image}
                                    onChange={handleChange}
                                  />
                                ) : (
                                  todo.Image
                                )}
                              </td>

                              <td>
                                {editIndex === index ? (
                                  <input
                                    type="text"
                                    name="Product_Cost"
                                    value={formData.Product_Cost}
                                    onChange={handleChange}
                                  />
                                ) : (
                                  todo.Product_Cost
                                )}
                              </td>
                              {/* ... Other table cells ... */}
                              {/* <td>
                            <button
                              type="button"
                              onClick={() => handleEdit(index)}
                              style={{
                                border: "none",
                                color: "#fff",
                                width: "50%",
                              }}
                            >
                              {editIndex === index ? "Save" : "Edit"}
                              <i
                                className="fas fa-edit"
                                style={{ color: "#1302ff" }}
                              ></i>
                            </button>
                            <button
                              type="button"
                              onClick={() => handleDelete(index)}
                              style={{ border: "none", width: "50%" }}
                            >
                              <i
                                className="fas fa-trash"
                                style={{ color: "red" }}
                              ></i>
                            </button>
                          </td> */}
                            </tr>
                          ))}
                    </tbody>
                  </table>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="btn-box" style={{ marginTop: "30px" }}>
                <button className="modify-btn save-modify" onClick={handleSave}>
                  {editIndex !== -1 ? "Update" : "Save"}
                </button>
                <button
                  className="modify-btn clear-modify"
                  onClick={handleclear}
                >
                  Clear
                </button>
                <button className="modify-btn clear-modify" onClick={postAll}>
                  Save all
                </button>
                <button
                  className="modify-btn clear-modify"
                  onClick={handleOpen}
                >
                  Print
                </button>
                {/* ... Other buttons ... */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
