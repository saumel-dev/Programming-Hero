import { getUsers } from '../lib/data';
import UsersTable from '../Components/UsersTable';
import { createUser, deleteUser } from '../lib/actions';
import AddUserModal from '../Components/AddUserModal';

const UsersPage = async () => {
    const users = await getUsers();
    console.log(users);

    return (
        <div>
            <div className='flex gap-5 mt-10 px-10'>
                <h2>Users Management: {users.length}</h2>
                <AddUserModal createUserAction = {createUser}></AddUserModal>
            </div>
            <UsersTable users={users} deleteUserAction={deleteUser}></UsersTable>
        </div>
    );
};

export default UsersPage;