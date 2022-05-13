import React from 'react';
import './App.css';

const Task = (props)=> {
  const style = {color: 'red'}
  const {text, date, active, id, finishDate, important} = props.task;
  if(active) {
    return (
      <div className='activeTasks'>
            <p>
              <strong style={important? style : null}>{text}</strong> - Wykonać do: <span>{date}</span>
              <button onClick={()=> props.change(id)}>Zadanie wykonane</button>
              <button onClick={()=> props.delete(id)}>X</button>
            </p>
        </div>
    )
  } else {
    const finish = new Date(finishDate).toLocaleString();
    return (
      <div className='doneTasks'>
            <p>
              <strong>{text}</strong> (Wykonać do: <span>{date}) Data wykonania: {finish}</span>
              
              <button>X</button>
            </p>
        </div>
    )
  }
}

export default Task;