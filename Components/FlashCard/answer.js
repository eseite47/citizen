import React from 'react';
import {StyleSheet, Text, View, ScrollView } from 'react-native';

class Answer extends React.Component {
  state = {};

  render() {
		const {answer} = this.props
    return (
			<ScrollView >
				<View style={styles.titleView}>
					<Text style={styles.title}>
						Answer
					</Text>
				</View>
				
				<View style={styles.textView}>
					<Text style={styles.text}>
						{
							answer.map((a, idx) => {
								return (<Text key={idx}>- {a}{"\n"}</Text>)
							})
						}
					</Text>
				</View>
			</ScrollView>
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
    lineHeight: 30,
    fontFamily: 'Dosis',
		fontSize: 25
  },
});

export default Answer