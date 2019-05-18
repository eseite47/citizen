import React from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types'

import Question from './question'
import Answer from './answer'

const Card = ({showAnswer, currentQ}) => {

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

	const {question, answer} = currentQ
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

Card.defaultProps = {
	showAnswer: false,
	currentQ: {
		question: '',
		answer: ''
	}
}

Card.propTypes = {
	showAnswer: PropTypes.bool,
	currentQ: {
		question: PropTypes.String,
		answer: PropTypes.String
	}
}

export default Card