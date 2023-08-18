import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import Profile from './Profile';
import Login from './Login';

import { store } from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div>
      <Provider stor={store}>
    <Profile/>
    <Login/>
    </Provider>
    </div>
  );

  //store c'est un objet pour maintenir holdi bch (ydhy3ech) les données eli and component o bien les données eli sar alihom mise a jour.



}




export default App;
