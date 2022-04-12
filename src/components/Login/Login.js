import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div>
            <h1>please login bro!!!</h1>
            <button onClick={signInWithGoogle}>Google sign in</button>
            <br />
            <form>
                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" name='' id='' placeholder='Your Password' />
                <br />
                <input type="submit" value='Login' />
            </form>
        </div>
    );
};

export default Login;