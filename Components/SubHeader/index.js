import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Charmonman Regular',
  },
});

class SubHeader extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'Charmonman Regular': require('../../assets/fonts/Charmonman-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    const { fontLoaded } = this.state;
    const { title } = this.props;
    return (
      <View>
        {fontLoaded ? <Text style={styles.header}>{title}</Text> : null}
      </View>
    );
  }
}

SubHeader.defaultProps = {
  title: '',
};

SubHeader.propTypes = {
  title: PropTypes.string,
};

export default SubHeader;
