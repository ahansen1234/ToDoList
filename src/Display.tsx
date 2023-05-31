import "./App.css";
import { Itask } from "./App";

interface IdisplayProps {
  list: Array<Itask>;
  handleDelete: (index: number) => void;
  addTime: (task: Itask) => void;
}

export default function Display(props: IdisplayProps) {
  return (
    <div>
      {props.list.length > 0 ? (
        <div>
          {props.list.map((task: Itask, index: number) => {
            return (
              <div key={task.id} className={task.deadline > 1 ? "App" : "Late"}>
                {task.task} is due in {task.deadline} days!
                <button onClick={(e: any) => props.addTime(task)}>
                  {" "}
                  Add one Day
                </button>
                <button onClick={(e: any) => props.handleDelete(index)}>
                  {" "}
                  Finished!{" "}
                </button>
              </div>
            );
          })}{" "}
        </div>
      ) : (
        <text> Add some To Do items</text>
      )}
    </div>
  );
}
