import { Text } from "ui/atoms/text/Text";

export const AppLayout: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 16,
          boxShadow: "0px 2px 1px rgba(0, 0, 0, 0.14)",
          marginBottom: 16,
        }}
      >
        <Text>App bar</Text>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <a href="/">Dashboard</a>
          <a href="/history" style={{ marginLeft: 16 }}>
            History
          </a>
        </div>
      </div>

      {children}
    </div>
  );
};
