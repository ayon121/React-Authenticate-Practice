
// import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../../authProvider/AuthProvider';

const Home = () => {
    const authinfo = useContext(AuthContext)
    console.log(authinfo)
    return (
        <div>
            
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;