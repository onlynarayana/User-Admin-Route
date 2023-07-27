import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserPage = () => {
    const navigate = useNavigate();

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            margin: "auto", padding: "auto", height: "100vh", background: "Pink"}}>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginLeft: "80vw",}}>
            <button onClick={() => navigate("/")}>Log-out</button>
        </div>
        <h1>I'am not an admin, I'm User</h1>
        <img alt="user-bg" src="https://www.shutterstock.com/image-vector/simple-set-user-related-vector-600w-1575676819.jpg" />
    </div>
  )
}

export default UserPage
