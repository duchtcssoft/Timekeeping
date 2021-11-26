// libs
import { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { CssBaseline } from "@mui/material";
// routes
import appRoutes from "@/routers";
// others
import { store } from "@/redux/store";
import "@/styles/index.css";

/**
 * App
 */
export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback="Suspensed">
        <ReduxProvider store={store}>
          <CssBaseline />
          <Switch>
            {appRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
          </Switch>
        </ReduxProvider>
      </Suspense>
    </BrowserRouter>
  );
}
