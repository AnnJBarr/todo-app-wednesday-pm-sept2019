import React from "react";
import "./Item.css";

class Item extends React.Component {
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
            <button className="btn btn-info" disabled={this.props.completed}>
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
