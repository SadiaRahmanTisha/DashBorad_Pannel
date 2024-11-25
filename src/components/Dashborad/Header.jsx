import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = () => {

	// const [username, setUsername] = useState('')
	// if(!data){
	// 	setUsername('Admin')
	// }else{
	// 	setUsername(data.firstName)
	// }
 

	const logOutUser = () =>{
		localStorage.setItem('loggedInUser', '')
		window.location.reload()
	}

	return (
		<div className="container-fluid header-top">
		  <div className="container d-flex justify-content-between text-white header">
			<h4>Hello<br /> <span className="fw-bold">username👋</span></h4>
			<button onClick={logOutUser}  className="button">log Out</button>
		  </div>
		</div>
	)
}

export default Header
