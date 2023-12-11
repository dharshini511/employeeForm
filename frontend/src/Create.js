import React,{useState }from 'react'
import axios from 'axios'
import{Link, useNavigate} from 'react-router-dom'

function Create() {
    
const [name,setName]=useState('')
const [phone,setPhone]=useState('')
const [email,setEmail]=useState('')
const navigate=useNavigate();

const handleSubmit=(event)=> {
    event.preventDefault();
    axios.post('http://localhost:8081/create',{name,phone,email})
    .then(res=>{
        navigate('/');

    }).catch(err => console.log(err));
}
    return (
            <div>
                <form onSubmit={handleSubmit}>
                    <h2>Add user</h2>
                   <div>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder="Enter name" onChange={e =>setName(e.target.value)}/>
                    </div><br></br>
                    <div>
                    <label htmlFor="">Phone</label>
                    <input type="number" placeholder="Enter phone" onChange={e =>setPhone(e.target.value)}/>
                    </div><br></br>
                    <div>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="Enter Email" onChange={e =>setEmail(e.target.value)}/>
                    </div><br></br>
                    <button>Submit</button>
                    <Link to="/">Home</Link>
                </form>
            </div>
    )
}
export default Create
