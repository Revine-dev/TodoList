import { useState } from "react";
import DarkModeTemplate from "./darkMode";

const Content = () => {
  const tasks = [
    {
      name: "Complete Airbnb API",
      isDone: false,
    },
    {
      name: "Add Dark mode",
      isDone: true,
    },
    {
      name: "10 mn meditation",
      isDone: false,
    },
  ];

  const [data, setData] = useState(tasks);
  const [newTask, setNewTask] = useState();
  const [darkMode, setdarkMode] = useState(false);

  const createNewTask = (e) => {
    e.preventDefault();
    let newData = [...data];
    newData.push({
      name: newTask,
      isDone: false,
    });
    setData(newData);
    e.target.reset();
  };

  const doneTask = (taskI) => {
    let newData = [];
    newData = [...data];
    newData[taskI].isDone = true;
    setData(newData);
  };

  const fetchTasks = () => {
    return data.map((element, i) => {
      return (
        <div key={i} className={`${element.isDone ? "task done" : "task"}`}>
          <div className="name">{element.name}</div>
          <div className="close" onClick={() => doneTask(i)}>
            X
          </div>
        </div>
      );
    });
  };

  return (
    <main className="container">
      <DarkModeTemplate darkMode={darkMode} setdarkMode={setdarkMode} />
      <form className="task" onSubmit={createNewTask}>
        <input
          type="text"
          name="create-task"
          placeholder="Create a new task"
          onChange={(e) => setNewTask(e.target.value)}
          required
        />
        <input type="submit" value="Add task" />
      </form>
      <section className="tasks">{fetchTasks()}</section>
    </main>
  );
};

export default Content;
