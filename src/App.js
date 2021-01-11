import "./App.scss";
import TaskCreate from "./components/TaskCreate/TaskCreate";
import Header from "./components/Header/Header";
import TasksList from "./components/TasksList/TasksList";

function App() {
  return (
    <div className="Wrapper">
      <Header />
      <TaskCreate />
      <TasksList />
    </div>
  );
}

export default App;
