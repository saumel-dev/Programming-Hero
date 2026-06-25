import { AddTask } from '@/Components/AddTask';
import TasksCard from '@/Components/TasksCard';
import { createATask } from '@/lib/actions';
import { getTasks } from '@/lib/tasks';

const TasksPage = async () => {
    const tasks = await getTasks();
    return (
        <div>
            <h2 className='text-xl font-semibold mb-4'>Tasks: {tasks.length}</h2>
            <AddTask createATask={createATask}></AddTask>
            <div className='grid grid-cols-3 gap-4 pt-8'>
                {tasks.map(task => (
                    <TasksCard key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
};

export default TasksPage;