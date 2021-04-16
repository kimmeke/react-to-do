import React, { Component } from 'react';
import { logout } from '../helpers/auth';

function App() {
    return (
    <div className="app">
        <div className="login">
            <h1>Profile</h1>

            <ul class="profile-list">
                <li class="profile-list__item"><a href="/" >Go to my todo's</a></li>
                <li class="profile-list__item"> <a onClick={logout}>Logout</a> </li>
            </ul>
        </div>
    </div>
  );
}
export default App;
