import React from 'react';
import {StyleSheet, Text, View } from 'react-native';

class Question extends React.Component {
  state = {};

  render() {
    const {question} = this.props
    return (
			<View >
				<View style={styles.titleView}>
					<Text style={styles.title}>
						Question
					</Text>
				</View>
				<View style={styles.textView}>
					<Text style={styles.text}>
						{question}
					</Text>
				</View>
			</View>
    )
  }
}

const styles = StyleSheet.create({
	titleView: {
		alignItems: 'center',
		paddingBottom: 20
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
    lineHeight: 40,
    fontFamily: 'Dosis',
		fontSize: 25
  },
});

export default Question