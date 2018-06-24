import { Provider } from 'react-redux';
import { Scene } from 'react-native-router-flux';
import React from 'react';
import styles from './styles';

import HomeContainer from '../../containers/home/homeContainer';
import PlayVideoContainer from '../../containers/play-video/playvideoContainer';
import UploadContainer from '../../containers/upload/uploadContainer';
import SessionContainer from '../../containers/session/sessionContainer';
import SignupContainer from '../../containers/session/signupContainer';
import MessageContainer from '../../containers/message/messageContainer';
import EditContainer from '../../containers/edit/editContainer';

import RouterRedux from '../../containers/routes/routesContainer';
import configureStore from '../../store/store';

const store = configureStore();

class Routes extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RouterRedux navigationBarStyle={styles.navBar} tintColor='#ffffff' titleStyle={styles.barButtonTextStyle}>
          <Scene key="root">
            <Scene key="login" component={SessionContainer} title="Connexion" initial={true}/>
            <Scene key="signup" component={SignupContainer} title="Inscription"/>
            <Scene key="home" component={HomeContainer} title="Home"/>
            <Scene key="play-video" component={PlayVideoContainer} title="Projet X"/>
            <Scene key="upload" component={UploadContainer} title="Upload Video"/>
            <Scene key="message" component={MessageContainer} title="Message"/>
            <Scene key="edit" component={EditContainer} title="Parametre"/>
          </Scene>
        </RouterRedux>
      </ Provider>
    );
  }
}

export default Routes;
