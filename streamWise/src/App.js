
import { Provider } from 'react-redux';
import Body from './components/Body';
import appStore from './utils/AppStore';
import Header from './components/Header';
import { API_KEY_URL } from './utils/constants';


function App() {
  console.log("API KEY APP:", API_KEY_URL);

  return (
    <div>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
