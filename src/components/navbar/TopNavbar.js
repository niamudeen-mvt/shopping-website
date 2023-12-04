import * as React from "react";
import CommonContainer from "../container"
import {
  Stack,
  useMediaQuery,
  Box,
  IconButton,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useTheme } from "@emotion/react";
import CustomDropdownMenu from "../dropdown";
import { flexSBStyles } from "../styling";
import CustomDrawer from "../shared/CustomDrawer";
import useBreakpoints from "../../hooks/useBreakpoints";

const TopNavbar = (props) => {
  const theme = useTheme();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { MD } = useBreakpoints()
  const isMatches = MD


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const iconStyles = {
    color: theme.palette.common.white
  }


  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ padding: "100px 0" }}
    >
      <Stack direction='row' spacing={1} textAlign='center' justifyContent='center'>
        <Typography color="error">SHOP15</Typography>
        <Typography >For 15 Percent Off Your order!</Typography>
      </Stack>
    </Box>
  );

  return (
    <Box
      sx={{ bgcolor: theme.palette.common.black }}
    >
      <CommonContainer>
        <Box sx={flexSBStyles} minHeight={'44px'}>
          <Stack direction="row" spacing={3} sx={{ flexGrow: 1 }}>
            <FacebookIcon sx={iconStyles} />
            <TwitterIcon sx={iconStyles} />
            <InstagramIcon sx={iconStyles} />
            <MusicNoteIcon sx={iconStyles} />
          </Stack>
          {isMatches ? (
            <>
              <Stack direction={"row"} spacing={1} sx={{ flexGrow: 1 }}>
                <Typography color="error">SHOP15</Typography>
                <Typography color={theme.palette.common.white}>For 15 Percent Off Your order!</Typography>
              </Stack>
              <Stack direction="row" spacing={2}>
                <CustomDropdownMenu selectedValue={"English"} />
                <CustomDropdownMenu selectedValue={"USD"} />
              </Stack>
            </>
          ) : (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon sx={iconStyles} />
            </IconButton>
          )}
        </Box>
      </CommonContainer >
      <CustomDrawer
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        window={window}
        drawer={drawer}
      />
    </Box >
  );
}

export default TopNavbar;
