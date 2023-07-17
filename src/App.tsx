import { Provider } from 'react-redux';

import CustomSnackbar from './components/CustomSnackbar';
import Loading from './components/Loading';
import Home from './screens/HomeScreen';
import store from './store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Home />
      <CustomSnackbar />
      <Loading /> {/* Loader get active only when the query is pending */}
    </Provider>
  );
}

export default App;
