import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Platform,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
import Video from 'react-native-video';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob';
import { NavigationActions } from 'react-navigation';
import styles from '../home/styles';


const EntityAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'home' }),
  ],
});

class Upload extends React.Component {
    static propTypes = {
      navigation: PropTypes.object,
    };
    state = {
      VideoSource: null,
      VideoName: null,
      progress_value: 0,
      VideoSourceAndroid: null,
    };
    selectVideoTapped() {
      const options = {
        title: 'Video Picker',
        takePhotoButtonTitle: 'Take Video...',
        mediaType: 'video',
        videoQuality: 'medium',
      };

      ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response.path);
        this.setState({
          VideoSourceAndroid: response.path,
        });

        if (response.didCancel) {
          console.log('User cancelled video picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          this.setState({
            VideoSource: response.uri,
          });
        }
      });
    }

    sendVideoToDropbox() {
      let extension = null;
      let rootPath = null;
      if (Platform.OS === 'ios') {
        extension = '.mov';
        rootPath = `RNFetchBlob-${this.state.VideoSource}`;
      } else if (Platform.OS === 'android') {
        extension = '.mp4';
        rootPath = `RNFetchBlob-file:/${this.state.VideoSourceAndroid}`;
      }

      if (this.state.VideoName == null) {
        this.setState({
          VideoName: `démo${extension}`,
        });
      } else {
        this.setState({
          VideoName: this.state.VideoName + extension,
        });
      }
      RNFetchBlob.fetch('POST', 'https://content.dropboxapi.com/2/files/upload', {
        Authorization: 'Bearer V5yJZ4jOR9AAAAAAAAAAW67L7kVEWG2zi-hK4HmUyH_wuyKN1HnSsru_mZXRsdus',
        'Dropbox-API-Arg': JSON.stringify({
          path: `/${this.state.VideoName}`,
          mode: 'add',
          autorename: true,
          mute: false,
        }),
        'Content-Type': 'application/octet-stream',
      }, rootPath)
        .uploadProgress((received, total) => {
          console.log(`progress ${Math.floor((received / total) * 100)}%`);
          this.setState({ progress_value: Math.floor((received / total) * 100) });
        })
        .then(() => {
          console.log('work good');
          this.props.navigation.dispatch(EntityAction);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    render() {
      return (
       <View style={styles.container}>
            {
                this.state.VideoSource === null ?
                <View style={styles.body}>
                    <Text>
                      Votre vidéo sera disponible sur YouTube au bout de 20 minutes
                      et vous pourrez la voir depuis la Home page :D.</Text>
                    <Text>
                      Utilisez des vidéos courtes moins de 20 secondes
                      grand max ! Si vous nommez pas votre vidéo, elle sera nommé démo
                      automatiquement. Une fois votre vidéo envoyer sur nos serveurs,
                      vous serez rediriger vers la home page automatiquement.
                      Un peu de patience :D.</Text>
                    <TouchableOpacity style={styles.button}
                                      onPress={this.selectVideoTapped.bind(this)}>
                        <Text style={styles.buttonTitle}>Sélectionner une vidéo</Text>
                    </TouchableOpacity>
                </View> :
                <View style={styles.body}>
                    <Video style={{ alignSelf: 'stretch', height: 300 }} source={{ uri: this.state.VideoSource }} />
                    <TextInput style = {styles.textInput}
                       placeholder = "Nom de la vidéo"
                       autoCapitalize = "none"
                       value={this.state.VideoName}
                       onChangeText={VideoName => this.setState({ VideoName })}/>
                    <TouchableOpacity style={styles.buttonSend}
                                      onPress={this.sendVideoToDropbox.bind(this)}>
                        <Text style={styles.buttonTitle}>Envoyer sur YouTube</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonSelect}
                                      onPress={this.selectVideoTapped.bind(this)}>
                        <Text style={styles.buttonTitle}>Sélectionner une vidéo</Text>
                    </TouchableOpacity>
                    <Text style = {{ fontSize: 15, color: '#000' }}> Upload en cours : { parseFloat((this.state.progress_value).toFixed(3))} %</Text>
                </View>
            }

        </View>
      );
    }
}

export default Upload;
