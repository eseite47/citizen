import React, {Fragment} from 'react';
import {StyleSheet, View} from 'react-native';

import Header from '../../Components/HomeHeader'
import NavButton from '../../Components/NavButton'
import NavOptions from './config'

const HomePage = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#DC143C',
      alignItems: 'center',
      justifyContent: 'center',
    },
    NavOptions: {
      flex:2,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textHeader: {
      margin: 10,
      fontFamily: 'Poiret One',
      fontSize: 20
    },
    text: {
      lineHeight: 40,
      fontFamily: 'Poiret One',
      fontSize: 25
    },
  });

  return (
    <Fragment>
      <View style={styles.container}>
        <Header
          title="Nicely Done!"
        />
      </View>
        <View style={styles.NavOptions}>
        {
          NavOptions.map(option => {
            return (
              <NavButton
                key={option}
                option={option}
                onClick={() => this.props.navigation.navigate(option.onPressNav, option.onPressProps)}
              />
            )
          })
        }
        </View>
    </Fragment>
  );
}

export default HomePage