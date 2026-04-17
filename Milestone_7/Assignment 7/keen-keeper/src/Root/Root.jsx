import { Outlet } from 'react-router';
import Navbar from '../Pages/Navbar';
import Footer from '../Pages/Footer';
import ContextProvider from '../Context/ContextProvider';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <ContextProvider>
            <div className='flex flex-col min-h-screen'>
                <Navbar></Navbar>
                <div style={{ flexGrow: '1' }}>
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
            <ToastContainer position='top-center'>
            </ToastContainer>
        </ContextProvider>
    );
};

export default Root;