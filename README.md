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
  + redux:
  + ![screen shot 2018-08-01 at 09 54 06](https://user-images.githubusercontent.com/13033746/43498379-e5f79d76-9570-11e8-95e8-5601fe3a0506.png)
    ![screen shot 2018-08-01 at 09 54 13](https://user-images.githubusercontent.com/13033746/43498380-e70e82a6-9570-11e8-98b7-c71d8b1801b4.png)

  + app redux structure:
  + ![screen shot 2018-07-20 at 18 12 11](https://user-images.githubusercontent.com/13033746/43498311-93240daa-9570-11e8-84a4-ad68797baec3.png)
    ![screen shot 2018-07-23 at 11 02 41](https://user-images.githubusercontent.com/13033746/43498300-8bfb07ae-9570-11e8-822d-68a2f8884434.png)

 
  
- [x] Employee management use firebase realtime database
  + more complicated project: `redux with tremedeous states, navigation, navigation bar, passing params to component as updating props, ListView, react-native-router-flux, react-nativ-commucations, ConfirmDialog, separate actions, reducers file`
  + path: `managers`
  + Login `uat@ved.com.vn/123456`
  
    ![simulator screen shot - iphone 7 - 2018-08-01 at 09 57 57](https://user-images.githubusercontent.com/13033746/43498525-8412cc9c-9571-11e8-8732-af9fe9ed1d73.png)
    
  + List
 
  ![simulator screen shot - iphone 7 - 2018-08-01 at 09 58 16](https://user-images.githubusercontent.com/13033746/43498524-83bc2158-9571-11e8-9ee5-39760146b15a.png)
    
  + Create
  
  ![simulator screen shot - iphone 7 - 2018-08-01 at 09 58 21](https://user-images.githubusercontent.com/13033746/43498523-83880b7a-9571-11e8-9e9e-e0a1fd5719b2.png)
    
  + Update/Delete/Text
  
    ![simulator screen shot - iphone 7 - 2018-08-01 at 09 58 30](https://user-images.githubusercontent.com/13033746/43498522-83423b68-9571-11e8-8d81-15be850523d4.png)
    
  + ConfirmDialog
  
    ![simulator screen shot - iphone 7 - 2018-08-01 at 09 58 39](https://user-images.githubusercontent.com/13033746/43498520-82eef96c-9571-11e8-8231-fdda127503fd.png)
  
- [x] Advanced concepts





