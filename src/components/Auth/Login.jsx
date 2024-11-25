import React, { useState } from 'react'
import'./Login.css'

const Login = ({handleLogin}) => {


	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const submitHandler = (e) =>{
		e.preventDefault()
		handleLogin(email, password)
		setEmail("")
		setPassword("")
	}
  return (
	<div className="login-form">
		<div className="items">
			<form 
			onSubmit={(e)=>{
				submitHandler(e)
			}}
			className="form-items">
				<h3>Log In</h3>
				<input value={email}
				 onChange={(e)=>{
					setEmail(e.target.value)
				 }}
				 required type="email" placeholder="Enter Your email"
				 />
				<input value={password}
				 onChange={(e)=>{
					setPassword(e.target.value)
				 }}
				 required type="current-password" placeholder="Enter password"
				 />
				<button>Log In</button>
			</form>
		</div>
	</div>
  )
}

export default Login
