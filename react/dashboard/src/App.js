import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./componets/notFound";
import { Provider } from "react-redux";
import store from "./redux";
import PrivateRoute from "./componets/privateRoute";
import { ROUTES } from "./utils/routesConfig";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {ROUTES.map((each_route) => (
            <Route
              key={each_route.path}
              path={each_route.path}
              element={each_route.element}
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
export default App;
