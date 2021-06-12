import React,{useState,useEffect}from 'react'
import axios from 'axios'
import './App.css'
const UserList = () => {


    const[listOfusers,setListOfusers]=useState([]);
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
          );
          setListOfusers(result.data);
          console.log(result);
        };
        fetchData();
      },[]);
    return (
        <div className='list'>
            <h1>List of Users</h1>
            <ul >
                {listOfusers.map((user)=>(<li>{user.name}</li>))}
            </ul>
        </div>
    )
}

export default UserList
