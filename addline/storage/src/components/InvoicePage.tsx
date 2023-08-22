import React, { FC, useState, useEffect } from "react";
import { Invoice, ProductLine } from "../data/types";
import { initialInvoice, initialProductLine } from "../data/initialData";
import EditableInput from "./EditableInput";
import EditableSelect from "./EditableSelect";
import EditableTextarea from "./EditableTextarea";
import EditableCalendarInput from "./EditableCalendarInput";
import EditableFileImage from "./EditableFileImage";
import countryList from "../data/countryList";
import Document from "./Document";
import Page from "./Page";
import View from "./View";
import Text from "./Text";
// import { Font } from "@react-pdf/renderer";
import Download from "./DownloadPDF";
import format from "date-fns/format";

// Font.register({
//   family: "Nunito",
//   fonts: [
//     { src: "https://fonts.gstatic.com/s/nunito/v12/XRXV3I6Li01BKofINeaE.ttf" },
//     {
//       src: "https://fonts.gstatic.com/s/nunito/v12/XRXW3I6Li01BKofA6sKUYevN.ttf",
//       fontWeight: 600,
//     },
//   ],
// });

interface Props {
  data?: Invoice;
  pdfMode?: boolean;
  onChange?: (invoice: Invoice) => void;
}

const InvoicePage: FC<Props> = ({ data, pdfMode, onChange }) => {
  const [invoice, setInvoice] = useState<Invoice>(
    data ? { ...data } : { ...initialInvoice }
  );
  const [subTotal, setSubTotal] = useState<number>();
  const [saleTax, setSaleTax] = useState<number>();

  const dateFormat = "MMM dd, yyyy";
  const invoiceDate =
    invoice.invoiceDate !== "" ? new Date(invoice.invoiceDate) : new Date();
  const invoiceDueDate =
    invoice.invoiceDueDate !== ""
      ? new Date(invoice.invoiceDueDate)
      : new Date(invoiceDate.valueOf());

  if (invoice.invoiceDueDate === "") {
    invoiceDueDate.setDate(invoiceDueDate.getDate() + 30);
  }

  const handleChange = (name: keyof Invoice, value: string | number) => {
    if (name !== "productLines") {
      const newInvoice = { ...invoice };

      if (name === "logoWidth" && typeof value === "number") {
        newInvoice[name] = value;
      } else if (name !== "logoWidth" && typeof value === "string") {
        newInvoice[name] = value;
      }

      setInvoice(newInvoice);
    }
  };

  const handleProductLineChange = (
    index: number,
    name: keyof ProductLine,
    value: string
  ) => {
    const productLines = invoice.productLines.map((productLine, i) => {
      if (i === index) {
        const newProductLine = { ...productLine };

        if (name === "description") {
          newProductLine[name] = value;
        } else {
          if (
            value[value.length - 1] === "." ||
            (value[value.length - 1] === "0" && value.includes("."))
          ) {
            newProductLine[name] = value;
          } else {
            const n = parseFloat(value);

            newProductLine[name] = (n ? n : 0).toString();
          }
        }

        return newProductLine;
      }

      return { ...productLine };
    });

    setInvoice({ ...invoice, productLines });
  };

  const handleRemove = (i: number) => {
    const productLines = invoice.productLines.filter(
      (productLine, index) => index !== i
    );

    setInvoice({ ...invoice, productLines });
  };

  const handleAdd = () => {
    const productLines = [...invoice.productLines, { ...initialProductLine }];

    setInvoice({ ...invoice, productLines });
  };

  const calculateAmount = (quantity: string, rate: string) => {
    const quantityNumber = parseFloat(quantity);
    const rateNumber = parseFloat(rate);
    const amount =
      quantityNumber && rateNumber ? quantityNumber * rateNumber : 0;

    return amount.toFixed(2);
  };

  useEffect(() => {
    let subTotal = 0;

    invoice.productLines.forEach((productLine) => {
      const quantityNumber = parseFloat(productLine.quantity);
      const rateNumber = parseFloat(productLine.rate);
      const amount =
        quantityNumber && rateNumber ? quantityNumber * rateNumber : 0;

      subTotal += amount;
    });

    setSubTotal(subTotal);
  }, [invoice.productLines]);

  useEffect(() => {
    const match = invoice.taxLabel.match(/(\d+)%/);
    const taxRate = match ? parseFloat(match[1]) : 0;
    const saleTax = subTotal ? (subTotal * taxRate) / 100 : 0;

    setSaleTax(saleTax);
  }, [subTotal, invoice.taxLabel]);

  useEffect(() => {
    if (onChange) {
      onChange(invoice);
    }
  }, [onChange, invoice]);
  return (
    <Document pdfMode={pdfMode}>
      <Page className="invoice-wrapper" pdfMode={pdfMode}>
        {!pdfMode && <Download data={invoice} />}
        <View className="company_logo">
          <EditableFileImage
            className="logo"
            placeholder="Your Logo"
            value={invoice.logo}
            width={invoice.logoWidth}
            pdfMode={pdfMode}
            onChangeImage={(value) => handleChange("logo", value)}
            onChangeWidth={(value) => handleChange("logoWidth", value)}
          />
        </View>
        <View className="flex table-rap" pdfMode={pdfMode}>
          <View className="w-60 left-box" pdfMode={pdfMode}>
            {/* <View className="input_box">
              <View className="heading-box">
                <h5>company Name :</h5>
              </View>
              <View className="input-fild">
                <EditableInput
                  className="fs-20 bold"
                  value={invoice.companyName}
                  onChange={(value) => handleChange("companyName", value)}
                  pdfMode={pdfMode}
                />
              </View>
            </View> */}
            <View className="input_box">
              <View className="heading-box">
                <h5>Your Name :</h5>
              </View>
              <View className="input-fild">
                <EditableInput
                  className="fs-20 bold"
                  value={invoice.name}
                  onChange={(value) => handleChange("name", value)}
                  pdfMode={pdfMode}
                />
              </View>
            </View>
            <View className="input_box">
              <View className="heading-box">
                <h5>Address:</h5>
              </View>
              <View className="input-fild">
                <EditableInput
                  className="fs-20 bold"
                  value={invoice.companyAddress}
                  onChange={(value) => handleChange("companyAddress", value)}
                  pdfMode={pdfMode}
                />
              </View>
            </View>
            <View className="input_box">
              <View className="heading-box">
                <h5>Mobille:</h5>
              </View>
              <View className="input-fild">
                <EditableInput
                  className="fs-20 bold"
                  value={invoice.Mobille}
                  onChange={(value) => handleChange("Mobille", value)}
                  pdfMode={pdfMode}
                />
              </View>
            </View>
            <View className="input_box">
              <View className="heading-box">
                <h5>PAN No:</h5>
              </View>
              <View className="input-fild">
                <EditableInput
                  className="fs-20 bold"
                  value={invoice.PANNo}
                  onChange={(value) => handleChange("PANNo", value)}
                  pdfMode={pdfMode}
                />
              </View>
            </View>
            <View className="input_box">
              <View className="heading-box">
                <h5>G S TIN:</h5>
              </View>
              <View className="input-fild">
                <EditableInput
                  className="fs-20 bold"
                  value={invoice.GSTine}
                  onChange={(value) => handleChange("GSTine", value)}
                  pdfMode={pdfMode}
                />
              </View>
            </View>
            <View className="input_box">
              <View className="heading-box">
                <h5>State:</h5>
              </View>
              <View className="input-fild">
                <EditableInput
                  className="fs-20 bold"
                  value={invoice.companyAddress2}
                  onChange={(value) => handleChange("companyAddress2", value)}
                  pdfMode={pdfMode}
                />
              </View>
            </View>

            {/* <EditableSelect
              options={countryList}
              value={invoice.companyCountry}
              onChange={(value) => handleChange("companyCountry", value)}
              pdfMode={pdfMode}
            /> */}
          </View>
          <View className="w-40 right-box" pdfMode={pdfMode}>
            <View className="title-box">
              <h5>Invoice</h5>
            </View>
            <View className="input_box">
              <View className="heading-box">
                <h5>Bill NO :</h5>
              </View>
              <View className="input-fild">
                <EditableInput
                  className="fs-20 bold"
                  value={invoice.BillNO}
                  onChange={(value) => handleChange("BillNO", value)}
                  pdfMode={pdfMode}
                />
              </View>
            </View>
            <View className="input_box">
              <View className="heading-box">
                <h5>Bill Date:</h5>
              </View>
              <View className="input-fild">
                <EditableInput
                  className="fs-20 bold"
                  value={invoice.BillDate}
                  onChange={(value) => handleChange("BillDate", value)}
                  pdfMode={pdfMode}
                />
              </View>
            </View>
            <View className="input_box">
              <View className="heading-box">
                <h5>State :</h5>
              </View>
              <View className="input-fild">
                <EditableInput
                  className="fs-20 bold"
                  value={invoice.State}
                  onChange={(value) => handleChange("State", value)}
                  pdfMode={pdfMode}
                />
              </View>
            </View>
            <View className="input_box">
              <View className="heading-box">
                <h5>Mo No:</h5>
              </View>
              <View className="input-fild">
                <EditableInput
                  className="fs-20 bold"
                  value={invoice.MoNo}
                  onChange={(value) => handleChange(">MoNo", value)}
                  pdfMode={pdfMode}
                />
              </View>
            </View>
          </View>
        </View>

        <View className="mt-30 bg-dark flex table-bootom-box" pdfMode={pdfMode}>
          <View className="input-box" pdfMode={pdfMode}>
            <EditableInput
              className="white bold"
              value={invoice.product}
              onChange={(value) => handleChange("product", value)}
              pdfMode={pdfMode}
              placeholder="product"
            />
          </View>
          <View className="input-box" pdfMode={pdfMode}>
            <EditableInput
              className="white bold right"
              value={invoice.Hsn}
              onChange={(value) => handleChange("Hsn", value)}
              pdfMode={pdfMode}
              placeholder="Hsn"
            />
          </View>
          <View className="input-box" pdfMode={pdfMode}>
            <EditableInput
              className="white bold right"
              value={invoice.grwt}
              onChange={(value) => handleChange("grwt", value)}
              placeholder="GR.WT"
              pdfMode={pdfMode}
            />
          </View>
          <View className="input-box" pdfMode={pdfMode}>
            <EditableInput
              className="white bold right"
              value={invoice.NETWT}
              onChange={(value) => handleChange("NETWT", value)}
              placeholder="NETWT"
              pdfMode={pdfMode}
            />
          </View>

          <View className="input-box" pdfMode={pdfMode}>
            <EditableInput
              className="white bold right"
              value={invoice.RATE}
              onChange={(value) => handleChange("RATE", value)}
              placeholder="RATE"
              pdfMode={pdfMode}
            />
          </View>
          <View className="input-box" pdfMode={pdfMode}>
            <EditableInput
              className="white bold right"
              value={invoice.TAXAble}
              onChange={(value) => handleChange("TAXAble", value)}
              placeholder="TAXAble"
              pdfMode={pdfMode}
            />
          </View>
        </View>

        <View
          className="mt-30 bg-dark flex table-bootom-box-liner"
          pdfMode={pdfMode}
        >
          <View className="input-box" pdfMode={pdfMode}>
            <EditableInput
              className="white bold"
              value={invoice.BG}
              onChange={(value) => handleChange("BG", value)}
              pdfMode={pdfMode}
              placeholder="BG"
            />
          </View>
          <View className="input-box" pdfMode={pdfMode}>
            <EditableInput
              className="white bold right"
              value={invoice.Hsn}
              onChange={(value) => handleChange("hsn", value)}
              pdfMode={pdfMode}
              placeholder="2545"
            />
          </View>
          <View className="input-box" pdfMode={pdfMode}>
            <EditableInput
              className="white bold right"
              value={invoice.grwt}
              onChange={(value) => handleChange("grwt", value)}
              placeholder="14568"
              pdfMode={pdfMode}
            />
          </View>
          <View className="input-box" pdfMode={pdfMode}>
            <EditableInput
              className="white bold right"
              value={invoice.NETWT}
              onChange={(value) => handleChange("NETWT", value)}
              placeholder="85469"
              pdfMode={pdfMode}
            />
          </View>

          <View className="input-box" pdfMode={pdfMode}>
            <EditableInput
              className="white bold right"
              value={invoice.RATE}
              onChange={(value) => handleChange("RATE", value)}
              placeholder="55625"
              pdfMode={pdfMode}
            />
          </View>
          <View className="input-box" pdfMode={pdfMode}>
            <EditableInput
              className="white bold right"
              value={invoice.TAXAble}
              onChange={(value) => handleChange("TAXAble", value)}
              placeholder="5696.25"
              pdfMode={pdfMode}
            />
          </View>
        </View>
        <View
          className="mt-30 bg-dark flex table-bootom-box-liner"
          pdfMode={pdfMode}
        >
          <View className="input-box" pdfMode={pdfMode}>
            <EditableInput
              className="white bold"
              value={invoice.BGone}
              onChange={(value) => handleChange("BGone", value)}
              pdfMode={pdfMode}
            />
          </View>
          <View className="input-box" pdfMode={pdfMode}>
            <EditableInput
              className="white bold right"
              value={invoice.Hsnone}
              onChange={(value) => handleChange("hsnone", value)}
              pdfMode={pdfMode}
            />
          </View>
          <View className="input-box" pdfMode={pdfMode}>
            <EditableInput
              className="white bold right"
              value={invoice.grwtone}
              onChange={(value) => handleChange("grwtoneone", value)}
              pdfMode={pdfMode}
            />
          </View>
          <View className="input-box" pdfMode={pdfMode}>
            <EditableInput
              className="white bold right"
              value={invoice.NETWTone}
              onChange={(value) => handleChange("NETWTone", value)}
              pdfMode={pdfMode}
            />
          </View>

          <View className="input-box" pdfMode={pdfMode}>
            <EditableInput
              className="white bold right"
              value={invoice.RATEone}
              onChange={(value) => handleChange("RATEone", value)}
            />
          </View>
          <View className="input-box" pdfMode={pdfMode}>
            <EditableInput
              className="white bold right"
              value={invoice.TAXAbleone}
              onChange={(value) => handleChange("TAXAbleone", value)}
              pdfMode={pdfMode}
            />
          </View>
        </View>
        <View
          className="mt-30 bg-dark flex table-bootom-box-liner"
          pdfMode={pdfMode}
        >
          <View className="input-box" pdfMode={pdfMode}>
            <EditableInput
              className="white bold"
              value={invoice.BGone}
              onChange={(value) => handleChange("BGone", value)}
              pdfMode={pdfMode}
            />
          </View>
          <View className="input-box" pdfMode={pdfMode}>
            <EditableInput
              className="white bold right"
              value={invoice.Hsnone}
              onChange={(value) => handleChange("hsnone", value)}
              pdfMode={pdfMode}
            />
          </View>
          <View className="input-box" pdfMode={pdfMode}>
            <EditableInput
              className="white bold right"
              value={invoice.grwtone}
              onChange={(value) => handleChange("grwtoneone", value)}
              pdfMode={pdfMode}
            />
          </View>
          <View className="input-box" pdfMode={pdfMode}>
            <EditableInput
              className="white bold right"
              value={invoice.NETWTone}
              onChange={(value) => handleChange("NETWTone", value)}
              pdfMode={pdfMode}
            />
          </View>

          <View className="input-box" pdfMode={pdfMode}>
            <EditableInput
              className="white bold right"
              value={invoice.RATEone}
              onChange={(value) => handleChange("RATEone", value)}
            />
          </View>
          <View className="input-box" pdfMode={pdfMode}>
            <EditableInput
              className="white bold right"
              value={invoice.TAXAbleone}
              onChange={(value) => handleChange("TAXAbleone", value)}
              pdfMode={pdfMode}
            />
          </View>
        </View>
        <View
          className="mt-30 bg-dark flex table-bootom-box-liner-bt"
          pdfMode={pdfMode}
        >
          <View className="input-box" pdfMode={pdfMode}>
            <EditableInput
              className="white bold"
              value={invoice.BGone}
              onChange={(value) => handleChange("BGone", value)}
              pdfMode={pdfMode}
            />
          </View>
          <View className="input-box" pdfMode={pdfMode}>
            <EditableInput
              className="white bold right"
              value={invoice.Hsnone}
              onChange={(value) => handleChange("hsnone", value)}
              pdfMode={pdfMode}
            />
          </View>
          <View className="input-box" pdfMode={pdfMode}>
            <EditableInput
              className="white bold right"
              value={invoice.grwtone}
              onChange={(value) => handleChange("grwtoneone", value)}
              pdfMode={pdfMode}
              placeholder="56852"
            />
          </View>
          <View className="input-box" pdfMode={pdfMode}>
            <EditableInput
              className="white bold right"
              value={invoice.NETWTone}
              onChange={(value) => handleChange("NETWTone", value)}
              pdfMode={pdfMode}
              placeholder="895252"
            />
          </View>

          <View className="input-box" pdfMode={pdfMode}>
            <EditableInput
              className="white bold right"
              value={invoice.RATEone}
              onChange={(value) => handleChange("RATEone", value)}
            />
          </View>
          <View className="input-box" pdfMode={pdfMode}>
            <EditableInput
              className="white bold right"
              value={invoice.TAXAbleone}
              onChange={(value) => handleChange("TAXAbleone", value)}
              pdfMode={pdfMode}
              placeholder="89222"
            />
          </View>
        </View>
        <View className="suv-sec">
          <View className="input-box w-59" pdfMode={pdfMode}>
            <EditableInput
              className="white bold"
              value={invoice.BG}
              onChange={(value) => handleChange("BG", value)}
              pdfMode={pdfMode}
              placeholder="For suvarna jewellers"
            />
          </View>
          <View className="input-box" pdfMode={pdfMode}>
            <EditableInput
              className="white bold"
              value={invoice.BG}
              onChange={(value) => handleChange("BG", value)}
              pdfMode={pdfMode}
              placeholder="NET Amount"
            />
          </View>
          <View className="input-box" pdfMode={pdfMode}>
            <EditableInput
              className="white bold"
              value={invoice.BG}
              onChange={(value) => handleChange("BG", value)}
              pdfMode={pdfMode}
              placeholder="254586552545"
            />
          </View>
        </View>
        <View className="suv-sec">
          <View className="input-box w-59" pdfMode={pdfMode}>
            <EditableInput
              className="white bold"
              value={invoice.BG}
              onChange={(value) => handleChange("BG", value)}
              pdfMode={pdfMode}
            />
          </View>
          <View className="input-box" pdfMode={pdfMode}>
            <EditableInput
              className="white bold"
              value={invoice.BG}
              onChange={(value) => handleChange("BG", value)}
              pdfMode={pdfMode}
              placeholder="522"
            />
          </View>
          <View className="input-box" pdfMode={pdfMode}>
            <EditableInput
              className="white bold"
              value={invoice.BG}
              onChange={(value) => handleChange("BG", value)}
              pdfMode={pdfMode}
              placeholder="254"
            />
          </View>
        </View>
        <View className="suv-sec">
          <View className="input-box w-59" pdfMode={pdfMode}>
            <EditableInput
              className="white bold"
              value={invoice.BG}
              onChange={(value) => handleChange("BG", value)}
              pdfMode={pdfMode}
            />
          </View>
          <View className="input-box" pdfMode={pdfMode}>
            <EditableInput
              className="white bold"
              value={invoice.BG}
              onChange={(value) => handleChange("BG", value)}
              pdfMode={pdfMode}
              placeholder="692365"
            />
          </View>
          <View className="input-box" pdfMode={pdfMode}>
            <EditableInput
              className="white bold"
              value={invoice.BG}
              onChange={(value) => handleChange("BG", value)}
              pdfMode={pdfMode}
              placeholder="369"
            />
          </View>
        </View>
        <View className="suv-sec-blue">
          <View className="input-box w-59" pdfMode={pdfMode}>
            <EditableInput
              className="white bold"
              value={invoice.BG}
              onChange={(value) => handleChange("BG", value)}
              pdfMode={pdfMode}
            />
          </View>
          <View className="input-box" pdfMode={pdfMode}>
            <EditableInput
              className="white bold"
              value={invoice.BG}
              onChange={(value) => handleChange("BG", value)}
              pdfMode={pdfMode}
              placeholder="NET Amount"
            />
          </View>
          <View className="input-box" pdfMode={pdfMode}>
            <EditableInput
              className="white bold"
              value={invoice.BG}
              onChange={(value) => handleChange("BG", value)}
              pdfMode={pdfMode}
              placeholder="3555478522257"
            />
          </View>
        </View>
        <View className="suv-sec">
          <View className="input-box w-59" pdfMode={pdfMode}>
            <EditableInput
              className="white bold"
              value={invoice.BG}
              onChange={(value) => handleChange("BG", value)}
              pdfMode={pdfMode}
            />
          </View>
          <View className="input-box" pdfMode={pdfMode}>
            <EditableInput
              className="white bold"
              value={invoice.BG}
              onChange={(value) => handleChange("BG", value)}
              pdfMode={pdfMode}
              placeholder="4758236"
            />
          </View>
          <View className="input-box" pdfMode={pdfMode}>
            <EditableInput
              className="white bold"
              value={invoice.BG}
              onChange={(value) => handleChange("BG", value)}
              pdfMode={pdfMode}
              placeholder="142546"
            />
          </View>
        </View>
        <View className="suv-sec">
          <View className="input-box w-59" pdfMode={pdfMode}>
            <EditableInput
              className="white bold"
              value={invoice.BG}
              onChange={(value) => handleChange("BG", value)}
              pdfMode={pdfMode}
            />
          </View>
          <View className="input-box" pdfMode={pdfMode}>
            <EditableInput
              className="white bold"
              value={invoice.BG}
              onChange={(value) => handleChange("BG", value)}
              pdfMode={pdfMode}
              placeholder="58236"
            />
          </View>
          <View className="input-box" pdfMode={pdfMode}>
            <EditableInput
              className="white bold"
              value={invoice.BG}
              onChange={(value) => handleChange("BG", value)}
              pdfMode={pdfMode}
              placeholder="12546"
            />
          </View>
        </View>
        <View className="suv-sec-bootom-line">
          <View className="input-box w-59" pdfMode={pdfMode}>
            <EditableInput
              className="white bold"
              value={invoice.BG}
              onChange={(value) => handleChange("BG", value)}
              pdfMode={pdfMode}
              placeholder="It was great doing business with you"
            />
          </View>
          <View className="input-box" pdfMode={pdfMode}>
            <EditableInput
              className="white bold"
              value={invoice.BG}
              onChange={(value) => handleChange("BG", value)}
              pdfMode={pdfMode}
              placeholder="Thank You "
            />
          </View>
        </View>
        {/* {invoice.productLines.map((productLine, i) => {
          return pdfMode && productLine.description === "" ? (
            <Text key={i}></Text>
          ) : (
            <View key={i} className="row flex" pdfMode={pdfMode}>
              <View className="w-48 p-4-8 pb-10" pdfMode={pdfMode}>
                <EditableTextarea
                  className="dark"
                  rows={2}
                  placeholder="Enter item name/description"
                  value={productLine.description}
                  onChange={(value) =>
                    handleProductLineChange(i, "description", value)
                  }
                  pdfMode={pdfMode}
                />
              </View>
              <View className="w-17 p-4-8 pb-10" pdfMode={pdfMode}>
                <EditableInput
                  className="dark right"
                  value={productLine.quantity}
                  onChange={(value) =>
                    handleProductLineChange(i, "quantity", value)
                  }
                  pdfMode={pdfMode}
                />
              </View>
              <View className="w-17 p-4-8 pb-10" pdfMode={pdfMode}>
                <EditableInput
                  className="dark right"
                  value={productLine.rate}
                  onChange={(value) =>
                    handleProductLineChange(i, "rate", value)
                  }
                  pdfMode={pdfMode}
                />
              </View>
              <View className="w-18 p-4-8 pb-10" pdfMode={pdfMode}>
                <Text className="dark right" pdfMode={pdfMode}>
                  {calculateAmount(productLine.quantity, productLine.rate)}
                </Text>
              </View>
              {!pdfMode && (
                <button
                  className="link row__remove"
                  aria-label="Remove Row"
                  title="Remove Row"
                  onClick={() => handleRemove(i)}
                >
                  <span className="icon icon-remove bg-red"></span>
                </button>
              )}
            </View>
          );
        })}

        <View className="flex" pdfMode={pdfMode}>
          <View className="w-50 mt-10" pdfMode={pdfMode}>
            {!pdfMode && (
              <button className="link" onClick={handleAdd}>
                <span className="icon icon-add bg-green mr-10"></span>
                Add Line Item
              </button>
            )}
          </View>
          <View className="w-50 mt-20" pdfMode={pdfMode}>
            <View className="flex" pdfMode={pdfMode}>
              <View className="w-50 p-5" pdfMode={pdfMode}>
                <EditableInput
                  value={invoice.subTotalLabel}
                  onChange={(value) => handleChange("subTotalLabel", value)}
                  pdfMode={pdfMode}
                />
              </View>
              <View className="w-50 p-5" pdfMode={pdfMode}>
                <Text className="right bold dark" pdfMode={pdfMode}>
                  {subTotal?.toFixed(2)}
                </Text>
              </View>
            </View>
            <View className="flex" pdfMode={pdfMode}>
              <View className="w-50 p-5" pdfMode={pdfMode}>
                <EditableInput
                  value={invoice.taxLabel}
                  onChange={(value) => handleChange("taxLabel", value)}
                  pdfMode={pdfMode}
                />
              </View>
              <View className="w-50 p-5" pdfMode={pdfMode}>
                <Text className="right bold dark" pdfMode={pdfMode}>
                  {saleTax?.toFixed(2)}
                </Text>
              </View>
            </View>
            <View className="flex bg-gray p-5" pdfMode={pdfMode}>
              <View className="w-50 p-5" pdfMode={pdfMode}>
                <EditableInput
                  className="bold"
                  value={invoice.totalLabel}
                  onChange={(value) => handleChange("totalLabel", value)}
                  pdfMode={pdfMode}
                />
              </View>
              <View className="w-50 p-5 flex" pdfMode={pdfMode}>
                <EditableInput
                  className="dark bold right ml-30"
                  value={invoice.currency}
                  onChange={(value) => handleChange("currency", value)}
                  pdfMode={pdfMode}
                />
                <Text className="right bold dark w-auto" pdfMode={pdfMode}>
                  {(typeof subTotal !== "undefined" &&
                  typeof saleTax !== "undefined"
                    ? subTotal + saleTax
                    : 0
                  ).toFixed(2)}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View className="mt-20" pdfMode={pdfMode}>
          <EditableInput
            className="bold w-100"
            value={invoice.notesLabel}
            onChange={(value) => handleChange("notesLabel", value)}
            pdfMode={pdfMode}
          />
          <EditableTextarea
            className="w-100"
            rows={2}
            value={invoice.notes}
            onChange={(value) => handleChange("notes", value)}
            pdfMode={pdfMode}
          />
        </View>
        <View className="mt-20" pdfMode={pdfMode}>
          <EditableInput
            className="bold w-100"
            value={invoice.termLabel}
            onChange={(value) => handleChange("termLabel", value)}
            pdfMode={pdfMode}
          />
          <EditableTextarea
            className="w-100"
            rows={2}
            value={invoice.term}
            onChange={(value) => handleChange("term", value)}
            pdfMode={pdfMode}
          />
        </View> */}
      </Page>
    </Document>
  );
};

export default InvoicePage;
