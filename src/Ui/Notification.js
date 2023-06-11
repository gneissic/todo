import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputActions } from "../store/input-slice";

const Notification = () => {
  const dispatch = useDispatch();
  const clearTodos = () => {
    dispatch(inputActions.onClearTodos());
  };

  const tasks = useSelector((state) => state.input.pendingTask);
  return (
    <div className="flex justify-around items-center mt-3 text-sm md:text-lg">
      <p className="text-slate-900 font-semibold">
        You have {tasks} pending tasks
      </p>

      <button onClick={clearTodos}>Clear All</button>
    </div>
  );
};

export default Notification;
