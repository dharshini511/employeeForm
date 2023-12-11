import React,{useState }from 'react'
import axios from 'axios'
import{Link, useNavigate, useParams} from 'react-router-dom'

function Update() {
    
const [name,setName]=useState('')
const [phone,setPhone]=useState('')
const [email,setEmail]=useState('')
const navigate=useNavigate();

const {id}=useParams();

const handleSubmit=(event)=> {
    event.preventDefault();
    axios.put('http://localhost:8081/update/'+id ,{name,phone,email})
    .then(res => {
        navigate('/');

    }).catch(err => console.log(err));
}
    return (
            <div>
                <form onSubmit={handleSubmit}>
                    <h2>Update user</h2>
                    
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
                    <button>Update</button>
                    <Link to="/">Home</Link>
                </form>
            </div>
    )
}
export default Update
