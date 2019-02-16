import React from 'react';
import {StyleSheet, Text, View, FlatList } from 'react-native';
import {Font} from 'expo'

class Answer extends React.Component {
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
		const {answer} = this.props
		console.log(answer)
    return (
			<View >
				<View style={styles.titleView}>
					<Text style={styles.title}>
						Answer
					</Text>
				</View>
				<View style={styles.textView}>
					<Text style={styles.text}>
						{
							answer.map((a, idx) => {
								return (<Text key={idx}>- {a}</Text>)
							})
						}
					</Text>
				</View>
			</View>
    )
  }
}

const styles = StyleSheet.create({
	titleView: {
		alignItems: 'center',
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
    fontFamily: 'Poiret One',
		fontSize: 25
  },
});

export default Answer