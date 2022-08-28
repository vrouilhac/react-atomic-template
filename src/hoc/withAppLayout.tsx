import { AppLayout } from "ui/layouts/AppLayout";

export const withAppLayout = (Component: () => JSX.Element) => {
  return (
    <AppLayout>
      <Component />
    </AppLayout>
  );
};
