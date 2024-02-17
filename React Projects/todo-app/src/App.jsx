import AddTodo from "./components/AddTodo";
import TodoHeading from "./components/TodoHeading";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <TodoHeading />
      <div className="item-container">
        <AddTodo />
        <TodoItem1 />
        <TodoItem2 />
      </div>
    </center>
  );
}

export default App;
