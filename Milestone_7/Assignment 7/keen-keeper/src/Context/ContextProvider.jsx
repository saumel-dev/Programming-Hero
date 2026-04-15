import React, { createContext, useState } from 'react';
export const friendsContext = createContext();
const ContextProvider = ({ children }) => {
    const [call, setCall] = useState([]);
    const [text, setText] = useState([]);
    const [video, setVideo] = useState([]);
    const value = {
        call,
        setCall,
        text,
        setText,
        video,
        setVideo
    }
    return (
        <friendsContext.Provider value={value}>
            {children}
        </friendsContext.Provider>
    );
};

export default ContextProvider;