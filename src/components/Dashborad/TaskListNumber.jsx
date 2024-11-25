import React from 'react'
import './Task.css'

const TaskListNumber = ({data}) => {
  return (
	<div className="container task">
		<div className="row g-4 row-cols-lg-4 row-cols-6 row-cols-12">
			<div className="col">
				<div className="task-body bg-warning bg-gradient">
					<h2>{data.taskSummary.newTask}</h2>
					<h4>New Task</h4>
				</div>
			</div>
			<div className="col">
				<div className="task-body">
					<h2>{data.taskSummary.completed}</h2>
					<h4>Completed Task</h4>
				</div>
			</div>
			<div className="col">
				<div className="task-body bg-primary bg-gradient">
					<h2>{data.taskSummary.active}</h2>
					<h4>Accepted Task</h4>
				</div>
			</div>
			<div className="col">
				<div className="task-body bg-danger">
					<h2>{data.taskSummary.failed}</h2>
					<h4>Failed Task</h4>
				</div>
			</div>
		</div>
	</div>
  )
}

export default TaskListNumber
