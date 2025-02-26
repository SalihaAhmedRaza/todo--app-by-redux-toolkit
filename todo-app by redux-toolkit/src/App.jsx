// 




 import React, { useRef } from 'react'
 import { useDispatch, useSelector } from 'react-redux'
 import { addTodo, removeTodo,editTodo } from './config/redux/reducers/todoSlice';

 const App = () => {
   const input = useRef()
   

//   // data bulaya haa
   const selector = useSelector(state => state.todos.todos);
   console.log(selector);

//   // data bhejna ka liya
   const dispatch = useDispatch()

   const addData = (event) => {
     event.preventDefault();
     console.log(input.current.value);
     dispatch(addTodo({
       title: input.current.value,
     }))
   }


   const deleteTodo = (index)=>{
     console.log(index);
     dispatch(removeTodo({
       index
     }))
    
   }
   const editlist = (index) => {
    const newTitle = prompt("Enter the new title:");
    if (newTitle) {
      dispatch(
        editTodo({
          index,
          newTitle,
        })
      );
    }
  };

   

   return (
     <>
       <h1>Todo App</h1>
       <form onSubmit={addData}>
         <input type="text" placeholder='enter todo' ref={input} />
         <button type='submit'>add Todo</button>
       </form>
       <ol>
         {selector.length > 0 ? selector.map((item, index) => {
           return <li key={item.id}>{item.title}
             <button onClick={() => deleteTodo(index)}>delete</button>
             <button onClick={() => editlist(index)}>edit</button>
           </li>
         }) : <h1>No item found.</h1>}
       </ol>
     </>
   )
 }

 export default App
