import { Text } from "ui/atoms/text/Text";

import { debugRender } from "utils/debug";

export const FakeOtherComponent = () => {
  debugRender("FakeOtherComponent");

  return <Text>Fake Other Component</Text>;
};
