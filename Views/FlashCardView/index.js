import React, { Fragment } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import TouchEvent from '../../Components/TouchEvent';
import SubHeader from '../../Components/SubHeader';
import Card from '../../Components/FlashCard';
import BackButton from '../../Components/BackButton';
import ForwardButton from '../../Components/ForwardButton';
import getQuestions from '../../utils/getQuestions';

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
  },
});

class FlashCardView extends React.Component {
  state = {
    currentIndex: 0,
    showAnswer: false,
    questions: [],
  };

  async componentDidMount() {
    const { navigation } = this.props;
    const { category, type } = navigation.state.params;
    const flashCardQuestions = getQuestions(category, type);
    this.setState({ questions: flashCardQuestions });
  }

  flipCard = () => {
    const { showAnswer: currentSetting } = this.state;
    this.setState({ showAnswer: !currentSetting });
  };

  prevQuestion = () => {
    const { currentIndex: index } = this.state;
    const currentIndex = index - 1;
    this.setState({ currentIndex, showAnswer: false });
  };

  nextQuestion = () => {
    const { currentIndex: index, questions } = this.state;
    const { navigation } = this.props;
    const currentIndex = index + 1;
    if (currentIndex >= questions.length) {
      navigation.navigate('Finish');
    }
    this.setState({ currentIndex, showAnswer: false });
  };

  render() {
    const { questions, currentIndex, showAnswer } = this.state;
    const numQ = questions.length;
    const currentQ = questions[currentIndex];
    if (!currentQ) return null;
    return (
      <Fragment>
        <View style={styles.header}>
          <SubHeader title={`${currentIndex + 1} / ${numQ}`} />
        </View>
        <View style={styles.card}>
          {/* <TouchEvent onPress={this.flipCard}> */}
          <Card
            currentQ={currentQ}
            showAnswer={showAnswer}
            onPress={this.flipCard}
          />
          {/* </TouchEvent> */}
        </View>
        <View style={styles.buttons}>
          <Fragment>
            <Fragment>
              {currentIndex > 0 ? (
                <BackButton prevQuestion={this.prevQuestion} styles={styles} />
              ) : null}
            </Fragment>
            <ForwardButton nextQuestion={this.nextQuestion} styles={styles} />
          </Fragment>
        </View>
      </Fragment>
    );
  }
}

FlashCardView.defaultProps = {
  navigation: {
    state: {
      params: {},
    },
    navigate: () => {},
  },
};

FlashCardView.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        category: PropTypes.string,
      }),
    }),
    navigate: PropTypes.func,
  }),
};

export default FlashCardView;
