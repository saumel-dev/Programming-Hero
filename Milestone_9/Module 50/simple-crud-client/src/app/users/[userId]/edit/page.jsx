import { updateUser } from '@/app/lib/actions';
import { getUserById } from '@/app/lib/data';
import { Button, Input, Label, TextField } from '@heroui/react';
import React from 'react';

const UserEditPage = async ({ params }) => {
    const { userId } = await params;
    const user = await getUserById(userId);
    console.log('editing user', user);

    const updateUserWrapper = async (formData) => {
        'use server'
        return updateUser(userId, formData);
    }
    return (
        <div>
            <h2>Editing User: {user.name}</h2>
            <div className='container mx-auto'>
                <form action={updateUserWrapper} className="flex flex-col gap-4">
                    <TextField className="w-full" defaultValue={user?.name} name="name" type="text">
                        <Label>Name</Label>
                        <Input placeholder="Enter your name" />
                    </TextField>
                    <TextField className="w-full" defaultValue={user?.email} name="email" type="email">
                        <Label>Email</Label>
                        <Input placeholder="Enter your email" />
                    </TextField>
                    <TextField className="w-full" defaultValue={user?.role} name="roll" type="tel">
                        <Label>Roll</Label>
                        <Input placeholder="Enter User Roll" />
                    </TextField>
                    <div className='flex gap-5'>
                        <Button slot="close" variant="secondary">
                            Cancel
                        </Button>
                        <Button slot="close" type="submit">Update User</Button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default UserEditPage;