import React from 'react';
import { TouchableNativeFeedback } from 'react-native';
import PropTypes from 'prop-types';

const TouchEvent = props => {
  const { onPress, children } = props;
  return (
    <TouchableNativeFeedback onPress={onPress}>
      {children}
    </TouchableNativeFeedback>
  );
};

TouchEvent.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default TouchEvent;
