import React from "react";
import "./Item.css";
import moment from "moment"
import { format } from 'date-fns'


class Item extends React.Component {


  // updateCompleted = (event) => {
  //   console.log(event.target.value)
  //   this function should update the state whenever someone types
  //   this.setState({
  //     completed: true
  //   })
  // }

  doneTask = () => {
    const tasksCopy = this.state.tasks.slice();
    tasksCopy.completed = true

    this.setState({
      tasks: tasksCopy
    });
  }

 handleDoneClick = event => {
   console.log("the done button was clicked " + event)
   this.props.doneTaskFunc(this.props.id)
  
 }


 handleDelete =(e) =>{
  console.log("the button was clicked" + e)
  this.props.deleteTaskFunc(this.props.id);
 }

  render() {
    
    return (
      <div className="row">
        <div className="col-2">
          <p className={this.props.completed ? "completed" : ""}>
            {this.props.text}
          </p>
        </div>
        <div className="col-2">
        {/* <p>{format(new Date(this.props.date), 'dd MMM yy')}</p> */}
          <p>{moment(this.props.date).format("YYYY-MM-DD")}</p>
        </div>
        <div className="col-3">
          <p className={moment(this.props.dueBy, "YYYY-MM-DD").fromNow().includes("ago") ? "overdue"  : ""}>
          Due {moment(this.props.dueBy, "YYYY-MM-DD").fromNow()}
          </p>
        </div>
        <div className="col-1">
          {!this.props.completed && (
            <button className="btn btn-info" onClick={this.handleDoneClick} disabled={this.props.completed}>
              Done
            </button> 
          )}
        </div>
        <div className="col-1">
          <button className="btn btn-danger" onClick={this.handleDelete}>Delete</button>
        </div>
      </div>
    );
  }
}

export default Item;
