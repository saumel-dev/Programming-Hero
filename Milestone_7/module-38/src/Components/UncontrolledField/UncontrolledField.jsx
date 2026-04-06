import React, { useRef } from 'react';

const UncontrolledField = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email);
        console.log(password);
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" name="email" />
                <br />
                <input ref={passwordRef} type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UncontrolledField;