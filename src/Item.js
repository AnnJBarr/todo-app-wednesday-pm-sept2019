import React from "react";
import "./Item.css";

class Item extends React.Component {


  // updateCompleted = (event) => {
  //   console.log(event.target.value)
  //   this function should update the state whenever someone types
  //   this.setState({
  //     completed: true
  //   })
  // }

  // doneTask = () => {
  //   const tasksCopy = this.state.tasks.slice();
  //   tasksCopy.completed = true

  //   this.setState({
  //     tasks: tasksCopy
  //   });
  // }

//  handleDoneClick = (event) => {
//    console.log(event.value)
//   const tasksCopy = this.state.tasks.slice();
//   console.log(tasksCopy)
//     tasksCopy.completed = true

//     this.setState({
//       tasks: tasksCopy
//     });
//    console.log(this.state.tasks.completed)
//  }

  render() {
    
    return (
      <div className="row">
        <div className="col-2">
          <p className={this.props.completed ? "completed" : ""}>
            {this.props.text}
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
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    );
  }
}

export default Item;
