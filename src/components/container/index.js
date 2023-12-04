import { Container } from "@mui/material";

const CommonContainer = ({ children }) => {
  return <Container maxWidth={"xl"}>{children}</Container>;
};

export default CommonContainer;
