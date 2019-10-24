import React, { Component } from "react";
import uuid from "uuid/v4";
import Header from "./Header";
import ItemCount from "./ItemCount";
import AddItem from "./AddItem";
import Item from "./Item";
import "./App.css";

class App extends Component {
  state = {
    tasks: [
      {text: "walk dog", completed: true, date: new Date("2019-10-15"), id: uuid()},
      {text: "walk cat", completed: false, date: new Date("2019-10-23"), id: uuid()},
      {text: "wash dishes", completed: false, date: new Date("2019-10-15"), id: uuid()},
      {text: "do shopping", completed: true, date: new Date("2019-10-21"), id: uuid()},
      {text: "hoover", completed: true, date: new Date("2019-09-28"), id: uuid()},

    ]
  }
  // this function should update the state with a new task
  // never do something directly on state
  addNewTask = (taskText) => {
    const tasksCopy = this.state.tasks.slice();
    const newTask = {
      text: taskText, 
      completed: false,
      date: new Date(),
      id: uuid()
    };
    console.log(newTask.date);

    tasksCopy.push(newTask)

    this.setState({
      tasks: tasksCopy
    });
  }

  render() {
    const completedTasks=this.state.tasks.filter(task => {
      return task.completed;
    });

    const dateSortedCompleted = completedTasks.sort((a, b) => b.date - a.date);
    console.log(dateSortedCompleted);


    const incompleteTasks=this.state.tasks.filter (task => {
      return task.completed ? false : true
    });

    const dateSortedIncomplete = incompleteTasks.sort((a, b) => b.date - a.date);

    return (
      <div className="container">
        <Header />
        <AddItem addNewTaskFunc={this.addNewTask}/>
        <ItemCount count={this.state.tasks.length} />
        <h3>Tasks left to complete</h3>
        {dateSortedIncomplete.map(task => {
          return <Item text={task.text} completed={task.completed} key={task.id}/>
        })}

        <h3>Tasks already completed</h3>
        {dateSortedCompleted.map(task => {
          return <Item text={task.text} completed={task.completed} key={task.id}/>
        })} 
      </div>
    );
  }
}

export default App;
