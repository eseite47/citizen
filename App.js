import React, {Fragment} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <Fragment>
        <View style={styles.container}>
          <Text style={styles.header}>Citizen</Text>
          <Image style={styles.seal} source={require('./assets/Great_Seal_of_the_United_States.png')} />
        </View>
        <View style={styles.container}>
          <Text>Let's study</Text>
          <Text>American Government</Text>
          <Text>History and Geography</Text>
          <Text>Everything </Text>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    marginTop: 40,
    marginBottom: 30,
    backgroundColor: '#fff',
    fontSize: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  seal: {

    width: 200, 
    height: 200
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
