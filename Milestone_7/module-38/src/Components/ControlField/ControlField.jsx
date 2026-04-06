import React, { useState } from 'react';

const ControlField = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('secret');
    const [error, setError] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, password);
        if(password.length < 6){
            setError('6 characters or longer password needed');
        }
        else{
            setError('');
        }
        
    }
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handlePasswordOnChange = (e) => {
        // console.log(e.target.value);
        setPassword(e.target.value);

        if(password.length < 6){
            setError('password must be 6 characters or longer');
        }
        else{
            setError('');
        }

    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Your Name' onChange={handleNameChange} defaultValue={name} />
                <br />
                <input required type="email" onChange={handleEmailChange} defaultValue={email} name='email' placeholder='Your Email' />
                <br />
                <input required type="password" onChange={handlePasswordOnChange} name="password" placeholder='Your Password' id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{color: 'red'}}>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default ControlField;