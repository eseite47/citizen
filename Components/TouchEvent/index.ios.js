import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const TouchEvent = props => {
  const { onPress, children } = props;
  return <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>;
};

TouchEvent.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default TouchEvent;
