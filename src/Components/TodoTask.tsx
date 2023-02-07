import React, { FC } from 'react'
import { ITask } from '../interfaces/interfaces'

interface Props {
  userTasks: ITask
  deleteTask(taskName: string): void
}
const TodoTask = ({ userTasks, deleteTask }: Props) => {
  return (
    <div className="flex items-center justify-center space-x-6 mt-6 ">
      <p className="text-lg capitalize w-1/5  h-1/5 cursor-pointer hover:shadow">
        {userTasks.taskName}
      </p>
      <div className="bg-red-400 text-white  p-2 rounded-md">
        <button
          onClick={() => {
            deleteTask(userTasks.taskName)
          }}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default TodoTask
