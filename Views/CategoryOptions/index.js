import React, {Fragment} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Font} from 'expo'

import SubHeader from '../../Components/SubHeader'
import NavButton from '../../Components/NavButton'
import {categoryOptions} from './config'

class Categories extends React.Component {
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
        <View style={styles.header}>
					<SubHeader 
						title={options.title}
					/>
        </View>
         {
          fontLoaded ? ( 
						
            <View style={styles.NavOptions}>
							<ScrollView>
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
						</ScrollView>
            </View>
						
          ) : null
        }
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#DC143C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  NavOptions: {
    flex:4,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Categories