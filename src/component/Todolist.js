import React from 'react'
import { useSelector } from 'react-redux'
import Todoitems from './Todoitems';




const Todolist = () => {
 const  todo = useSelector((state) => state.todo) ;
  return (
    <div className='todo-list'>
      {todo.map((todo,i)=>( 
        <div key={i}>      
            <Todoitems todo={todo}/>
        </div>
      ))}
    </div>
  )
}

export default Todolist

