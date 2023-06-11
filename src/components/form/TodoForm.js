import React from "react";
import Form from "./Form";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const TodoForm = () => {
  const input = useSelector((state) => state.input.inputData);
  const addToLocalStorageHandler = (userData) => {
    localStorage.setItem("myArray", JSON.stringify(input));

    const storedArray = localStorage.getItem("myArray");

    if (storedArray) {
      JSON.parse(storedArray);
    }
  };
  useEffect(() => {
    const storedArray = localStorage.getItem("myArray");

    if (storedArray) {
      JSON.parse(storedArray);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("myArray", JSON.stringify(input));
  }, [input]);

  return (
    <div>
      <Form onAddLocalStorage={addToLocalStorageHandler} />
    </div>
  );
};

export default TodoForm;
