import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

const Answer = ({ answer }) => {
  console.log({ answer });
  const styles = StyleSheet.create({
    titleView: {
      alignItems: 'center',
      paddingBottom: 20,
    },
    title: {
      lineHeight: 60,
      fontFamily: 'Poiret One',
      fontSize: 35,
    },
    textView: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      lineHeight: 30,
      fontFamily: 'Dosis',
      fontSize: 25,
    },
  });

  return (
    <ScrollView>
      <View style={styles.titleView}>
        <Text style={styles.title}>Answer</Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.text}>
          {answer.map(a => {
            return (
              <Text key={a}>
                - {a} {'\n'}
              </Text>
            );
          })}
        </Text>
      </View>
    </ScrollView>
  );
};

Answer.defaultProps = {
  answer: '',
};

Answer.propTypes = {
  answer: PropTypes.string,
};

export default Answer;
