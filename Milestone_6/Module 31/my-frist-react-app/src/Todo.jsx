// export default function ToDo({task, isDone}) {
//     return(
//         <>
//         <li>task: {task}</li>
//         </>
//     )
// }
// export default function ToDo({task, isDone}) {
//     if(isDone){
//         return <li>Done: {task}</li>
//     }
//     else
//         return <li>Do Now: {task}</li>
// }
// export default function ToDo({task, isDone, time = 0}) {
//     if(isDone){
//         return <li>Done: {task} Duration: {time}</li>
//     }
//     return <li>To be done: {task}</li>
// }
export default function Todo({task, isDone, time = 0})
{
    return isDone? <li>Done {task} duration {time}</li> : <li>Not done: {task}</li>
}