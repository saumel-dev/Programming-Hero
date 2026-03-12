// // export default function Todo({task, isDOne}) {
// //     return (
// //         <li>Task: {task} </li>
// //     )
// // }

// export default function Todo ({task, isDone, time = 0}){
//         if(isDone){
//             return <li>Done: {task} Duration: {time}</li>
//         }
//         else {
//             return <li>Do now: {task}</li>
//         }
// }
// conditional rendering: 3 ternary
// export default function Todo({ task, isDone, time = 0 }) {
//     return isDone ? <li>Done: {task} Duration: {time}</li> : <li>Not done: {task}</li>
// }
// conditional rendering: 4 && operatior
// export default function Todo({ task, isDone, time = 0 }) {
//     return isDone && <li>Done task: {task} time: {time}</li>
// }
// export default function Todo({ task, isDone, time = 0 }) {
//     return isDone || <li>Not Done task: {task} time: {time}</li>
// }

// conditional rendering 6 using variable
export default function Todo ({task, isDone, time = 0}){
        let listItem;
        if(isDone){
        }
        else {
            return <li>Do now: {task}</li>
        }
}