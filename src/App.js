import React, { Component } from "react";
import uuid from "uuid/v4";
import moment from "moment";
import Header from "./Header";
import ItemCount from "./ItemCount";
import AddItem from "./AddItem";
import Item from "./Item";
import "./App.css";

class App extends Component {
  state = {
    tasks: [
      {text: "walk dog", completed: true, date: "2019-10-15", id: uuid(), dueBy: "2019-11-10"},
      {text: "walk cat", completed: false, date: "2019-10-23", id: uuid(), dueBy: "2019-11-15"},
      {text: "wash dishes", completed: false, date: "2019-10-15", id: uuid(), dueBy: "2019-12-10"},
      {text: "do shopping", completed: true, date: "2019-10-21", id: uuid(), dueBy: "2019-09-10"},
      {text: "hoover", completed: true, date: "2019-09-28", id: uuid(), dueBy: "2019-12-31"},

    ]
  }
  // this function should update the state with a new task
  // never do something directly on state
  addNewTask = (taskText, dueByDate) => {
    const tasksCopy = this.state.tasks.slice();
    const newTask = {
      text: taskText, 
      completed: false,
      date: moment().format("YYYY-MM-DD"),
      id: uuid(),
      dueBy: dueByDate
    };

    tasksCopy.push(newTask);

    this.setState({
      tasks: tasksCopy
    });
  }

  //this function should update completed to true
  doneTask = id => {
    console.log("this is the id from doneTask "+ id);
    const tasksCopy = this.state.tasks.slice();
    console.log(tasksCopy)

    //if (task.id===id){ task.completed = true}

    const updatedTasks = this.state.tasks.map(task => {
      if (task.id===id){ task.completed = true;
      }
      return task;

    })


    this.setState({
      tasks: updatedTasks
    });
  }

  deleteTask = id =>{
    //remove the task with the id in question from this.state.tasks
    console.log("the id is" + id);
    // filter to remove th task that we want to delete
    //      {text: "walk cat", completed: false, date: new Date("2019-10-23"), id: uuid()},
    //setState
    const remainingTasks=this.state.tasks.filter(task => {
      
      return task.id !== id
    });
       
    
    this.setState({
      tasks: remainingTasks
    })
  }

  render() {
    const completedTasks=this.state.tasks.filter(task => {
      return task.completed;
    });

    const dateSortedCompleted = completedTasks.sort((a, b) => b.date - a.date);
    console.log(dateSortedCompleted);
    // Completed listed most recent first

    const incompleteTasks=this.state.tasks.filter (task => {
      return task.completed ? false : true
    });


    const dateSortedIncomplete = incompleteTasks.sort((a, b) => a.date - b.date);
    console.log(dateSortedIncomplete)

    
    //most recent to bottom of list

    const count = incompleteTasks.filter(item => item.completed === false).length
    console.log("Count" + count)
    return (
      <div className="container">
        <Header />
        <AddItem addNewTaskFunc={this.addNewTask}/>
        <ItemCount count={count} />
        <h3>Tasks left to complete</h3>
        {dateSortedIncomplete.map(task => {
          return <Item doneTaskFunc={this.doneTask} text={task.text} completed={task.completed} key={task.id} deleteTaskFunc={this.deleteTask} id={task.id} date={task.date} dueBy={task.dueBy}/>
        })}

        <h3>Tasks already completed</h3>
        {dateSortedCompleted.map(task => {
          return <Item text={task.text} completed={task.completed} key={task.id} deleteTaskFunc={this.deleteTask} id={task.id}date={task.date} dueBy={task.dueBy}/>
        })} 
      </div>
    );
  }
}

export default App;
