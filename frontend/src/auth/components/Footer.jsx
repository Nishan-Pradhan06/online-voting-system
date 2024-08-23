import React from 'react';

const AuthFooter = () => {
    return (
        <footer>
            <p>&copy; 2024</p>
            <div className="footer-right">
                <a href="/privacy-policy" aria-label="Privacy Policy">Privacy Policy</a>
                <a href="/terms-conditions" aria-label="Terms and Conditions">Terms & Conditions</a>
            </div>
        </footer>
    );
}

export default AuthFooter;
