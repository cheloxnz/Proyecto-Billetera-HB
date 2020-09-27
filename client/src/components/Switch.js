import * as React from 'react';
import { Switch } from 'react-native-paper';

const SwitchB = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  console.log(isSwitchOn)
  return <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />;
};

export default SwitchB;