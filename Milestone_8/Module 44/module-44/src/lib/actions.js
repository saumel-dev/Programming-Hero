'use server'

import { revalidatePath } from "next/cache";
import { postTask } from "./tasks";
import { redirect } from "next/navigation";

export const createATask = async (formData) => {
    'use server'
    // const title = formData.get('title');
    // const description = formData.get('description');
    // const priority = formData.get('priority');
    // const status = formData.get('status');
    // const assignTo = formData.get('assignTo');
    // const newTask = {
    //     title,
    //     description,
    //     priority,
    //     status,
    //     assignTo,
    // }
    const newTask = Object.fromEntries(formData.entries());
    const res = await postTask(newTask);
    if (res.ok) {
        revalidatePath('/tasks');
    }
    return res;
}
export const addNewTask = async (formData) => {
    'use server'
    const newTask = Object.fromEntries(formData.entries());
    const res = await postTask(newTask);
    if (res.ok) {
        revalidatePath('/tasks');
        redirect('/tasks');
    }
    return res;
}