import { useState } from "react";
const Taskmanagement = ()=>{
    const [tasks, settasks] = useState([]);
    const [newTaskTitle, setnewTaskTitle] = useState("");
    const [newtaskDescription, setnewtaskDescription] = useState([]);
    const [newtaskdueDate, setnewtaskdueDate] = useState();

const newTask=()=>{
    const newTask={
    taskname:   newTaskTitle,
    taskdescription:   newtaskDescription,
    taskduedate:   newtaskdueDate,
    taskstatus:   "To_Do",
};
const oldTask=[...tasks];
oldTask.push(newTask);
settasks(oldTask);
};
const handlechangestatus=(index, status)=>{
    let oldTask=[...tasks];
    if(status==="To_Do"){
        oldTask[index].taskstatus="On_Going";
    }
    else if (status === "On_Going"){
        oldTask[index].taskstatus="Completed";
    }
    else if (status==="Completed"){
        oldTask[index].taskstatus="To_Do"
    }
    settasks(oldTask);
}
const getButtonName=(status)=>{
    if (status==="To_Do")return "Start Task";
    else if (status=== "On_Going") return "Completed";
    else if (status === "Completed") return "Restart"
};
return(
<>
<div 
className="heading">
<h1> Task Management Tool</h1></div>
<div>
    <div>
    <label>Task Name: </label>
    <input
    type="text"
    value={newTaskTitle}
    onChange={(e)=>setnewTaskTitle(e.target.value)}
    className="task-title"
    placeholder="Enter Task Name"
    />
</div>
<br></br>
</div>
<div>
    <label>Task Description: </label>
    <input
    type="textarea"
    value={newtaskDescription}
    onChange={(e)=>setnewtaskDescription(e.target.value)}
    className="task-des"
    placeholder="Enter Task Description"
    />
</div>
<br></br>
<div>
    <label>Task Date: </label>
    <input
    type="date"
    value={newtaskdueDate}
    onChange={(e)=>setnewtaskdueDate(e.target.value)}
    className="task-date"
    placeholder="Enter Task Date"
    />
</div>
<br></br>
<div>
    <button
    onClick={()=> newTask()}
    type="button"
    className="btn1"
    >Create Task</button>
</div>
{tasks.map((v,i)=>{
    return(
        <>
        <div
        className="map">
        <h3> {i+1} Task</h3>
        <ul>
            <li>Task Name:   {v.taskname}</li>
            <li>Task Description:   {v.taskdescription}</li>
            <li>Task Date:   {v.taskduedate}</li>
            <li>Task Status:   {v.taskstatus}</li>
        </ul>
        <button onClick={()=> 
        settasks((oldTask)=> oldTask.filter((v, index)=> index !== i))} 
        type="button"
        className="btn2">
        Delete</button>
        </div>
        <button
        className="btn3"
        onClick={()=> handlechangestatus(i, v.taskstatus)}>
            {getButtonName(v.taskstatus)}
        </button>
        </>
    )
})}
    </>
);
}
export default Taskmanagement;