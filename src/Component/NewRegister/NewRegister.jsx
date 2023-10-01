import { useContext } from "react";
import { AuthContext } from "../../authProvider/AuthProvider";


const NewRegister = () => {
    const {createUser} = useContext(AuthContext)
    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        createUser(email , password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <div>
            <h1 className="max-w-md mx-auto text-center text-5xl text-black mb-7">Context Register</h1>
            <form className="max-w-md mx-auto" onSubmit={handleRegister}>
                <input className="mb-4 w-full py-2 rounded-xl bg-slate-300 px-3" name="email" placeholder="email" type="email" required />
                <br />
                <input
                    className="mb-4 w-full py-2 rounded-xl bg-slate-300 px-3"
                    name="password"
                    placeholder="password"
                    // type={Showpassword ? "text" : "password"}
                    required />
                {/* <span onClick={() => SetShowpassword(!Showpassword)} className="relative -ml-12 mt-2">Show</span> */}
                <br />
                <input className="mb-4 w-full py-2 rounded-xl bg-slate-300 text-black border" type="submit" value="Register" />
                {/* {
                    RegisterError && <p className="text-red-600">{RegisterError}</p>
                }
                {
                    RegisterSuccess && <p className="text-green-600">{RegisterSuccess}</p>
                } */}

            </form>

        </div>
    );
};

export default NewRegister;