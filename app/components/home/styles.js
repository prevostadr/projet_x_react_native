import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#e9f7fd',
  },
  image: {
    width: 100,
    height: 100,
  },
  primary: {
    color: 'rgb(116, 70, 195)',
  },
  marginBox: {
    alignItems: 'center',
    margin: 20,
  },
  title: {
    fontSize: 24,
    margin: 20,
  },
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 30,
  },
  vids: {
    paddingBottom: 30,
    width: 320,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderBottomWidth: 0.6,
    borderColor: '#aaa',
  },
  vidItems: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
  },
  vidText: {
    padding: 20,
    color: '#000',
  },
  tabBar: {
    backgroundColor: '#fff',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 0.5,
    borderColor: '#bbb',
  },
  tabItems: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5,
  },
  tabTitle: {
    fontSize: 11,
    color: '#333',
    paddingTop: 4,
    textDecorationLine: 'underline',
  },
  WebViewContainer: {
    marginTop: (Platform.OS === 'ios') ? 20 : 0,
  },
  button: {
    backgroundColor: '#88cc88',
    height: 40,
    margin: 10,
    borderRadius: 5,
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonSend: {
    backgroundColor: '#ff0000',
    height: 40,
    margin: 10,
    borderRadius: 5,
    padding: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSelect: {
    backgroundColor: '#88cc88',
    height: 40,
    margin: 10,
    borderRadius: 5,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    color: 'blue',
    width: 200,
  },
});

export default styles;
