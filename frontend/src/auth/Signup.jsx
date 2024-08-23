import React from 'react';
import AuthFooter from './components/Footer';

const Signup = () => {
    return (
        <>
            <div className="main-container">
                <div className="signup">
                    <div className="heading">
                        <h1>मतदान अनलाइन साइनअप</h1>
                        <hr />
                    </div>
                    <div className="input">
                        <form action="./login.html">
                            <h4>Voter Id</h4>
                            <input
                                type="number"
                                name="number"
                                id="voting-id"
                                placeholder="Enter your voting number"
                            />
                            <h4>Full Name</h4>
                            <input
                                type="text"
                                name="name"
                                id="user-name"
                                placeholder="Enter your full name"
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
                                placeholder="Create a new password"
                            />
                            <div className="check-box-signup">
                                <input type="checkbox" name="check" id="check-box" />
                                <p>
                                    I accept the{' '}
                                    <span>
                                        <a href="#">Terms and Conditions</a>&nbsp;&&nbsp;
                                        <a href="#">Privacy Policy</a>
                                    </span>
                                </p>
                            </div>

                            <div className="signup-button">
                                <button type="submit">Sign Up</button>
                            </div>
                        </form>
                    </div>
                    <div className="buttom">
                        <hr />
                    </div>
                </div>
            </div>
            <AuthFooter />
        </>
    );
}

export default Signup;
