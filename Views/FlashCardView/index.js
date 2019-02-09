import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import {Font} from 'expo'
import { getQuestions } from '../../utils/getQuestions'

class FlashCardView extends React.Component {
  state = {
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
    // console.log({category, type})
    const flashCardQuestions = getQuestions(category, type)
    this.setState({questions: flashCardQuestions})
  }

  render() {
    const {questions} = this.state
    const numQ = questions.length
    return (
        <View>
        <Text>{`FLASH CARDS! We have ${numQ} questions today!`}</Text>

        </View>

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

// const styles = StyleSheet.create({
//   header: {
//     marginTop: 30,
//     height: 100,
//     backgroundColor: '#fff',
//     fontSize: 40,
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontFamily: 'Charmonman Regular'
//   },
// });

export default FlashCardView