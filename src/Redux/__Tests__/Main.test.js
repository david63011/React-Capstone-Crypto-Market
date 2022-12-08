import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Main from '../pages/Main';
import configureStore from '../Redux/ConfigureStore';

test('Main renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={configureStore()}>
        <Main />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
