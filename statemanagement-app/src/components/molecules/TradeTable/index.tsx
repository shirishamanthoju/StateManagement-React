import { IconButton, TableCell, TableRow, styled } from "@mui/material";
import React from "react";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import IconTypo from "../IconTypo";
import theme from "../../Theme";
import MuiTypography from "../../atoms/Typography";

interface TradeTabProps {
  id: number;
  name?: string;
  currencyType?: string;
  price?: string;
  change?: string;
  marketCap?: string;
  image?: string;
  status?: boolean;
  sx?: React.CSSProperties;
  toggleStatus: (id: number) => void;
  onClick?: () => void;
}
const StyledCell = styled(TableCell)({
  border: `1px solid ${theme.palette.greyColors.grey100}`,
  borderLeft: "0px",
  borderRight: "0px",
  padding: "16px 24px",
  minWidth: "230px",
});

const StyledLastCell = styled(TableCell)({
  border: `1px solid ${theme.palette.greyColors.grey100}`,
  borderLeft: "0px",
  borderRadius: "0px 4px 4px 0px",
  padding: "16px 24px",
  minWidth: "78px",
});
const StyledFirstCell = styled(TableCell)({
  border: `1px solid ${theme.palette.greyColors.grey100}`,
  borderRight: "0px",
  borderRadius: "4px 0px 0px 4px",
  padding: "14px 18px",
  minWidth: "300px",
});

const TradeTab = (props: TradeTabProps) => {
  return (
    <TableRow>
      <StyledFirstCell>
        <IconTypo
          name={props.name}
          image={props.image}
          type={props.currencyType}
        />
      </StyledFirstCell>
      <StyledCell>
        <MuiTypography
          variant="body2"
          sx={{ color: theme.palette.textColor.highEmphasis }}
        >
          {props.price}
        </MuiTypography>
      </StyledCell>
      <StyledCell>
        <MuiTypography
          variant="body2"
          sx={{
            color: theme.palette.semantic.success500,
          }}
        >
          {props.change}
        </MuiTypography>
      </StyledCell>
      <StyledCell>
        <MuiTypography
          variant="body2"
          sx={{ color: theme.palette.textColor.highEmphasis }}
        >
          {props.marketCap}
        </MuiTypography>
      </StyledCell>
      <StyledLastCell>
        <IconButton onClick={() => props.toggleStatus(props.id)}>
          {props.status ? (
            <StarOutlinedIcon
              color="primary"
              sx={{
                cursor: "pointer",
              }}
            />
          ) : (
            <StarBorderOutlinedIcon
              color="primary"
              sx={{
                cursor: "pointer",
              }}
            />
          )}
        </IconButton>
      </StyledLastCell>
    </TableRow>
  );
};

export default TradeTab;
