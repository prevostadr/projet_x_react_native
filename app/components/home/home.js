import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import GestureView from 'react-native-gesture-view';
import PropTypes from 'prop-types';
import React from 'react';
import { Image, TouchableHighlight, TouchableOpacity, ScrollView, Text, View } from 'react-native';
import styles from './styles';

const apiKey = 'AIzaSyC7uBEOA4YuSOkgbBOG-SUfuv_QTe-T3To';
const channelId = 'UCCVxHgWmdVt5aOeCW-WGxRg';
const results = 15;
const logo = require('../images/logo.png');
const logo2 = require('../images/logo2.png');
const avatar = require('../images/avatar2.jpg');

class Home extends React.Component {
    static propTypes = {
      navigation: PropTypes.object,
      logout: PropTypes.func,
    };

    static navigationOptions = {
      headerTitleStyle: {
        alignSelf: 'center',
      },
      title: 'Projet X',
      headerStyle: {
        backgroundColor: '#ff0000',
      },
      headerRight: (
            <TouchableOpacity>
              <Image
                  style={{ height: 22, width: 22, marginLeft: 25 }}
                  source={logo} />
            </TouchableOpacity>
      ),
      headerLeft: (
            <TouchableOpacity>
              <Image
                  style={{ height: 22, width: 22 }}
                  source={logo2} />
            </TouchableOpacity>
      ),
    };

    constructor(props) {
      super(props);
      this.state = {
        data: [],
      };
    }

    logout() {
      this.props.logout();
      setTimeout(() => {
        Actions.reset('login');
      }, 100);
    }

    componentDidMount() {
      window.fetch(`https://www.googleapis.com/youtube/v3/search/?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${results}`)
        .then(res => res.json())
        .then((res) => {
          const videoId = [];
          res.items.forEach((item) => {
            videoId.push(item);
          });
          this.setState({
            data: videoId,
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }

    render() {
      const { navigate } = this.props.navigation;
      return (
          <View style={styles.container}>
              <ScrollView>
                <View style={styles.body}>

                  <GestureView onSwipeLeft={() => navigate('message', {})}>


                  {this.state.data.map(item =>
                        <TouchableHighlight
                            key={item.id.videoId}
                            onPress={() => navigate('play-video', { youtubeId: item.id.videoId })}>
                          <View style={styles.vids}>
                            <Image
                                source={{ uri: item.snippet.thumbnails.medium.url }}
                                style={{ width: 320, height: 180 }}/>
                            <View style={styles.vidItems}>
                              <Image
                                  source={avatar}
                                  style={{
 width: 40, height: 40, borderRadius: 20, marginRight: 5,
}}/>
                              <Text style={styles.vidText}>{item.snippet.title}</Text>
                              <Icon name='more-vert' size={20} color='#555'/>
                            </View>
                          </View>
                        </TouchableHighlight>)}

                  </GestureView>


                </View>
              </ScrollView>

            <View style={styles.tabBar}>
                <TouchableOpacity style={styles.tabItems} onPress={() => navigate('home', {})}>
                  <Icon name='home' size={25} color='#444'/>
                  <Text style={styles.tabTitle}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItems} onPress={() => navigate('message', {})}>
                  <Icon name='message' size={25} color='#444'/>
                  <Text style={styles.tabTitle}>Message</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItems} onPress={() => navigate('upload', {})}>
                  <Icon name='camera' size={25} color='#444'/>
                  <Text style={styles.tabTitle}>Upload Video</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItems} onPress={() => navigate('edit', {})} >
                  <Icon name='power-settings-new' size={25} color='#444'/>
                  <Text style={styles.tabTitle}>Parametre</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItems} onPress={this.logout.bind(this)} >
                  <Icon name='power-settings-new' size={25} color='#444'/>
                  <Text style={styles.tabTitle}>Logout</Text>
                </TouchableOpacity>
              </View>
            </View>

      );
    }
}

export default Home;
