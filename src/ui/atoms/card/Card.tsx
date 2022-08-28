export const Card: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <div
      style={{
        boxShadow: "0 2px 1px rgba(0, 0, 0, 0.14)",
        borderRadius: 6,
        padding: 8,
      }}
    >
      {children}
    </div>
  );
};
