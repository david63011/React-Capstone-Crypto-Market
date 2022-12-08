import { Provider } from 'react-redux';
import Details from '../Pages/Details';
import configureStore from '../Redux/ConfigureStore';
import renderer from 'react-test-renderer';

it('Main renders correctly', () => {
  const mainSite = renderer
    .create(
      <Provider store={configureStore}>
        <Details />
      </Provider>
    )
    .toJSON();
  expect(mainSite).toMatchSnapshot();
});
