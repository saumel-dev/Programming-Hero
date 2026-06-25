import React from 'react';
import { Navigate } from 'react-router';
const Home = () => {
    const navigate = useNavigate
    // const btnStyle useNavigate();= {
    //     padding: '16px',
    //     fontSize: '15px',
    //     marginLeft: '90px'
    // }
    return (
        <div>
            <h1>Welcome to the Home</h1>
            <button>Expense</button>
        </div>
    );
};

export default Home;