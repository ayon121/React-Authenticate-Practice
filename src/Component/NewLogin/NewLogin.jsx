import { useRef, useState } from "react";
import { getAuth, signInWithEmailAndPassword  , sendPasswordResetEmail} from "firebase/auth";

const NewLogin = () => {
    const [LoginError, SetLoginError] = useState('')
    const [LoginSuccess, SetLoginSuccess] = useState('')
    const [Showpassword, SetShowpassword] = useState(false)
    const emailref = useRef(null)
    const auth = getAuth();
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // reset
        SetLoginError('')
        SetLoginSuccess('')
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                if(result.user.emailVerified){
                    SetLoginSuccess('Login Success')
                }
                else{
                    alert('please verify your email')
                    return
                }
                
            })
            .catch(error => {
                console.log(error)
                SetLoginError(error.message)
            })
    }

    const handleForgetPassword = () => {
        const email = emailref.current.value
        if (!email) {
            console.log('Please Give An Email', emailref.current.value)
            return
        }
        else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
            console.log('please provide a valid email')
            return
        }
        // send validation email
        const auth = getAuth();
        sendPasswordResetEmail(auth, email)
        .then(() => {
            console.log('please check your email')
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <h1 className="max-w-md mx-auto text-center text-5xl text-black mb-7">Login</h1>
            <form className="max-w-md mx-auto" onSubmit={handleLogin}>
                <input className="mb-4 w-full py-2 rounded-xl bg-slate-300 px-3" name="email" placeholder="email" type="email" ref={emailref} required />
                <br />
                <input
                    className="mb-4 w-full py-2 rounded-xl bg-slate-300 px-3"
                    name="password"
                    placeholder="password"
                    type={Showpassword ? "text" : "password"}
                    required />
                <span onClick={() => SetShowpassword(!Showpassword)} className="relative -ml-12 mt-2">Show</span>
                <br />
                <p className="text-blue-500 mb-2" onClick={handleForgetPassword}>Forget Password</p>
                <input className="mb-4 w-full py-2 rounded-xl bg-slate-300 text-black border" type="submit" value="Login" />
                {
                    LoginError && <p className="text-red-600">{LoginError}</p>
                }
                {
                    LoginSuccess && <p className="text-green-600">{LoginSuccess}</p>
                }

            </form>

        </div>
    );
};

export default NewLogin;