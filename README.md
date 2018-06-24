# Projet X - Play video & upload video from your device to youtube channel

## 1.  git clone https://github.com/prevostadr/projet_x_react_native
## 2.  Run these command :
###    cd projetx-react-native
###    npm install
###    react-native link
###    rm ./node_modules/react-native/local-cli/core/__fixtures__/files/package.json

## 3.  For running on iOS (only supported by Mac)
       * 3.1 In your root project run 'npm start' 
       * 3.2 In your folder/finder, go to the root of your project ios/ => click on ProjetX.xcodeproj OR run command 'react-native run-ios'
       * 3.3 Run with simulator or your iPhone from xcode
## 4.  For running on Android
       * 4.1 In your root project run 'npm start'
       * 4.2 Connect your Android device to your computer (Android Studio or Android SDK is necessary)
       * 4.3 Open another terminal, go to your root project and run this command 'react-native run-android'

# __Error Solution__
## If you see this issue : (iOS and Android)
## "Error: While resolving module `react-native-vector-icons/MaterialIcons`, the Haste package `react-native-vector-icons` was found"
## __Solution__: From your root project, run this command :
## `rm ./node_modules/react-native/local-cli/core/__fixtures__/files/package.json`
## Now 'npm start' and run again from xcode
