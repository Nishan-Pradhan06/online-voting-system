import React from 'react';
// import '../auth.css';
import AuthFooter from './components/Footer';

const Login = () => {
    return (
        <>
            <div className="main-container">
                <div className="login">
                    <div className="heading">
                        <h1>मतदान अनलाइन लगइन</h1>
                        <hr />
                    </div>
                    <div className="input">
                        <form action="/dashboard/voters/home">
                            <h4>Voter Id</h4>
                            <input
                                type="number"
                                name="voter-id"
                                id="voter-id"
                                placeholder="Enter Voter id"
                                autoComplete="username"
                            />
                            <h4>Phone Number</h4>
                            <input
                                type="tel"
                                name="phone-num"
                                id="user-num"
                                placeholder="Enter Phone Number"
                            />
                            <h4>Password</h4>
                            <input
                                type="password"
                                name="password"
                                id="user-password"
                                placeholder="Enter password"
                                autoComplete="current-password"
                            />
                            <div className="check-box">
                                <input type="checkbox" name="check" id="check-box" />
                                <p>Remember Password</p>
                            </div>
                            <div className="forget-pass btns">
                                <p>
                                    <a href="#">Forget Password?</a>
                                </p>
                                <div className="button">
                                    <button type="submit">Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="buttom">
                        <hr />
                    </div>
                </div>
            </div>
            <AuthFooter/>
        </>
    );
};

export default Login;
