import React,{useEffect, useState} from "react";
import { FormControl,InputLabel,Input } from '@mui/material';
import Message from "./Message";
import './App.css';
import db from "./firebase";
import firebase from "firebase/compat/app"
import FlipMove from 'react-flip-move'
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';

function App() {
  const [input,setInput]= useState('');
  const [messages,setMessages] = useState([]);
    // {username:'satyam',message:'hi babe'},
    // {username:'alex', message:'whatsup brdr'},
    
  const [username,setUsername] = useState('');
  
// useState = variable in react
// useEffect = run code on a condition in react
  // useEffect(()=>{
// run code here...
// if this blank inside [], this code runs once when the app component loads
  // },[depenecies] )  condition

useEffect(()=>{
  // run once when the app components loads
  db.collection('messages')
  .orderBy('timestamp','desc')
  .onSnapshot(snapshot=>{
    setMessages(snapshot.docs.map(doc=>({id:doc.id, message: doc.data()}) ))
  })
},[])

useEffect(()=>{
  setUsername(prompt('please enter your name'));
},[])

  console.log(input);
  console.log(messages);


  const sendMessage = (event)=>{
    //  all the logic to send the message goes 
    event.preventDefault();
    db.collection('messages').add({
      message:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    // setMessages([...messages,{username:username, text:input}]);
    setInput('');

   }
  return (
    <div className="App">
      <img src="https://scontent.fixj2-1.fna.fbcdn.net/v/t39.8562-6/120009688_325579128711709_1736249742330805861_n.png?_nc_cat=1&ccb=1-7&_nc_sid=6825c5&_nc_ohc=HW7OZp_C9n0AX-DC0Vm&_nc_ht=scontent.fixj2-1.fna&oh=00_AT9ZUUwDDj1wP-S0U1yP837Bn7YpacYc7B1tIa6Z7hXNLA&oe=62E2607D" alt="" />
      <h1>Hello People</h1>
      <h2>Welcome {username}</h2>
      <form className="app_form">
      <FormControl className="app_formControl">
      <Input className="app_input" placeholder="Enter a message..." value={input} onChange={event=>setInput(event.target.value)}/>
      <IconButton className="app_iconButton" disabled={!input} type="submit" variant="contained" onClick={sendMessage}>
        <SendIcon/>
      </IconButton>
      </FormControl>  

      </form>
      

      {/* message themselves */}
      <FlipMove>
      {
        messages.map(({id,message})=>(
          <Message key={id} username={username} message={message} />
        ))
      }
      </FlipMove>


    </div>
  );
} 

export default App;
