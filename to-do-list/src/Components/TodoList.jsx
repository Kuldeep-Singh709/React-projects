
import React, { useState } from "react";
import "../Components/TodoList.css";

export default function TodoList() {
  const [Task, setTask] = useState([]);
  const [NewTask, setNewTask] = useState("");

  const addTask = () => {
    setTask([...Task, NewTask]); // Here Expand Stratgy of Spread Oprator is Used which means first create shallow copy of Task array and then add Element of NewTask 
    setNewTask("");
  };

  // const deleteTask = (index) => {
  //   const taskToDelete = Task[index];
  //   alert(`Are you want to Delete, ${taskToDelete}!.`);
  //   const updatedTasks = [...Task];
  //   updatedTasks.splice(index, 1);
  //   setTask(updatedTasks);
  // };


  const deleteTask = (index) => {
    const taskToDelete = Task[index];
    const isConfirmed = window.confirm(`Are you sure you want to delete: ${taskToDelete}?`);

    if (isConfirmed) {
      const updatedTasks = [...Task];
      updatedTasks.splice(index, 1);
      setTask(updatedTasks);
    }
  };



  return (
    <>
      <div className="container">
        <div className="upperSection">
          <span className="inputFeild">
            <input
              type="text"
              placeholder="Enter Your Task"
              value={NewTask}
              onChange={(e) => setNewTask(e.target.value)}
              autoFocus 
            />
          </span>
          <span className="addBtn">
            <button onClick={addTask}>Add</button>
          </span>
        </div>

        <div className="lowerSection">
          {Task.length === 0 ? (
            <p>Currently List is empty</p>
          ) : (
            <ul>
              {Task.map((task, index) => (
                <li key={index} className="ListItems">
                  <span>{task}</span>
                  <span className="deleteBtn">
                    <button onClick={() => deleteTask(index)}>Delete</button>
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

