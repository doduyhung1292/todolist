import React, {Component} from 'react';
import './App.css';
import TodoItems from './Components/TodoItems';


class App extends Component {
  constructor () {
    super();
    this.state = {
      todoItems: [
    {title: 'Đổ xăng', isComplete: true},
    {title: 'Nấu cơm', isComplete: true},
    {title: 'Rửa bát', isComplete: false}
     ]
    }
  }
  onItemClicked(item) {   
    return (event) => {
      const isComplete = item.isComplete;
      const {todoItems} = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
         ...todoItems.slice(0, index),
         {
          ...item,
          isComplete: !isComplete
         },
         ...todoItems.slice(index+1)
        ]
      })

    }
  }

 render (){
  const {todoItems} = this.state;
   return (
     <div className="App">
     {
      todoItems.length > 0 && todoItems.map((item, index) => 
        <TodoItems 
        key={index}
        item={item}
        onClick = {this.onItemClicked(item)}
        />)
     }
     {
      todoItems.length === 0 && 'Nothing.'
     }
     </div>
    )
  }
}

export default App;
