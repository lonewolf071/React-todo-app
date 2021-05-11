import React from "react";

function Todo({ todo, index, markCompleteTask, removeTask }) {
  // this is the component which can be many in number and each of these components can handle a task

  return (
    <div className="task" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      {index+1}.{todo.name}  {/*This is where the task name appears*/}
      <div>
        <button className = "button" onClick={() => markCompleteTask(index)}>Done</button>
        <button className = "button2" onClick={() => removeTask(index)}>Clear</button>
      </div>
    </div>
  );
}

function TaskInput({ addTask }) {
  //TodoForm is a functional component which works with entered tasks as input strings and add them into the list using addTodo func

  const [value, setValue] = React.useState("");// here we define a state which stores the strings entered and submitted in the form

  const takeSubmit = (event) => {

    //Here we define a function which decides what happens on submitting the task name in the form

    event.preventDefault();// This will prevent the default event so that we can define our own event which happens on submitting

    if (value === "") return;// The page remains as it is on submitting an empty string

    addTask(value);// this function will now add the entered task into the array and will be displayed in the list

    setValue("");
    // this line of code will now change the stored string to an empty string
    // to prevent interference with the strings added in future  
  };

  return (
    <div>
      <form className="form" onSubmit={takeSubmit}>    {/*The form which calls the handleSubmit function on submitting*/}

        <input
          type="text"
          placeholder = "enter new task"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </form>
      
    </div>
  );
}

function App() {

  const [taskList, setList] = React.useState([{name:'Play with the app', isCompleted: false}]);// initialize the array of to do activities
  // todos is an array of various states which we are taking as tasks
  // each task state can have two properties, isCompleted (true or false) and text which is the task name

  const addTask = (name) => {

    // Here we are defining a new function called addTodo which will add new tasks to the existing todos array

    setList([...taskList, { name, isCompleted: false}]); //this line of code adds a new task to the todos array
  }; 

  const markCompleteTask = (index) => {

    const newTodos = [...taskList]; // here we are assigning the todos array to newTodos also

    newTodos[index].isCompleted = true; // select the task by its index and mark it as completed

    setList(newTodos); // then update with the updated newTodos array
  };

  const removeTask = (index) => {

    const newTodos = [...taskList]; // here also we are assigning the todos array to newTodos also

    newTodos.splice(index, 1); // splice function removes ONE element from the assgined index position

    setList(newTodos); // update the todos array with the new newTodos array
  };

  return(
    <div className="app">
        <div id="Heading">React App: To-do list</div>
        <div className="list">
          {taskList.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              markCompleteTask={markCompleteTask}
              removeTask={removeTask}
            />
          ))}     {/* The Todo component is rendered here */}

        <TaskInput addTask={addTask} /> {/* The form appears below all the todo components */}
      </div>
    </div>
  );
}

export default App;