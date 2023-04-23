import logo from './logo.svg';
import './App.css';
import Auth from './components/Auth'
import {Routes , Route} from 'react-router-dom'
import SignIn from './components/SignIn';
import Signup from './components/Signup';
import Account from './components/Account';
import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
     <Routes>
      <Route path='/' element={<SignIn/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/account' element={<Account/>}/>
     </Routes>
     </AuthContextProvider>
    </div>
  );
}

export default App;
