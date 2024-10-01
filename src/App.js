import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import { useState } from "react";
import styled from "@emotion/styled";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  const StyledButton = styled("button")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  }));

  return (
    <div className="App">
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <main>{darkMode ? "DARK MODE" : "LIGHT MODE"}</main>
        <StyledButton onClick={handleThemeChange}>Change Theme</StyledButton>
      </ThemeProvider>
    </div>
  );
}

export default App;
