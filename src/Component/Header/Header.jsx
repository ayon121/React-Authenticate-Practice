import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthProvider";


const Header = () => {
    const { user, LogOut } = useContext(AuthContext)

    const handlelogout = () => {
        LogOut()
            .then(() => console.log('user log out successful'))
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            <Link to="/">Home</Link>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                            <Link to="/newregister">NewRegister</Link>
                            <Link to="/contextlogin">ContextLogin</Link>
                            {
                                user && <Link to="/profile">Profile</Link>
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        <Link to="/">Home</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                        <Link to="/newregister">NewRegister</Link>
                        <Link to="/contextlogin">ContextLogin</Link>
                        {
                            user && <Link to="/profile">Profile</Link>
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user && <>
                            <span>{user.email}</span>
                            <a onClick={handlelogout} className="btn">Logout</a>
                        </>
                    }

                </div>
            </div>

        </div>
    );
};

export default Header;