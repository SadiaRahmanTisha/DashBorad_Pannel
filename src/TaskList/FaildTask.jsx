import React from 'react'

const FaildTask = ({data}) => {
  return (
	<div className="task-list-body bg-warning px-3">
			<div className="d-flex justify-content-between">
				<h5><span className="badge bg-danger">{data.category}</span></h5>
				<p>{data.taskDate}</p>
			</div>
			<div className="mt-0">
				<h3 className="fw-bold">{data.taskTitle}</h3>
				<h6 className="fs-0.1">{data.taskDescription}</h6>
			</div>

			<button className="btn btn-outline-danger">Failed Task</button>
		</div>
  )
}

export default FaildTask

