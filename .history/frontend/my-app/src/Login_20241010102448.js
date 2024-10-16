// Register.js
import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const fetchUser = async () => {
        try {
            await fetch('http://localhost:5000/login');
            
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };

    const log = async () => {
        try {
          const response=  await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userName: username, email, password }),
            });
            if (!response.ok) {
                const errorData = await response.json();
                alert(errorData.message || errorData.error); 
                return; 
            }
            setUsername('');
            setPassword('');
            await fetchUser();  // Await here
        } catch (error) {
            console.error('Error login:', error);
        }
    }
    
    
    return (
        <div>
            <h2>Register</h2>
            <form>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button onClick={log}>Log in</button>
            </form>
        </div>
    );
};

export default Login;