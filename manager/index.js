import App from './App';
import { AppRegistry } from 'react-native';

import renderer from 'react-test-renderer';

// it('renders without crashing', () => {
//     const rendered = renderer.create(<App />).toJSON();
//     expect(rendered).toBeTruthy();
// });
AppRegistry.registerComponent('manager', () => App);
