import React, { Fragment } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import SubHeader from '../../Components/SubHeader';
import NavButton from '../../Components/NavButton';
import categoryOptions from './config';

const Categories = ({ navigation }) => {
  const { category } = navigation.state.params;
  const options = categoryOptions[category];

  const styles = StyleSheet.create({
    header: {
      flex: 1,
      backgroundColor: '#DC143C',
      alignItems: 'center',
      justifyContent: 'center',
    },
    NavOptions: {
      flex: 4,
      margin: 20,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <Fragment>
      <View style={styles.header}>
        <SubHeader title={options.title} />
      </View>
      <View style={styles.NavOptions}>
        <ScrollView>
          {options.nav.map(option => {
            return (
              <NavButton
                key={option.text}
                option={option}
                onClick={() =>
                  navigation.navigate(option.onPressNav, option.onPressProps)
                }
              />
            );
          })}
        </ScrollView>
      </View>
    </Fragment>
  );
};

Categories.defaultProps = {
  navigation: {
    state: {
      params: {},
    },
  },
};

Categories.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        category: PropTypes.string,
      }),
    }),
  }),
};

export default Categories;
