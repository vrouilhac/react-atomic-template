import { ChangeEvent, KeyboardEvent } from "react";

export interface InputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
}

const inputStyles = {
  border: "none",
  borderBottom: "1px solid #000",
  padding: "8px 16px",
  outline: "none",
};

export const Input: React.FC<InputProps> = (props) => {
  const { value, onChange, placeholder, onKeyPress } = props;

  return (
    <input
      style={inputStyles}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onKeyPress={onKeyPress}
    />
  );
};
