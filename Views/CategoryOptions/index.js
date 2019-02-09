import React, {Fragment} from 'react';
import {StyleSheet, Text, View, Image, Button, TouchableNativeFeedback } from 'react-native';
import {Font} from 'expo'

import Header from '../../Components/Header'
import NavButton from '../../Components/NavButton'
import {categoryOptions} from './config'

class Catergories extends React.Component {
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
    const {fontLoaded} = this.state
    const {category} = this.props.navigation.state.params
		const options = categoryOptions[category]
    return (
      <Fragment>
        <View style={styles.container}>
					<Header 
						title={options.title}
					/>
        </View>
         {
          fontLoaded ? ( 
            <View style={styles.NavOptions}>
            {
              options.nav.map((option, i) => {
                return (
                  <NavButton key={i}
                    option={option}
                    onClick={() => this.props.navigation.navigate(option.onPressNav, option.onPressProps)}
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

const styles = StyleSheet.create({
  seal: {
    width: 200, 
    height: 200
  },
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
  button: {
    marginBottom: 25,
    width: 300,
    height: 50,
    alignItems: 'center',
    borderColor: '#2196F3',
    borderRadius: 4,
    borderWidth: 0.5,
    // FontColor: 'white',
  }
});

export default Catergories