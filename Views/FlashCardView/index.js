import React, {Fragment} from 'react';
import {StyleSheet, Text, TouchableNativeFeedback, View, Button } from 'react-native';
import {Font} from 'expo'
import SubHeader from '../../Components/SubHeader'
import Card from '../../Components/FlashCard'
import { getQuestions } from '../../utils/getQuestions'

class FlashCardView extends React.Component {
  state = {
    currentIndex: 0,
    showAnswer: false,
    questions: []
  };

//   async componentDidMount() {
//     await Font.loadAsync({
//       'Charmonman Regular': require('../../assets/fonts/Charmonman-Regular.ttf')
//     });

//     this.setState({ fontLoaded: true });
//   }
  componentDidMount () {
    const {category, type} = this.props.navigation.state.params
    const flashCardQuestions = getQuestions(category, type)
    this.setState({questions: flashCardQuestions})
  }

  flipCard = () => {
		this.setState({showAnswer: !this.state.showAnswer})
	}

  prevQuestion = () => {
    const currentIndex = this.state.currentIndex -1
    this.setState({currentIndex, showAnswer: false})
  }

  nextQuestion = () => {
    const currentIndex = this.state.currentIndex +1
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
          {currentIndex > 0 ? (
            <TouchableNativeFeedback onPress={this.prevQuestion}>
              <View style={styles.backButton}>
                <Text style={styles.buttonText}>{'<'}</Text>
              </View>
            </TouchableNativeFeedback>
            ) : null
          }
          <TouchableNativeFeedback onPress={this.nextQuestion}>
            <View style={styles.forwardButton}>
              <Text style={styles.buttonText}>Next ></Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </Fragment>
    )
  }
}

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
    fontSize: 25,
    alignItems: 'center',
  },
  forwardButton: {
    margin: 15,
    width: '50%',
    height: 75,
    color: 'green',
    borderColor: '#2196F3',
    borderRadius: 4,
    borderWidth: 0.5,
    fontSize: 25,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 25
  }
});

export default FlashCardView