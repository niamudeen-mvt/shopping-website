import { Container } from "@mui/material";

const CommonContainer = ({ maxWidth = "xl", children }) => {
  return <Container maxWidth={maxWidth}>{children}</Container>;
};

export default CommonContainer;
