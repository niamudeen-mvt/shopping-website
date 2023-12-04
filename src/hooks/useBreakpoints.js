

import { useTheme } from "@emotion/react"
import { useMediaQuery } from "@mui/material";


// xs, : 0px
// sm, : 600px
// md, : 900px
// lg, : 1200px
// xl, : 1536px

const useBreakpoints = () => {
  const theme = useTheme()

  const LG = useMediaQuery(theme.breakpoints.up('lg'));
  const MD = useMediaQuery(theme.breakpoints.up('md'));
  const SM = useMediaQuery(theme.breakpoints.up('sm'));

  return { LG, MD, SM }

}

export default useBreakpoints