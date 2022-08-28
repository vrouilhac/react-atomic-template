import { Routes as RouterRoutes, Route } from "react-router-dom";

import { Dashboard } from "features/dashboard/Dashboard";
import { History } from "features/history/History";

import { withAppLayout } from "hoc/withAppLayout";

export const Routes = () => {
  const routes = [
    {
      path: "/",
      element: Dashboard,
      withLayout: withAppLayout,
    },
    {
      path: "/history",
      element: History,
      withLayout: withAppLayout,
    },
  ];

  return (
    <RouterRoutes>
      <>
        {routes.map((route: any) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              route?.withLayout
                ? route.withLayout(route.element)
                : route.element
            }
          />
        ))}
      </>
    </RouterRoutes>
  );
};
