import React,{useEffect,useState} from 'react'
import axios from 'axios';
import {useNavigate } from 'react-router-dom';
import './Style.css';



function Home() {
const [name,setName]=useState('')
const [department,setDepartment]=useState('')
const [phone,setPhone]=useState('')
const [employee_id,setEmployee_ID]=useState('')
const [salary,setSalary]=useState('')
const [dob,setDob]=useState('')


const navigate=useNavigate();

const handleSubmit=(event)=> {
    event.preventDefault();
    axios.post('http://localhost:8081/',{name,department,phone,employee_id,salary,dob})
    .then(res=>{
        navigate('/');

    }).catch(err => console.log(err));
}
    const [data,setData]=useState([]);
    useEffect(()=>
    {
        axios.get('http://localhost:8081/')
        .then(res=>setData(res.data))
        .catch(err=>console.log(err));
    })
    
    const handleDelete=(employee_id) =>{
        axios.delete('http://localhost:8081/'+employee_id)
        .then(res=>navigate('/'))
        .catch(err=>console.log(err));

    }
    return (
        <div className="container">
        <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <h2>Registration Form</h2>
                   <div>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder="Enter name" onChange={e =>setName(e.target.value)} required/>
                    </div><br></br>
                    <div>
                    <label htmlFor=''>Department</label>
                    <input type="text" placeholder="Enter department" onChange={e =>setDepartment(e.target.value)} required/>
                    </div><br></br>
                    <div>
                    <label htmlFor="">Phone</label>
                    <input type="text" placeholder="Enter phone" onChange={e =>setPhone(e.target.value)}required/>
                    </div><br></br>
                    <div>
                    <label htmlFor="">Employee_ID</label>
                    <input type="number" placeholder="Enter your id" onChange={e =>setEmployee_ID(e.target.value)} required/>
                    </div><br></br>
                    <div>
                    <label htmlFor="">Salary</label>
                    <input type="int" placeholder="Enter salary" onChange={e =>setSalary(e.target.value)} required/>
                    </div><br></br>
                    <div>
                    <label htmlFor="">dob</label>
                    <input type="text" placeholder="DD-MM-YYYY" onChange={e =>setDob(e.target.value)} required/>
                    </div><br></br>
                    <button>Submit</button>
                    
                </form>
            </div>
        <div className="table-container">
            <div>

            <h2>Record</h2>
            
            <table className="table1">
                
                    <thead>
                        <tr>
                            
                            <th>NAME</th>
                            <th>DEPARTMENT</th>
                            <th>PHONE</th>
                            <th>ID</th>
                            <th>SALARY</th>
                            <th>DOB</th>
                            <th>DELETE</th>
                            
                                 
                        </tr>
                    </thead>
                    <tbody>
                        {data.map( (d ,i) => (
                            <tr>
                                
                                <td>{d.name}</td>
                                <td>{d.department}</td>
                                <td>{d.phone}</td>
                                <td>{d.employee_id}</td>
                                <td>{d.salary}</td>
                                <td>{d.dob}</td>
                                <td>
                                    
                                    <button onClick={e=>handleDelete(d.employee_id)}>Delete</button>
                                </td>
                            </tr>
                        )
                        )}
                    </tbody>
                </table>
            

            </div>
        </div>
        </div>
    )
}
export default Home