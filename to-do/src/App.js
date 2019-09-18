// import React from 'react';
// import logo from './logo.svg';
// import icon from './icon.png'
// import './App.css' ;

// // functional based component
// function App(){
//   return(
//    <div className = "App">
//      <header className = "App-header">
//        <img src = {logo} className="App-logo" />
//        <p>learning React in this crash course</p>
//      </header>
    
//    </div>
//   );
// }

// export default App;






import React from 'react';
//import icon from './icon.png';
import icon from './logo.svg';
import "./App.css";

// class based component

class App extends React.Component{
constructor(props) {
  super(props)

  this.state = {
    newItem : "",
     list : [],
  }
}
addItem(toDoValue){
  if(toDoValue!== ""){
    const newItem = { 
      id : Date.now(),
      value: toDoValue,
      inDone : false,
    };
    const list = [...this.state.list];
    list.push(newItem);

    this.setState({
      list: list,
      newItem : "",
    });
  }
}

deleteItem(id){
  const list = [...this.state.list];
  const updatedList = list.filter((item)=> item.id !== id);
  // new list contains all items except the one that is filtered
  this.setState({
    list: updatedList,
  });
}

updateInput(input){
  this.setState({newItem : input});
}

  render() {
    return (
       <div className = "App">
         <img src = {icon} width="100" height="100"  className = "icon"/>
         <h1 className="app-title">TO-DO App using React</h1>
         <div className= "container">
           Add an item ... <br />
           <input type="text" className ="input-text"  placeholder="Write a to-do" value = {this.state.newItem} onChange = {e => this.updateInput(e.target.value) } />
           <button className="add-btn" onClick = {()=> this.addItem(this.state.newItem)} disabled ={!this.state.newItem.length}>Add- todo</button>
           <div className = "list">
             <ul>
             {this.state.list.map(item =>{
               return(
                  <li key={item.id}>
                    <input type="checkbox"  name="isDone" checked={item.isone} onChange={()=>{}} />
                    {item.value}
                    <button className="btn" onClick={()=>this.deleteItem(item.id)}  > Delete</button>
                  </li>
               );
             })}
               <li>
                 <input type="checkbox" name="" id="inside-text" />
                 Learn React
                 <button>Delete to-do</button>
               </li>
               
             </ul>
           </div>
         </div>
       </div>
    );
  }
}


export default App;