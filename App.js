import React, {Fragment} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <Fragment>
        <View style={styles.container}>
          <Text style={styles.header}>Citizen</Text>
        </View>
        <View style={styles.container}>
          <Text>American Government</Text>
          <Text>History and Geography</Text>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#fff',
    fontSize: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
