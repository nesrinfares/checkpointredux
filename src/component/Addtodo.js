import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtask } from '../redux/Todoslice/Todoslice'


const Addtodo = () => {
  const dispatch = useDispatch()
  const [task, settask] = useState({
        id :Math.random(),
        title: "",
        description:"",
        isDone: false ,
  })
  return (
    <div className='add-task'>
      <input type='text' placeholder='entre task title'
       onChange={(e)=>{settask({...task,title:e.target.value})} } />
      <input type='text' placeholder='entre task description'
      onChange={(e)=>{settask({...task,description:e.target.value})} } />
      <button
      onClick={()=>dispatch(addtask(task))}>
        add new task </button>


    </div>
  )
}

export default Addtodo

