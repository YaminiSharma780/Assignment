import React from "react";

function Login({ onClose }) {
  return (
    <div onClick={onClose} className="modal-backdrop">
      <div className="modal">
        <h2>Login</h2>
        <div className="login-form">
          <input type="text" placeholder="Username" />
          <br />
          <input type="password" placeholder="Password" />
          <br />
        </div>
        <div className="sumbit-close-btns">
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
