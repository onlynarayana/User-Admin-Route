import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
    const navigate = useNavigate();

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
         margin: "auto", padding: "auto", height: "100vh", background: "gray"}}>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginLeft: "80vw",}}>
            <button onClick={() => navigate("/")}>Log-out</button>
        </div>
      <h1>I'am admin</h1>
      
      <img alt='admin-bg' src='https://thumbs.dreamstime.com/b/admin-administration-binder-office-business-concept-admin-administration-binder-office-business-concept-199955160.jpg' />
    </div>
  )
}

export default AdminPage
