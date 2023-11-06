import { Stack } from "@mui/material";
import React from "react";
import MuiTypography from "../../atoms/Typography";

interface dataprops {
  name: string | undefined;
  image: string | undefined;
  type: string | undefined;
}

const IconTypo = (props: dataprops) => {
  const item = props;

  return (
    <Stack direction="row" alignItems="center">
      <img src={item.image} alt="Icon Not Found" />
      <Stack direction="column" paddingLeft="12px">
        <MuiTypography variant="body1" children={item.name} />
        <MuiTypography variant="caption" children={item.type} />
      </Stack>
    </Stack>
  );
};

export default IconTypo;
