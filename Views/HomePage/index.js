import React, {Fragment} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Font} from 'expo'
import PropTypes from 'prop-types'

import Header from '../../Components/HomeHeader'
import NavButton from '../../Components/NavButton'
import {NavOptions} from './config'

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

class HomePage extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'Poiret One': require('../../assets/fonts/PoiretOne-Regular.ttf'),
      'Dosis': require('../../assets/fonts/Dosis-Regular.ttf'),
      'Charmonman Regular': require('../../assets/fonts/Charmonman-Regular.ttf')
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    const {fontLoaded} = this.state
    return (
      <Fragment>
        <View style={styles.container}>
          <Header
            title="We the People"
          />
        </View>
        {
          fontLoaded ? ( 
            <View style={styles.NavOptions}>
            <Text style={styles.textHeader}>What are we studying today?</Text>

            {
              NavOptions.map(option => {
                const {navigation} = this.props
                return (
                  <NavButton
                    key={option}
                    option={option}
                    onClick={() => navigation.navigate(option.onPressNav, option.onPressProps)}
                  />
                )
              })
            }
            </View>
          ) : null
        }
      </Fragment>
    );
  }
}

HomePage.defaultProps = {
  navigation: {
    navigate: () => {}
  }
}

HomePage.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  })
}

export default HomePage