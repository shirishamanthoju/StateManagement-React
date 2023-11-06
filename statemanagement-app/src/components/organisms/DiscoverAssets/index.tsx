import {
  Box,
  Divider,
  Grid,
  InputAdornment,
  OutlinedInput,
  Paper,
  Tab,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Tabs,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import Header from "../../molecules/Header";
import TradeTab from "../../molecules/TradeTable";


interface DataProps {
  id: number;
  image: string;
  name: string;
  type: string;
  price: string;
  change: string;
  marketCap: string;
  status: boolean;
}

const DiscoverAssets = () => {
  const [tabValue, setTabValue] = React.useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [rowData, setRowData] = useState<DataProps[]>([]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleWatchlistStatus = (id: number) => {
    setRowData((prevState) => {
      prevState[id - 1].status = !prevState[id - 1].status;
      axios.patch(`http://localhost:3000/Data/${id}`, {
        status: prevState[id - 1].status,
      });
      return [...prevState];
    });
  };

  useEffect(() => {
    fetch("http://localhost:3000/Data")
      .then((data) => data.json())
      .then((data) => {
        setRowData(data);
      });
  }, []);

  return (
    <Box>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        pr="10px"
      >
        <Grid item flexGrow={1}>
          <Tabs
            value={tabValue}
            onChange={handleChange}
            sx={{ height: "36px" }}
          >
            <Tab label="All Assets" sx={{ textTransform: "none" }} />
            <Tab label="Watchlist" sx={{ textTransform: "none" }} />
          </Tabs>
          <Divider />
        </Grid>
      </Grid>
      <Grid container padding="20px">
        <Grid item>
          <OutlinedInput
            value={searchInput}
            placeholder="Search By Name Here"
            sx={{
              width: "14rem",
              height: "2rem",
            }}
            onChange={(e) => setSearchInput(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </Grid>
      </Grid>
      <Grid
        container
        padding="20px"
        sx={{ alignItems: "center", justifyContent: "center" }}
      >
        <Grid item>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <Header />
              </TableHead>
              <TableBody>
                {rowData
                  .filter((item) =>
                    item.name.toLowerCase().includes(searchInput.toLowerCase())
                  )
                  .filter((item) =>
                    tabValue === 0 ? item : item.status === true
                  )
                  .map((item) => (
                    <TradeTab
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      currencyType={item.type}
                      image={item.image}
                      price={item.price}
                      change={item.change}
                      marketCap={item.marketCap}
                      status={item.status}
                      toggleStatus={(id: number) => handleWatchlistStatus(id)}
                    />
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DiscoverAssets;
