import { Box, OutlinedInput, Stack, Tab } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import TabPanel from "@mui/lab/TabPanel";
import { TabContext, TabList } from "@mui/lab";

interface MyDataTableProps {}

const columns: GridColDef[] = [
  //   { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
    editable: true,
  },
  {
    field: "price",
    headerName: "Price",
    width: 150,
    // editable: true,
  },
  {
    field: "change",
    headerName: "Change",
    width: 110,
    // editable: true,
  },
  {
    field: "marketCap",
    headerName: "Market Cap",
    width: 150,
  },
  {
    field: "type",
    headerName: "Type",
    width: 150,
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
  },
];

interface DataProps {
  id: number;
  name: string;
  price: string;
  change: string;
  marketCap: string;
  //   image: string;
  type: string;
  status: boolean;
}

// const rows: DataProps[] = [
//   {
//     id: 1,
//     name: "Bitcoin",
//     price: "$3.285.55.73",
//     change: "+1.06%",
//     image: "",
//     marketCap: "$60.1T",
//     type: "BTC",
//     status: false,
//   },
//   {
//     id: 2,
//     name: "Ethereum",
//     price: "$216,678.10",
//     change: "-5.49%",
//     image: "",
//     marketCap: "$25.4T",
//     type: "ETH",
//     status: false,
//   },
//   {
//     id: 3,
//     name: "Ethereum2",
//     price: "$216,678.10",
//     change: "-5.49%",
//     image: "",
//     marketCap: "$25.4T",
//     type: "ETH2",
//     status: false,
//   },
// ];

const MyDataTable = (props: MyDataTableProps) => {
  const [value, setValue] = React.useState("1");
  const [rowData, setRowData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filterData, setFilterData] = useState([]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleSearchInput = (searchValue: React.SetStateAction<string>) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const searchData = filterData.filter((item) => {
        return Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilterData(searchData);
    } else {
      setFilterData(rowData);
    }
    console.log("Search value", searchValue);
    console.log("Filter value", filterData);
  };

  useEffect(() => {
    fetch("http://localhost:3000/Data")
      .then((data) => data.json())
      .then((data) => setRowData(data));
  }, []);

  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabList onChange={handleChange}>
          <Tab
            label="All Assets"
            value="1"
            sx={{ textTransform: "capitalize" }}
          />
          <Tab
            label="WatchList"
            value="2"
            sx={{ textTransform: "capitalize" }}
          />
        </TabList>
      </Box>
      <TabPanel value={"1"}>
        <Stack sx={{ alignItems: "flex-end", display: "flex" }}>
          <OutlinedInput
            value={searchInput}
            placeholder="Search Here"
            sx={{
              width: "12.5rem",
              height: "2rem",
            }}
            onChange={(e) => handleSearchInput(e.target.value)}
          />
        </Stack>
        <Box sx={{ marginTop: "30px" }}>
          <DataGrid columns={columns} rows={rowData} />
        </Box>
      </TabPanel>
    </TabContext>
  );
};
export default MyDataTable;
