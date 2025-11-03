import TasksBoard from "./components/TasksBoard";

function App() {
  // const [person, setPerson] = useState({ name: "Tony" });

  // const onChange = () => {
  //   //This won't work
  //   person.age = 24;

  //   // This will work
  //   setPerson({ ...person, age: 44 });
  // };

  return (
    <TasksBoard />
  );
}

export default App;
