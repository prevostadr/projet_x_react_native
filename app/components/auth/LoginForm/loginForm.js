import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Actions } from 'react-native-router-flux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Alert, Image, Button } from 'react-native';
import BasicFormComponent from '../BasicForm/basicForm';
import LoadingIndicator from '../../loadingIndicator/loadingIndicator';
import styles from '../BasicForm/styles';


const logo = require('../../images/logo.png');

class LoginFormComponent extends Component {
    static propTypes = {
      restore: PropTypes.func,
      error: PropTypes.string,
      logged: PropTypes.bool,
      login: PropTypes.func,
      loading: PropTypes.bool,
    };
    componentDidMount() {
      this.props.restore();
    }

    componentDidUpdate(prevProps) {
      if (!prevProps.error && this.props.error) {
        Alert.alert('error', this.props.error);
      }
      if (this.props.logged) {
        Actions.reset('home');
      }
    }

    render() {
      const { login, loading } = this.props;
      return (
      <KeyboardAwareScrollView style={styles.scrollView}>
        <View style={styles.imageBox}>
          <Image style={styles.image} source={logo}/>
        </View>
        <View style={styles.loginBox}>
          {loading ? <LoadingIndicator color="#ffffff"
                                       size="large"/> :
            <BasicFormComponent buttonTitle={'Connexion'}
                                onButtonPress={login} /> }
        </View>
        <View>
        {loading ? null :
          <Button onPress={Actions.signup}
                  title="Inscription"
                  color="red"></Button> }
        </View>
      </KeyboardAwareScrollView>
      );
    }
}

export default LoginFormComponent;

