import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Divider } from "@mui/material";
import { Home } from "@mui/icons-material";
import SearchMovie from "../containres/SearchMovie";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});
const HomeIcone = styled(Home)({
  position: "relative",
  top: 15,
});
const SpanStyle = styled("span")(({ theme }) => ({
  display: "flex",
}));
const DividerStyle = styled(Divider)(({ theme }) => ({
  borderWidth: 5,
}));
const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <SpanStyle>
        <SearchMovie />
        <Link to="/">
          <HomeIcone />
        </Link>
      </SpanStyle>
      <DividerStyle />
      {children}
    </ThemeProvider>
  );
};
export default Layout;
