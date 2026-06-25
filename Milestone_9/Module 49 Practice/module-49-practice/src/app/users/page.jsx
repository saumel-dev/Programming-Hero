const UsersPage = async () => {
    const res = await fetch('http://localhost:5000/users');
    const users = await res.json();
    console.log(users);
    return (
        <div>
            <h1>Users length: {users.length} </h1>

            <div className="grid grid-cols-3 gap-2">
                {
                    users.map(user => <div className="border" key={user.id}>
                         <h1>{user.name}</h1>
                         <p>{user.email}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default UsersPage;