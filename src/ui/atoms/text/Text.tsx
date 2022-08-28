import { CSSProperties } from "react";

export interface TextProps {
  style?: CSSProperties;
}

export const Text: React.FC<React.PropsWithChildren<TextProps>> = (props) => {
  const { children, style = {} } = props;

  return <p style={style}>{children}</p>;
};
