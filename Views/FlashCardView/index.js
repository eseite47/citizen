import React, {Fragment} from 'react';
import {StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';
import PropTypes from 'prop-types'

import SubHeader from '../../Components/SubHeader'
import Card from '../../Components/FlashCard'
import getQuestions from '../../utils/getQuestions'

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#DC143C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 4,
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    margin: 15,
    width: '30%',
    height: 75,
    color: "#e7e7e7",
    borderColor: '#2196F3',
    borderRadius: 4,
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  forwardButton: {
    margin: 15,
    width: '50%',
    height: 75,
    color: 'green',
    borderColor: '#2196F3',
    borderRadius: 4,
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 30,
    fontFamily: 'Dosis',
  }
});

class FlashCardView extends React.Component {
  state = {
    currentIndex: 0,
    showAnswer: false,
    questions: [],
  }

  async componentDidMount() {
    const {navigation} = this.props
    const {category, type} = navigation.state.params
    const flashCardQuestions = getQuestions(category, type)
    this.setState({ questions: flashCardQuestions });
  }

  flipCard = () => {
    const {showAnswer: currentSetting} = this.state
		this.setState({showAnswer: !currentSetting})
	}

  prevQuestion = () => {
    const {currentIndex: index} = this.state
    const currentIndex = index -1
    this.setState({currentIndex, showAnswer: false})
  }

  nextQuestion = () => {
    const {currentIndex: index, questions} = this.state
    const {navigation} = this.props
    const currentIndex = index +1
    if (currentIndex >= questions.length) {
      navigation.navigate('Finish')
    }
    this.setState({currentIndex, showAnswer: false})
  }

  render() {
    const {questions, currentIndex, showAnswer} = this.state
    const numQ = questions.length
    const currentQ = questions[currentIndex]
    if (!currentQ) return null
    return (
      <Fragment>
        <View style={styles.header}>
          <SubHeader 
            title={`${currentIndex +  1} / ${numQ}`}
          />
        </View>
        <TouchableNativeFeedback onPress={this.flipCard}>
          <View style={styles.card}>
            <Card 
              currentQ={currentQ}
              showAnswer={showAnswer}
            />
          </View>
        </TouchableNativeFeedback>
        <View style={styles.buttons}>
          <Fragment>
            <Fragment>
              { currentIndex > 0 ? (
                <TouchableNativeFeedback onPress={this.prevQuestion}>
                  <View style={styles.backButton}>
                    <Text style={styles.buttonText}>{'<'}</Text>
                  </View>
                </TouchableNativeFeedback>
                ) : null
              }
            </Fragment>
            <TouchableNativeFeedback onPress={this.nextQuestion}>
              <View style={styles.forwardButton}>
                <Text style={styles.buttonText}>{`Next >`}</Text>
              </View>
            </TouchableNativeFeedback>
          </Fragment>
        </View>
      </Fragment>
    )
  }
}

FlashCardView.defaultProps = {
  navigation: {
    state: {
      params: {}
    },
    navigate: () => {}
  }
}

FlashCardView.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        category: PropTypes.string
      })
    }),
    navigate: PropTypes.func
  })
}

export default FlashCardView