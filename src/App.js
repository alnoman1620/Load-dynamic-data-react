import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <ExternalUser></ExternalUser>
    </div>
  );
}

function ExternalUser(){
const [users, setUsers] = useState([])
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => setUsers(data))
},[])
  return(
    <div>
      <h2>User</h2>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props){
  const style = {
    color:'red'
  }
  return(
   <div style={style}>
      <h2>Name: {props.name}</h2>
      <p>email: {props.email}</p>
   </div>
  )
}
export default App;
