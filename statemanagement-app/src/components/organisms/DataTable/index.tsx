import { Box, OutlinedInput, Stack, Tab } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { ReactNode, useEffect, useState } from "react";
import TabPanel from "@mui/lab/TabPanel";
import { TabContext, TabList } from "@mui/lab";
import IconTypo from "../../molecules/IconTypo";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";

interface MyDataTableProps {}

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    width: 300,
    renderCell: (params) => {
      return (
        <IconTypo
          name={params.value}
          image={params.row.image}
          type={params.row.type}
        />
      );
    },
  },
  {
    field: "price",
    headerName: "Price",
    width: 200,
  },
  {
    field: "change",
    headerName: "Change",
    width: 200,
  },
  {
    field: "marketCap",
    headerName: "Market Cap",
    width: 200,
  },
  {
    field: "type",
    headerName: "Type",
    width: 200,
  },
  {
    field: "status",
    headerName: "Status",
    width: 200,

    renderCell: (params) => {
      return params.row.status ? (
        <StarBorderOutlinedIcon
          color="primary"
          sx={{
            cursor: "pointer",
          }}
          // onClick={() => handleWatchList(params.row.id)}
        />
      ) : (
        <StarOutlinedIcon
          color="primary"
          sx={{
            cursor: "pointer",
          }}
          // onClick={() => handleWatchList(params.row.id)}
        />
      );
    },
  },
];

interface starProps {
  value: boolean;
  onClick: () => void;
}

const StarCell = (props: starProps) => {
  const [watchlist, setWatchList] = useState<DataProps[]>([]);
  const [rowData, setRowData] = useState<DataProps[]>([]);
  const [isStar, setStart] = useState<boolean>();

  const handleWatchList = (id: number) => {
    const itemToToggle = rowData.find((item) => item.id === id);

    if (itemToToggle) {
      itemToToggle.status = !itemToToggle.status;
    }

    if (itemToToggle?.status) {
      setWatchList((prevWatchList) => [...prevWatchList, itemToToggle]);
    } else {
      setWatchList((prevWatchList) =>
        prevWatchList.filter((item) => item.id !== id)
      );
    }
  };

  return isStar ? (
    <StarBorderOutlinedIcon
      color="primary"
      sx={{
        cursor: "pointer",
      }}
      onClick={() => props.onClick}
    />
  ) : (
    <StarOutlinedIcon
      color="primary"
      sx={{
        cursor: "pointer",
      }}
    />
  );
};

interface DataProps {
  id: number;
  name: string;
  price: string;
  change: string;
  marketCap: string;
  image: string;
  type: string;
  status: boolean;
}

const MyDataTable = (props: MyDataTableProps) => {
  const [value, setValue] = React.useState("1");
  const [searchInput, setSearchInput] = useState("");
  const [rowData, setRowData] = useState<DataProps[]>([]);
  const [filterData, setFilterData] = useState<DataProps[]>([]);
  const [watchlist, setWatchList] = useState<DataProps[]>([]);

  const handleWatchList = (id: number) => {
    const itemToToggle = rowData.find((item) => item.id === id);

    if (itemToToggle) {
      itemToToggle.status = !itemToToggle.status;
    }

    if (itemToToggle?.status) {
      setWatchList((prevWatchList) => [...prevWatchList, itemToToggle]);
    } else {
      setWatchList((prevWatchList) =>
        prevWatchList.filter((item) => item.id !== id)
      );
    }
  };

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleSearchInput = (searchValue: string) => {
    setSearchInput(searchValue);
    if (searchValue !== "") {
      const searchData = rowData.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      );
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
      .then((data) => {
        setRowData(data);
        setFilterData(data);
      });
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
        <Stack sx={{ alignItems: "flex-start", display: "flex" }}>
          <OutlinedInput
            value={searchInput}
            placeholder="Search By Name Here"
            sx={{
              width: "12.5rem",
              height: "2rem",
            }}
            onChange={(e) => handleSearchInput(e.target.value)}
          />
        </Stack>
        <Box sx={{ marginTop: "30px" }}>
          <DataGrid
            columns={columns}
            rows={filterData}
            rowHeight={60}
            columnHeaderHeight={50}
            hideFooter={true}
          />
        </Box>
      </TabPanel>
      <TabPanel value={"2"}>
        {/* Render the WatchList */}
        {watchlist.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
        <Stack sx={{ alignItems: "flex-start", display: "flex" }}>
          <OutlinedInput
            value={searchInput}
            placeholder="Search By Name Here"
            sx={{
              width: "12.5rem",
              height: "2rem",
            }}
            onChange={(e) => handleSearchInput(e.target.value)}
          />
        </Stack>
        <Box sx={{ marginTop: "30px" }}>
          <DataGrid
            // columns={
            //   columns.values.name === "Status" ? (
            //     <StarBorderOutlinedIcon
            //       color="primary"
            //       sx={{
            //         cursor: "pointer",
            //       }}
            //     />
            //   ) : (
            //     <StarOutlinedIcon
            //       color="primary"
            //       sx={{
            //         cursor: "pointer",
            //       }}
            //     />
            //   )
            // }
            columns={columns}
            rows={filterData}
            rowHeight={60}
            columnHeaderHeight={50}
            hideFooter={true}
          />
        </Box>
      </TabPanel>
    </TabContext>
  );
};
export default MyDataTable;
