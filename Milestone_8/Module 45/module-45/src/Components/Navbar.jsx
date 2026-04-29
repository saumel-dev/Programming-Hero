'use client'
import { Link, Button } from "@heroui/react";
import { signOut, useSession } from '@/lib/auth-client';
const Navbar = () => {
    const { data, isPending } = useSession();
    if(isPending){
        return <div>Loading.....</div>
    }
    const user = data?.user;
    console.log(data);
    
    return (
        <div>

            {/* Basic */}
            <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
                <header className="flex h-16 items-center justify-between px-6">
                    <div className="flex items-center gap-3">
                        <p className="font-bold">ACME</p>
                    </div>
                    <ul className="flex items-center gap-4">
                        <li><Link href="#">Features</Link></li>
                        <li><Link href="#">Pricing</Link></li>
                        <li><Link href="/dashboard">Dashboard</Link></li>
                        <li><Link href="/about">About</Link></li>
                    </ul>
                <div>
                    {
                        user? <> <p>Welcome: {user.name}</p>
                        <button onClick={() => signOut()}>Signout</button>
                         </> : <>
                         <Link href="/auth/signup">Signup</Link>    
                         </>
                    }
                </div>
                </header>
            </nav>
        </div>
    );
};

export default Navbar;