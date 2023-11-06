import { TableRow, TableCell } from "@mui/material";
import React from "react";
import MuiTypography from "../../atoms/Typography";
import theme from "../../Theme";

const HeaderNames = [
  {
    id: 1,
    title: "Name",
  },
  { id: 2, title: "Price" },
  { id: 3, title: "Change" },
  { id: 4, title: "Market Cap" },
  { id: 5, title: "WatchList" },
];

const Header = () => {
  return (
    <TableRow>
      {HeaderNames.map((item, index) => (
        <TableCell sx={{ minWidth: "200px" }}>
          <MuiTypography
            variant="caption2"
            sx={{
              color: theme.palette.greyColors.grey500,
              fontWeight: "bold",
            }}
            key={index}
          >
            {item.title}
          </MuiTypography>
        </TableCell>
      ))}
    </TableRow>
  );
};

export default Header;
