# React-native sample
In this repo, I try testing [`react native`](https://facebook.github.io/react-native/) and also provide some useful samples to reference in future.

- [ ] **Integrate to available Android source**
  + Ref: [Facebook guide](https://facebook.github.io/react-native/docs/integration-with-existing-apps.html). 
    + '../' is current prj dir
    + Need to start server, checking package.json, not start server, need to build bundle [`Bundle`](http://facebook.github.io/react-native/releases/0.19/docs/running-on-device-ios.html)
    + Can config build path on build.gradle
    + Actually a switch point from Android to React-native is an pre-defined methods ReactActivity, then this activity will handle our React-native UI
    
  + Integrate to this one: `Dagger2Sample`
  
- [ ] **Integrate to avaiable iOS source**
  + ...

- [x] Album project sample
  + how to use: `props, state, scrollView, flexBox, functional component, class component, btn pressed event, http request, image, text, styles`
  + path: `albumprj`
  + app screenshot:
  + ![ScreenShot](https://cloud.githubusercontent.com/assets/13033746/25481299/b5801a8e-2b76-11e7-9f44-7eb0ce621be3.png)
    
- [x] Authentication 
  + how to create `login form, authenticate info with firebase, working with textinput, organize import in index.js, handle error, success/error popup, screen navigator.`
  + path: `managers`
  
- [x] Redux introduction
  + how to use redux: `redux components (action, reducer, state, store), Provider, createStore, combineReducer, reducer, mapStateToProps, connect, LayoutAnimation, TouchableWithoutFeedback, FlatList`
  + path: `test_redux_prj`
  
- [x] Employee management
  + more complicated project: `redux with tremedeous states, navigation, navigation bar, passing params to component as updating props, ListView, react-native-router-flux, react-nativ-commucations, ConfirmDialog, separate actions, reducers file`
  + path: `managers`
  
- [x] Advanced concepts





