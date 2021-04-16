import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signin } from '../helpers/auth';

function SignInForm({  }) {


  const [error, setError] = React.useState([]);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');


    const handleSubmit = event => {
        event.preventDefault();
        setError('');
        
        if (!email && !password) return; 
        signin(email, password);
    }

    return (
        <form className="mt-5 py-5 px-5" autoComplete="off" onSubmit={handleSubmit}>
            <h1>
                Login
            </h1>
            <p className="lead">Fill in the form below to login to your account.</p>
            <div className="form-group">
                <input className="form-control" placeholder="Email" name="email" type="email" onChange={e => setEmail(e.target.value)} value={email}></input>
            </div>
            <div className="form-group">
                <input className="form-control" placeholder="Password" name="password" onChange={e => setPassword(e.target.value)} value={password} type="password"></input>
            </div>
            <div className="form-group">
                {error ? <p className="text-danger">{error}</p> : null}
                <button className="btn btn-primary rounded-pill px-5">Login</button>
            </div>
            <hr></hr>
            <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </form>
    )
}



function App() {

    return (
      <div className="container">
        
          <SignInForm />
      </div>
    );
}


export default App;
