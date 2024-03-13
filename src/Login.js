import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [usermail, setUserMail] = useState("")
  const [userPassword, setUserPassword] = useState("")
  let navigate = useNavigate();
  const validate = () =>{
    if (usermail==="" && userPassword===""){
      alert("enter mail address & password")
    }
    else if (userPassword===""){
      alert("enter password")
    }
    else if (usermail==="") {
      alert("enter mail address")
    }
    else if(usermail==="nevergiveup@gmail.com" && userPassword==="12345678"){
      navigate('/jokes')
    }
    else{
      alert("invalid credentials")
      navigate('/')
    }
  }
 
    return(
    <div className="form-container">
    <form>
    <h3>Login In</h3>
    <div className="mb-3">
      <label>Email address</label>
      <input
        type="email"
        className="form-control"
        placeholder="nevergiveup@gmail.com"
        onChange={(e)=> setUserMail(e.target.value) }
      />
    </div>
    <div className="mb-3">
      <label>Password</label>
      <input
        type="password"
        className="form-control"
        placeholder="12345678"
        onChange={(e)=> setUserPassword(e.target.value)}
      />
    </div>
    <div className="d-grid">
    <button type="submit" onClick={validate} className="btn btn-primary">
        Login
      </button>
    </div>
  </form>
  </div>
)
}

export default Login