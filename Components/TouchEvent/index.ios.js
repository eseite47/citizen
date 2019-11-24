import React from 'react';
import { TouchableOpacity } from 'react-native';

const TouchEvent = props => {
  const { onPress, children } = props;
  console.log({ onPress });
  return <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>;
};

export default TouchEvent;
