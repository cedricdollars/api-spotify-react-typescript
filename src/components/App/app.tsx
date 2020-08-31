import React from 'react';
import Navbar from './Navbar/navbar';
import './app.scss';

const App: React.FC = () => {
    return (
        <div className="container-app">
            <div className="container">
                <Navbar />
                <div className="upperNav">
                    <div className="signup">Sign up</div>
                    <div className="login">Login</div>
                </div>
            </div>
            <div className="music-control">music controll</div>
        </div>
    );
};
export default App;
