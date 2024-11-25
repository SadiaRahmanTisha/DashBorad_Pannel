import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeBorad from './components/Dashborad/EmployeeBorad'
import AdminDashborad from './components/Dashborad/AdminDashborad'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'
const App = () => {


  const[user, setUser] = useState()
  const[loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggenInUser')
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  }, [])
  

  const handleLogin = (email, password) =>{
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
    }else if( authData){
      const employee = authData.employees.find((e)=>email == e.email && e.password ==password)
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role:'employee', data:employee}))
      }
    }
    else{
      alert("Invalid credentails")
    }
    }


  return (
    <> 
      {!user ? <Login handleLogin={handleLogin}/>: '' }
      {user == 'admin' ? <AdminDashborad/> : (user == 'employee' ? <EmployeeBorad data={loggedInUserData} /> : null) }
    </>
  )
}

export default App
