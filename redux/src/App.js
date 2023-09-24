import logo from './logo.svg';
import './App.css';
import store from './store';
import {Provider} from 'react-redux' 
import { Counter } from './Counter';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Counter></Counter>
    </div>
    </Provider>
  );
}

export default App;
