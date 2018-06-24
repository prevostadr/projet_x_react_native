import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import firebase from 'firebase';


class Message extends React.Component {
    state = {
      messages: [],
      user: firebase.auth().currentUser,
    };

    componentDidMount() {
      this.setState({
        messages: [
          {
            _id: 1,
            text: 'Hello developer',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'React Native',
              avatar: 'https://placeimg.com/140/140/any',
            },
          },
        ],
      });
    }

    onSend(messages = []) {
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, messages),
      }));
    }

    render() {
      return (
            <GiftedChat
                showUserAvatar={true}
                messages={this.state.messages}
                onSend={messages => this.onSend(messages)}
                user={{
                    _id: 1,
                    name: this.state.user.email,
                    avatar: this.state.user.photoURL,
                }}
            />
      );
    }
}

export default Message;
