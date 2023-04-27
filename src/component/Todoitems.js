import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { donetask, removetask } from "../redux/Todoslice/Todoslice";

const Todoitems = ({ todo }) => {
  const dispatch = useDispatch();
  const [onUpdate, setOnUpdate] = useState(false);
  const [newtask, setNewtask] = useState(todo);

  return (
    <>
      {onUpdate ? (
        <div>
          <input
            type="text"
            defaultValue={todo.title}
            onChange={(e) => {
              setNewtask({ ...newtask, title: e.target.value });
            }}
          />
               <input
            type="text"
            defaultValue={todo.description}
            onChange={(e) => {
              setNewtask({ ...newtask, description: e.target.value });
            }}
          />
          <button
            onClick={() => {
              dispatch(donetask(newtask));
              setOnUpdate(false);
            }}
          >
            Confirm
          </button>
          <button onClick={() => setOnUpdate(false)}>Cancel</button>
        </div>
      ) : (
        <div className={`Todo-item ${todo.isDone ? "done" : "undone"} `} onClick={() => dispatch(donetask({...newtask,isDone:!todo.isDone}))}>
          <div className="text">
            <h1>{todo.title} </h1>
            <p>{todo.description} </p>
          </div>
          {/* <span>{todo.isDone ? "Done" : "Not Done"} </span> */}
          <button onClick={() => setOnUpdate(true)}>Update</button>

          <button onClick={() => dispatch(removetask({ id: todo.id }))}>
            remove
          </button>
        </div>
      )}
    </>
  );
};

export default Todoitems;
