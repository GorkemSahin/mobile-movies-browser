# 24i-RN-Assignment
A React Native application I developed based on the assignment I was given by 24i. This application uses TMDB's API (v3) to browse movies.

A quick demonstration of the app can be seen here: https://youtu.be/rqqp5AKZY7E

## How to run

Assuming you have Git installed, clone the repo to your local environment with the following command.

`git clone https://github.com/GorkemSahin/24i-RN-Assignment.git`

Assuming you have react-native and npm CL tools already installed, install dependencies via

`npm install`

Start the metro bundler with

`npm start`

Build and run using

`react-native run-ios`

or

`react-native run-android`

Alternatively you can browse the /ios or /android folders using Xcode or Android Studio and build from there.


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


## Modules and Folder Scaffolding

### api

Contains the functions for making external API calls, developed with Axios.

### appState

Contains sagas, selectors, reducers and constants for app state management and middleware implementation. 

### assets

Contains the dummy video to play from the details screen of TV shows and movies.

### components

Contains dummy components without any functionality such as fetching data or manipulating app state.

### constants

Contains constant values such as colors, distances, font sizes and what to display on the discover screen.

### containers

Contains smart components that are composed of multiple components, can fetch data and manipulate app state.

### screens

Contains the discover, list, search, player and details screens.

### utils 

Contains Axios utils and other helper functions.


## Notes

I started developing it as an Expo app but had to eject later on because the react-native-video dependency, which was required for this assignment, was incompatible with Expo. The Expo-detached project had too many problems so I decided to start a new project from scratch and copy the components, methods and screens I had already developed to the new project. You can see this on the commit history.

I did not add the environment config file with the API key to .gitignore because it was a private repo anyway.

This was the first RN app I developed from scratch on my own so initially I struggled with laying out the project structure. I had to make changes to how what to display on the discover screen was decided, how the app state was managed, what the store looked like... etc. and related methods many times later on as I noticed I could improve efficiency, readibility, simplicity or reusability of components and methods.
