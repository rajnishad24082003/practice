import React, { useState, useEffect } from "react";
import { MaterialReactTable } from "material-react-table";
import { Box, Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import CsvDownloader from 'react-csv-downloader';
import axios from "axios";

const generateColumns = (columnNames) => {
  return columnNames.map((columnName) => ({
    accessorKey: columnName,
    header: columnName,
    size: 220, // Set the default size as needed
  }));
};

const columnNames = [
  'Ac_Code',
  'Ac_Name',
  'Ac_Group',
  'Area',
  'Book_Page_No',
  'Ac_Short_Name',
  'Address',
  'Pin_Code',
  'City',
  'Phone_No',
  'Mobile_No',
  'Mobile_No_2',
  'Email',
  'Pan_Card_No',
  'Aadhar_No',
  'Ref_By',
  'Gst_No',
  'State',
  'Gst_Type',
  'Birth_Date',
  'Anv_Date',
];

const columns = generateColumns(columnNames);

const FilteringTable = () => {
  const [data, setData] = useState([]);

  // Fetch data using Axios and update the state
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://www.example.com/partyData/");
        if (response.data.Data && Array.isArray(response.data?.Data)) {
          let temp = response.data.Data.map(item => item.partyData);
          setData(temp);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleExportData = () => {
    const csvData = data.map(item => {
      const csvItem = {};
      columns.forEach(column => {
        csvItem[column.accessorKey] = item[column.accessorKey];
      });
      return csvItem;
    });

    return (
      <CsvDownloader
      filename="myfile"
      extension=".csv"
      separator=","
      columns={columnNames}
      datas={csvData}
    >
      <Button
        startIcon={<FileDownloadIcon />}
        variant="contained"
      >
        Export To Excel
      </Button>
    </CsvDownloader>
    );
  };

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      renderTopToolbarCustomActions={({ table }) => (
        <Box
          sx={{ display: 'flex', gap: '1rem', p: '0.5rem', flexWrap: 'wrap' }}
        >
          {handleExportData()}
        </Box>
      )}
    />
  );
};

export default FilteringTable;
