

const employees = [
	{
	  "id": 1,
	  "firstName": "Alex",
	  "email": "employee1@example.com",
	  "password": "123",
	  "taskNumber": 2,
	  "taskSummary": {
		"active": 1,
		"completed": 1,
		"failed": 0,
		"newTask": 1
	  },
	  "tasks": [
		{
		  "taskTitle": "Task 1",
		  "taskDescription": "Complete project documentation",
		  "taskDate": "2024-11-20",
		  "category": "Documentation",
		  "active": true,
		  "newTask": true,
		  "completed": false,
		  "failed": false
		},
		{
		  "taskTitle": "Task 2",
		  "taskDescription": "Update client on project status",
		  "taskDate": "2024-11-22",
		  "category": "Client Relations",
		  "active": false,
		  "newTask": false,
		  "completed": true,
		  "failed": false
		}
	  ]
	},
	{
	  "id": 2,
	  "firstName": "Bobe",
	  "email": "employee2@example.com",
	  "password": "123",
	  "taskNumber": 3,
	  "taskSummary": {
		"active": 2,
		"completed": 0,
		"failed": 1,
		"newTask": 1
	  },
	  "tasks": [
		{
		  "taskTitle": "Task 1",
		  "taskDescription": "Prepare meeting agenda",
		  "taskDate": "2024-11-18",
		  "category": "Meetings",
		  "active": true,
		  "newTask": true,
		  "completed": false,
		  "failed": false
		},
		{
		  "taskTitle": "Task 2",
		  "taskDescription": "Review budget report",
		  "taskDate": "2024-11-19",
		  "category": "Finance",
		  "active": false,
		  "newTask": false,
		  "completed": false,
		  "failed": true
		},
		{
		  "taskTitle": "Task 3",
		  "taskDescription": "Update social media",
		  "taskDate": "2024-11-21",
		  "category": "Marketing",
		  "active": true,
		  "newTask": false,
		  "completed": false,
		  "failed": false
		}
	  ]
	},
	{
	  "id": 3,
	  "firstName": "Cina",
	  "email": "employee3@example.com",
	  "password": "123",
	  "taskNumber": 4,
	  "taskSummary": {
		"active": 2,
		"completed": 1,
		"failed": 1,
		"newTask": 2
	  },
	  "tasks": [
		{
		  "taskTitle": "Task 1",
		  "taskDescription": "Organize team-building activity",
		  "taskDate": "2024-11-25",
		  "category": "HR",
		  "active": true,
		  "newTask": true,
		  "completed": false,
		  "failed": false
		},
		{
		  "taskTitle": "Task 2",
		  "taskDescription": "Prepare end-of-year performance review",
		  "taskDate": "2024-12-01",
		  "category": "HR",
		  "active": false,
		  "newTask": false,
		  "completed": true,
		  "failed": false
		},
		{
		  "taskTitle": "Task 3",
		  "taskDescription": "Update company website",
		  "taskDate": "2024-11-23",
		  "category": "Web Development",
		  "active": true,
		  "newTask": true,
		  "completed": false,
		  "failed": false
		},
		{
		  "taskTitle": "Task 4",
		  "taskDescription": "Set up project management tools",
		  "taskDate": "2024-11-24",
		  "category": "Project Management",
		  "active": false,
		  "newTask": false,
		  "completed": false,
		  "failed": true
		}
	  ]
	},
	{
	  "id": 4,
	  "firstName": "Dana",
	  "email": "employee4@example.com",
	  "password": "123",
	  "taskNumber": 3,
	  "taskSummary": {
		"active": 2,
		"completed": 1,
		"failed": 0,
		"newTask": 2
	  },
	  "tasks": [
		{
		  "taskTitle": "Task 1",
		  "taskDescription": "Analyze data trends",
		  "taskDate": "2024-11-18",
		  "category": "Data Analysis",
		  "active": true,
		  "newTask": true,
		  "completed": false,
		  "failed": false
		},
		{
		  "taskTitle": "Task 2",
		  "taskDescription": "Conduct customer feedback survey",
		  "taskDate": "2024-11-20",
		  "category": "Data Analysis"
		},
	  ]
	},
	{
	  "id": 5,
	  "firstName": "Tina",
	  "email": "employee4@example.com",
	  "password": "123",
	  "taskNumber": 3,
	  "taskSummary": {
		"active": 2,
		"completed": 1,
		"failed": 0,
		"newTask": 2
	  },
	  "tasks": [
		{
		  "taskTitle": "Task 1",
		  "taskDescription": "Analyze data trends",
		  "taskDate": "2024-11-18",
		  "category": "Data Analysis",
		  "active": true,
		  "newTask": true,
		  "completed": false,
		  "failed": false
		},
		{
		  "taskTitle": "Task 2",
		  "taskDescription": "Conduct customer feedback survey",
		  "taskDate": "2024-11-20",
		  "category": "Data Analysis"
		},
	  ]
	}
	]

	const admin = [
		{
			"id":1,
			"email":"admin@example.com",
			"password": 123
		}
	]
  


  export const setLocalStorage = () =>{
	localStorage.setItem('employees', JSON.stringify(employees))
	localStorage.setItem('admin', JSON.stringify(admin))
  }
  export const getLocalStorage = () =>{
	const employees = JSON.parse(localStorage.getItem('employees'))
	const admin = JSON.parse(localStorage.getItem('admin'))
	return{employees, admin}

  }
  