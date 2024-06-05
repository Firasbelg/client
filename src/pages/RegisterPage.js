import { useState } from "react";

export default function RegisterPage() {
    // State variables to store username and password input values
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle user registration
    async function register(ev) {
        ev.preventDefault();
        
        // Send a POST request to the server to register the user
        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        // Display registration status based on the response status
        if (response.status === 200) {
            alert('Registration Successful');
        } else {
            alert('Registration Failed');
        }
    }

    // Render the registration form
    return (
        <div className="register-container">
            <form className="register-form" onSubmit={register}>
                <h1>Register</h1>
                <div className="input-group">
                    <input type="text" placeholder="Username" value={username} onChange={ev => setUsername(ev.target.value)} />
                </div>
                <div className="input-group">
                    <input type="password" placeholder="Password" value={password} onChange={ev => setPassword(ev.target.value)} />
                </div>
                <button type="submit" className="register-button">Register</button>
            </form>
        </div>
    );
}
