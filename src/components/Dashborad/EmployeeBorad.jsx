import React from 'react'
import './Employeeborad.css'
import Header from './Header'
import TaskListNumber from './TaskListNumber'
import TaskList from './TaskList'

const EmployeeBorad = ({data}) => {
  return (
	<div>
	  <Header data={data} />
	  <TaskListNumber data={data} />
	  <TaskList data={data} />
	</div>
  )
}

export default EmployeeBorad
