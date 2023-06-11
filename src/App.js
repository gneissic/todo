import TodoHeader from "./components/header/TodoHeader";
import TodoForm from "./components/form/TodoForm";
import Card from "./Ui/Card";
import { Fragment } from "react";
import TodoTasks from "./components/Tasks/TodoTasks";
import Notification from "./Ui/Notification";

function App() {
  return (
    <Fragment>
      <Card>
        <TodoHeader />
        <TodoForm />
        <TodoTasks />
        <Notification />
      </Card>
    </Fragment>
  );
}

export default App;
