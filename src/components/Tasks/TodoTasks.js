import React from "react";
import Tasks from "./Tasks";
import { useSelector } from "react-redux";


const TodoTasks = () => {
  const INPUT = useSelector((state) => state.input.inputData);
  
  return (
    <div>
      {INPUT.map((data) => (
        <Tasks
          key={data.random}
          random={data.random}
          title={data.title}
          description={data.description}
        />
      ))}
    </div>
  );
};

export default TodoTasks;
