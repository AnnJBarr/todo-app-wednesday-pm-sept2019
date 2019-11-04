import React from "react";

class ItemCount extends React.Component {


  render() {
    // const incompleteTasks=this.props.completed.filter (task => {
    //   return task.completed ? false : true
    // });

    return <p>{console.log(this.props.completed)}You have {this.props.count} items left on your todo list</p>;
  }
}

export default ItemCount;
