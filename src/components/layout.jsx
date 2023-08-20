import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Home } from "@mui/icons-material";
import SearchMovie from "../containres/SearchMovie";
import { styled } from "@mui/system";

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
const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <SpanStyle>
        <SearchMovie />
        <HomeIcone />
        
      </SpanStyle>
      {children}
    </ThemeProvider>
  );
};
export default Layout;
