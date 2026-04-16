import React, { createContext, useState } from 'react';
export const friendsContext = createContext();
const ContextProvider = ({ children }) => {
    const [call, setCall] = useState([]);
    const [text, setText] = useState([]);
    const [video, setVideo] = useState([]);
    const [allBtn, setAllbtn] = useState([]);
    const data = {
        call,
        setCall,
        text,
        setText,
        video,
        setVideo,
        allBtn,
        setAllbtn
    }
    return (
        <friendsContext.Provider value={data}>
            {children}
        </friendsContext.Provider>
    );
};

export default ContextProvider;