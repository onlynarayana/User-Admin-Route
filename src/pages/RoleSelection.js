import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RoleSelection = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Username:', username);
      console.log('Password:', password);
      if(password === "1234") { 
        if(username === "admin") {
            navigate("/admin")
        } else {
            navigate("/user")
        }
    }
    };

  return (
    <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center", 
        margin: "auto",
        marginTop: "20vh",
        width: "300px",
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "5px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
    }}>
        <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>Login With Your Role</h1>
        <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "10px" }}>
                <label htmlFor="username" style={{ marginBottom: "5px" }}>Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={handleUsernameChange}
                    style={{ 
                        width: "100%",
                        padding: "8px",
                        borderRadius: "3px",
                        border: "1px solid #ccc"
                    }}
                />
            </div>
            <div style={{ marginBottom: "20px" }}>
                <label htmlFor="password" style={{ marginBottom: "5px" }}>Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    style={{ 
                        width: "100%",
                        padding: "8px",
                        borderRadius: "3px",
                        border: "1px solid #ccc"
                    }}
                />
            </div>
            <button 
                type="submit"
                style={{ 
                    width: "100%",
                    padding: "10px",
                    borderRadius: "3px",
                    background: "#4CAF50",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer"
                }}
            >
                Login
            </button>
        </form>
    </div>
    
  );
};

export default RoleSelection;
