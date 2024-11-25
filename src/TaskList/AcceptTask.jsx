import React from 'react'

const AcceptTask = ({data}) => {
  return (
	<div className="task-list-body bg-warning px-3 py-4">
			<div className="d-flex justify-content-between">
				<h5><span className="badge bg-danger">{data.category}</span></h5>
				<p>{data.taskDate}</p>
			</div>
			<div className="mt-3">
				<h3 className="fw-bold">{data.taskTitle}</h3>
				<h6 className="fs-0.1">{data.taskDescription}</h6>
			</div>

			<div className="d-flex gap-2 mt-3">
				<button className="btn btn-outline-success">Completed</button>
				<button className="btn btn-outline-danger"> Failed</button>
			</div>
		</div>
  )
}

export default AcceptTask

