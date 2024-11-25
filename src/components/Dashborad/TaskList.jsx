import React from 'react'
import './TaskList.css'
import AcceptTask from '../../TaskList/AcceptTask'
import NewTask from '../../TaskList/NewTask'
import CompleteTask from '../../TaskList/CompleteTask'
import FaildTask from '../../TaskList/FaildTask'

const TaskList = ({data}) => {
  return (
		<div id="task-list" className="task-list container d-flex gap-2">

			{data.tasks.map((elem , idx)=>{
				if(elem.active){
					return <AcceptTask key={idx} data={elem}/>
				}if(elem.newTask){
					return <NewTask key={idx} data={elem}/>
				}if(elem.completed){
					return <CompleteTask key={idx} data={elem}/>
				}if(elem.failed){
					return <FaildTask key={idx} data={elem}/>
				}
			})}
		</div>
  )
}

export default TaskList
