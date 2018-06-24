import { View, StyleSheet } from 'react-native';
import YouTube from 'react-native-youtube';
import PropTypes from 'prop-types';

import React from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

class Search extends React.Component {
    static propTypes = {
      navigation: PropTypes.object,
    };
    static navigationOptions = {
      headerTitle: 'Projet X',
      headerStyle: {
        backgroundColor: '#ff0000',
      },
      headerTitleStyle: {
        color: '#fff',
      },
    }

    render() {
      return (
          <View style={styles.container}>
            <YouTube
                videoId={this.props.navigation.state.params.youtubeId}
                play={true}
                fullscreen={true}
                loop={false}
                apiKey={'AIzaSyC7uBEOA4YuSOkgbBOG-SUfuv_QTe-T3To'}
                onReady={e => this.setState({ isReady: true, status: e.state })}
                onChangeState={e => this.setState({ status: e.state })}
                onChangeQuality={e => this.setState({ quality: e.quality })}
                onError={e => this.setState({ error: e.error })}
                style={{ alignSelf: 'stretch', height: 300 }}
            />
          </View>
      );
    }
}

export default Search;
