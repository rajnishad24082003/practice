import SimpleFram from "./SimpleFram";

const TagCancel = () => {
  return (
    <SimpleFram
      Heading="Tag Cancel"
      api=""
      selectors={[]}
      tableData={{
        tr: [
          "Sr",
          "Vch Date",
          "Tag No",
          "Vch No",
          "Item Type",
          "Item Code",
          "Design No",
          "Size",
          "Center",
          "Pcs",
          "Gross Weight",
          "Net Weight",
          "Labour Rate",
          "Labour Amount",
          "Other Amount",
          "Net Amount",
          "MRP",
          "Product Cost",
          "Image",
          "Karigar Name",
        ],
        editable: false,
        td: [],
      }}
      inputs={[
        { name: "Vch_No", type: "text", placeholder: "Vch No" },
        { name: "Vch Date", type: "date", placeholder: new Date() },
      ]}
      onchangeFun={"Reports_TagStockFun"}
    />
  );
};

export default TagCancel;
