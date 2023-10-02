import { Stack } from "@mui/material";
import React from "react";
import MuiTypography from "../../atoms/Typography";

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

type Data = {
  item: DataProps;
};

const IconTypo = (props: Data) => {
  const { item } = props;

  return (
    <Stack direction="row" alignItems="center">
      <img src={item.image} alt="Icon Not Found" />
      <Stack direction="column" paddingLeft="12px">
        <MuiTypography fontSize="22px" children={item.name} />
        <MuiTypography fontSize="15px" children={item.type} />
      </Stack>
    </Stack>
  );
};

export default IconTypo;
