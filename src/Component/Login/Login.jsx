import { getAuth } from "firebase/auth";
import app from "../../Firebase/firebase.init";
import { signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";


const Login = () => {
    const [user, setuser] = useState(null)
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();

    const handleGoogleLogOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result)
                setuser(null)
            })
            .catch((error) => {
                console.log(error)
            });
    }
    const handleGoogleSignin = () => {
        console.log('google is coming')
        signInWithPopup(auth, provider)
            .then(result => {
                const loggedinUser = result.user;

                setuser(loggedinUser)
                console.log(user)

            })
            .catch(error => {
                console.log('error', error.message)
            })
    }
    return (
        <div>
            <h1 className="max-w-md mx-auto text-center text-5xl text-black mb-7">Login</h1>
            {/* user ? logout : sign in */}
            {user ? <button onClick={handleGoogleLogOut}>Google Log Out</button> :
            <button onClick={handleGoogleSignin}>Google Login</button>}
            {user && <div>
                <h1>user : {user.displayName}</h1>
                <p>Email : {user.email}</p>
                <img src={user.photoURL} alt="" />
            </div>}

        </div>
    );
};

export default Login;