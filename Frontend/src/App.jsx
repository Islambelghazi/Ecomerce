import  Header1  from "./component/header/Header1.jsx";
import  Header2  from "./component/header/Header2.jsx";
import  Header3  from "./component/header/Header3.jsx";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
// @ts-ignore
import Hero from "./component/hero/hero.jsx";
// @ts-ignore
import Main from "./component/main/main.jsx";
import IconSection from "./component/hero/IconSection.jsx";
import Footer from "./component/footer/Footer.jsx";
import ScrollToTop from "./component/scrool/ScrollToTop.jsx";



function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider 
// @ts-ignore
    value={colorMode}>
        <ThemeProvider 
// @ts-ignore
        theme={theme}>   
        <CssBaseline />   
<Header1/>
<Header2/> 
<Header3/>

<Box bgcolor={theme.
// @ts-ignore
palette.bg.main}>
  <Hero/>
  <IconSection/>
  <Main/>
</Box >
<Footer/>

<ScrollToTop/>
</ThemeProvider>

    </ColorModeContext.Provider>

    
  )
}

export default App
