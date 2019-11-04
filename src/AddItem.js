import React from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

//Controlled Component
class AddItem extends React.Component {
  // state = {
  //   newItemText: "",
  //   dateSelected: moment().format("YYYY-MM-DD")
  // }
  constructor(props, context) {
    super(props, context);

    // Initial state with date
    this.state = {
        // or Date or Moment.js
        newItemText: "",
        selectedDate: moment().format("YYYY-MM-DD")
    };

    // This binding is necessary to make `this` work in the callback
    this.onChange = this.onChange.bind(this);
}
  //Functions which update state must always live where the state lives
  updateNewItemText = (event) => {
    console.log(event.target.value)
    // this function should update the state whenever someone types
    this.setState({
      newItemText: event.target.value,
    })
  }

  //Intermediary function

  handleClick = (event) => {
    event.preventDefault();
    this.props.addNewTaskFunc(this.state.newItemText, this.state.selectedDate);
    this.setState({
      newItemText: ""
    });
  }
  

onChange(date) {
  console.log('this happens when onChange is called' + date)
  const formattedDate = moment(date).format("YYYY-MM-DD")
  console.log(formattedDate)
  this.setState({
    selectedDate: moment(date).format("YYYY-MM-DD")
    
  });
  
}
  handleDateChange = e => {
    console.log(e)
    console.log(moment(e).format("YYYY-MM-DD"))
    console.log('this is what happens when I selected date ' + e)
     this.setState({
      selectedDate: moment(e).format("YYYY-MM-DD")
     });
  }

  handleInfiniteDateChange = e => {
    console.log(e)
    console.log(moment(e).format("YYYY-MM-DD"))
    console.log('this is what happens when I selected date Infinite date' + e)
     this.setState({
      selectedDate: moment(e).format("YYYY-MM-DD")
     });
  }
  
  onSelect = (date) => {
    console.log('this is the output of onSelect ' + date)
		this.setState({
			dateSelected: this.props.onSelect
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
        
        <div className="form-group mx-sm-3 mb-2">
       
       
        <InfiniteCalendar
    theme={{
      selectionColor: 'rgb(146, 118, 255)',
      textColor: {
        default: '#333',
        active: '#FFF'
      },
      weekdayColor: 'rgb(146, 118, 255)',
      headerColor: 'rgb(127, 95, 251)',
      floatingNav: {
        background: 'rgba(81, 67, 138, 0.96)',
        color: '#FFF',
        chevron: '#FFA726'
      }
   }}
   displayOptions={{
    layout: 'landscape',
    showHeader: false,
    shouldHeaderAnimate: true,
    showWeekdays: false
  }}
   width={(window.innerWidth <= 250) ? window.innerWidth : 250}
   height={window.innerHeight - 700}
   rowHeight={32}
   minDate={new Date()}
   onSelect={this.handleInfiniteDateChange}
  //const dateSelected=this.state.date;
  //console.log('after setting to this.date ' + dateSelected)
  
   //{this.handleDateChange}
/>
</div>
<div>
<DatePicker onChange={this.handleDateChange} value={this.state.selectedDate} />
   {/* value={this.state.selectedDate}    */}
</div>




        {/* <div className="form-group ">
          <input type="date" onChange={this.handleDateChange} value={this.state.dateSelected}/>
        </div> */}
        {/* this is a comment in JSX */}
        <button className="btn btn-primary mb-2" onClick={this.handleClick} disabled={this.state.newItemText.length === 0 || this.state.newItemText.length > 160}>
          Add to List
        </button>
      </form>
    );
  }
}

export default AddItem;
