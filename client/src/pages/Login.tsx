import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import './Login.css';

const Login = () => {
    const handleSubmit = (e) => {
       e.preventDefault();
       const formdata = new FormData(e.currentTarget);
       const email = formdata.get('email');
       const password = formdata.get('password');
       console.log(email);
       console.log(password);
    }
    return (
        <div className="container">
            <div>
                <h1>DocGPT</h1>
                <h4>Hey folks! Welcome Back</h4>
                <form onSubmit={handleSubmit} >
                    <li>
                        <Input
                            type="email"
                            name="email"
                            label="Email"
                        />
                    </li>
                    <li>
                        <Input
                            type="password"
                            name="password"
                            label="Password"
                        ></Input>
                    </li>
                    <Button type='submit' buttonName="Continue"></Button>
                </form>
                <div>
                    <h4>
                        Don't have one?{' '}
                        <a href="/auth/signup">Create one</a>
                    </h4>
                </div>
                <div>
                    <h3>
                        By continuing you agree to our{' '}
                        <a href="">Terms</a> and{' '}
                        <a href="">Privacy Policy</a>
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Login;
