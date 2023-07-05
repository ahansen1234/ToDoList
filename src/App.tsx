import React from "react";
import "./App.css";
import { useState, useCallback } from "react";
import Display from "./Display";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";

export interface Itask {
  task: string;
  id: string;
  deadline: number;
}

function App() {
  const [task, setTask] = useState<string>();
  const [list, setList] = useState<Itask[]>([]);
  const [deadline, setDeadline] = useState<number>(0);

  const handleChange = useCallback((e: any) => {
    setTask(e.target.value);
  }, []);

  const handleDeadline = useCallback((e: any) => {
    setDeadline(e.target.value);
  }, []);

  const handleClick = useCallback(() => {
    setList([
      ...list,
      { task: task!, deadline: deadline, id: task! + Math.random() },
    ]);
    setTask("");
    setDeadline(0);
  }, [list, task, deadline]);

  const handleDelete = useCallback(
    (index: number) => {
      list.splice(index, 1);
      setList([...list]);
    },
    [list]
  );

  const addTime = useCallback(
    (task: Itask) => {
      task.deadline++;
      setList([...list]);
    },
    [list]
  );

  return (
    <div className="All">
      <div className="App">
        <div>
          <h1 className="Title">
            {" "}
            Create a To Do List!{" "}
            <FontAwesomeIcon icon={faListCheck} size="sm" />
          </h1>
        </div>

        <input
          type="text"
          title="To Do Item"
          value={task}
          placeholder="Add a Task!"
          onChange={handleChange}
        />
        <input
          type="number"
          onChange={handleDeadline}
          placeholder="Add a Deadline!"
          value={deadline}
          title="Deadline (days)"
        />
        <button onClick={handleClick}> Add to List!</button>
        <Display list={list} handleDelete={handleDelete} addTime={addTime} />
      </div>
      <div className="Notes">
        <text>
          {" "}
          If you have one or less days remaining until the deadline, this list
          will warn you by displaying the task red
        </text>
      </div>
    </div>
  );
}

export default App;
