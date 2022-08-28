import { Input, InputProps } from "ui/atoms/input/Input";
import { Text } from "ui/atoms/text/Text";

interface TextInputProps extends InputProps {
  label?: string;
}

export const TextInput: React.FC<TextInputProps> = (props) => {
  const { label, ...inputProps } = props;

  return (
    <div style={{ backgroundColor: "#fcfcfc" }}>
      {label && <Text>{label}</Text>}
      <Input {...inputProps} />
    </div>
  );
};
