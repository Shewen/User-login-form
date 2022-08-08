import {useState} from 'react'
import "./AuthContainer.scss";
import Login from './Login';
import Register from './Register';
import Reset from './Reset';

const AuthContainer = () => {
    const [login, setLogin] = useState(true);
    const [register, setRegister] = useState(false);
    const [reset, setReset] = useState(false);

    const handleRegister=() => {
      setLogin(false);
      setRegister(true);
      setReset(false);
    }

    const handleReset=() => {
        setLogin(false);
        setReset(true);
        setRegister(false);

      }
    
      const handleLogin=() => {
        setReset(false);
        setLogin(true);
        setRegister(false);

      }

  return (
    <section className='--flex-center-- --100vh'>
        <div className='container box'>
            {login && <Login onRegister={handleRegister} onReset={handleReset}/>}
            {register && <Register onLogin={handleLogin}/>}
            {reset && <Reset onLogin={handleLogin}/>}

         
        

        </div>
    </section>
  )
}

export default AuthContainer
