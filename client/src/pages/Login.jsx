import { useState } from 'react'; 
import axios from 'axios'; 
 
function Login() { 
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
 
  const handleLogin = async () => { 
    const res = await axios.post('http://localhost:5000/api/auth/login', { email, password }); 
    localStorage.setItem('token', res.data.token); 
    alert('Logged in!'); 
  }; 
 
  return ( 
    <div style={{ padding: '40px' }}> 
      <h2>Login</h2> 
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /> 
      <br /><br /> 
      <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} /> 
      <br /><br /> 
      <button onClick={handleLogin}>Log In</button> 
    </div> 
  ); 
} 
 
export default Login; 