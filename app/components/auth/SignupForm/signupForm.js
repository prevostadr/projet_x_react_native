import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import BasicFormComponent from '../BasicForm/basicForm';
import LoadingIndicator from '../../loadingIndicator/loadingIndicator';
import styles from '../BasicForm/styles';


const logo = require('../../images/logo.png');

class SignupFormComponent extends Component {
    static propTypes = {
      registered: PropTypes.func,
      signup: PropTypes.func,
      loading: PropTypes.func,
    };
    componentDidUpdate() {
      if (this.props.registered) {
        Actions.reset('home');
      }
    }

    render() {
      const { signup, loading } = this.props;
      return (
      <KeyboardAwareScrollView style={styles.scrollView}>
        <View style={styles.imageBox}>
            <Image style={styles.image} source={logo}/>
        </View>
        <View style={styles.loginBox}>
            {loading ? <LoadingIndicator color="#ffffff"
                                         size="large"/> :
              <BasicFormComponent buttonTitle={"Je m'inscris"}
                                  onButtonPress={signup} /> }
        </View>
      </KeyboardAwareScrollView>
      );
    }
}

export default SignupFormComponent;
