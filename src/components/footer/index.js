import React from "react";
import {
  Box,
  Divider,
  FormControl,
  Grid,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import {
  flexCenterStyles,
} from "../styling";
import americaFlagIcon from "../../assets/icons/america-flag-icon.svg";
import CommonContainer from "../container";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import useMui from "../../hooks/useMui";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";

const CustomHeading = ({ text }) => {
  return (
    <>
      <Typography variant="body2" fontWeight={600} lineHeight={'30px'} mb={3} >
        {text}
      </Typography>
    </>
  );
};

const CustomDescription = ({ text }) => {
  return (
    <Typography variant="body1" lineHeight={'30px'}>
      {text}
    </Typography>
  );
};

const FooterSection = () => {
  const { MD } = useMui();

  const footerQuickLinks = [
    "My account",
    "Cart",
    "Wishlist",
    "Product Compare",
  ];

  const footerInfoLinks = [
    "Privacy policy",
    "Refund policy",
    "Shipping & Return",
    "Term & conditions",
  ];

  const commonBoxStyles = {
    marginBottom: MD ? "0" : "30px",
  };
  const inputIconStyles = {
    color: "grey",
    marginRight: "8px",
  };
  return (
    <Box
      minHeight={611}
      bgcolor={"#1A1C20"}
      paddingTop={"72px"}
      sx={{
        color: "white",
      }}
    >
      <CommonContainer maxWidth="lg">
        <Typography
          variant="body1"
          textAlign="center"
          marginBottom={"50px"}
          lineHeight={'30px'}
        >
          Fast shipping times! if any information regarding shipping times or
          order tracking please email us. we will <br /> respond within one
          business day
        </Typography>
        <Grid container>
          <Grid item xs={12} md={4} paddingRight={"76px"}>
            <Box sx={commonBoxStyles}>
              <CustomHeading text="The Drops" />
              <CustomDescription
                text={` Whether you want to feel safer in your home, your door lock is due for an upgrade, or you just want something new to spice up your door, buying a new door lock i sn't always as simple a proposition as it may seem.`}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={2}>
            <Box sx={commonBoxStyles}>
              <CustomHeading text="Quick links" />
              <Stack spacing={1}>
                {footerQuickLinks?.map((e) => {
                  return <CustomDescription text={e} />;
                })}
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={12} md={2}>
            <Box sx={commonBoxStyles}>
              <CustomHeading text="Information" />
              <Stack spacing={1}>
                {footerInfoLinks?.map((e) => {
                  return <CustomDescription text={e} />;
                })}
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={commonBoxStyles}>
              <CustomHeading text="Subscribe" />
              <CustomDescription
                text={`Enter your email below to be the first to know about new collections and product launches.`}
              />
              <FormControl>
                <OutlinedInput
                  placeholder="Enter your email"
                  sx={{
                    bgcolor: "white",
                    marginTop: "15px",
                  }}
                  startAdornment={<EmailOutlinedIcon sx={inputIconStyles} />}
                  endAdornment={
                    <ArrowRightAltOutlinedIcon sx={inputIconStyles} />
                  }
                  autoFocus={false}
                />
              </FormControl>
            </Box>
          </Grid>
        </Grid>
      </CommonContainer>
      <Divider
        sx={{
          borderColor: "#FFFFFF4D !important",
          marginBottom: "45px",
          marginTop: "63px",
        }}
      />
      <CommonContainer maxWidth="lg">
        <Grid container sx={flexCenterStyles}>
          <Grid item xs={12} md={4} sx={commonBoxStyles}>
            <Stack direction={"row"} spacing={2}>
              <img src={americaFlagIcon} alt="america-flag-icon" />
              <img src={americaFlagIcon} alt="america-flag-icon" />
              <img src={americaFlagIcon} alt="america-flag-icon" />
              <img src={americaFlagIcon} alt="america-flag-icon" />
              <img src={americaFlagIcon} alt="america-flag-icon" />
              <img src={americaFlagIcon} alt="america-flag-icon" />
            </Stack>
          </Grid>
          <Grid item xs={12} md={4} sx={commonBoxStyles}>
            <Typography
              variant="caption"
              textAlign={MD ? "center" : "start"}
            >
              © The Drops 2022
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={commonBoxStyles}>
            <Typography
              variant="caption"
              color="#FFFFFF"
              textAlign={MD ? "end" : "start"}
            >
              Refund Policy Terms and condition
            </Typography>
          </Grid>
        </Grid>
      </CommonContainer>
    </Box>
  );
};

export default FooterSection;
