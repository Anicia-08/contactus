import React,{ useState } from 'react';
export default function App() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");
  const [checkbox,setCheckbox] = useState(false);
  const [radiobutton,setRadiobutton] = useState(false);
  const validateForm = (e)=>{
     e.preventDefault();
     if(name === "" || email === "" || message === ""){
        return alert("Please fill all the fields");
     }
     if(!email.includes("@") || !email.includes(".") || email.indexOf("@") > email.lastIndexOf(".")){
        return alert("Please enter a valid email");
     }
     if(message.length < 10){
        return alert("Message should be at least 10 characters long");
     }
     alert("Form submitted successfully");
  }
  return (
    <div>
      <h1>CONTACT US</h1>
      <form onSubmit={validateForm}>
        <input 
        type="text" 
        placeholder="Enter your name" 
        value={name} 
        onChange={(e)=>setName(e.target.value)}
        required /><br/><br/>
        <input 
        type="email" 
        placeholder="Enter your email" 
        value={email} 
        onChange={(e)=>setEmail(e.target.value)}
        required /><br/><br/>
        <textarea 
        placeholder="Enter your message" 
        value={message} 
        onChange={(e)=>setMessage(e.target.value)}
        required></textarea><br/><br/>
        <checkbox
        type="checkbox"
        value={checkbox}
        onChange={(e)=>setCheckbox(e.target.value)}
        required>Yes</checkbox><br/>
        <checkbox
        type="checkbox"
        value={checkbox}
        onChange={(e)=>setCheckbox(e.target.value)}
        required>No</checkbox><br/><br/>
        <radiobutton
        type="radio"
        value={radiobutton}
        onChange={(e)=>setRadiobutton(e.target.value)}
        required>This</radiobutton><br/>
        <radiobutton
        type="radio"
        value={radiobutton}
        onChange={(e)=>setRadiobutton(e.target.value)}
        required>That</radiobutton><br/><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}