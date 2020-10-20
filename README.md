# 24i-RN-Assignment
A React Native application I developed based on the assignment I was given by 24i. This application uses TMDB's API (v3) to browse movies.

A quick demonstration of the app can be seen here: https://youtu.be/RpdvkBPwCc0

# How to run

Install dependencies via

`npx npm install`

Build using

`npx react-native run-ios`

or

`npx react-native run-android`

Alternatively you can browse the /ios or /android folders using Xcode or Android Studio and build from there.

# Notes
 I started developing it as an Expo app but had to eject later on because the react-native-video dependency, which was required for this assignment, was incompatible with Expo. I did not add the environment config file with the API key to .gitignore because it was a private repo anyway.
