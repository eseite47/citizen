import React from 'react';
import {StyleSheet, View} from 'react-native';
import Question from './question'
import Answer from './answer'

class Card extends React.Component {
  state = {};

  render() {
		const {showAnswer} = this.props
		const {question, answer} = this.props.currentQ
		return (
      <View>
				<View style={styles.card}>
				{
					showAnswer ? (
						<Answer
							answer={answer}
						/>
					) : (
						<Question 
							question={question}
						/>
					)
				}
				</View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Poiret One',
	},
	card: {
		margin: 10,
		padding: 10,
	},
});

export default Card