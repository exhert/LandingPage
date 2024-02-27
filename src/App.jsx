import { ChakraProvider } from "@chakra-ui/provider";
import theme from "./theme/theme";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import "./utils/markers.css"
import LANDING_PAGE_ROUTES from "./Routes/Landing";
import LoadingPage from "./Pages/loading/Loading";
import "./i18n";

function App() {

  return (
    <Suspense fallback={<LoadingPage />}>
    <ChakraProvider theme={theme}>
    <Routes>
            {Object.values(LANDING_PAGE_ROUTES).map(route => {
              const Component = route.component;
              return (
                <Route
                  path={route.path}
                  key={route.path}
                  element={<Component />}
                />
              );
            })}
       </Routes>     
       </ChakraProvider>
    </Suspense>
  )
}

export default App
