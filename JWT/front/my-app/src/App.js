import logo from './logo.svg';
import './App.css';
import LoginForm  from './components/LoginForm';
import { useContext, useEffect } from 'react';
import { Context } from './index';
import {observer} from 'mobx-react-lite'

function App() {
  const {store} = useContext(Context)
  useEffect(() => {
    if(localStorage.getItem('token')){
      store.checkAuth()
    }
  },[])
  return (
    <div>
      <h1>{store.isAuth ? `User is already auth ${store.user.email}` : "Get auth"}</h1>
      <LoginForm></LoginForm>
    </div>
  );
}

export default App;
