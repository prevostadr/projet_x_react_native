import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAoH_fI88DkyYSd7UaHGI20VcDGbr_sOIo',
  authDomain: 'projetx-native.firebaseapp.com',
  databaseURL: 'https://projetx-native.firebaseio.com',
  projectId: 'projetx-native',
  storageBucket: 'projetx-native.appspot.com',
  messagingSenderId: '158648858884',
};

let instance = null;

class FirebaseService {
  constructor() {
    if (!instance) {
      this.app = firebase.initializeApp(config);
      instance = this;
    }
    return instance;
  }
}

const firebaseService = new FirebaseService().app;
export default firebaseService;

/*
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBx0YuFCeqedFUGgpmdZOr7T7wGzy9N8Qo",
  authDomain: "pulso-3f393.firebaseapp.com",
  databaseURL: "https://pulso-3f393.firebaseio.com",
  projectId: "pulso-3f393",
  storageBucket: "pulso-3f393.appspot.com",
  messagingSenderId: "677974717412"
};
firebase.initializeApp(config);

export default firebase;
*/
