import React, { useState } from 'react'

const AdminPanel = () => {
	const [taskTitle, setTaskTitle] = useState('')
	const[taskDescription, setTaskDescription] = useState('')
	const[taskDate, setTaskDate] = useState('')
	const[assignTo, setAssignTo] = useState('')
	const[category, setCategory] = useState('')

	const[newTask, setNewTask] = useState({})


	const submitHandler = (e) =>{
		e.preventDefault()
		const data = JSON.parse(localStorage.getItem('employees'))
		setNewTask({taskTitle, taskDescription, taskDate, assignTo, category, active:false, newTask:true,failed:false,completed:false})
		console.log(newTask)



		data.forEach(function(elem){
			if(assignTo == elem.firstName){
				elem.tasks.push(newTask)
				elem.taskSummary.newTask = elem.taskSummary.newTask+1
			}
		})

		localStorage.setItem('employees',JSON.stringify(data))

		setTaskTitle('')
		setTaskDescription('')
		setTaskDate('')
		setAssignTo('')
		setCategory('')

	}




  return (
	<div className='container my-3'>
		<form className='d-flex justify-content-between' onSubmit={(e)=>{
			submitHandler(e)
		}}>
		<div className='left-part'>
			<h5>Task Title</h5>

			<input 
			value={taskTitle} 
			onChange={(e)=>{
				setTaskTitle(e.target.value)
			}} type="text" placeholder="Make a UI design" />
			<h5>Date</h5>
			
			<input 
			value={taskDate} 
			onChange={(e)=>{
				setTaskDate(e.target.value)
			}}

			 type="date" placeholder='date' />
			<h5>Asign to</h5>

			<input 
			value={assignTo}
			onChange={(e)=>{
				setAssignTo(e.target.value)
			}}

			 type="text" placeholder='employee name' />
			<h5>Category</h5>

			<input 
			value={category} 
			onChange={(e)=>{
				setCategory(e.target.value)
			}}
			
			 type="text" placeholder='design, dev, etc' />
		</div>

		<div className='right-part'>
			<h5>Description</h5>
			<textarea 
			value={taskDescription}
			onChange={(e)=>{
				setTaskDescription(e.target.value)
			}} id="" cols="30" rows="8"></textarea>
			<button className='button-2'>Create Task</button>
		</div>
	  
		</form>
	</div>
  )
}

export default AdminPanel
