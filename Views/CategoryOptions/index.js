import React, {Fragment} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

import SubHeader from '../../Components/SubHeader'
import NavButton from '../../Components/NavButton'
import {categoryOptions} from './config'

class Categories extends React.Component {
  state = {};

  render() {
    const {category} = this.props.navigation.state.params
		const options = categoryOptions[category]
    return (
      <Fragment>
        <View style={styles.header}>
					<SubHeader 
						title={options.title}
					/>
        </View>
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
		margin: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Categories