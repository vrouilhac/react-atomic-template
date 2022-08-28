import { MouseEvent } from "react";

export type ButtonVariant = "primary" | "error";

export interface ButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  label: string;
  variant?: ButtonVariant;
}

const getColorVariant = (variant: ButtonVariant) => {
  return variant === "primary" ? "#000" : "#E74C3C";
};

const getStyles = (props: { variant: ButtonVariant }) => ({
  padding: "8px 16px",
  border: "1px solid #000",
  borderRadius: 6,
  backgroundColor: "transparent",
  borderColor: getColorVariant(props.variant),
  color: getColorVariant(props.variant),
});

export const Button: React.FC<ButtonProps> = (props) => {
  const { onClick, label, variant = "primary" } = props;

  return (
    <button style={getStyles({ variant })} onClick={onClick}>
      {label}
    </button>
  );
};
