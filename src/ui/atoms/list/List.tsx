import React from "react";

export interface ListProps<T> {
  data: T[];
  renderItem: (props: { item: T; index: number }) => JSX.Element;
  separator?: JSX.Element;
  keyExtractor: (item: T) => string;
}

export const List = <T,>(props: ListProps<T>) => {
  const { data, renderItem, separator, keyExtractor } = props;

  return (
    <div>
      {data.map((item: T, index: number) => (
        <React.Fragment key={keyExtractor(item)}>
          {separator && index > 0 && separator}
          {renderItem({ item, index })}
        </React.Fragment>
      ))}
    </div>
  );
};
