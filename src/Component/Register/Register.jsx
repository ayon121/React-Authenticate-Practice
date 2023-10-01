import { createUserWithEmailAndPassword, getAuth  ,sendEmailVerification} from "firebase/auth";
import app from "../../Firebase/firebase.init";
import { useState } from "react";


const Register = () => {
    const [RegisterError, SetRegisterError] = useState('')
    const [RegisterSuccess, SetRegisterSuccess] = useState('')
    const [Showpassword, SetShowpassword] = useState(false)
    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        // reset
        SetRegisterError('')
        SetRegisterSuccess('')
        // password validation
        if (password.length < 6) {
            SetRegisterError('Password should be more than 6 characters')
            return
        }
        else if (!/[A-Z]/.test(password)) {
            SetRegisterError('Password should have capital letter characters')
            return
        }
        // create user
        const auth = getAuth(app)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                // send verification email
                sendEmailVerification(result.user)
                .then(() => {
                    alert('Please check your email and validate')
                })
                SetRegisterSuccess('Users Created')
            })
            .catch(error => {
                console.error(error)
                SetRegisterError(error.message);

            })
    }
    return (
        <div>
            <h1 className="max-w-md mx-auto text-center text-5xl text-black mb-7">Register</h1>
            <form className="max-w-md mx-auto" onSubmit={handleRegister}>
                <input className="mb-4 w-full py-2 rounded-xl bg-slate-300 px-3" name="email" placeholder="email" type="email" required />
                <br />
                <input
                    className="mb-4 w-full py-2 rounded-xl bg-slate-300 px-3"
                    name="password"
                    placeholder="password"
                    type={ Showpassword ? "text" : "password" }
                    required />
                <span onClick={() => SetShowpassword(!Showpassword)} className="relative -ml-12 mt-2">Show</span>
                <br />
                <input className="mb-4 w-full py-2 rounded-xl bg-slate-300 text-black border" type="submit" value="Register" />
                {
                    RegisterError && <p className="text-red-600">{RegisterError}</p>
                }
                {
                    RegisterSuccess && <p className="text-green-600">{RegisterSuccess}</p>
                }

            </form>

        </div>
    );
};

export default Register;