import React from 'react';
import { Text, View } from 'react-native';

import TouchEvent from '../TouchEvent';

const ForwardButton = ({ nextQuestion, styles }) => {
  return (
    <TouchEvent onPress={nextQuestion}>
      <View style={styles.forwardButton}>
        <Text style={styles.buttonText}>{`Next >`}</Text>
      </View>
    </TouchEvent>
  );
};

export default ForwardButton;
