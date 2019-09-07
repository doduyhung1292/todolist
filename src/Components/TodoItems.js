import React, {Component} from 'react';
import './TodoItems.css';



class TodoItems extends Component {
  render() {
  	const {item} = this.props;
  	let className = 'TodoItems';
  	if (item.isComplete) {
       className += ' TodoItems-complete';
  	}
  	return (
      <div className={className}>
        <p>{this.props.item.title}</p>
      </div>  
  	)
  }

}
export default TodoItems;