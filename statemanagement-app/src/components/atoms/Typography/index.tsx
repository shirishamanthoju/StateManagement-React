import { Typography, TypographyProps } from "@mui/material"

interface TypoProps extends TypographyProps {
  color?: string
}
const MuiTypography = (props: TypoProps) => {
  return <Typography {...props}>{props.children}</Typography>
}

export default MuiTypography