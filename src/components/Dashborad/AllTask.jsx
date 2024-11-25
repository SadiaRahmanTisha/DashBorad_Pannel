import React, { useContext } from 'react'
import {AuthContext} from '../../context/AuthProvider'
import './AllTask.css'

const AllTask = () => {
	

	const authData = useContext(AuthContext)



  return (
	<div className="container all-task">

		<div className="all-task-1 rounded d-flex  my-3">
			<p>Employee Name</p>
			<p>New Task</p>
			<p>Active Task</p>
			<p>Completed</p>
			<p>Failed</p>
		</div>	
		<div className='all-task-2'>
		{authData.employees.map(function(elem, idx){
			return <div key={idx} className="all-task-3 d-flex  rounded  my-3">
						<p className='text-light'>{elem.firstName}</p>
						<p className='text-primary'> {elem.taskSummary.newTask} </p>
						<p className='text-warning'>{elem.taskSummary.active}</p>
						<p className='text-light'>{elem.taskSummary.completed}</p>
						<p className='text-danger'>{elem.taskSummary.failed}</p>
					</div>
		})}
		</div>
	</div>
  )
}

export default AllTask
