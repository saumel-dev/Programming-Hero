import UsersList from "@/Components/UsersList";
import { Suspense } from "react";

const getUsers = async () => {
    const res = await fetch('http://localhost:8000/users');
    return res.json();
}

const UsersPage = () => {

    const usersPromise = getUsers();
    return (
        <div>
            <h2>Users2: with suspense</h2>
            <Suspense fallback={<p>Loading....</p>}>
                <UsersList usersPromise={usersPromise}></UsersList>
            </Suspense>
        </div>
    );
};

export default UsersPage;
