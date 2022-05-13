import React from 'react';
import './App.css';
import AddTask from './addTask';
import TaskList from './TaskList';
import Task from './Task';

class App extends React.Component {
  counter = 1;
  state = {
    tasks: [
      {
        id: 0,
        text: 'Twoje pierwsze zadanie',
        date: '2022-07-17',
        important: false,
        active: true,
        finishDate: null,
      },
    ]
  }

  deleteTask = (id)=> {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task=> task.id===id);
    tasks.splice(index, 1);
    this.setState({ tasks })
  }

  changeStatusTask = (id)=> {
    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task=> {
      if(task.id===id) {
        task.active = false
        task.finishDate = new Date().getTime()
      }
    })
    this.setState({
      tasks
    })
  }

  newTask = (text, date, important)=> {
    const task = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
      finishDate: null,
    }
    this.counter++;

    this.setState(prevState=> ({
      tasks: [...prevState.tasks, task]
    }))

    return true
  }

  render() {
    return (
      <div className="App">
          <h3>ToDoApp</h3>

          <AddTask add={this.newTask}/>

          <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeStatusTask}/>
      </div>
    )
  }
}

export default App;
