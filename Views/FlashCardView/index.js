import React, {Fragment} from 'react';
import {StyleSheet, Text, View, Button } from 'react-native';
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
    console.log('flipping card')
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
              title={`${currentIndex} / ${numQ}`}
            />
          </View>
          <View style={styles.card}>
            <Card 
              currentQ={currentQ}
              flipCard={this.flipCard}
              showAnswer={showAnswer}
            />
            {/* <Text>{currentQ.question}</Text> */}
          </View>
          <View style={styles.buttons}>
            {currentIndex > 0 ? <Button
              onPress={this.prevQuestion}
              title="<"
              color="#e7e7e7"
              accessibilityLabel="Previous"
            /> : null}
            <Button
              onPress={this.nextQuestion}
              title="Next >"
              color="#4CAF50"
              accessibilityLabel="Next"
            />
          </View>
        </Fragment>

    //   <View>
    //     {
    //       fontLoaded ? (
    //         <Text style={styles.header}>Citizen</Text>
    //       ) : null
    //     }
    //   </View>
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
    flex: 4
  },
  buttons: {
    flex: 1
  }
});

export default FlashCardView