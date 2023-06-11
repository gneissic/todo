import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { inputActions } from "../../store/input-slice";

const Form = (props) => {
  const dispatch = useDispatch();
  const [title, setitle] = useState("");
  const [description, setDescription] = useState("");
  const invalidInput = description.trim() === "" && title.trim() === "";
  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const onChangeTitle = (e) => {
    setitle(e.target.value);
  };

  const random = Math.random().toString();
  const onSubmitInput = (e) => {
    e.preventDefault();
    if (invalidInput) {
      return;
    }

    dispatch(
      inputActions.onAddFormData({
        title: title,
        description: description,
        random: random,
      })
    );

    setDescription("");
    setitle("");
  };

  return (
    <form onSubmit={onSubmitInput}>
      <div className="flex flex-col gap-3 items-center">
        <div>
          <label htmlFor="title" />
          <input
            value={title}
            onChange={onChangeTitle}
            type="text"
            placeholder="Enter Todo Title"
            className="border border-gray-500 outline-none  w-[15rem] md:w-[20rem] p-2 text-gray-600 font-semibold"
          />
        </div>
        <div>
          <label htmlFor="task" />
          <input
            value={description}
            onChange={onChangeDescription}
            type="text"
            placeholder="Enter description"
            className="border border-gray-500 outline-none w-[15rem] md:w-[20rem] p-2 text-gray-600 font-semibold"
          />
        </div>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default Form;
