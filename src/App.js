import React, {Component} from 'react';
import './App.css';
import TodoItems from './Components/TodoItems';


class App extends Component {
  constructor () {
    super();
    this.todoItems = [
    'Đổ xăng',
    'Nấu cơm',
    'Thịt gà'
   ];

  }
   

 render (){
   return (
     <div className="App">
     {
      this.todoItems.map((item, index) => <TodoItems key={index} title={item} />)
     }
     </div>
    )
  }
}

export default App;
