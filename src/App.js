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

  convertDates = id =>{
    console.log("convertDates called ")
    const taskCopy=this.state.tasks.slice();
    //console.log(taskCopy)
    const updateDates = this.state.tasks.map(task => { 
      console.log(updateDates)
      task.date = new Date(task.date);
      task.dueBy = new Date(task.dueBy);
      return task;
      
    })
    console.log("this should be taskCopy")
    console.log(taskCopy)
    this.setState({
      tasks:taskCopy
    })
  }
  //this function should update completed to true
  doneTask = id => {
    console.log("this is the id from doneTask "+ id);
    const tasksCopy = this.state.tasks.slice();
    console.log(tasksCopy)

    //if (task.id===id){ task.completed = true}

    const updatedTasks = this.state.tasks.map(task => {
      if (task.id===id){ task.completed = true;
        console.log(updatedTasks)
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
    const dateObjTasks=this.convertDates(this.tasks);

    console.log("next will be dateObjTasks")
    console.log(dateObjTasks);

    const completedTasks=dateObjTasks.filter(task => {
      
      return task.completed;
    });
    console.log(completedTasks)
    //const completedWithDateObj = this.convertDates(completedTasks);
    console.log('completedTasks')
    console.log(completedTasks)

    const dateSortedCompleted = completedTasks.sort((a, b) => b.date - a.date);
    //console.log(dateSortedCompleted);
    // Completed listed most recent first

    const incompleteTasks=this.state.tasks.filter (task => {
     
      return task.completed ? false : true
    });

    //const incompleteWithDateObj = this.convertDates(incompleteTasks);
    //console.log(incompleteWithDateObj)

    // const datesMod = incompleteTasks.map(getDate)
    // function getDate(object) {var date = new Date([object.date])
    // return date }

    // console.log(datesMod)
    // console.log(incompleteTasks)
    const dateSortedIncomplete = incompleteWithDateObj.sort((a, b) => a.date - b.date);
    console.log(dateSortedIncomplete)

    
    //most recent to bottom of list

    const count = incompleteTasks.filter(item => item.completed === false).length
    console.log("Count" + count)
    return (
      <div className="container" >

        <Header />
        <AddItem addNewTaskFunc={this.addNewTask} />
        <ItemCount count={count} />
        <h3>Tasks left to complete</h3>
        {dateSortedIncomplete.map(task => {
          return <Item convertDatesFunc={this.convertDates} doneTaskFunc={this.doneTask} text={task.text} completed={task.completed} key={task.id} deleteTaskFunc={this.deleteTask} id={task.id} date={task.date} dueBy={task.dueBy}/>
        })}

        <h3>Tasks already completed</h3>
        {dateSortedCompleted.map(task => {
          return <Item convertDatesFunc={this.convertDates} text={task.text} completed={task.completed} key={task.id} deleteTaskFunc={this.deleteTask} id={task.id} date={task.date} dueBy={task.dueBy}/>
        })} 
      </div>
    );
  }
}

export default App;
