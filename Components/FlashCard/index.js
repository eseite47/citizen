import React from 'react';
import {StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
import {Font} from 'expo'
import Question from './question'
import Answer from './answer'

class Card extends React.Component {
  state = {
		fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'Poiret One': require('../../assets/fonts/PoiretOne-Regular.ttf')
		});
		this.setState({ fontLoaded: true });
	}

  render() {
		const {fontLoaded} = this.state
		const {showAnswer} = this.props
		const {question, answer} = this.props.currentQ
		return (
      <View>
        {
          fontLoaded ? (
            <TouchableNativeFeedback  onPress={this.props.flipCard}>
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
						</TouchableNativeFeedback>) : null
        }
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
		margin: 25,
		padding: 10,
    width: 300,
    height: 250,
    borderColor: '#2196F3',
    borderRadius: 4,
		borderWidth: 0.5,
	},
	// text: {
  //   lineHeight: 40,
  //   fontFamily: 'Poiret One',
  //   fontSize: 25
  // }
});

export default Card