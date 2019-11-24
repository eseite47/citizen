import React from 'react';
import { TouchableNativeFeedback } from 'react-native';

const TouchEvent = props => {
  const { onPress, children } = props;
  return (
    <TouchableNativeFeedback onPress={onPress}>
      {children}
    </TouchableNativeFeedback>
  );
};

export default TouchEvent;
