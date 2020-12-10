# Mobile Movies Browser
A React Native application that uses TMDB's API (v3) to browse movies.

A quick demonstration of the app can be seen here: https://youtu.be/rqqp5AKZY7E

## How to run

Assuming you have Git installed, clone the repo to your local environment with the following command.

`git clone https://github.com/GorkemSahin/24i-RN-Assignment.git`

Assuming you have react-native and npm CL tools already installed, install dependencies via

`npm install`

Start the metro bundler with

`npm start`

For the iOS build, you need to go to the /ios directory and install pods with `pod install`.

Build and run using

`react-native run-ios`

or

`react-native run-android`

Alternatively you can browse the /ios or /android folders using Xcode or Android Studio and build from there.

In case you get an "Execution failed for task app:validateSigning" error while building for Android, you can generate a new key in /android/app directory using the following command:

`keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000`


## Frameworks, Libraries and Tools Used

### React & React Native

React is an open-source JavaScript library that is used for building user interfaces. React Native is an open-source mobile application framework created by Facebook, Inc. Using it enabled me to develop a cross-platform application that runs on both iOS and Android by coding only once.

### react-navigation

This library is used to define paths within the application, navigate between screens and style the navigation bar.

### axios

Axios is a Javascript library used to make HTTP requests. Here it was used to access TMDB's API (v3).

### react-native-orientation-locker

Used to lock the application orientation to landscape for the player screen and to portrait for all the other screens.

### react-native-video & react-native-video-controls

react-native-video is a video player component for RN apps. react-native-video-controls provide video controls, an UI out of the box and some more customization.

### redux & react-redux & redux-saga & reselect

Used to provide an app-wide store for centralized app state management. Sagas handle side effects and execute async. actions such as setting the state and fetching data from an external API. Reselect provides custom selectors to execute some business logic or filtering while acquiring data from the app state.

### lodash.memoize

Used to memoize the custom selectors I wrote with parameters to improve performance.

### react-native-dotenv

Reads constant configuration data from the .env file.
