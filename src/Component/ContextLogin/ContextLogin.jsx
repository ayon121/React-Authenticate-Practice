import { useContext } from "react";
import { AuthContext } from "../../authProvider/AuthProvider";
import { useNavigate } from "react-router-dom";


const ContextLogin = () => {
    const {signinUser , signinwithGoogle} = useContext(AuthContext)
    
    const navigate = useNavigate()
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        

        signinUser(email , password)
        .then(result => {
            console.log(result.user)
            e.target.reset()
            navigate('/')
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handleGoogleSignIN = () => {
        signinwithGoogle()
        .then(result => {
            console.log(result.user)

        })
        .catch(error => {
            console.log('error', error.message)
        })
        navigate('/')

    }
    return (
        <div className="max-w-md mx-auto">
            <h1 className="max-w-md mx-auto text-center text-5xl text-black mb-7"> Context Login</h1>
            <form onSubmit={handleLogin}>
                <input className="mb-4 w-full py-2 rounded-xl bg-slate-300 px-3" name="email" placeholder="email" type="email"  required />
                <br />
                <input
                    className="mb-4 w-full py-2 rounded-xl bg-slate-300 px-3"
                    name="password"
                    placeholder="password"
                    // type={Showpassword ? "text" : "password"}
                    required />
                {/* <span onClick={() => SetShowpassword(!Showpassword)} className="relative -ml-12 mt-2">Show</span> */}
                <br />
                {/* <p className="text-blue-500 mb-2" onClick={handleForgetPassword}>Forget Password</p> */}
                
                <input className="mb-4 w-full py-2 rounded-xl bg-slate-300 text-black border" type="submit" value="Login" />
                {/* {
                    LoginError && <p className="text-red-600">{LoginError}</p>
                }
                {
                    LoginSuccess && <p className="text-green-600">{LoginSuccess}</p>
                } */}

            </form>
            <button className="mb-4 w-full py-2 rounded-xl bg-slate-300 text-black border" onClick={handleGoogleSignIN}>Sign In With Google</button>
        </div>
    );
};

export default ContextLogin;