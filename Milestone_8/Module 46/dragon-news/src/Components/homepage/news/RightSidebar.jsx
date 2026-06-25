'use client'
import { authClient } from '@/lib/auth-client';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSidebar = () => {
    const handleGoogleSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        console.log(data);
        
    }
    return (
        <div>
            <h2 className="text-lg font-bold mb-2">Login with</h2>
            <div className='flex flex-col gap-2'>
                <button onClick={handleGoogleSignin} className='btn border-blue-500 text-blue-500'><FaGoogle></FaGoogle> Login with facebook</button>
                <button className='btn'><FaGithub></FaGithub> Login with github</button>
            </div>
        </div>
    );
};

export default RightSidebar;