import { BrowserRouter as Router } from "react-router-dom";

import { Providers } from "providers/providers";
import { Routes } from "navigation/Routes";

export const App = () => {
  return (
    <Router>
      <Providers>
        <Routes />
      </Providers>
    </Router>
  );
};
