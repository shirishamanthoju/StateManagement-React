import { Button, ButtonProps } from "@mui/material";
import React from "react";

interface MuiButtonProps extends ButtonProps {}

const MuiButton = (props: MuiButtonProps) => {
  return (
    <div>
      <Button>{props.children}</Button>
    </div>
  );
};
export default MuiButton;
