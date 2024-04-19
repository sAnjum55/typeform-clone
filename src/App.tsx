import { CacheProvider, ThemeProvider } from "@emotion/react";

import { CssBaseline } from "@mui/material";
import React from "react";
import { RouterProvider } from "react-router-dom";
import createEmotionCache from "./styles/emotionCache";
import { darkTheme } from "./styles/colorMode";
import { router } from "./router";

const emotionCache = createEmotionCache();
function App() {
  return (
    <React.Fragment>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <RouterProvider router={router} />
        </ThemeProvider>
      </CacheProvider>
    </React.Fragment>
  );
}

export default App;
