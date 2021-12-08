// libs
import { Suspense } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
// routes
import appRoutes from "@/routers";
// others
import { store } from "@/redux/store";
// FIXME: Use another way to Redirect user if not logged in, delete import ROUTES and Home below
import { ROUTES } from "./constants/routers";
import Home from "./pages/Home";
import "@/styles/index.css";
import { CookiesProvider } from "react-cookie";

/**
 * App
 */

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback="Suspensed">
        <ReduxProvider store={store}>
          <CookiesProvider>
            <Switch>

              {appRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              ))}

              {/* FIXME: Use another way to Redirect user if not logged in, note that sometime, user has a token in storage does not mean, they logged in */}
              {/* Use cookie for storing token, don't use localstorage for that */}

            </Switch>
          </CookiesProvider>
        </ReduxProvider>
      </Suspense>
    </BrowserRouter>
  );
}
