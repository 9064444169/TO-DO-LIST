import "./App.css";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";
import { selectTodoList } from "./features/todoSlice";
import { useSelector } from "react-redux";

function App() {
  const todoList = useSelector(selectTodoList);
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__todoContainer">
          {/* renders out */}
          {todoList.map((item) => (
            <TodoItem
              key={item.id}
              item={item.item}
              done={item.done}
              id={item.id}
            />
          ))}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
