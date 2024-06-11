import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { authActions } from '../store/authSlice';
import '../Styles/Auth.css';

function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(event.target);
        const data = {
            email: formData.get('email'),
            password: formData.get('password')
        };

        setTimeout(() => {
            console.log(data)
            dispatch(authActions.login());
            setIsSubmitting(false);
            navigate('/');
        }, 1000);
    }


    return (
        <div className='flex-column auth'>
            <h1>Hi,</h1>
            <p className="logtitle">
                Login Garden-to-Cup Tea and explore our variety of teas.
            </p>
            <form className="form" onSubmit={handleSubmit}>
                <div className="authTitle">
                    <h3>Signup</h3>
                    <h4>Signin</h4>
                </div>
                <p>
                    <label
                        htmlFor="Email">Email</label>
                    <input
                        type="Email"
                        name='Email'
                        id="email"
                        required />
                </p>
                <p>
                    <label
                        htmlFor="password">Password</label>
                    <input
                        type="password"
                        name='password'
                        id="password"
                        maxLength={5}
                        required />
                </p>
                <div className="action">
                    <a onClick={() => navigate('/signin')}>Login</a>
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Save'}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Signup;
