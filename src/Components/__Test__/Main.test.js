import { Provider } from 'react-redux';
import Main from '../Pages/Main';
import configureStore from '../Redux/ConfigureStore';
import renderer from 'react-test-renderer';

it('Main renders correctly', () => {
  const mainSite = renderer
    .create(
      <Provider store={configureStore}>
        <Main />
      </Provider>
    )
    .toJSON();
  expect(mainSite).toMatchSnapshot();
});
