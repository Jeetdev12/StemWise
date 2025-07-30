
import { Provider } from 'react-redux';
import Body from './components/Body';
import appStore from './utils/AppStore';
import Header from './components/Header';


function App() {
  console.log("API KEY APP:", process.env.PREACT_APP_API_KEY);

  return (
    <div>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
