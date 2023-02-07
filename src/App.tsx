import React, { FC, ChangeEvent, useState, useEffect } from 'react'
import { ITask } from './interfaces/interfaces'
import TodoTask from './Components/TodoTask'

const App: FC = () => {
  const [task, setTask] = useState<string>('')
  const [dueDate, setDueDate] = useState<number>(1)
  const [todo, setTodo] = useState<ITask[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'task') {
      setTask(event.target.value)
    } else {
      setDueDate(Number(event.target.value))
    }
  }

  const addTask = (): void => {
    if (task !== '' && dueDate > 0) {
      setTodo([
        ...todo,
        {
          taskName: task,
          deadLine: dueDate,
        },
      ])
      setTask('')
      setDueDate(1)
    }
  }

  const deleteTask = (taskName: string): void => {
    setTodo(
      todo.filter((tasks) => {
        return tasks.taskName !== taskName
      }),
    )
  }

  return (
    <div className="">
      <div className="flex flex-col items-center justify-center mt-12">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 space-x-0 md:space-y-0 md:space-x-6">
          <input
            type="text"
            placeholder="task"
            className="
          shadow
          appearance-none
          border
          rounded
          py-3
          px-3
          text-gray-500
          leading-tight
          focus:outline-none focus:shadow-outline
          "
            name="task"
            value={task}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="deadline"
            className="
          shadow
          appearance-none
          border
          rounded
          py-3
          px-3
          text-gray-500
          leading-tight
          focus:outline-none focus:shadow-outline
          "
            name="dueDate"
            value={dueDate}
            onChange={handleChange}
          />
        </div>

        <div className="mt-12 bg-red-400 text-white px-4 py-2 rounded-md cursor-pointer text-lg">
          <button onClick={addTask}>Add Task</button>
        </div>
      </div>

      <div className="mt-20">
        {todo.map((userTask: ITask, key: number) => (
          <TodoTask key={key} userTasks={userTask} deleteTask={deleteTask} />
        ))}
      </div>
    </div>
  )
}

export default App
