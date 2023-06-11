import React from "react";
import { useDispatch } from "react-redux";
import { inputActions } from "../../store/input-slice";
import { useState } from "react";

const Tasks = (props) => {
  const [completed, setCompleted] = useState(false);
  const dispatch = useDispatch();
  const id = props.random;
  const onRemoveTodo = () => {
    dispatch(inputActions.onDeleteTodos(id));
  };
  const onCompleteHandler = () => {
    setCompleted(!completed);
  };
  const normalClass =
    "text-slate-900 font-semi-bold relative flex items-center justify-between text-center m-auto p-3 w-full md:w-[80%] mt-5 bg-slate-400 border rounded-sm";
  const crossClass = "line-through opacity-50";
  const genClass = ` ${normalClass} ${completed ? crossClass : normalClass}`;

  return (
    <div className="flex flex-col gap-2 ">
      <div className={genClass}>
        <div>
          <h2 className="text-[1.2rem]">{props.title}</h2>
          <p className="text-md font-bold ">{props.description}</p>
        </div>
        <div>
          <div
            onClick={onCompleteHandler}
            className="border hover:border-green-900 transition-all 2s ease-out group bg-green-900 absolute md:right-[15%] right-[22%] top-0 h-[4.8rem] flex justify-center items-center w-[4rem] group hover:bg-green-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-white font-bold"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
          <div
            className="border hover:border-red-900 transition-all 2s ease-out group bg-red-900 absolute right-0 top-0 h-[4.8rem] flex justify-center items-center w-[4rem] group hover:bg-white"
            onClick={onRemoveTodo}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-white font-bold group-hover:text-red-900"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </div>
        </div>
      </div>
      {completed && (
        <p className="text-sm text-green-900 font-semibold text-center">
          completed
        </p>
      )}
      {!completed && (
        <p className="text-sm text-red-900 font-semibold text-center">
          not completed
        </p>
      )}
    </div>
  );
};

export default Tasks;
