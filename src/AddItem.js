import React from "react";
//Controlled Component
class AddItem extends React.Component {
  state = {
    newItemText: ""
  }

  //Functions which update state must always live where the state lives
  updateNewItemText = (event) => {
    console.log(event.target.value)
    // this function should update the state whenever someone types
    this.setState({
      newItemText: event.target.value
    })
  }

  //Intermediary function

  handleClick = (event) => {
    event.preventDefault();
    this.props.addNewTaskFunc(this.state.newItemText);
    this.setState({
      newItemText: ""
    });
  }

  render() {
    // JSX
    return (
      <form className="form-inline">
        <div className="form-group mx-sm-3 mb-2">
          <input
            type="text"
            className="form-control"
            id="newItem"
            placeholder="Type an item here (max 160 characters)" 
            value={this.state.newItemText}
            onChange={this.updateNewItemText}
          ></input>
        </div>
        {/* this is a comment in JSX */}
        <button className="btn btn-primary mb-2" onClick={this.handleClick} disabled={this.state.newItemText.length === 0 || this.state.newItemText.length > 160}>
          Add to List
        </button>
      </form>
    );
  }
}

export default AddItem;
