import React, {Component} from 'react';

class TodoItems extends Component {
  render() {
  	return (
      <div className="TodoItems">
        <p>{this.props.title}</p>
      </div>  
  	)
  }

}
export default TodoItems;