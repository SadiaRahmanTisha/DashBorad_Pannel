import React from 'react'
import Header from './Header'
import './Admin.css'
import AdminPanel from './AdminPanel'
import AllTask from './AllTask'

const AdminDashborad = ({data}) => {
  return (
	<div>
	  <Header/>
	  <AdminPanel/>
	  <AllTask/>

	</div>
  )
}

export default AdminDashborad
