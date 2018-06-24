import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class LoadingIndicator extends React.Component {
    static propTypes = {
      size: PropTypes.string,
      color: PropTypes.string,
    };

    render() {
      return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator style={styles.loadingIndicator}
                           size={this.props.size}
                           color={this.props.color}/>
      </View>
      );
    }
}

export default LoadingIndicator;
